from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),
    #path('products/', views.ProductListAPIView.as_view()),
    #path('products/<int:pk>/', views.ProductDetailAPIView.as_view()),
    path('products/', views.product_list),
    path('products/<int:pk>/', views.product_detail),
]