from rest_framework import serializers
from fileupload.models import UploadedFile


class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ('pk', 'file', )