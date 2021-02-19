import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { 

  }

  getAuth (auth : any[]){    
    return this.http.put('https://admin-panel-a5566.firebaseio.com/auth.json', auth);     
  }

  getCatagory (){ 
    //return this.http.post('https://admin-panel-a5566.firebaseio.com/catagory.json', catagory);
    return this.http.get('https://admin-panel-a5566.firebaseio.com/catagory.json');
     
  }

  saveCatagory (catagory : any[]){    
    debugger;
   //return this.http.post('https://admin-panel-a5566.firebaseio.com/catagory.json', catagory);
   return this.http.put('https://admin-panel-a5566.firebaseio.com/catagory.json', catagory);
    
  }

  getSubCatagory (){ 
    //return this.http.post('https://admin-panel-a5566.firebaseio.com/catagory.json', catagory);
    return this.http.get('https://admin-panel-a5566.firebaseio.com/subcatagory.json');
     
  }

  saveSubCatagory (subcatagory : any[]){    
    debugger;
    return this.http.put('https://admin-panel-a5566.firebaseio.com/subcatagory.json', subcatagory);     
   }

   getProduct (){ 
    return this.http.get('https://admin-panel-a5566.firebaseio.com/product.json');     
  }

  saveProduct (product : any[]){    
    debugger;
    return this.http.put('https://admin-panel-a5566.firebaseio.com/product.json', product);     
   }

   fileUpload(selectedFile){
    //const task = event.target.files[0]; //this.ref.put(event.target.files[0]);
    // const fd = new FormData();
    // fd.append('image', selectedFile, selectedFile.name);
    debugger;
    return this.http.post('https://admin-panel-a5566.firebaseio.com/admin-picture', selectedFile);
  }

 
}
