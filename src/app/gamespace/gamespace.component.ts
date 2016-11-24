import { Component } from '@angular/core';

import { arrOfStats, arrOfMoves } from '../services/tmpSourceData';

import { RPSService } from '../services/rps.service';

@Component({
  selector: 'gamespace',
  template: require('./gamespace.component.html')
})
export class GamespaceComponent {
  constructor(private rpsService: RPSService) {}

  arrOfStats: any[] = arrOfStats;
  arrOfMoves: any[] = arrOfMoves;

  bottomMes: string = 'nothing yet';
  userScore: number = 0;
  pcScore: number = 0;
  showOptions: boolean = false;

  preMove(): void {

    setTimeout(() => {
      this.showOptions = true;
    }, 300);
  }

  move(event: any, userHand: Element, pcHand: Element): void {

    setTimeout(() => {
      this.showOptions = false;
    }, 300);
  }

}
