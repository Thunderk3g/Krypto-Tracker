import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { LearnComponent } from './learn/learn.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BuyKryptoComponent } from './buy-krypto/buy-krypto.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NftComponent } from './nft/nft.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Error404Component } from './shared/error404/error404.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CoinDetailsComponent,
    LoaderComponent,
    LearnComponent,
    WatchlistComponent,
    BuyKryptoComponent,
    NftComponent,
    AccountSettingsComponent,
    Error404Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
