from dataclasses import dataclass
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import status, generics, permissions, viewsets
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser, JSONParser, MultiPartParser, FormParser, FileUploadParser

from .models import Client, Contact, Links
from . serializers import ClientSerializer, ContactSerializer, LinksSerializer 


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

class LinksViewset(viewsets.ModelViewSet):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer


@api_view(['GET', 'POST'])
def get_links(request):
    links = LinksSerializer(
        Links.objects.all(),
        many=True,
        context={
            "request": request
        }).data
    return Response({"links": links})


@api_view(["POST"])
#@parser_classes([JSONParser, MultiPartParser, FormParser, FileUploadParser])
def create_client(request, format=None):
    data = request.data
    customer = Client.objects.all()
    customer.client_name = data["client_name"]
    customer.client_code = data["client_code"]
    customer.save()

   # contact = Contact.objects.all()
   # contact.link = data["link"]
   # contact.name = data["name"]
   # contact.surname = data["surname"]
   # contact.email = data["email"]
    # contact.save()

    return JsonResponse({"status": "Os Seus Dados enviados com sucesso"})


