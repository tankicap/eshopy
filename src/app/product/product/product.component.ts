import { Component, inject, Input } from '@angular/core';
import { Product } from '../../product.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input({required:true}) product!:Product

 get ImagePath(){
  return 'pictures/'+this.product.picture;
}
get DescPath(){
  return 'hover/'+this.product.description;
}

}
