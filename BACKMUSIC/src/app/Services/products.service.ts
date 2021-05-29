import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  CAT_URL="http://localhost:3000/api/productos/cat/";
  REC_URL="http://localhost:3000/api/productos/rec/";
  SER_URL="http://localhost:3000/api/productos/ser/";
  POP_URL="http://localhost:3000/api/productos/pop/";

  products: Producto[] | undefined;

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  getProductsbyCategory(cat: string | undefined){
    return this.http.get<Producto[]>(this.CAT_URL+cat);
  }

  getRecommendedProducts(rec: string | undefined){
    return this.http.get<Producto[]>(this.REC_URL+rec);
  }

  getServices(ser: string | undefined){
    return this.http.get<Producto[]>(this.SER_URL+ser);
  }

  getPopular(pop: string | undefined){
    return this.http.get<Producto[]>(this.POP_URL+pop);
  }

}
