import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {BasketComponent} from "./basket/basket.component";



const  routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'basket',component:BasketComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
