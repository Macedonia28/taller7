import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreComponent } from './padre/padre.component';


const routes: Routes = [
  {path:"padre",component:PadreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
