from django.db import models


class Client(models.Model):
    name        = models.CharField(max_length=290, blank=False)
    client_code = models.CharField(max_length=6)
    

    def __str__(self):
        return self.name 

    class Meta:
       ordering = ['name']


class Contact(models.Model):
    no      = models.ForeignKey(Client, on_delete=models.CASCADE, blank=True, null=True)
    name    = models.CharField(max_length=290)
    surname = models.CharField(max_length=290)
    email   = models.EmailField(max_length=254)
    

    def __str__(self):
        return 

    def __unicode__(self):
        return 

