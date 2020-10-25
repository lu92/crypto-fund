import {Component, OnInit} from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-daily-pnl',
  templateUrl: './daily-pnl.component.html',
  styleUrls: ['./daily-pnl.component.sass']
})
export class DailyPnlComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 200];

  // options
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  customColors = [
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: '#0000ff'
        }
      ]
    },
    {
      name: 'France',
      value: ['#0000ff', '#0000ff']
    }
  ];

  constructor() {
    Object.assign(this, {multi});
  }

  onSelect(event) {
    console.log(event);
  }

}
