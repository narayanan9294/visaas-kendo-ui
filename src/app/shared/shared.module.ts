import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BreadcrumbComponent,DatepickerComponent
  ],
  imports: [CommonModule, HttpClientModule, NavigationModule,DateInputsModule,FormsModule,ReactiveFormsModule],
  exports:[ BreadcrumbComponent,DatepickerComponent]
})
export class SharedModule {}
