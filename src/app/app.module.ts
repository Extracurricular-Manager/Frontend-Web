import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedInChecker } from "./logged-in-checker";

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassroomComponent } from './components/class-children-selector/classroom/classroom.component';
import { ChildrenComponent } from './components/class-children-selector/children/children.component';
import { ClassChildrenSelectorComponent } from './components/class-children-selector/class-children-selector.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import { BillingFamilyComponent } from './components/billing/billing-family/billing-family.component';
import { BillingChildrenComponent } from './components/billing/billing-children/billing-children.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';

// Views
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { PricingViewComponent } from './view/pricing-view/pricing-view.component';
import { BillingViewComponent } from './view/billing-view/billing-view.component';
import { SettingsViewComponent } from './view/settings-view/settings-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { ModulesViewComponent } from './view/modules-view/modules-view.component';
import { ClassChildrenViewComponent } from './view/class-children-view/class-children-view.component';

// Imports angular material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { SmartSelectorComponent } from './components/smart-selector/smart-selector.component';
import { NewClassDialogComponent } from './dialogs/new-class-dialog/new-class-dialog.component';
import { IntentionnalyVoidComponentPleaseDoNotEditThanksComponent } from './components/intentionnaly-void-component-please-do-not-edit-thanks/intentionnaly-void-component-please-do-not-edit-thanks.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { NewAdelphieDialogComponent } from './dialogs/new-adelphie-dialog/new-adelphie-dialog.component';
import { NewGradeDialogComponent } from './dialogs/new-grade-dialog/new-grade-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassroomComponent,
    ChildrenComponent,
    DashboardViewComponent,
    ClassChildrenSelectorComponent,
    ClassChildrenViewComponent,
    PricingViewComponent,
    BillingViewComponent,
    SettingsViewComponent,
    ModulesViewComponent,
    ChildDetailsComponent,
    LoginViewComponent,
    BillingFamilyComponent,
    BillingChildrenComponent,
    UsersComponent,
    RolesComponent,
    FamilyDetailsComponent,
    SmartSelectorComponent,
    NewClassDialogComponent,
    IntentionnalyVoidComponentPleaseDoNotEditThanksComponent,
    NewAdelphieDialogComponent,
    NewGradeDialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,

    //Imports angular material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule
  ],

  providers: [
    LoggedInChecker
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
