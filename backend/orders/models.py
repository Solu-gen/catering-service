from decimal import Decimal
from django.conf import settings
from django.db import models

from menu.models import Product


class Order(models.Model):
    class Status(models.TextChoices):
        CREATED = 'created', 'Создан'
        PAID = 'paid', 'Оплачен'
        COOKING = 'cooking', 'Готовится'
        READY = 'ready', 'Готов'
        DELIVERY = 'delivery', 'В пути'
        DELIVERED = 'delivered', 'Доставлен'
        CANCELLED = 'cancelled', 'Отменён'

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.CREATED)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))
    address = models.TextField()
    delivery_time = models.DateTimeField()
    comment = models.TextField(blank=True)
    customer_name = models.CharField(max_length=255, blank=True)
    customer_phone = models.CharField(max_length=20, blank=True)
    payment_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'Order #{self.pk} ({self.get_status_display()})'

    def recalculate_total(self):
        total = Decimal('0.00')
        for item in self.items.all():
            total += item.price * item.quantity
        self.total_price = total
        return total


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.product.title} x {self.quantity}'
