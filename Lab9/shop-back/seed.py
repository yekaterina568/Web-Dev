import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

electronics = Category.objects.get_or_create(name='Электроника')[0]
clothing = Category.objects.get_or_create(name='Одежда')[0]

products = [
    {'name': 'Ноутбук',    'price': 999.99,  'description': 'Мощный ноутбук', 'count': 5,  'category': electronics},
    {'name': 'Смартфон',   'price': 699.99,  'description': 'Флагманский',     'count': 10, 'category': electronics},
    {'name': 'Футболка',   'price': 19.99,   'description': 'Хлопок 100%',     'count': 50, 'category': clothing},
    {'name': 'Джинсы',     'price': 49.99,   'description': 'Классические',    'count': 30, 'category': clothing},
]

for p in products:
    category = electronics if p['name'] in ['Ноутбук', 'Смартфон'] else clothing
    Product.objects.get_or_create(
        name=p['name'],
        defaults={**p, 'category': category}
    )
    
print('Готово! Создано категорий и товаров.')