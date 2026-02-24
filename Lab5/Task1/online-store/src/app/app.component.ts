import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public svc: ProductService) {}

  chosenCat: Category | null = null;
  shownProducts: Product[] = [];

  pickCategory(cat: Category) {
    this.chosenCat = cat;
    this.shownProducts = this.svc.getByCategory(cat.id);
  }
}