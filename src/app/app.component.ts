import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector:
    'app-root', templateUrl: './app.component.html', styleUrls:
    ['./app.component.css']
}) export class AppComponent implements OnInit {

  isMobile: boolean;
  elements =[];
  displayedColumns: string[] = ['genere', 'negozio', 'citta', 'spese','telefono', 'zonadiconsegna'];
  searchText = '';
  previous: string;
  dataSource:any;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
 this.httpClient.get('assets/negozi.json')
          .subscribe((data:any) => {
            this.dataSource = new MatTableDataSource(data);
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
