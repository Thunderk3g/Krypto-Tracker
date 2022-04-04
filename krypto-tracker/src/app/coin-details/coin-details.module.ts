import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details.component';



const CoinDetailsModulerRoute: Routes = [
  {
    path: '',
    component: CoinDetailsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CoinDetailsModulerRoute)
  ],
  exports: [RouterModule]
})
export class CoinDetailsModule { }
