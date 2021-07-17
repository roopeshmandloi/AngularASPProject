import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from './../../Shared/product-detail.service';
import { ProductDetail } from 'src/app/Shared/product-detail.model';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styles: [
  ]
})
export class ProductDetailFormComponent implements OnInit {

  constructor(public service: ProductDetailService) { }

  ngOnInit(): void {
  }
 
  onSubmit(form: NgForm) {
   // console.log('form---',form.value);
    // if (this.service.formData.Product_Id == 0)
    //   this.insertRecord(form);
    // else
    //   this.updateRecord(form);
  this.service.postProductDetail().subscribe(
    res=> {

    },
    err=> {console.log(err);}
  )
  }


  // insertRecord(form: NgForm) {
  //   this.service.postProductDetail().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //       this.toastr.success('Submitted successfully', 'Product Register')
  //     },
  //     err => { console.log(err); }
  //   );
  // }

  // updateRecord(form: NgForm) {
  //   this.service.putProductDetail().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //       this.toastr.info('Updated successfully', 'Product Register')
  //     },
  //     err => { console.log(err); }
  //   );
  // }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ProductDetail();
  }
}
