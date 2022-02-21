import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { PricingComponent } from './view/pricing/pricing.component';
import { ExportsComponent } from './view/exports/exports.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChildrenPageComponent } from './view/children-page/children-page.component';
import {BillingComponent} from "./view/billing/billing.component";

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'main',component:NavbarComponent },
  { path:'billing', component:BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
