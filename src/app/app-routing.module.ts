import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from "./components/class-children-selector/children/children.component";
import { BillingViewComponent } from "./view/billing-view/billing-view.component";
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { ClassChildrenViewComponent } from './view/class-children-view/class-children-view.component';
import { PricingViewComponent } from './view/pricing-view/pricing-view.component';
import { SettingsViewComponent } from './view/settings-view/settings-view.component';
import { ModulesViewComponent } from './view/modules-view/modules-view.component';
import {LoginViewComponent} from "./view/login-view/login-view.component";
import {LoggedInChecker} from "./logged-in-checker";

const routes: Routes = [
  {path: 'modules', component:ModulesViewComponent, canActivate:[LoggedInChecker]},
  {path: 'settings', component:SettingsViewComponent, canActivate:[LoggedInChecker]},
  {path: 'billing', component:BillingViewComponent,canActivate:[LoggedInChecker]},
  {path: 'pricing', component:PricingViewComponent, canActivate:[LoggedInChecker]},
  {path: 'children', component:ClassChildrenViewComponent, canActivate:[LoggedInChecker]},
  {path: 'home', component:DashboardViewComponent, canActivate:[LoggedInChecker]},
  {path: 'login', component:LoginViewComponent },
  {path: '', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
