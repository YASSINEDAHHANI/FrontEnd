import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart.service'; 
import { MangaService } from '../../service/Manga.service'; 
import { MangaComponent } from '../manga/Manga.component';
import { Manga } from '../Models/Manga';
import { error } from 'console';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  //appstate: any;

  selectedManga: Manga []=[];
  constructor(private cartService: CartService,private mangaService: MangaService,private appstate: AppStateService){}
  userId= this.appstate.UsesState.UserId;;
  
  ngOnInit(): void {
    this.cartService.getCartById(this.userId).subscribe(
      (cart:any) => {
        this.selectedManga = cart; 
        console.log("Cart:", cart);
      },
      (error: any) => {
        console.error("Error fetching cart:", error);
      }
    );
  }
  HandelDelete(itemId: number) {
    this.cartService.deleteCart(itemId).subscribe(
      () => {
        
        this.selectedManga = this.selectedManga.filter(item => item.number !== itemId);
      },
      (error: any) => {
        console.error("Error deleting item from cart:", error);
      }
    );
    
    }

}
