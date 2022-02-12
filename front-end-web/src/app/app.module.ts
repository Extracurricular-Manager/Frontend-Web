import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { ChildFormComponent } from './components/child-form/child-form.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { PricingComponent } from './view/pricing/pricing.component';
import { ExportsComponent } from './view/exports/exports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BillingComponent } from './view/billing/billing.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChildrenPageComponent } from './view/children-page/children-page.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateChildComponent } from './components/children-list/create-child/create-child.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
    ClassesListComponent,
    CreateChildComponent
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
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
