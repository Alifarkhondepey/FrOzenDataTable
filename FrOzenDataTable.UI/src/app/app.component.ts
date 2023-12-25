import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public forecasts: WeatherForecast[] = [];
  dtTrigger: Subject<void> = new Subject<void>();

  yourfacialColumns = [
    { title: 'Date', data: 'date' },
    { title: 'Temp. (C)', data: 'temperatureC' },
    { title: 'Temp. (F)', data: 'temperatureF' },
    { title: 'Summary', data: 'summary' },
    // Add more columns as needed
  ];
  apiUrl: string = "https://localhost:7055/weatherforecast"
  isDataLoaded: boolean = true; // Add a flag to track whether data is loaded
  constructor(private router: Router
  ) {
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  handleEditClick(event: any): void {
    console.log('Edit clicked:');
  
    // Add your logic for edit action here
  }

  handleRemoveClick(event: any): void {
    console.log('Remove clicked:', event);


    
        console.log('facial Deleted successfully');

     
    // Add your logic for remove action here
  }

  handleOpenClick(event: any): void {
    console.log('Edit clicked:');
  
    // Add your logic for open action here
  }
  title = 'FrOzenDataTable.UI';
}


