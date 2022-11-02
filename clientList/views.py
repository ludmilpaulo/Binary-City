from dataclasses import dataclass
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .models import Client, Contact
from . serializers import ClientSerializer, ContactSerializer 


@api_view(['GET'])
def get_clients(request):
    clients = ClientSerializer(
        Client.objects.all().order_by('-client_name'),
        many=True,
        context={
            "request": request
        }).data
    return Response({"clients": clients})

@api_view(['GET', 'POST'])
def get_contacts(request):
    contacts = ContactSerializer(
        Contact.objects.all().order_by('-name'),
        many=True,
        context={
            "request": request
        }).data
    return Response({"contacts": contacts})


class ClientViewset(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ContactViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

