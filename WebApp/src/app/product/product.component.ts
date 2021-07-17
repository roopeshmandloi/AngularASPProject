import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../Shared/product-detail.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service: ProductDetailService) { }

  ngOnInit(): void {
  }

}
