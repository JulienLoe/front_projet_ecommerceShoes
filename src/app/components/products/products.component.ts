import { CartService } from 'src/app/service/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

import { DressService } from '../../dress.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../../../src/styles.scss']
})
export class ProductsComponent implements OnInit {
  title = 'firstAppAngular';
  shoes: any[] = [];

  constructor(private dressService: DressService, private cartService: CartService) {
    
  }

  ngOnInit(): void {
    console.log("on init")
    this.dressService.getDress().subscribe((data: any) =>{
      this.shoes = data;
    })
  }

  addCart(shoes: any){
    this.cartService.addCart(shoes)
    console.log(shoes)
  }
}