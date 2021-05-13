from rest_framework import viewsets

from .serializers import FruitSerializer
from .serializers import AnimalSerializer
from .models import Fruit
from .models import Animal


class FruitViewSet(viewsets.ModelViewSet):
    queryset = Fruit.objects.all().order_by('name')
    serializer_class = FruitSerializer

class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all().order_by('name')
    serializer_class = AnimalSerializer
