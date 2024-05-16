import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaComponent } from './manga/Manga.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "",component: MangaComponent },{path: "cart" ,component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
