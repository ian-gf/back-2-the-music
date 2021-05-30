import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-sale',
  templateUrl: './products-sale.component.html',
  styleUrls: ['./products-sale.component.css']
})
export class ProductsSaleComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
