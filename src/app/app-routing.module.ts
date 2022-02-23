import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenComponent} from "./components/class-children-selector/children/children.component";
import {BillingViewComponent} from "./view/billing-view/billing-view.component";
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { ClassChildrenViewComponent } from './view/class-children-view/class-children-view.component';
import { PricingViewComponent } from './view/pricing-view/pricing-view.component';
import { SettingsViewComponent } from './view/settings-view/settings-view.component';
import { ModulesViewComponent } from './view/modules-view/modules-view.component';
import {LoginViewComponent} from "./view/login-view/login-view.component";

const routes: Routes = [
  {path: 'modules', component:ModulesViewComponent},
  {path: 'settings', component:SettingsViewComponent},
  {path: 'billing', component:BillingViewComponent},
  {path: 'pricing', component:PricingViewComponent},
  {path: 'children', component:ClassChildrenViewComponent},
  {path: 'home', component:DashboardViewComponent},
  { path: 'login', component:LoginViewComponent },
  {path: '', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
