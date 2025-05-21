import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  //declarations: [AppComponent, ProductListComponent, ProductCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  exports: [ProductCardComponent],
  providers: [],
  //bootstrap: [AppComponent],
})
export class AppModule {}
