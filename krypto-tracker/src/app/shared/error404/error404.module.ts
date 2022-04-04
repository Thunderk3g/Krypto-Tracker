import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404.component';



const Error404ModuleRoute: Routes = [
  {
    path: '',
    component: Error404Component,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Error404ModuleRoute)
  ],
  exports: [RouterModule]
})
export class Error404Module { }
