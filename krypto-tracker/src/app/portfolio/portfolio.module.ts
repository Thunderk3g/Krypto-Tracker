import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const PortfolioModuleRoute: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(PortfolioModuleRoute)],
  exports: [RouterModule],
})
export class PortfolioModule {}
