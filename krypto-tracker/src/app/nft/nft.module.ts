import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NftComponent } from './nft.component';



const NftModuleRoute: Routes = [
  {
    path: '',
    component: NftComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(NftModuleRoute)
  ],

  exports: [RouterModule]
})
export class NftModule { }
