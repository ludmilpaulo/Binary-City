from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from clientList.views import ClientViewset, ContactViewset, get_clients

router = routers.DefaultRouter()
router.register('clients', ClientViewset)
router.register('contacts', ContactViewset)
#router.register('list', get_clients)

urlpatterns = [
    path('', include(router.urls)),
    path('list/', get_clients),
    path('admin/', admin.site.urls),
]
