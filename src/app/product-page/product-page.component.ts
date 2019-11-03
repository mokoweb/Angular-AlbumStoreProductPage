import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import {ProductService } from '../product.service'
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
 products: Product[] 
  constructor(private _productService: ProductService ) { }

  ngOnInit() {
  }

}
