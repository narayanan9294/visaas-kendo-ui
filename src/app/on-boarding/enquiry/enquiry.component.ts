import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import {
  ColumnComponent,
  DataStateChangeEvent,
  GridComponent,
  GridDataResult,
  SelectionEvent, 
} from '@progress/kendo-angular-grid';

import { DataService } from '../../shared/data-service.service';
import { environment } from 'src/environments/environment';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ALPHANUMERIC_PATTERN } from 'src/app/common/regex-patterns';

import { CtsBreadCrumbItem } from 'src/app/shared/breadcrumb/cts.breadcrumb.item';
import {
  onboarding,
  enquiryList,
  home,
  item3,
  item4,
} from 'src/app/common/breadcrumbs.constants';

const resolvedPromise = Promise.resolve(null); //fancy setTimeout
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EnquiryComponent implements OnInit,AfterViewInit {
  public items: CtsBreadCrumbItem[] = [home, onboarding,item3,enquiryList];
  public min: Date=new Date() ;
  public max!: Date ;
  public searchForm: FormGroup;
  @ViewChild("grid") grid!: GridComponent;
    constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      name: new FormControl(null, [
        Validators.maxLength(100),
        Validators.pattern(ALPHANUMERIC_PATTERN),
      ]),
      email: new FormControl(null, [
        Validators.maxLength(50),
        Validators.email,
      ]),
      tradeName: new FormControl(null, [
        Validators.maxLength(50),
        Validators.pattern(ALPHANUMERIC_PATTERN),
      ]),
      licenseNo: new FormControl(null, [
        Validators.maxLength(5),
        Validators.pattern(ALPHANUMERIC_PATTERN),
      ]),
      pageNo: new FormControl(0),
      pageSize: new FormControl(10),
      licenseExpiry: new FormControl(null, [Validators.minLength(50)]),
    });
    
  }
  ngAfterViewInit(): void {
    
  

  }
  ngOnInit(): void {
    this.sendRequest(this.state);
  }

  valueFromChild(grid:any){
    console.log(grid)
    // resolvedPromise.then(() => { 
    //   grid.columns.map((column:any) => {
    //     return {
    //         field: column.field,
    //         title: column.title
    //     };
    // });
    //});
}
  searchApi: string =
    environment.base +
    environment.gateway +
    environment.search +
    '/search/enquiries';
  saveApi: string =
    environment.base + environment.gateway + environment.admin + 'save';
  deleteApi: string =
    environment.base + environment.gateway + environment.admin + 'delete';

 

  /****************************Search Form*********************************** */

  onSearch() {
    console.log('here');
    console.log(this.searchForm.value);
    this.sendRequest(this.state);  
  }
  onClear(){
    this.searchForm.reset();
    this.state.skip=0;
    this.state.take=10;
    console.log(this.searchForm.value);
    this.sendRequest(this.state);  

  }
  /******************GRID CONFIGURATIONS******************************/
  public loading = false;
  public data: GridDataResult = { data: [], total: 0 };
  public state: State = {
    skip: 0,
    take: 10,
    group: [],
    filter: { filters: [], logic: 'and' },
    sort: [],
  };

  public selectedRowData: any; // Store selected row data here

  onRowSelect(event: SelectionEvent): void {
    // Check if any row is selected
    if (event.selectedRows!.length > 0) {
      // Get the selected row data
      this.selectedRowData = event.selectedRows![0].dataItem;
      console.log('Selected Row Data:', this.selectedRowData);
    }
  }

  onEditClick(selectedRowData: any): void {
    console.log('Edit clicked for row data:', selectedRowData);
    // Add code to handle the edit action using the selected row's data
  }
  
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.sendRequest(state);
  }
  public sendRequest(state: State): void {
    this.loading = true;
    this.searchForm.value.pageNo = state.skip! / state.take! + 1;
     this.dataService
      .search(this.searchApi, this.searchForm.value)
      .subscribe((result) => {
        this.loading = false;
        this.data.data = result.data.data;
        this.data.total = result.data.total;
      });
  }

}
