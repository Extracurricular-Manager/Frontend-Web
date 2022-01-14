import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ExportsComponent } from './exports/exports.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'main',component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
