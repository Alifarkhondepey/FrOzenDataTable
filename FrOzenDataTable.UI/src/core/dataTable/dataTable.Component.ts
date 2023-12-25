import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-data-table',
  templateUrl: './dataTable.component.html',
  styleUrls: ['./dataTable.component.scss']
})
export class dataTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('table') table: ElementRef;
  @Input() apiUrl: string;
  @Input() columns: any;
  @Output() onEditClicked: EventEmitter<any> = new EventEmitter();
  @Output() onRemoveClicked: EventEmitter<any> = new EventEmitter();
  @Output() onOpenClicked: EventEmitter<any> = new EventEmitter();
  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  //API Token
  //private authToken = 'your_auth_token';
  isDataLoaded: boolean = false;

  // Subject to unsubscribe from observable when the component is destroyed
  private destroy$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    try {
      console.log(this.apiUrl)
      this.data = await this.loadDataSync(); // Await the promise
    } catch (error) {
      console.error('Error in ngOnInit:', error);
      // Handle error as needed
    }

  }


  ngAfterViewInit(): void {
    // Fetch data from the provided API and initialize the DataTable after the view has been initialized
  }

  ngOnDestroy(): void {
    // Unsubscribe from the destroy$ subject to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async loadDataSync(): Promise<any> {
    //Add Token
    //const headers = new HttpHeaders({
    //  'Authorization': `Bearer ${this.authToken}`
    //});

    try {
      const response: any = await this.httpClient.get(this.apiUrl).pipe(takeUntil(this.destroy$)).toPromise();
      this.initializeDataTable();
      this.isDataLoaded = true;
      return response; // Resolve the promise with the data
    } catch (error) {
      throw error; // Propagate the error
    }
  }
  private initializeDataTable(): void {
    if (this.data.length > 0 && this.columns.length > 0) {

      this.dtOptions = {
        pagingType: 'full_numbers',
        searching: true,
        search: true,
        data: this.data,

      };
    }
  }

  handleEditClick(item: any): void {
    this.onEditClicked.emit(item);
  }

  handleRemoveClick(item: any): void {
    this.onRemoveClicked.emit(item);
  }

  handleOpenClick(item: any): void {
    this.onOpenClicked.emit(item);
  }

  exportAsExcel() {
    if (this.table && this.table.nativeElement) {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'SheetJS.xlsx');
    } else {
      console.error('Table element not available');
    }
  }

}
