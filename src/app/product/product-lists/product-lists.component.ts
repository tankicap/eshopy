import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../product.model';
import { ProductComponent } from '../product/product.component';

import {FormsModule} from '@angular/forms'
import { FilterpipePipe } from '../../pipe/filterpipe.pipe';

@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [ProductComponent,FilterpipePipe,FormsModule],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css'
})
export class ProductListsComponent implements OnInit {

  products: Product[] = [];
  filterText = '';

  private productService=inject(ProductsService);


  ngOnInit():void{
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.error('There was an error!', error);
    });
  }


}
