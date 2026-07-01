from django.db import transaction
from django.utils import timezone

from .models import Order


STATUS_FLOW = {
    Order.Status.CREATED: [Order.Status.PAID, Order.Status.CANCELLED],
    Order.Status.PAID: [Order.Status.COOKING, Order.Status.CANCELLED],
    Order.Status.COOKING: [Order.Status.READY, Order.Status.CANCELLED],
    Order.Status.READY: [Order.Status.DELIVERY, Order.Status.CANCELLED],
    Order.Status.DELIVERY: [Order.Status.DELIVERED, Order.Status.CANCELLED],
    Order.Status.DELIVERED: [],
    Order.Status.CANCELLED: [],
}


def can_transition(current_status: str, new_status: str) -> bool:
    return new_status in STATUS_FLOW.get(current_status, [])


@transaction.atomic
def mark_order_paid(order: Order) -> Order:
    if order.status != Order.Status.CREATED:
        raise ValueError('Оплатить можно только заказ со статусом "Создан".')
    order.status = Order.Status.PAID
    order.payment_date = timezone.now()
    order.save(update_fields=['status', 'payment_date', 'updated_at'])
    return order


@transaction.atomic
def update_order_status(order: Order, new_status: str) -> Order:
    if not can_transition(order.status, new_status):
        raise ValueError(f'Нельзя изменить статус с "{order.get_status_display()}" на "{new_status}".')
    order.status = new_status
    if new_status == Order.Status.PAID and order.payment_date is None:
        order.payment_date = timezone.now()
        order.save(update_fields=['status', 'payment_date', 'updated_at'])
    else:
        order.save(update_fields=['status', 'updated_at'])
    return order
