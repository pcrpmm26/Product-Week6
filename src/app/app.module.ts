import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FruitcakeComponent } from './components/fruitcake/fruitcake.component';
import { NormalcakeComponent } from './components/normalcake/normalcake.component';
import { ChocolatecakeComponent } from './components/chocolatecake/chocolatecake.component';
import { MinicakeComponent } from './components/minicake/minicake.component';
import { FancycakeComponent } from './components/fancycake/fancycake.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductComponent,
    WebboardComponent,
    ContactComponent,
    HomeComponent,
    FruitcakeComponent,
    NormalcakeComponent,
    ChocolatecakeComponent,
    MinicakeComponent,
    FancycakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
