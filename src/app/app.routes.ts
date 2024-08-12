import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FormOrderComponent } from './components/form-order/form-order.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'order-page',
    component: FormOrderComponent,
  },
];
