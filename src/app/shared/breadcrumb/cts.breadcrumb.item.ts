import { BreadCrumbItem } from "@progress/kendo-angular-navigation";
export interface CtsBreadCrumbItem extends BreadCrumbItem{
    route?: string[];
}