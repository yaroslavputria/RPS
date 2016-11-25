import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RPSService {
// constructor(private http: Http) {}

  // звернення до статистики
  userHandFromStats(arrOfStats: any[], currentSituation: string): number {
    let result = this.randomInteger(0, 2);
    let tmp = arrOfStats[currentSituation][result];
    for (let i = 0; i < 3; i++) {
      if (arrOfStats[currentSituation][i] > tmp) {
        tmp = arrOfStats[currentSituation][i];
        result = i;
      }
    }
    return result; // повертає руку, яку найчастіше використовує гравець "за даних обставин"
  }

  // вибір ходу пк відносно ходу гравця зі статистики
  choseMove(userHand: number): number {
    if (userHand === 0) {
      return 1;
    } else if (userHand === 1) {
      return 2;
    } else if (userHand === 2) {
      return 0;
    }
  }

  // оновлення масиву статистики
  refreshArrOfStats(currentSituation: string, currentUserHand: number, arrOfStats: any[]) {
    arrOfStats[currentSituation][currentUserHand]++;
  }

  getUserHand(optionId: string): number {
    return Number(optionId.substr(3));
  }

  getResOfMove(userHand: number, pcHand: number): number {
    if (pcHand === userHand) {
      return 2;
    } else if ((userHand === 0 && pcHand === 2)
        || (userHand === 2 && pcHand === 1)
        || (userHand === 1 && pcHand === 0)) {
      return 0;
    } else if ((userHand === 2 && pcHand === 0)
        || (userHand === 1 && pcHand === 2)
        || (userHand === 0 && pcHand === 1)) {
      return 1;
    }
  }

  randomInteger(min: number, max: number): number {
    let rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
  }

}
