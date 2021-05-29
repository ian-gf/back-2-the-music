import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});

      var cat = 'Microphones';
      //this.getProducts();
      this.getProductsbyCategory(cat);
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
        console.log(this.productService.products);
      },
      err => {
        console.log(err);
      }
    )
  }

  getProductsbyCategory(cat: string | undefined){
    this.productService.getProductsbyCategory(cat).subscribe(
      res => {
        this.productService.products = res;
        console.log(this.productService.products);
      },
      err => {
        console.log(err);
      }

    )
  }

}
