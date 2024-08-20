import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, OrderRequest } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  calculateDiscount(amount: number, couponCode: string): Observable<number> {
    const url = `http://localhost:8080/consumptions/calculate-amount?amount=${amount}&couponCode=${couponCode}`;
    return this.httpClient.get<number>(url);
  }

  orderNow(orderBody: OrderRequest): Observable<void> {
    const url = 'http://127.0.0.1:8090/order';

    return this.httpClient.post<void>(url, orderBody);
  }
}
