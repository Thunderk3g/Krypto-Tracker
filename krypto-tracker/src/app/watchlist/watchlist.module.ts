import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist.component';

const WatchlistModuleRoute: Routes = [
  {
    path: '',
    component: WatchlistComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(WatchlistModuleRoute)],
  exports: [RouterModule],
})
export class WatchlistModule {}
