import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule, MatButtonModule, MatSelectModule, MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
//import {AngularFireModule} from '@angular/fire';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';

//import { AngularFireStorageModule } from 'angularfire2/storage';
//import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MustMatch } from '../app/_helper/must-match.validator';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { UserServiceService } from './appServices/user-service.service';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ProductComponent } from './product/product.component';

// export const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   storageBucket: "",
//   messagingSenderId: ""
// };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ParentComponent,
    SiblingComponent,
    CatagoryComponent,
    SubCatagoryComponent,
    FileuploadComponent,
    ProductComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule
  //  AngularFireModule.initializeApp(firebaseConfig),
   // AngularFireStorageModule
    //AngularFireModule.initializeApp(environment.firebaseConfig)
  //  AngularFirestoreModule
    //FormsModule
    
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
