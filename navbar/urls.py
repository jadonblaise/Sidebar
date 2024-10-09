from django.urls import path
from .views import homepage

app_name = "navbar"
urlpatterns = [
    path("", homepage, name='homepage'),
]