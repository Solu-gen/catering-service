from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


from .models import Order
from .serializers import (
    CreateOrderSerializer,
    OrderDetailSerializer,
    OrderListSerializer,
    StatusUpdateSerializer,
)

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        return Order.objects.filter(
            user=self.request.user
        ).prefetch_related("items")


    def get_serializer_class(self):
        if self.action == "list":
            return OrderListSerializer


        if self.action == "retrieve":
            return OrderDetailSerializer


        if self.action == "create":
            return CreateOrderSerializer


        return OrderDetailSerializer

from .services import (
    mark_order_paid,
    update_order_status,
)


class OrderCreateAPIView(generics.GenericAPIView):
    serializer_class = CreateOrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        order = serializer.save()

        return Response(
            OrderDetailSerializer(order).data,
            status=status.HTTP_201_CREATED
        )


class OrderHistoryAPIView(generics.ListAPIView):
    serializer_class = OrderListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return (
            Order.objects
            .filter(user=self.request.user)
            .prefetch_related("items__product")
        )


class OrderDetailAPIView(generics.RetrieveAPIView):
    serializer_class = OrderDetailSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return (
            Order.objects
            .filter(user=self.request.user)
            .prefetch_related("items__product")
        )


class OrderPayAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):

        order = get_object_or_404(
            Order,
            pk=pk,
            user=request.user
        )

        try:
            order = mark_order_paid(order)

        except ValueError as exc:
            return Response(
                {"detail": str(exc)},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            OrderDetailSerializer(order).data,
            status=status.HTTP_200_OK
        )


class OrderStatusUpdateAPIView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, pk):

        order = get_object_or_404(Order, pk=pk)

        serializer = StatusUpdateSerializer(
            data=request.data,
            context={"order": order}
        )

        serializer.is_valid(raise_exception=True)

        try:
            order = update_order_status(
                order,
                serializer.validated_data["status"]
            )

        except ValueError as exc:
            return Response(
                {"detail": str(exc)},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            OrderDetailSerializer(order).data,
            status=status.HTTP_200_OK
        )