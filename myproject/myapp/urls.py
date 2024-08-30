from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Route for the home view
    path('contact/', views.contact, name='contact'),  # Route for the contact view
]