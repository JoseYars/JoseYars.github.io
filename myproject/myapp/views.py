from django.core.mail import send_mail
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'index.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        message = request.POST.get('message')

        send_mail(
            'Nuevo mensaje de contacto',
            f'Nombre: {name}\nEmail: {email}\nNúmero: {number}\nMensaje: {message}',
            'tu_correo@gmail.com',
            ['esojarman@gmail.com'],
            fail_silently=False,
        )
        return HttpResponse('Gracias por contactarnos.')
    return render(request, 'index.html')