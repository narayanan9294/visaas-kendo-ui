import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [CommonModule, HttpClientModule, NavigationModule],
  exports:[ BreadcrumbComponent]
})
export class SharedModule {}
