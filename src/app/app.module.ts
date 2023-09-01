
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {ProductsComponent} from './components/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { PageHeelComponent } from './pages/page-heel/page-heel.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    ProductsCartComponent,
    PageHeelComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
