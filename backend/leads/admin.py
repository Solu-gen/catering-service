from django.contrib import admin
from .models import LeadRequest


@admin.register(LeadRequest)
class LeadRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'phone_number', 'consent', 'created_at')
    search_fields = ('full_name', 'phone_number')
