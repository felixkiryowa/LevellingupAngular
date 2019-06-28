import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    filteredProducts: IProduct[];
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    private _listFilter: string;

    ngOnInit(): void {
        console.log('OnInit life cycle hook');
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
                console.log('SERVER PRODUCTS....>>>>>>', this.filteredProducts);
            },
            error => this.errorMessage = error
        );
    }

    constructor(private productService: ProductService) {
        this.listFilter = 'cart';
    }
   
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    products: IProduct[] = [];

  toggleImage() : void {
      this.showImage = !this.showImage;
  }

   performFilter(filterBy: string) : IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }

    onRatingClicked(message: string): void {
         this.pageTitle = 'Product List : ' + message;
    }
}
