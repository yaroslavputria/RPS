import { Component } from '@angular/core';

import { arrOfStats } from '../services/tmpSourceData';

import { RPSService } from '../services/rps.service';

@Component({
    selector: 'gamespace',
    template: require('./gamespace.component.html')
})
export class GamespaceComponent {
    constructor(private rpsService: RPSService) {}

    arrOfStats: any[] = arrOfStats;
    currentSituation: string = '' + this.rpsService.randomInteger(0, 2)
        + this.rpsService.randomInteger(0, 2)
        + this.rpsService.randomInteger(0, 2)
        + this.rpsService.randomInteger(0, 2);

    bottomMes: string = 'Press your icon to start!';
    userScore: number = 0;
    pcScore: number = 0;

    showOptions: boolean = false;

    stopper: boolean = false;

    preMove(): void {
        if (!this.stopper) {
            this.stopper = true;

            setTimeout(() => {
                this.bottomMes = 'Chose your hand!';
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
            let userHand: number = this.rpsService.getUserHand(event.currentTarget.id);
            let resOfMove: number = this.rpsService.getResOfMove(userHand, pcHand);

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

        pcHandElement.classList.remove('fa-hand-rock-o', 'fa-hand-paper-o', 'fa-hand-scissors-o', 'fa-flip-horizontal', 'fa-desktop');
        if (pcHand === 0) {
            pcHandElement.classList.add('fa-hand-rock-o');
        } else if (pcHand === 1) {
            pcHandElement.classList.add('fa-hand-paper-o');
        } else if (pcHand === 2) {
            pcHandElement.classList.add('fa-hand-scissors-o');
        }
    }

    refreshCurrentSituation(userHand: number, resOfMove: number): void {
        this.currentSituation = this.currentSituation.substring(2) + userHand + resOfMove;
    }

}
