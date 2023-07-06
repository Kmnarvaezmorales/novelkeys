import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '/Users/noitskelvin/novelkeys/src/app/cards/product-item.model';
import { ProductsService } from './products-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'novelkeys';
  products: ProductItemModel[] = [];

  constructor(private productsService:ProductsService){
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductItemModel []) => {
      console.log("Fetching Products");
      for (var product of data){
        console.log(product);
        this.products.push(product);
      }
    });
  }
}
