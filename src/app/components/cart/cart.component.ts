import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Replace with your item type
  totalPrice: number = 0;
  couponCode: string = '';
  discount: number = 0;
  showCart:boolean=true;

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  applyCoupon() {
    this.apiService
      .calculateDiscount(this.totalPrice, this.couponCode)
      .subscribe(
        (discountedAmount) => {
        console.log(discountedAmount);
          this.discount = this.totalPrice - discountedAmount;
        },
        (error) => {
          console.error('Failed to apply coupon', error);
          this.discount = 0;
        }
      );
  }

  closeCart() {
    // Logic to close the cart
    // This might involve setting cartOpen to false in the parent component
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  delete(index: number) {
    this.cartItems.splice(index, 1);
  }

  navigateToPage(): void {
    this.router.navigate(['/order-page']);
    this.showCart=false;
  }
}
