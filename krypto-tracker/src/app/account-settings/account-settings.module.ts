import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings.component';
import { RouterModule, Routes } from '@angular/router';


const AccountSettingsModuleRoute: Routes = [
  {
    path: '',
    component: AccountSettingsComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AccountSettingsModuleRoute)
  ],
  exports: [RouterModule]
})
export class AccountSettingsModule { }
