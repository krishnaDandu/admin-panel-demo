import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {

  message ;
 // @ViewChild(RegisterComponent) child : ElementRef;
  @ViewChild(RegisterComponent, {static: false}) childData : RegisterComponent ;

  @ViewChild('pRef', {static: false}) pRef: ElementRef;




  /////////////////////////////////
  ChildCurrentVal;

  constructor() { }

  ngAfterViewInit(){
    this.ChildCurrentVal = this.childData;
    console.log(this.pRef.nativeElement.innerHTML); 
    //this.message = this.child;
    debugger;
  }
  
  GetOutPutVal(selected : any){
    
    //this.ChildCurrentVal = selected;
    //console.log(this.ChildCurrentVal)
  }


  ngOnInit() {
  }

}
