import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ProductsComponent,
    LoginComponent,
    ProfileComponent,
    BasketComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterOutlet,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
