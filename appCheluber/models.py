from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=50)
    tipoPago = models.IntegerField(default=1)
    pedido = models.ForeignKey('appCheluber.Pedido')

class Proveedor(models.Model):
    nombre = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=50)
    pedido = models.ForeignKey('appCheluber.Pedido')

class Pedido(models.Model):
    marca = models.CharField(max_length=20)
    cantidad = models.IntegerField(default=12)
    ubicacion = models.CharField(max_length=50)
