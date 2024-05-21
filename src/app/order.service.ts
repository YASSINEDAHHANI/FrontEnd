import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8082/api/orders';

  constructor(private http: HttpClient) { }

  saveOrder(userId:number):Observable<any>{
    const formedata=new FormData();
    formedata.append("userId",userId.toString()); 
    return this.http.post(`${this.baseUrl}/checkout`,formedata);
  }
  getOrderDetails(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }
  
}
