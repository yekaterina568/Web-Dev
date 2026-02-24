import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {

@Input() items: Product[] = [];

get list() { return this._list; }
private _list: Product[] = [];

ngOnChanges() {
    this._list = [...this.items];
}

removeItem(id: number) {
    this._list = this._list.filter(p => p.id !== id);
}
}
