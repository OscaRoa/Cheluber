from django.shortcuts import render

# Create your views here.
def landingPage(req):
    return render(req, 'index.html')
