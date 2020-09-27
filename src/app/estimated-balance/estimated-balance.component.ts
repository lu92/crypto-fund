import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimated-balance',
  templateUrl: './estimated-balance.component.html',
  styleUrls: ['./estimated-balance.component.css']
})
export class EstimatedBalanceComponent implements OnInit {

  constructor() { }

  pnlValue = 5.25;
  pnlChangePercentage = 0.71;
  pnlMonthValue = -42.01;
  pnlMonthChangePercentage = -6.53;


  ngOnInit(): void {
  }

}
