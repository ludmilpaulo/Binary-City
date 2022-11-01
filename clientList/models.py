from django.db import models


class Client(models.Model):
    client_name  = models.CharField(max_length=290, blank=False, null=False)
    client_code = models.CharField(max_length=6, blank=False, null=False)
   # csurname = models.CharField(max_length=290, blank=False, null=False)
   # email   = models.EmailField(max_length=254, blank=False, null=False)
    

    def __str__(self):
        return self.client_name 

    class Meta:
       ordering = ['client_name']


class Contact(models.Model):
    link    = models.ForeignKey(Client, on_delete=models.CASCADE, blank=True, related_name='contacts', null=True)
    name    = models.CharField(max_length=290, blank=False, null=False)
    surname = models.CharField(max_length=290, blank=False, null=False)
    email   = models.EmailField(max_length=254, blank=False, null=False)
    

    def __str__(self):
        return self.name 

    class Meta:
       ordering = ['name']

