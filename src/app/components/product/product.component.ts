import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: any;

  constructor(private cartService: CartService) {}
  @Output() productoutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    console.log(this.product);
    this.productoutput.emit(this.product);
  }

  addToCart() {
    // Add the product to the cart
    this.cartService.addToCart(this.product);
    alert(`${this.product.name} has been added to your cart!`); // Notify the user
  }
}
