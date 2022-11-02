from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from clientList.views import ClientViewset, ContactViewset, get_clients, get_contacts, LinksViewset, get_links

router = routers.DefaultRouter()
router.register('clients', ClientViewset)
router.register('contacts', ContactViewset)
router.register('links', LinksViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', get_contacts),
    path('list/', get_clients),
    path('link/', get_links),
    path('admin/', admin.site.urls),
]
