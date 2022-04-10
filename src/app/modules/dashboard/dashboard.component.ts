import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: String;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Chicken', name: '120 cal', weight: 1.0079, symbol: 'P' },
  { position: 'White Rice',  name: '200 cal', weight: 4.0026, symbol: 'C' },
  { position: 'Yogurt', name: '100 cal', weight: 6.941, symbol: 'P' },
  { position: 'Eggs', name: '221 cal', weight: 9.0122, symbol: 'P' },
  { position: 'Oatmeal', name: '80 cal', weight: 10.811, symbol: 'C' },
  { position: 'Banana', name: '64 cal', weight: 12.0107, symbol: 'C' },
  { position: 'Potato', name: '50 cal', weight: 14.0067, symbol: 'C' },
  { position: 'Tomato Soup', name: '370 cal', weight: 15.9994, symbol: 'C' },
  { position: 'Beef', name: '400 cal', weight: 18.9984, symbol: 'P' },
  { position: 'Beans', name: '120 cal', weight: 20.1797, symbol: 'P' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
