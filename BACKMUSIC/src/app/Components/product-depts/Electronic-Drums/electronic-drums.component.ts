import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-electronic-drums',
  templateUrl: './electronic-drums.component.html',
  styleUrls: ['./electronic-drums.component.css']
})
export class ElectronicDrumsComponent implements OnInit {

  constructor(public productService: ProductsService) { }

    ngOnInit(): void {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});

      var cat = 'Electronic Drums';
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
