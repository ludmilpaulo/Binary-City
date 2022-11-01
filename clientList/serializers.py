from dataclasses import field
from rest_framework import serializers
from .models import Client, Contact

class ClientSerializer(serializers.ModelSerializer):
    contacts = serializers.StringRelatedField(many=True)
    class Meta:
        model = Client
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
   
   
    class Meta:
        model = Contact
        fields = '__all__'