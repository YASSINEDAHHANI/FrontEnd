import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart.service';
import { MangaService } from '../../service/Manga.service';
import { Manga } from '../Models/Manga';
import { AppStateService } from '../app-state.service';
import { Order } from '../Models/Order';
import { OrderService } from '../order.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  selectedManga: Manga[] = [];
  userId: number;
  toastVisible: boolean = false;
  order: Order | null = null;
  constructor(
    private cartService: CartService,
    private mangaService: MangaService,
    private appState: AppStateService,
    private orderService: OrderService,private orderservice: OrderService,
    private router: Router
  ) {
    this.userId = this.appState.UsesState.UserId;
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartById(this.userId).subscribe(
      (cart: any) => {
        this.selectedManga = cart; 
        console.log("Cart:", cart);
      },
      (error: any) => {
        console.error("Error fetching cart:", error);
      }
    );
  }

  handleDelete(mangaId: number): void {
    this.cartService.deleteMangaFromCart(this.userId, mangaId).subscribe(
      () => {
        this.loadCart();
      },
      (error: any) => {
        console.error("Error deleting manga from cart:", error);
      }
    );
  }
  HandleCheckout(): void {
    this.orderService.saveOrder(this.userId).subscribe(
      (order: Order) => {
        console.log(order);
        this.loadCart();
      },
      (error: any) => {
        console.error("Error saving order:", error);
      }
    );
    }
  
  
}
