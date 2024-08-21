import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { OrderRequest } from '../../../types';
import { OrderStateService } from '../../services/order-state-service.service';

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

  constructor(
    private orderStateService: OrderStateService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const state = this.orderStateService.getOrderState();
    this.cartItems = state.cartItems || [];
    this.couponCode = state.couponCode || '';

    console.log('Cart Items:', this.cartItems); // Debugging line
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const orderData: OrderRequest = {
        couponCode: this.couponCode,
        customerEmail: this.customerEmail,
        CardNumber: this.cardNumber,
        items: this.cartItems.map((item) => {
          console.log(item);
          return {
            productId: item.id,
            storeId: 1,
            quantity: 1, // Adjust quantity based on your logic
          };
        }),
      };
      console.log(orderData);
      console.log('FUCCCCCCCCCCCCCCCCCCCCk');
      this.apiService.orderNow(orderData).subscribe((res) => console.log(res));
    }
  }
}
