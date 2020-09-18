import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-history',
  templateUrl: './performance-history.component.html',
  styleUrls: ['./performance-history.component.sass']
})
export class PerformanceHistoryComponent {

  constructor() { }


  public saleData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 }
  ];

}
