import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./user-auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./user-auth/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'coin/:id',
    loadChildren: () =>
      import('./coin-details/coin-details.module').then(
        (m) => m.CoinDetailsModule
      ),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'watchlist',
    loadChildren: () =>
      import('./watchlist/watchlist.module').then((m) => m.WatchlistModule),
  },
  {
    path: 'nft',
    loadChildren: () => import('./nft/nft.module').then((m) => m.NftModule),
  },
  {
    path: 'buy-krypto',
    loadChildren: () =>
      import('./buy-krypto/buy-krypto.module').then((m) => m.BuyKryptoModule),
  },
  {
    path: 'account-settings',
    loadChildren: () =>
      import('./account-settings/account-settings.module').then(
        (m) => m.AccountSettingsModule
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./shared/error404/error404.module').then((m) => m.Error404Module),
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
