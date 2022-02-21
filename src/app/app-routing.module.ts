import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenComponent} from "./children/children.component";
import {BillingViewComponent} from "./billing-view/billing-view.component";
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ClassChildrenViewComponent } from './class-children-view/class-children-view.component';
import { PricingViewComponent } from './pricing-view/pricing-view.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { ModulesViewComponent } from './modules-view/modules-view.component';

const routes: Routes = [
  {path: 'modules', component:ModulesViewComponent},
  {path: 'settings', component:SettingsViewComponent},
  {path: 'billing', component:BillingViewComponent},
  {path: 'pricing', component:PricingViewComponent},
  {path: 'children', component:ClassChildrenViewComponent},
  {path: 'home', component:DashboardViewComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
