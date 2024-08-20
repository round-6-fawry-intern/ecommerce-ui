import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { OrderRequest } from '../../../types';

@Component({
  selector: 'app-form-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  cartItems: any[] = [];
  couponCode: string = '';
  customerEmail: string = '';
  cardNumber: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      cartItems: any[];
      couponCode: string;
    };

    if (state) {
      this.cartItems = state.cartItems || [];
      this.couponCode = state.couponCode || '';
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const orderData: OrderRequest = {
        couponCode: this.couponCode,
        customerEmail: this.customerEmail,
        cardNumber: this.cardNumber,
        items: this.cartItems.map((item) => ({
          productId: item.productId,
          storeId: item.storeId,
          quantity: 1, // Adjust quantity based on your logic
        })),
      };

      this.apiService.orderNow(orderData);
    }
  }
}
