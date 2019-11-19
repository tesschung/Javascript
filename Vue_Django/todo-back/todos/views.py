from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model
# 특정 method의 요청만 허용
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TodoSerializer, UserDetailSerializer
from .models import Todo

User = get_user_model()

# POST method의 요청만 허용
@api_view(['POST'])
def todo_create(request):
    serializer = TodoSerializer(data=request.data)
    # valid 하지 않은 경우 raise_exception을 True로 준다
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
def todo_update_delete(request, todo_id):
    # 수정하거나 삭제할 todo instance 호출
    todo = get_object_or_404(Todo, pk=todo_id)
    if request.method == 'PUT':
        # instance todo를 request.data로 넘어온 값으로 수정하겠다.
        serializer = TodoSerializer(instance=todo, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    if request.method == 'DELETE':
        todo.delete()
        # 삭제했습니다 status 코드 == 204
        return Response(status=204)

@api_view(['GET'])
def user_detail(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    serializer = UserDetailSerializer(instance=user)
    return Response(serializer.data)