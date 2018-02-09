from rest_framework import viewsets
from fileupload_rest.serializers import UploadedFileSerializer
# from fileupload_rest.serializers import UploadedBase64ImageSerializer
from fileupload.models import UploadedFile


class UploadedFileViewSet(viewsets.ModelViewSet):
    queryset = UploadedFile.objects.all()
    # serializer_class = UploadedBase64ImageSerializer
    serializer_class = UploadedFileSerializer