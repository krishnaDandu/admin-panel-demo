import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../appServices/user-service.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit {
  getObjKeys: any;
  MaxNumber_id: any ;
  largest_id : any;
  obj;
  showLength: number = 0;
  AllowOnlyNum : boolean = false;

  
  catagoryForm: FormGroup;
  submitted: boolean = false;
  indexValue: number;
  editMode = false;
  catagoryIdFlag : false;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService ) {  
    console.log("constructor method == ", this.MaxNumber_id);
   }

  catagoryList ;
  catagories = [
    {
      id: "p1",
      catagoryName: "Indian Oil",
      catagoryDesc: "Test data test data"
    },
    {
      id: "p1",
      catagoryName: "Indian Oil",
      catagoryDesc: "Test data test data"
    },
    {
      id: "p1",
      catagoryName: "Indian Oil",
      catagoryDesc: "Test data test data"
    }
  ]
  ngOnInit() {
    this.catagoryForm = this.formBuilder.group({
      id: ['', ],
      catagoryName: ['', Validators.required],
      catagoryDesc: ['', Validators.required]
    })

    this.getData();
  }
  get f() {
    //console.log("Getter ====", this.catagoryForm.controls);
    return this.catagoryForm.controls;
  }
  onSubmit() {
    console.log("onSubmit method == ", this.MaxNumber_id);
    this.submitted = true;
    // stop here if form is invalid
    if (this.catagoryForm.invalid) {
      return;
    }

    if (this.editMode) {
      this.catagoryList[this.indexValue] = {
        id: this.catagoryForm.value.id,
        catagoryName: this.catagoryForm.value.catagoryName,
        catagoryDesc: this.catagoryForm.value.catagoryDesc
      }
      this.editMode = false;
    } else {

      this.catagoryList.push({
        // Genarating new Id with unique 
        id: this.MaxNumber_id + 1, 
        catagoryName: this.catagoryForm.value.catagoryName,
        catagoryDesc: this.catagoryForm.value.catagoryDesc
      });

      debugger;

      //console.log(this.catagoryList);
      this.submitted = false;
    }

    this.userService.saveCatagory(this.catagoryList).subscribe({
      next(res) { console.log(res); },
      error(err) { console.log('Received an errror: ' + err)}
    }


//     const data = from(fetch('/api/endpoint')); //Created from Promise
// data.subscribe({
//  next(response) { console.log(response); },
//  error(err) { console.error('Error: ' + err); },
//  complete() { console.log('Completed'); }
// });



      // myObservable.subscribe({
      //   next(num) { console.log('Next num: ' + num)},
      //   error(err) { console.log('Received an errror: ' + err)}
      // });
      // x => console.log('Observer got a next value: ' + x),
      // err => console.error('Observer got an error: ' + err),
      // () => console.log('Observer got a complete notification')
    
      // (response) => {       
      //   console.log(response);
      //   this.submitted = false;
      // },
      // (err) => {
      //   console.log(err)
      // }
    )
  

  }

  onKeyupEvent (event) {
    let AllowOnlyNum2 = false;

    let list = event.target.value;

    let number = /^[0-9-+]+$/;
    //a-zA-Z_.-]*
    let LettersOnly = /^[a-zA-Z()]+$/
    //let number = /^(1-)?\d{3}-\d{3}-\d{4}$/;
    //let LettersOnly = /[^a-zA-Z]/i;


    let listArray = list.split('\n');

    var lucky = listArray.filter(function(listArrayNum) {
      if (listArrayNum.match(number)){
        debugger;
        return listArrayNum;
      } else if (listArrayNum.match(LettersOnly)) {
        AllowOnlyNum2 = true;
        return false;
      }   
    });

    if(AllowOnlyNum2){
      this.AllowOnlyNum = true;
    } else {
      this.AllowOnlyNum = false;
    }
    
    this.showLength = lucky.length;
  }

  getData (){
    this.userService.getCatagory().subscribe(
      (response) => {
        this.catagoryList = response;
        // To get all array object id to generate new id
        this.obj = this.catagoryList.reduce((a, c) => (a[c.id] = c, a), {});
        this.getObjKeys =  Object.keys(this.obj);       
        this.largest_id = Math.max(...this.getObjKeys);
        this.MaxNumber_id = this.largest_id;
        console.log("GetData first in on load method == ", this.MaxNumber_id);
      },
      (err) => console.log(err)
    )

  }

  

  onReset() {
    this.submitted = false;
    //this.onSubmit();
    //this.catagoryForm.reset();
    
  }

  onDeleteCatagory(id) {
    if (confirm("Do you want to delete this catagory?")) {
      this.catagoryList.splice(id, 1);
      this.userService.saveCatagory(this.catagoryList).subscribe(
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
    this.editMode = true;
    this.indexValue = index;
    this.catagoryForm.patchValue({
      id: this.catagoryList[index].id,
      catagoryName: this.catagoryList[index].catagoryName,
      catagoryDesc: this.catagoryList[index].catagoryDesc
    });


  }


}
