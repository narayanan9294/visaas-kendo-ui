import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, ViewChild, forwardRef ,OnInit, ViewEncapsulation} from '@angular/core';
import { ColumnBase, ColumnComponent, GridComponent } from '@progress/kendo-angular-grid';
const resolvedPromise = Promise.resolve(null); //fancy setTimeout
@Component({
  selector: 'cts-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
     provide: ColumnBase,
     useExisting: forwardRef(() => GridColumnComponent)
   },
  ]
})
export class GridColumnComponent extends ColumnComponent implements OnInit {

@Input()  override field!:string;
@Input()  override title!:string;
@Input() dataItem!:any;

ngOnInit(): void {
  console.log(this.title);
  console.log(this.dataItem)
}
}
