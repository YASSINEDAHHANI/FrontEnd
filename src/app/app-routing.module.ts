import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaComponent } from './manga/Manga.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "",component: MangaComponent },
  {path: "cart" ,component: CartComponent},
  {path: "login",component: LoginComponent}
  ,{path:"register",component: RegisterComponent},
  {path:"update",component:AddMangaComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  { path: 'orders/:orderId', component: OrderComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
