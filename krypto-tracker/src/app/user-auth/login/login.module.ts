import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';


const LoginModuleRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginModuleRoute)
  ],
  exports: [RouterModule]
})
export class LoginModule { }
