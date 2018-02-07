from django.conf.urls import url, include
from rest_framework import routers
from fileupload_rest.viewsets import UploadedFileViewSet

routers = routers.DefaultRouter()
routers.register('files', UploadedFileViewSet, 'files')

urlpatterns = [
    url(r'^', include(routers.urls))
]