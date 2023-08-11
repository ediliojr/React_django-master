from django.db import models


# Create your models here.


class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserNumero = models.IntegerField()
    UserUrdideira = models.IntegerField()
    UserOperador = models.CharField(max_length=40)
    UserProduto = models.CharField(max_length=500)
    UserFornecedor = models.CharField(max_length=500)
    UserFio = models.IntegerField()
    UserCorFio = models.CharField(max_length=500)
    UserBob = models.IntegerField(blank=True)
    UserQtdFio = models.IntegerField()
    UserMaquina = models.IntegerField()
    UserBarra = models.CharField(max_length=7)
    UserRolos = models.IntegerField()
    UserMetros = models.IntegerField()    
    UserData_cadastro = models.DateTimeField(auto_now_add=True, blank=True)
    is_active = models.BooleanField(default=True)

