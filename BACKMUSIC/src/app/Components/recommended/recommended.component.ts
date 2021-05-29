import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var rec = "true"
    //this.getProducts();
    this.getRecommendedProducts(rec);
}

getRecommendedProducts(rec: string | undefined){
  this.productService.getRecommendedProducts(rec).subscribe(
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
