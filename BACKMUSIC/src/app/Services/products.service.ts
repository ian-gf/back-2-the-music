import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL="";

  constructor() { }

  getProducts(){
    return [];
  }

}