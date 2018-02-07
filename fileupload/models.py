from django.db import models
import uuid

def generate_random_uploaded_filename(instance, filename):
    extension = filename.split('.')[-1]
    return "%s.%s" % (uuid.uuid4(), extension, )

class UploadedFile(models.Model):
    file = models.FileField('Uploaded file', upload_to=generate_random_uploaded_filename) # stores the uploaded file