// shared.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { dataTableComponent } from './dataTable/dataTable.Component';
// ... other imports ..../dataTable/dataTable.Component

@NgModule({
  declarations: [
    dataTableComponent  ],
   imports: [
     DataTablesModule,
     CommonModule,



    // ... other modules ...
  ],
  exports: [
    dataTableComponent,
  ],
  // ... other module metadata ...
})
export class SharedModule { }
