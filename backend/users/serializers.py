from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'phone_number', 'name', 'created_at')


class RegisterSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=255, required=False, allow_blank=True)

    def validate_phone_number(self, value):
        if User.objects.filter(phone_number=value).exists():
            raise serializers.ValidationError('Пользователь с таким номером уже существует.')
        return value

    def create(self, validated_data):
        return User.objects.create(
            phone_number=validated_data['phone_number'],
            name=validated_data.get('name', ''),
        )


class LoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=20)

    def validate_phone_number(self, value):
        if not User.objects.filter(phone_number=value).exists():
            raise serializers.ValidationError('Пользователь не найден. Сначала зарегистрируйтесь.')
        return value

    def validate(self, attrs):
        user = User.objects.get(phone_number=attrs['phone_number'])
        attrs['user'] = user
        return attrs
