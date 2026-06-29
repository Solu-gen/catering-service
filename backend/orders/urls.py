from django.urls import path

from .views import (
    OrderCreateAPIView,
    OrderHistoryAPIView,
    OrderDetailAPIView,
    OrderPayAPIView,
    OrderStatusUpdateAPIView,
)

urlpatterns = [
    path('', OrderCreateAPIView.as_view(), name='order-create'),

    path(
        'history/',
        OrderHistoryAPIView.as_view(),
        name='order-history'
    ),

    path(
        '<int:pk>/',
        OrderDetailAPIView.as_view(),
        name='order-detail'
    ),

    path(
        '<int:pk>/pay/',
        OrderPayAPIView.as_view(),
        name='order-pay'
    ),

    path(
        '<int:pk>/status/',
        OrderStatusUpdateAPIView.as_view(),
        name='order-status-update'
    ),
]