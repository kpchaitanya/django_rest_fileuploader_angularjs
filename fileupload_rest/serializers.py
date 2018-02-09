from rest_framework import serializers
from fileupload.models import UploadedFile
# from drf_extra_fields.fields import Base64FileField

class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ('pk', 'file', )

    # class UploadedBase64ImageSerializer(serializers.Serializer):
    #     file = Base64FileField(required=False)
    #     class Meta:
    #         model = UploadedFile
    #         fields = ('pk', 'file', )
    #
    # serializer = UploadedBase64ImageSerializer()
