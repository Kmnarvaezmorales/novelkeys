export class ProductItemModel {
    img: string;
    title: string;
    description: string;
    stock: string;

    constructor(img: string, title: string, description: string, stock: string){
        this.img = img;
        this.title = title;
        this.description = description;
        this.stock = stock;
    }
}