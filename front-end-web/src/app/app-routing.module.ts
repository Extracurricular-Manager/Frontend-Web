import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ExportsComponent } from './exports/exports.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent},
  { path:'pricing',component: PricingComponent},
  { path:'exports',component: ExportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
