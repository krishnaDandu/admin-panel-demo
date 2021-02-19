import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../appServices/user-service.service';

interface Cat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss']
})
export class SubCatagoryComponent implements OnInit {
  selectedCar: string;
  subCatagoryForm: FormGroup;
  catagoryList = [];
  catagoryListDropdown;
  subCatagoryList;

  submitted: boolean = false;
  indexValue: number;
  editMode = false;
  catagoryIdFlag: false;
  constructor(private formBuilder: FormBuilder, private UserService: UserServiceService) { }

  // get f() {
  //   //console.log("Getter ====", this.subCatagoryForm.controls);
  //   return this.subCatagoryForm.controls;
  // }

  onSubmit() {
    this.submitted = true;
    //this.editMode = false;
    // stop here if form is invalid
    if (this.subCatagoryForm.invalid) {
      return;
    }

    this.subCatagoryList.push({
      catagoryId: this.subCatagoryForm.value.catName.id,
      catagoryName: this.subCatagoryForm.value.catName.catagoryName,
      subCatagoryName: this.subCatagoryForm.value.subCatagoryName,
      SubCatagoryDesc: this.subCatagoryForm.value.SubCatagoryDesc
    });

    this.UserService.saveSubCatagory(this.subCatagoryList).subscribe(

      (response) => {
        this.subCatagoryList = response;
      },
      (err) => {
        console.log(err)
      }
    )

  }



  ngOnInit() {
    this.subCatagoryForm = this.formBuilder.group({
      catName: ['', Validators.required],
      subCatagoryName: ['', Validators.required],
      SubCatagoryDesc: ['', Validators.required]
    })

    this.getCatagory();
    this.getSubCatagory();

  }


  onDeleteCatagory(id) {
    if (confirm("Do you want to delete this catagory?")) {
      this.subCatagoryList.splice(id, 1);
      this.UserService.saveSubCatagory(this.subCatagoryList).subscribe(
        (response) => {
          console.log(response)
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }


  onEditCatagory(index: number) {
    debugger;
    this.editMode = true;
    this.indexValue = index;
    this.subCatagoryForm.patchValue({
      id: this.subCatagoryList[index].catagoryId,
      subCatagoryName: this.subCatagoryList[index].subCatagoryName,
      SubCatagoryDesc: this.subCatagoryList[index].SubCatagoryDesc
    });
  }

  ///=== Service calls
  getCatagory() {
    this.UserService.getCatagory().subscribe(
      (response) => {
        this.catagoryListDropdown = response;
      },
      (err) => console.log(err)
    )

  }

  getSubCatagory() {
    this.UserService.getSubCatagory().subscribe(
      (response) => {
        this.subCatagoryList = response;
      },
      (err) => console.log(err)
    )
  }


}
