from django.urls import path
from .views import landingpage,homepage

app_name = "navbar"
urlpatterns = [
    path("", landingpage, name='landingpage'),
    path("/homepage", homepage, name='homepage'),
]