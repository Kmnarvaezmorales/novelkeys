import { Component } from '@angular/core';
import { ProductItemModel } from './cards/product-item.model';
import { mock_product_list } from './cards/mock_product_item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novelkeys';
  products: ProductItemModel[] = [];

  constructor(){
    for (var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
