# FrOzenDataTable

FrOzenDataTable is a powerful and customizable Angular component for creating dynamic data tables with ease. It comes packed with features like sorting, searching, and customizable actions for each row.
![image](https://github.com/Alifarkhondepey/FrOzenDataTable/assets/78637186/50a85c5b-9f30-4b72-a598-921a7a24592c)

## Installation

Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed. Then follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/FrOzenDataTable.git
    cd FrOzenDataTable
    ```

2. Install dependencies:

    ```bash
    npm install jquery datatables.net datatables.net-dt angular-datatables --save
    npm install @types/jquery @types/datatables.net --save-dev
    ```
for more information about how to install dataTable, you look here https://github.com/l-lin/angular-datatables


3. Integrate FrOzenDataTable into your Angular project by following the usage instructions in the provided guide.

## Usage

1. Import the `DataTableComponent` in your Angular module:

    ```typescript
    import { DataTableComponent } from './path-to-data-table.component';

    @NgModule({
      declarations: [
        // ...
        DataTableComponent,
      ],
      // ...
    })
    export class YourModule { }
    ```

2. Use the component in your Angular templates:

    ```html
    <app-data-table [apiUrl]="yourApiUrl" [columns]="yourColumns"  (onEditClicked)="handleEditClick($event)"
 (onRemoveClicked)="handleRemoveClick($event)"
 (onOpenClicked)="handleOpenClick($event)"></app-data-table>
    ```

    Customize `yourApiUrl` and `yourColumns` based on your data source and desired table columns.

**Note:** The project is now connected to a sample API built with .NET 8.

## Features

- Dynamic data loading from a specified API endpoint.
- Customizable columns with sorting and searching capabilities.
- Actions column for each row (edit, remove, etc.).
- Export data as Excel.

## Contributing

If you'd like to contribute, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Hat tip to anyone whose code was used.
- Inspiration: Mention any inspiration, libraries, or resources you used.

