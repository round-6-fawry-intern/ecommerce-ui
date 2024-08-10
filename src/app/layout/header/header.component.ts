import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../../components/cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CartComponent, CommonModule], // Import CartComponent here
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  cartOpen: boolean = false;
  isShowCart:boolean=false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {
      this.cartItemCount = items.length; // Access length here
    });
  }

  navigateToCart() {
    this.cartOpen = !this.cartOpen; // Toggle cart visibility

    console.log('cart opened', this.cartOpen);
  }

  showCart(){
    this.isShowCart=!this.isShowCart;
  }
}
