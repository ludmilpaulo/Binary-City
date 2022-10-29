from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=10, blank=False)
    client_code = models.CharField()
    no = 
    

    def __str__(self):
        return 

class Contact(models.Model):
    name    = models.CharField()
    surname = models.CharField()
    email   = models.CharField()
    

    def __str__(self):
        return 

    def __unicode__(self):
        return 

