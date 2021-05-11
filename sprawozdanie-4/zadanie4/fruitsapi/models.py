from django.db import models

class Fruit(models.Model):
    name = models.CharField(max_length=30)
    color = models.CharField(max_length=20)
    originCountry = models.CharField(max_length=30)
    image = models.URLField(default="")

    def __str__(self):
        return self.name
