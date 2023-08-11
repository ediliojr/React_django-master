from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Usuarios.models import User
from Usuarios.serializers import UserSerializer
from django.core.files.storage import default_storage
# Create your views here.


@csrf_exempt
def userAPI(request,pk=0):
    if request.method== 'GET':
        if pk==0:
            users = User.objects.filter(is_active=True)
           
            users_serializer= UserSerializer(users,many=True)
            return JsonResponse(users_serializer.data,safe=False)
        else:
            usuario = User.objects.get(UserId=pk)
            data = {
            'UserId': usuario.UserId,
            'UserNumero': usuario.UserNumero,
            'UserUrdideira': usuario.UserUrdideira,
            'UserOperador': usuario.UserOperador,
            'UserProduto': usuario.UserProduto,
            'UserFornecedor': usuario.UserFornecedor,
            'UserFio': usuario.UserFio,
            'UserCorFio': usuario.UserCorFio,
            'UserBob': usuario.UserBob,
            'UserQtdFio': usuario.UserQtdFio,
            'UserBarra': usuario.UserBarra,
            'UserMaquina': usuario.UserMaquina,
            'UserRolos': usuario.UserRolos,
            'UserMetros': usuario.UserMetros,            
            'UserData_cadastro': usuario.UserData_cadastro,
            # 'UserId': usuario.UserId,
            # 'UserNome': usuario.UserNome,
            # 'UserSobrenome': usuario.UserSobrenome,
            # 'UserEmail': usuario.UserEmail,
            # "UserData_criacao":usuario.UserData_cadastro,
            'url': request.build_absolute_uri()
        }
            return JsonResponse(data)
       
        
    elif request.method=='POST':
        
        user_data = JSONParser().parse(request)
        users_serializer = UserSerializer(data=user_data)
        
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Criado com sucesso",safe=False)
        return JsonResponse("Criação falhou", safe=False)
        
    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)

        try:
            user = User.objects.get(UserId=user_data.get('UserId'))
            users_serializer = UserSerializer(user, data=user_data)

            if users_serializer.is_valid():
                users_serializer.save()
                return JsonResponse('Atualizado com sucesso', safe=False)

            return JsonResponse('Atualização falhou', safe=False)

        except User.DoesNotExist:
            return JsonResponse({'error': 'User matching query does not exist.'})

    elif request.method == 'DELETE':
        try:
            user = User.objects.get(UserId=pk)
            user.is_active = False  # Soft delete by marking user as inactive
            user.save()
            return JsonResponse("Deactivated successfully", safe=False)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User matching query does not exist.'})
