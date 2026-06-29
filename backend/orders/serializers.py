from decimal import Decimal
from django.db import transaction
from rest_framework import serializers

from menu.models import Product
from .models import Order, OrderItem


class OrderItemInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)


class OrderItemSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField(source='product.id', read_only=True)
    title = serializers.CharField(source='product.title', read_only=True)
    image = serializers.CharField(source='product.image', read_only=True)

    class Meta:
        model = OrderItem
        fields = ('product_id', 'title', 'image', 'quantity', 'price')


class OrderListSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'status', 'status_display', 'total_price', 'created_at')


class OrderDetailSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'status',
            'status_display',
            'total_price',
            'address',
            'delivery_time',
            'customer_name',
            'customer_phone',
            'comment',
            'payment_date',
            'created_at',
            'items',
        )


class CreateOrderSerializer(serializers.Serializer):
    address = serializers.CharField()
    delivery_time = serializers.DateTimeField()
    customer_name = serializers.CharField(required=False, allow_blank=True)
    customer_phone = serializers.CharField(required=False, allow_blank=True, allow_null=True)
    comment = serializers.CharField(required=False, allow_blank=True, allow_null=True)
    items = OrderItemInputSerializer(many=True)

    def validate_items(self, items):
        if not items:
            raise serializers.ValidationError('Корзина не может быть пустой.')
        return items

    def validate(self, attrs):
        item_ids = [item['product_id'] for item in attrs['items']]
        products = Product.objects.filter(id__in=item_ids, is_active=True).in_bulk()

        missing = [pid for pid in item_ids if pid not in products]
        if missing:
            raise serializers.ValidationError({'items': f'Товары не найдены: {missing}'})

        attrs['products_map'] = products
        return attrs

    def create(self, validated_data):
        request = self.context['request']
        user = request.user
        items_data = validated_data.pop('items')
        products_map = validated_data.pop('products_map')

        with transaction.atomic():
            order = Order.objects.create(user=user, **validated_data)
            total = Decimal('0.00')

            for item in items_data:
                product = products_map[item['product_id']]
                quantity = item['quantity']
                OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=quantity,
                    price=product.price,
                )
                total += product.price * quantity

            order.total_price = total
            order.save(update_fields=['total_price', 'updated_at'])

        return order


class StatusUpdateSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=Order.Status.choices)

    def validate_status(self, new_status):
        order = self.context['order']
        current_status = order.status

        allowed = {
            Order.Status.CREATED: [Order.Status.PAID, Order.Status.CANCELLED],
            Order.Status.PAID: [Order.Status.COOKING, Order.Status.CANCELLED],
            Order.Status.COOKING: [Order.Status.READY, Order.Status.CANCELLED],
            Order.Status.READY: [Order.Status.DELIVERY, Order.Status.CANCELLED],
            Order.Status.DELIVERY: [Order.Status.DELIVERED, Order.Status.CANCELLED],
            Order.Status.DELIVERED: [],
            Order.Status.CANCELLED: [],
        }

        if new_status not in allowed[current_status]:
            raise serializers.ValidationError(
                f'Нельзя изменить статус с "{order.get_status_display()}" на "{new_status}".'
            )

        return new_status
