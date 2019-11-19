from django.urls import path
from . import views


# api/v1/todos로 온 경우 아래와 같이 인식
urlpatterns = [
    path('todos/', views.todo_create),
    path('todos/<int:todo_id>/', views.todo_update_delete),
    path('users/<int:user_id>/', views.user_detail),
]