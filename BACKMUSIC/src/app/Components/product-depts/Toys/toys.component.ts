import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var cat = 'Toys';
    this.getProductsbyCategory(cat);
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
