import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ObBoardingComponent } from './ob-boarding.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { ViewComponent } from './enquiry/view/view.component';


@NgModule({
  declarations: [EnquiryComponent, ObBoardingComponent, ViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    HttpClientModule,   
    GridModule,
    InputsModule,
    LayoutModule,
    NavigationModule,
    LabelModule,
    SharedModule
  ],
})
export class OnBoardingModule {}
