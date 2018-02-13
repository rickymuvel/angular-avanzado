import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styles: []
})
export class ChartComponentComponent implements OnInit {

  @Input('labelsGrafico') doughnutChartLabels: string[] = [];
  @Input('datosGrafico') doughnutChartData: number[] = [];
  @Input('tipoGrafico') doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
