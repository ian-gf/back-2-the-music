import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    this.getProducts();

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

}
