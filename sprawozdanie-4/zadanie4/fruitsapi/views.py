from rest_framework import viewsets

from .serializers import FruitSerializer
from .models import Fruit


class FruitViewSet(viewsets.ModelViewSet):
    queryset = Fruit.objects.all().order_by('name')
    serializer_class = FruitSerializer
