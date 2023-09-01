import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent {

  public shoes: any = [];

    constructor(private cartService: CartService){}

      ngOnInit(): void{
        this.cartService.getProducts().subscribe(data=>{
          this.shoes = data;
          console.log(this.shoes)
        })
      }
}
