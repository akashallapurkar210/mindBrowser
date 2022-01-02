import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { GetEmpDataService } from 'src/app/Services/get-emp-data.service';

import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit, OnInit  {

  @ViewChild('pieCanvas') private pieCanvas: ElementRef;

  constructor(private getService:GetEmpDataService) { }
  pieChart: any;
  employeeData:any;
  cityArray:[];

  ngOnInit(): void {
   
  }

  ngAfterViewInit (): void {
   this.setArrayElements(JSON.parse(window.sessionStorage.getItem('empDatas')))
    
  }
  setArrayElements(data){
    var cityArr = new Array();
    data.forEach(element => {
        cityArr.push(element.city);
    });
    const commanArray = cityArr.reduce(function(prev,cur){
      prev[cur] = (prev[cur] || 0) +1;
      return prev;
    },{});
    
    this.pieChartBrowser(Object.keys(commanArray),Object.values(commanArray));
  }

  pieChartBrowser(cityLabels,cityCount): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: cityLabels,
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#cdcdcd',
            '#97bb9d',
            '#97bb8d',
            '#97bb7d',
            '#97bb6d',
            '#97bb1d'
          ],
          data: cityCount
        }]
      }
    });
  }
}
