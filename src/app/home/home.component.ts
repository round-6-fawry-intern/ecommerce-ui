import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { PaginationsParams, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Corrected `styleUrls`
})
export class HomeComponent {
  first: number = 0; // Changed to 0 for pagination
  rows: number = 5;

  products: Product[] = [];
  totalRecords = 0;


  productList = [
    {
      productId: 1,
      rating: 0,
      isOffer: false,
      productName: 'Hp Notebook',
      category: 'Laptop',
      price: 1000,
      discount: 12,
      availableQty: 3,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp',
    }
  ]

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService
      .getProducts('http://localhost:5050/products')
      .subscribe((products) => {
        console.log(products);
        this.products = products;
        console.log(this.products);
      });
  }
}
