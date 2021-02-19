
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, NgForm, Validators} from '@angular/forms';
import { UserServiceService } from '../appServices/user-service.service';

//import { AngularFireDatabase } from 'angularfire2/database'; //FirebaseListObservable 
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
//import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  
  person = {
    "D2" : "yashika",
    "D1" : "sraves"
  }

  SignUpForm : FormGroup;
  FirstName : String = "";
  LastName : String = "";
  Email : String = "";
  Password : String = "";



  constructor( private fb: FormBuilder, private userService: UserServiceService) { 
  
 
 this.SignUpForm = fb.group({
  "fname" : ['', Validators.required],
  "lname" : ['', Validators.required],
  "email": ['', [Validators.required, Validators.email]],
  //"email": ["", Validators.compose([Validators.required, Validators.email])],
  "userpassword" : ['', Validators.required]
})
  }

  ngOnInit() {
    let authr = [{"email": "test12345@gmail.com", "password" : "12345"}, {"email": "test2@gmail.com", "password" : "abcd"}];
    this.userService.getAuth(authr).subscribe(
      (response) => {       
        console.log(response);
      },
      (err) => {
        console.log(err)
      }
    )
  }

  
  PostData(SignUpForm : NgForm) {
debugger;
     console.log(SignUpForm.controls);
     debugger;
   }

}
