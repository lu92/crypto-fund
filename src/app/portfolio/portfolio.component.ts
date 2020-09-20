import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor() {
  }

  public saleData = [
    {name: 'Mobiles', value: 105000},
    {name: 'Laptop', value: 55000},
    {name: 'AC', value: 15000},
    {name: 'Headset', value: 150000},
    {name: 'Fridge', value: 20000}
  ];

}
