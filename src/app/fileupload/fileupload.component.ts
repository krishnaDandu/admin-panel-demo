import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../appServices/user-service.service';
//import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
 // selectedFile = null;

  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  //ref: AngularFireStorageReference;
  //task: AngularFireUploadTask;
  constructor(private UserService : UserServiceService ) { }


  // onFileUpload(event) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }

//   onFileUpload(event){
//     let storage = firebase.storage().ref(`images/${newDirectory}/${fileName}`)

//     const id = Math.random().toString(36).substring(2);
//     this.ref = this.afStorage.ref(id);
//     this.ref.put(event.target.files[0]);
// debugger;
//   }
    // this.UserService.fileUpload(this.task).subscribe(
    //   (response) => {
    //         debugger;
    //         console.log(response);
            
    //         //this.subCatagoryList = response;
    //       },
    //       (err) => {
    //         debugger;
    //         console.log(err)
    //       }
    // )

    // console.log(event.target);
    // debugger;
    // this.UserService.fileUpload(this.selectedFile).subscribe(
    //   (response) => {
    //     debugger;
    //     console.log(response);
        
    //     //this.subCatagoryList = response;
    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // )
    
  //}

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  ngOnInit() {
  }

}
