import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helper/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  regView : any;

  @Input() inputToParent : any;
  @Output() outputToParent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      //acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  
  // public get value() : string {
  //   return 
  // }
  

  // convenience getter for easy access to form fields
  get f() { 
    console.log("Getter ====", this.registerForm.controls);
    return this.registerForm.controls; 
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

   // this.regView = JSON.stringify(this.registerForm.value);
   this.regView = this.registerForm.value;
   this.inputToParent = this.registerForm.value;
   this.outputToParent.emit(this.regView);
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
