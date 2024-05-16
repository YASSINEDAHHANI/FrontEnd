import { Component,OnInit  } from '@angular/core';
import { Manga } from '../Models/Manga';
import { MangaService } from '../../service/Manga.service'; 
import { CartService } from '../../service/Cart.service'; 
import { Init } from 'node:v8';
import { Router } from '@angular/router';
import { error } from 'node:console';
@Component({
  selector: 'app-root',
  templateUrl: './Manga.component.html',
  styleUrls: ['./Manga.component.css']
})
export class MangaComponent implements OnInit {
  constructor(private mangaService: MangaService,private cartservice:CartService) {}



  title(title: any) {
    throw new Error('Method not implemented.');
  }
  mangaList: Manga[]=[];

  userId = 1;


  ngOnInit(): void {
    this.fetchAllManga();
  }
  fetchAllManga(): void {
    this.mangaService.getAllManga().subscribe(
      mangaList => {
        
        this.mangaList = mangaList;
        console.log(mangaList);
      },
      error => {
        console.error('Error fetching manga:', error);
      }
    );
  }
  /*HandleCart(mangaNumber :number):void  {
    /*console.log(id);
    const Addtocart=this.mangaList.find(manga =>manga.id === id);
    if(Addtocart){
      this.cartservice.createCart(Addtocart).subscribe(
        ()=>{
          console.log("Nice")
        }
      ),
        (error: any) => {console.error("Error creating", error);

      }
    }
    console.log("Manga number:", mangaNumber);
    const selectedManga = this.mangaList.find(manga => manga.Num === mangaNumber);
    if (selectedManga) {
      this.cartservice.addToCart(selectedManga).subscribe(
        () => {
          console.log("Added to cart successfully");
          // You can redirect to the cart page or show a notification here
        },
        (        error: any) => {
          console.error("Error adding to cart:", error);
          // Handle error, show error message, etc.
        }
      );
    }
    console.log("Manga number:", id);
  }*/
  /*HandleCart(mangaNumber: number): void {
    console.log("Manga number:", mangaNumber);
    const selectedManga = this.mangaList.find(manga => manga.Num === mangaNumber);
    if (selectedManga) {
      this.cartservice.createCart(selectedManga).subscribe(
        () => {
          console.log("Added to cart successfully");
        },
        (  error: any) => {
          console.error("Error adding to cart:", error);
        }
      );
    }
  }*/
  HandleCart(mangaNumber: number): void {
    // if (selectedManga) {
    //   this.mangaService.setSelectedManga(selectedManga);
      this.cartservice.addToCart(mangaNumber,this.userId).subscribe(
        {
          next:(data:any)=> console.log(data),
          error: err => console.log(err)
        }
      );
    }
    // console.log(selectedManga);

  }


