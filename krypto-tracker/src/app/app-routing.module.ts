import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BuyKryptoComponent } from './buy-krypto/buy-krypto.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './shared/error404/error404.component';
import { SignupComponent } from './signup/signup.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'coin/:id', component: CoinDetailsComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'watchlist', component: WatchlistComponent },
  {
    path: 'nft',
    loadChildren: () => import('./nft/nft.module').then((m) => m.NftModule),
  },
  { path: 'buy-krypto', component: BuyKryptoComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
