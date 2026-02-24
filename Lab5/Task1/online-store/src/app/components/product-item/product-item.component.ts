import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

@Input() product!: Product;
@Output() deleted = new EventEmitter<number>();

addLike() {
    this.product.likes++;
}

onDelete() {
    const ok = confirm('Удалить товар из списка?');
    if (ok) this.deleted.emit(this.product.id);
}

sendWA() {
    const txt = `Смотри: ${this.product.name} — ${this.product.link}`;
    window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank');
}

sendTG() {
    const url = encodeURIComponent(this.product.link);
    const txt = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${txt}`, '_blank');
}
}
