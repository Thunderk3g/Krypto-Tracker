import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';


const SignupModuleRoute: Routes = [
  {
    path: '',
    component: SignupComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SignupModuleRoute),
    
  ],
  exports: [RouterModule]
})
export class SignupModule { }
