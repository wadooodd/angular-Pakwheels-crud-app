import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/cart/filter/filter.component';
import { ProductsComponent } from './components/cart/products/products.component';
import { ItemsComponent } from './components/cart/items/items.component';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { AddComponent } from './components/cart/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartComponent,
    FilterComponent,
    ProductsComponent,
    ItemsComponent,
    DisplayinfoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
