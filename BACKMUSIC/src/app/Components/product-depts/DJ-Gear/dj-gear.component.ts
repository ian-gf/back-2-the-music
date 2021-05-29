import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-dj-gear',
  templateUrl: './dj-gear.component.html',
  styleUrls: ['./dj-gear.component.css']
})
export class DJGearComponent implements OnInit {

  constructor(public productService: ProductsService) { }

    ngOnInit(): void {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});

      var cat = 'DJ Gear';
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
