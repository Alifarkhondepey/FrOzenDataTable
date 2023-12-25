# FrOzenDataTable

FrOzenDataTable is a powerful and customizable Angular component for creating dynamic data tables with ease. It comes packed with features like sorting, searching, and customizable actions for each row.

## Installation

Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed. Then follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/FrOzenDataTable.git
    cd FrOzenDataTable
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

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
    <app-data-table [apiUrl]="yourApiUrl" [columns]="yourColumns"></app-data-table>
    ```

    Customize `yourApiUrl` and `yourColumns` based on your data source and desired table columns.

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

