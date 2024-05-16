import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../app/Models/Cart';
import { Manga } from '../app/Models/Manga';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8082/api/carts';

  constructor(private http: HttpClient) { }

  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl);
  }
  getCartById(userId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.baseUrl}/${userId}`);
  }
  addToCart(mangaNumber: number,userId:number): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/add/${userId}`,mangaNumber);
  }

  updateCart(id: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.baseUrl}/${id}`, cart);
  }

  deleteCart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
