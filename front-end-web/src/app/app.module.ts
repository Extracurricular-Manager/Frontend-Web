import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildFormComponent } from './children/child-form/child-form.component';
import { ChildrenListComponent } from './children/children-list/children-list.component';
import { PricingComponent } from './pricing/pricing.component';
import { ExportsComponent } from './exports/exports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BillingComponent } from './billing/billing.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChildrenPageComponent } from './children/children-page/children-page.component';
import { ClassesListComponent } from './children/classes-list/classes-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildFormComponent,
    ChildrenListComponent,
    PricingComponent,
    ExportsComponent,
    NavbarComponent,
    BillingComponent,
    ChildrenPageComponent,
    ClassesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    ScrollingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
