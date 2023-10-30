import { Component, Input } from '@angular/core';
import { CtsBreadCrumbItem } from './cts.breadcrumb.item';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent { 
  @Input() breadcrumbItems:CtsBreadCrumbItem[]=[];
  constructor(private router: Router) {}

  public onItemClick(item: CtsBreadCrumbItem): void {
    console.log(this.breadcrumbItems)
    const selectedItemIndex = this.breadcrumbItems.findIndex((i) => i.text === item.text);
    console.log(selectedItemIndex);
    console.log(this.breadcrumbItems[selectedItemIndex]);
    const route =this.breadcrumbItems[selectedItemIndex].route;
    if(route != undefined){
      this.router.navigate(this.breadcrumbItems[selectedItemIndex].route!);
    }
    
  }
}
