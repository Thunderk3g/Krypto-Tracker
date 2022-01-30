import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'login', component: LoginComponent },{ path: 'signup', component: SignupComponent },{path: 'coin/:id', component: CoinDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
