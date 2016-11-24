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
  currentSituation: string = '' + this.rpsService.randomInteger(0, 2) + this.rpsService.randomInteger(0, 2) + this.rpsService.randomInteger(0, 2) + this.rpsService.randomInteger(0, 2);

  bottomMes: string = 'nothing yet';
  userScore: number = 0;
  pcScore: number = 0;

  showOptions: boolean = false;

  stopper: boolean = false;

  preMove(): void {
    if (!this.stopper) {
      this.stopper = true;

      setTimeout(() => {
        this.bottomMes = 'Chose your hand';
        this.showOptions = true;
        this.stopper = false;
      }, 300);
    } else {
      return;
    }
  }

  move(event: any, userHandElement: Element, pcHandElement: Element): void {
    if (!this.stopper) {
      this.stopper = true;

      let assumedUserHand: number = this.rpsService.userHandFromStats(this.arrOfStats, this.currentSituation);
      let pcHand: number = this.rpsService.choseMove(assumedUserHand);
      let userHand: number = this.getUserHand(event.currentTarget.id);
      let resOfMove: number = this.getResOfMove(userHand, pcHand);

      this.renderHands(userHand, pcHand, userHandElement, pcHandElement);

      this.rpsService.refreshArrOfStats(this.currentSituation, userHand, this.arrOfStats);

      this.refreshCurrentSituation(userHand, resOfMove);

      setTimeout(() => {
        this.processResOfMove(resOfMove);
        this.showOptions = false;
        this.stopper = false;
      }, 300);
    } else {
      return;
    }
  }

  getUserHand(optionId: string): number {
    return Number(optionId.substr(3));
  }

  getResOfMove(userHand: number, pcHand: number): number {
    if (pcHand === userHand) {
      return 2;
    } else if ((userHand === 0 && pcHand === 2) || (userHand === 2 && pcHand === 1) || (userHand === 1 && pcHand === 0)) {
      return 0;
    } else if ((userHand === 2 && pcHand === 0) || (userHand === 1 && pcHand === 2) || (userHand === 0 && pcHand === 1)) {
      return 1;
    }
  }

  processResOfMove(res: number): void {
    if (res === 0) {
      this.userScore++;
      this.bottomMes = 'You won this round!';
    } else if (res === 1) {
      this.pcScore++;
      this.bottomMes = 'You lost this round!';
    } else if (res === 2) {
      this.bottomMes = 'It\'s draw!';
    }
  }

  renderHands(userHand: number, pcHand: number, userHandElement: Element, pcHandElement: Element): void {
    userHandElement.classList.remove('fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-flip-horizontal');
    if (userHand === 0) {
      userHandElement.classList.add('fa-hand-rock-o');
    } else if (userHand === 1) {
      userHandElement.classList.add('fa-hand-paper-o');
    } else if (userHand === 2) {
      userHandElement.classList.add('fa-hand-scissors-o', 'fa-flip-horizontal');
    }

    pcHandElement.classList.remove('fa-diamond', 'fa-file-o', 'fa-scissors', 'fa-flip-horizontal', 'fa-desktop');
    if (pcHand === 0) {
      pcHandElement.classList.add('fa-diamond');
    } else if (pcHand === 1) {
      pcHandElement.classList.add('fa-file-o');
    } else if (pcHand === 2) {
      pcHandElement.classList.add('fa-scissors', 'fa-flip-horizontal');
    }
  }

  refreshCurrentSituation(userHand: number, resOfMove: number): void {
    this.currentSituation = this.currentSituation.substring(2) + userHand + resOfMove;
  }

}
