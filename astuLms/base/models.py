from django.db import models
from django.contrib.auth.models import User


class department(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    department_name = models.CharField(max_length=100, blank=False)


class scools(models.Model):
    scool_name = models.CharField(max_length=100, blank=False)
    scool_id = models.CharField(max_length=100, unique=True)


class courses(models.Model):
    courses_name = models.CharField(max_length=100, blank=False)
    courses_id = models.CharField(max_length=100, unique=True)
