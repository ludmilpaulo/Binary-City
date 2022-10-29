from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from clientList.views import ClientViewset, ContactViewset

router = routers.DefaultRouter()
router.register('clients', ClientViewset)
router.register('contacts', ContactViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
