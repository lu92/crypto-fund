import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-estimated-balance',
  templateUrl: './estimated-balance.component.html',
  styleUrls: ['./estimated-balance.component.css']
})
export class EstimatedBalanceComponent {

  @Input('estimatedBtcBalance')
  estimatedBtcBalance: number;

  @Input('estimatedUsdBalance')
  estimatedUsdBalance: number;

  @Input('pnlValue')
  pnlValue: number;

  @Input('pnlChangePercentage')
  pnlChangePercentage: number;

  @Input('pnlMonthValue')
  pnlMonthValue: number;

  @Input()
  pnlMonthChangePercentage: number;

}
