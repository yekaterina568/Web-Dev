from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()  
    data = []
    for p in products:
        data.append({
            'id':          p.id,
            'name':        p.name,
            'price':       p.price,
            'description': p.description,
            'count':       p.count,
            'is_active':   p.is_active,
            'category_id': p.category_id,
        })
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def product_detail(request, id):
    try:
        p = Product.objects.get(pk=id)  
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)
    data = {
        'id':          p.id,
        'name':        p.name,
        'price':       p.price,
        'description': p.description,
        'count':       p.count,
        'is_active':   p.is_active,
        'category_id': p.category_id,
    }
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def category_detail(request, id):
    try:
        c = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)
    return JsonResponse({'id': c.id, 'name': c.name})


def category_products(request, id):
    try:
        c = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)
    products = c.products.all()  
    data = [{'id': p.id, 'name': p.name, 'price': p.price} for p in products]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})