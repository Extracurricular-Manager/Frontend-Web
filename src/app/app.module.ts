import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ChildrenComponent } from './children/children.component';
import { ClassChildrenSelectorComponent } from './class-children-selector/class-children-selector.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { PricingViewComponent } from './pricing-view/pricing-view.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { ModulesViewComponent } from './modules-view/modules-view.component';
import { ClassChildrenViewComponent } from './class-children-view/class-children-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassroomComponent,
    ChildrenComponent,
    ClassChildrenSelectorComponent,
    DashboardViewComponent,
    PricingViewComponent,
    BillingViewComponent,
    SettingsViewComponent,
    ModulesViewComponent,
    ClassChildrenViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
