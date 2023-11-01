import {  AfterViewInit, ChangeDetectorRef, Component,  ContentChildren,  EventEmitter,  Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnComponent, GridComponent } from '@progress/kendo-angular-grid';

const resolvedPromise = Promise.resolve(null); //fancy setTimeout

@Component({
  selector: 'crud-kendo-grid',
  templateUrl: './crud-grid.component.html',
  styleUrls: ['./crud-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrudGridComponent implements OnInit,OnChanges,AfterViewInit {
  
  @Input() data:any;
  // @ViewChild("grid") grid!: GridComponent;
  @Output() sendCount = new EventEmitter<any>();
  @ContentChildren(ColumnComponent) columns!:any;
  @ViewChild(GridComponent) grid!:GridComponent;
  constructor(private cdr: ChangeDetectorRef ) {}
  ngAfterViewInit(): void {
    this.sendCount.emit(this.grid);
  }
  
  ngAfterContentInit() {
    resolvedPromise.then(() => { 
      this.grid.columns.reset(this.columns.toArray());
    });
  }
ngOnInit(): void {
  console.log(this.data);
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  console.log("value changed", this.data);
}

}
