import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Models/Order';
import { Manga } from './Models/Manga';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8082/api/orders';

  constructor(private http: HttpClient,
  ) { }

  public saveOrder(userId:number):Observable<any>{
    const formedata=new FormData();
    formedata.append("userId",userId.toString()); 
    return this.http.post(`${this.baseUrl}/checkout`,formedata);
  }
  getOrdersByUser(userId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/user/${userId}`);
  }
  
  // createOrder(userId: number): Observable<Order> {
  //   return this.http.post<Order>(`${this.baseUrl}/checkout?userId=${userId}`, {});
  // }

  // getOrderById(orderId: number): Observable<Order> {
  //   return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  // }

  // getOrderDetails(orderId: number): Observable<Order> {
  //   return this.http.get<Order>(`${this.baseUrl}/details/${orderId}`);
  // }

  // getOrdersByUserId(userId: number): Observable<Order[]> {
  //   return this.http.get<Order[]>(`${this.baseUrl}/user/${userId}`);
  // }
}
