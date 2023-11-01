import { Component } from '@angular/core';

@Component({
  selector: 'cts-grid-column-action',
  templateUrl: './grid-column-action.component.html',
  styleUrls: ['./grid-column-action.component.scss']
})
export class GridColumnActionComponent {
  onEditClick(selectedRowData: any): void {
    console.log('Edit clicked for row data:', selectedRowData);
  }
  onDeleteClick(selectedRowData: any): void {
    console.log('delete clicked for row data:', selectedRowData);
  }
}
