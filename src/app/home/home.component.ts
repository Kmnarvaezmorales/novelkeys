import { Component } from '@angular/core';
import { ProductItemModel } from '/Users/noitskelvin/novelkeys/src/app/cards/product-item.model';
import { mock_product_list } from '/Users/noitskelvin/novelkeys/src/app/cards/mock_product_item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'novelkeys';
  products: ProductItemModel[] = [];

  constructor(){
    for (var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
