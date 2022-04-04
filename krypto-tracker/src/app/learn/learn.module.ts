import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn.component';
import { RouterModule, Routes } from '@angular/router';



const LearnModuleRoute: Routes = [
  {
    path: '',
    component: LearnComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule ,  
    RouterModule.forChild(LearnModuleRoute)
  ],
  exports: [RouterModule]
})
export class LearnModule { }
