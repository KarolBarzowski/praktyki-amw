from rest_framework import serializers
from .models import Fruit
from .models import Animal

class FruitSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Fruit
        fields = ('name', 'color', 'originCountry', 'image')

class AnimalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Animal
        fields = ('name', 'image')
