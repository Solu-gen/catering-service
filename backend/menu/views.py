from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class ProductListAPIView(ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        qs = Product.objects.select_related('category').filter(is_active=True)
        category = self.request.query_params.get('category')
        search = self.request.query_params.get('search')

        if category and category != 'Все':
            if category.isdigit():
                qs = qs.filter(category_id=category)
            else:
                qs = qs.filter(category__name=category)

        if search:
            qs = qs.filter(title__icontains=search)

        return qs
