import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from "@progress/kendo-angular-grid";
import { CrudGridComponent } from './crud-grid/crud-grid.component';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridColumnActionComponent } from './grid-column-action/grid-column-action.component';
@NgModule({
  declarations: [
    BreadcrumbComponent,DatepickerComponent,CrudGridComponent,GridColumnComponent, GridColumnActionComponent
  ],
  imports: [CommonModule, HttpClientModule, NavigationModule,DateInputsModule,FormsModule,ReactiveFormsModule,GridModule],
  exports:[ BreadcrumbComponent,DatepickerComponent,CrudGridComponent,GridColumnComponent, GridColumnActionComponent]
})
export class SharedModule {}
