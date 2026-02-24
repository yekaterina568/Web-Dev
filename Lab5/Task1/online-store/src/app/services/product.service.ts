import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

categories: Category[] = [
    { id: 1, name: 'Смартфоны', emoji: '📱' },
    { id: 2, name: 'Ноутбуки',  emoji: '💻' },
    { id: 3, name: 'Наушники',  emoji: '🎧' },
    { id: 4, name: 'Планшеты',  emoji: '📟' }
];

products: Product[] = [
    { id: 1,  categoryId: 1, likes: 0, rating: 4.9, price: 700000,
        name: 'Apple iPhone 15 Pro 256GB',
        description: 'Процессор A17 Pro, titanium корпус, камера 48 МП.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/86302548557854.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/' },

    { id: 2,  categoryId: 1, likes: 0, rating: 4.8, price: 549990,
        name: 'Samsung Galaxy S24 Ultra 512GB',
        description: 'S Pen в комплекте, камера 200 МП, Snapdragon 8 Gen 3.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/' },

    { id: 3,  categoryId: 1, likes: 0, rating: 4.5, price: 169990,
        name: 'Xiaomi Redmi Note 13 Pro 8/256GB',
        description: 'AMOLED 120Hz, быстрая зарядка 67W, NFC.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h96/84941911949342.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-zelenyi-115966726/' },

    { id: 4,  categoryId: 1, likes: 0, rating: 4.7, price: 439990,
        name: 'Google Pixel 8 Pro 128GB',
        description: 'Лучший AI на смартфоне, 7 лет обновлений Android.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-114017043/' },

    { id: 5,  categoryId: 1, likes: 0, rating: 4.6, price: 379990,
        name: 'OnePlus 12 12/256GB',
        description: 'Зарядка 100W, Hasselblad камера, Snapdragon 8 Gen 3.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/hf1/85092040769566.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/oneplus-12-12-gb-256-gb-chernyi-116425514/' },

    { id: 6,  categoryId: 2, likes: 0, rating: 4.9, price: 699990,
        name: 'Apple MacBook Air M2 13"',
        description: 'Чип M2, до 18 часов батареи, без вентилятора.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?srsltid=AfmBOopSNX6SbtG7NjI1N5sDMQGhqqipdxEycsWTGjrIMdZDIfLPg_Im' },

    { id: 7,  categoryId: 2, likes: 0, rating: 4.7, price: 549990,
        name: 'ASUS ROG Strix G16 i7/16/512',
        description: 'RTX 4060, 165Hz дисплей, мощное охлаждение.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/p55/24910998.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-g614ju-n3492-90nr0cc1-m012l0-134726976/?srsltid=AfmBOorUDB7FyxABik3dJeAofEih_j66Kqpa3y97HRkjT89FY3elxPDc' },

    { id: 8,  categoryId: 2, likes: 0, rating: 4.8, price: 679990,
        name: 'Lenovo ThinkPad X1 Carbon',
        description: 'Легендарная клавиатура, 1.12 кг, военные стандарты прочности.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h45/86643834945566.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-12-14-16-gb-ssd-512-gb-win-11-pro-21kc0050rt-119840715/?srsltid=AfmBOooMIPeXXmhBYmTh7EVaB_uboqXaPbwzbAb8S_ZHHEngeAc5XYEC' },

    { id: 9,  categoryId: 2, likes: 0, rating: 4.4, price: 299990,
        name: 'HP Pavilion 15 i5/8/512',
        description: 'Хороший вариант для учёбы, Full HD IPS дисплей.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h36/86064645963806.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/?srsltid=AfmBOoqhvxDk6mGf74OLWIS7zQpZBXxslPkO0Knt3WwbntSPA1sTvhnd' },

    { id: 10, categoryId: 2, likes: 0, rating: 4.8, price: 899990,
        name: 'Dell XPS 15 i7/16/1TB',
        description: 'OLED 3.5K дисплей, алюминиевый корпус, RTX 4060.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?srsltid=AfmBOor9Cx-07lrZViVr1PCs8jnrpekpC5h5T3jARzMyWooc3IWUSVYh' },

    { id: 11, categoryId: 3, likes: 0, rating: 4.9, price: 149990,
        name: 'Sony WH-1000XM5',
        description: 'Лучшее ANC в классе, 30 часов, Hi-Res Audio.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?srsltid=AfmBOooUx9TqRUkfwslnbHW9vDXKAfNio3AfSh_UbWO_Vt-NE7gP7ZFb' },

    { id: 12, categoryId: 3, likes: 0, rating: 4.8, price: 129990,
        name: 'Apple AirPods Pro 2',
        description: 'Адаптивное шумоподавление, Spatial Audio, MagSafe.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?srsltid=AfmBOorQ4wp8e8ZLBp5jaFWbmNNKypGZXtotJEhDpf76DNyRHAW5DWd9' },

    { id: 13, categoryId: 3, likes: 0, rating: 4.7, price: 119990,
        name: 'Bose QuietComfort 45',
        description: 'Мягкие амбушюры, комфорт весь день, отличное ANC.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?srsltid=AfmBOopQLhgUUWVuJkejLNnoknYUiaXs2IHEX28iijJqcJd9hPagJlqU' },

    { id: 14, categoryId: 3, likes: 0, rating: 4.5, price: 79990,
        name: 'Samsung Galaxy Buds2 Pro',
        description: 'Hi-Fi 24bit звук, компактный кейс, IPX7.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?srsltid=AfmBOooC3ACNOXKeoNDqMc6Rb0X04z7A2QunK1IXDNOCwABXzemymPpa' },

    { id: 15, categoryId: 3, likes: 0, rating: 4.4, price: 49990,
        name: 'JBL Tune 770NC',
        description: 'Адаптивное ANC, 70 часов работы, складная конструкция.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?srsltid=AfmBOor6J5Jmr_H8vyp8tjzlDk2s_ALfn9ztkKfcv9ydZYkWTh5FeRDc' },

    { id: 16, categoryId: 4, likes: 0, rating: 4.9, price: 699990,
        name: 'Apple iPad Pro 12.9" M2',
        description: 'mini-LED ProMotion 120Hz, чип M2, поддержка Apple Pencil.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h1f/64908209258526.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-5g-12-9-djuim-8-gb-128-gb-seryi-107281287/?srsltid=AfmBOop-aG0-Vyo008zVDRJLCY484D-oiykymhWKtXn--2TfEEWZC9IE' },

    { id: 17, categoryId: 4, likes: 0, rating: 4.8, price: 549990,
        name: 'Samsung Galaxy Tab S9 Ultra',
        description: '14.6" AMOLED, S Pen в комплекте, Snapdragon 8 Gen 2.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h52/82788374282270.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-5g-14-6-djuim-12-gb-256-gb-grafit-112510738/?srsltid=AfmBOoq0WSm13HeYmKmXsjEleaxVhkQM3356Abxcu7Wft5qVLZ8rh6FY' },

    { id: 18, categoryId: 4, likes: 0, rating: 4.6, price: 199990,
        name: 'Xiaomi Pad 6 8/256GB',
        description: '11" 144Hz, Snapdragon 870, быстрая зарядка 33W.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h7e/82746416398366.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-goluboi-112468565/?srsltid=AfmBOopRNTEWGPx86OWQv8jiZkAr9kKr-jurjzVGBOkKVhyZAypjM1U3' },

    { id: 19, categoryId: 4, likes: 0, rating: 4.5, price: 279990,
        name: 'Lenovo Tab P12 Pro',
        description: 'AMOLED 12.6", JBL 4 динамика, батарея 10200 мАч.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/hae/84341373141022.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-12-6-djuim-8-gb-256-gb-seryi-114045354/?srsltid=AfmBOoqKmCsgMdmMXC0-LagYlinOAO_6G_spheTF13KC3QFG50sp5Bym' },

    { id: 20, categoryId: 4, likes: 0, rating: 4.6, price: 319990,
        name: 'Huawei MatePad Pro 11"',
        description: 'OLED дисплей, поддержка M-Pencil, Kirin 9000E.',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h8f/64353836171294.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/huawei-matepad-11-wi-fi-10-9-djuim-6-gb-128-gb-seryi-102420544/?srsltid=AfmBOoqbPhcRtu2DS5YCHt_jF7OiIkNXAhRkSJZ4RQfzUkNyotJt_oBS' }
];

getCategories() {
    return this.categories;
}

getByCategory(catId: number) {
    return this.products.filter(p => p.categoryId === catId);
    }
}
