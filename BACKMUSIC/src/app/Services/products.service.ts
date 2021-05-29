import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  CAT_URL="http://localhost:3000/api/productos/cat/";
  products: Producto[] | undefined;

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  getProductsbyCategory(cat: string | undefined){
    
    return this.http.get<Producto[]>(this.CAT_URL+cat);
  }

}
