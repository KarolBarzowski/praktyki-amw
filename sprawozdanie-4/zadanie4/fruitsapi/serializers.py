from rest_framework import serializers
from .models import Fruit

class FruitSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Fruit
        fields = ('name', 'color', 'originCountry')
