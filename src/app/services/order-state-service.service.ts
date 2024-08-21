import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderStateService {
  private state: any = {};

  setOrderState(data: any) {
    this.state = data;
  }

  getOrderState() {
    return this.state;
  }
}
