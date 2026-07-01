from rest_framework import serializers
from .models import LeadRequest


class LeadRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadRequest
        fields = ('id', 'full_name', 'phone_number', 'consent', 'created_at')
        read_only_fields = ('id', 'created_at')

    def validate_consent(self, value):
        if value is not True:
            raise serializers.ValidationError('Нужно согласие на обработку персональных данных.')
        return value
