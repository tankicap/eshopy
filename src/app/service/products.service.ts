import { inject, Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'assets/data/products.json'; 
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }
}
