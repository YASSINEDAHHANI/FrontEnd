import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MangaComponent } from './manga/Manga.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,MangaComponent, NavbarComponent, FooterComponent, CartComponent, LoginComponent, RegisterComponent, AddMangaComponent, OrderComponent, ContactComponent, AboutComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,RouterModule, MatPaginatorModule
    ,BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
