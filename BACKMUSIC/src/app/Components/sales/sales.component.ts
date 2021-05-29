import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var sale = "true"
    //this.getProducts();
    this.getSales(sale);
}

  getSales(sale: string | undefined){
    this.productService.getSales(sale).subscribe(
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
