import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//All component 
import { CatagoryComponent } from './catagory/catagory.component';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:"Catagory", component : CatagoryComponent },
  {path:'Sub-Catagory', component : SubCatagoryComponent},
  {path:'Product', component : ProductComponent},
  {path:'', redirectTo:'/Catagory', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
