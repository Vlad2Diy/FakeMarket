import { Component,OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartService} from "src/app/service/cart.service";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public totalNumber = 0;
  constructor(private http: HttpClient,private apiService: ApiService, private cartService: CartService) {}
  products: any = [];

  ngOnInit(){
    this.apiService.getProduct().subscribe(res=>{
      this.products = res;
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

  }
  addToCart(item:any){
    this.totalNumber = this.cartService.addtoCart(item);
  }


}


