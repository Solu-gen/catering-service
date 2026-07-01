from rest_framework import permissions, generics
from .models import LeadRequest
from .serializers import LeadRequestSerializer


class LeadCreateAPIView(generics.CreateAPIView):
    queryset = LeadRequest.objects.all()
    serializer_class = LeadRequestSerializer
    permission_classes = [permissions.AllowAny]
