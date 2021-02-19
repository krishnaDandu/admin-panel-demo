import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../appServices/user-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  subCategoryListDropDown;
  productList;
  productListArray = [];
  submitted: boolean = false;
  showProductList;

  MaxNumber_id: any = 0;
  largest_id: any;

  productType = ["Vegetarian", "Non-vegetarian", "Both"];
  currency = ["Rupee", "dollor", "Pound"];

  constructor(private formBuilder: FormBuilder, private UserService: UserServiceService) { }

  get f() {
    //console.log("Getter ====", this.subCatagoryForm.controls);
    return this.productForm.controls;
  }

  ngOnInit() {
    this.getProduct();
    this.getSubCategoryList();
    this.productForm = this.formBuilder.group({
      productId: ['',],
      subCatagoryName: ['', Validators.required],
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productDescription: ['', Validators.required],
      productOffer: ['', Validators.required],
      productPrice: ['', Validators.required],
      ProductSellingPrice: ['', Validators.required],
      ProductVolume: ['', Validators.required],
      ProductQuantity: ['', Validators.required],
      ProductAddToCart: ['', Validators.required],
      ProductDeliveryDate: ['', Validators.required]
    })
  }

  getProduct() {
    this.UserService.getProduct().subscribe(
      (res) => { this.showProductList = res },
      (err) => { }
    )
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    this.productListArray.push({
      productId: this.MaxNumber_id + 1,
      subCatagoryName: this.productForm.value.subCatagoryName.subCatagoryName,
      productName: this.productForm.value.productName,
      productType: this.productForm.value.productType,
      productDescription: this.productForm.value.productDescription,
      productOffer: this.productForm.value.productOffer,
      productPrice: this.productForm.value.productPrice,
      ProductSellingPrice: this.productForm.value.ProductSellingPrice,
      ProductVolume: this.productForm.value.ProductVolume,
      ProductQuantity: this.productForm.value.ProductQuantity,
      ProductAddToCart: this.productForm.value.ProductAddToCart,
      ProductDeliveryDate: this.productForm.value.ProductDeliveryDate
    });

debugger;
    this.UserService.saveProduct(this.productListArray).subscribe(
      (response) => {
        debugger;
        this.productList = response;
      },
      (err) => {
        console.log(err)
      }
    )
  }

  getSubCategoryList() {
    this.UserService.getSubCatagory()
      .subscribe(
        (response) => {
          this.subCategoryListDropDown = response;
        },
        (error) => {

        }
      )
  }


  fun_AllowOnlyAmountAndDot(event){
    debugger;
    let inpVal = event;
    //if (event.keyCode === 13 && event.shiftKey) {
      let rgx = /^[0-9]*\.?[0-9]*$/;
     // inpVal.match(rgx) //
      if(inpVal.indexOf('.') > -1) {
        this.productForm.value.productPrice = inpVal;
        debugger;
      }

      debugger;

    //}

  }

}
