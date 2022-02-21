import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenComponent} from "./children/children.component";
import {BillingViewComponent} from "./billing-view/billing-view.component";

const routes: Routes = [
  {path: 'bonjour', component:BillingViewComponent},
  {path: 'home', component:ChildrenComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
