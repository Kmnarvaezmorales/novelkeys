import { HttpClient } from "@angular/common/http";
import { ProductItemModel } from "../cards/product-item.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl: string = "https://novelkeys-e9a8b-default-rtdb.firebaseio.com/"
    private productsEndPoint: string = "products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductItemModel []> (this.baseUrl + this.productsEndPoint);
    }
}