from dataclasses import dataclass
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import status, generics, permissions, viewsets


from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser, JSONParser, MultiPartParser, FormParser, FileUploadParser

from .models import Client, Contact, Links
from . serializers import ClientSerializer, ContactSerializer, LinksSerializer 


@api_view(['GET', 'POST'])
@parser_classes([JSONParser, MultiPartParser, FormParser, FileUploadParser])
def get_clients(request):
    if request.method == 'GET':
        clients = ClientSerializer(
            Client.objects.all().order_by('-client_name'),
            many=True,
            context={
                "request": request
            }).data
        return Response({"clients": clients})

    elif request.method == 'POST':
        #client_data = request.data
        client_serializer = ClientSerializer(data=request.data)
        if client_serializer.is_valid():
            client_serializer.save()
            return Response(client_serializer.data, status=status.HTTP_201_CREATED) 
        return Response(client_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

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


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser, MultiPartParser, FormParser, FileUploadParser])
def create_client(request, format=None):
    
    data = request.data
    print(data)
    customer = Client.objects.all()
    for i in customer :
        i.client_name = data["client_name"]
        i.client_code = data["client_code"]
        i.save()


    return Response({"status": "Os Seus Dados enviados com sucesso"})


@api_view(['PUT', 'POST'])
def updateClient(request, format=None):
    data = request.data
    client = Client.objects.get(id=data['id'])
    contact = Contact.objects.get(id=data['contacts'])
    client.contacts.set(contact)
  

    client.save()

    serializer = ClientSerializer(client, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def taskUpdate(request):
        data = request.data
       
        pk = data['id']
        task = Client.objects.get(id=pk)

        request_data = data.get("contacts")
        a = request.data.get('contacts', None)

        print(pk)
        
        serializer = ClientSerializer(instance=task, data=a)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


@api_view(['PUT'])
def taskUpdate(request):
    data = request.data
    client = Client.objects.get(id=data['id'])

    client.client_name = data['client_name']
    client.client_code = data['client_code']
    client.contacts =data["contacts"]

    client.save()

    serializer = ClientSerializer(client, many=False)
    return Response(serializer.data)


