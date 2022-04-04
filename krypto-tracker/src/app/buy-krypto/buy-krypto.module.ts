import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyKryptoComponent } from './buy-krypto.component';
import { RouterModule, Routes } from '@angular/router';



const BuyKryptoModuleRoute: Routes = [
  {
    path: '',
    component: BuyKryptoComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BuyKryptoModuleRoute)
  ],
  exports: [RouterModule]
})
export class BuyKryptoModule { }
