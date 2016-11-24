import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RPSService {
// constructor(private http: Http) {}


  // звернення до статистики
  userHandFromStats(arrOfStats: string[], currentSituation: string): number {
    let result = 0;
    let tmp = arrOfStats[currentSituation][result];
    for (let i = 1; i < 3; i++) {
      if (arrOfStats[currentSituation][i] > tmp) {
        tmp = arrOfStats[currentSituation][i];
        result = i;
      };
    };
    return result; // повертає руку, яку найчастіше використовує гравець "за даних обставин"
  };

  // вибір ходу пк відносно ходу гравця зі статистики
  choseMove(userHand: number): number {
    if (userHand === 0) {
      return 1;
    } else if (userHand === 1) {
      return 2;
    } else if (userHand === 2) {
      return 0;
    }
  };

  // // поточне значення руки гравця
  // myCurrentHand() {
  //   var myMove = myHand.children()[0].classList;
  //   if (myMove.contains("fa-hand-rock-o")) {
  //     return 0;
  //   } else if (myMove.contains("fa-hand-paper-o")) {
  //     return 1;
  //   } else if (myMove.contains("fa-hand-scissors-o")) {
  //     return 2;
  //   };
  // };
  // //зміна руки пк в DOM-дереві
  // function makePcMove(pcMove) {
  //   var el = $("#pcHand i");
  //   switch (pcMove) {
  //     case 0:
  //     {
  //       el.removeClass();
  //       el.addClass("fa fa-diamond");
  //     };
  //     break;
  //     case 1:
  //     {
  //       el.removeClass();
  //       el.addClass("fa fa-file-o");
  //     };
  //     break;
  //     case 2:
  //     {
  //       el.removeClass();
  //       el.addClass("fa fa-scissors fa-flip-horizontal");
  //     };
  //     break;
  //   };
  // };
  // //визначення результату ходу(порівняння руки пк та гравця)
  // function compareMoves(pcMove) {
  //   var myMove = myCurrentHand();
  //   if (pcMove === myMove) {
  //     return 2;
  //   } else if ((myMove === 0 && pcMove === 2) || (myMove === 2 && pcMove === 1) || (myMove === 1 && pcMove === 0)) {
  //     return 0;
  //   } else if ((myMove === 2 && pcMove === 0) || (myMove === 1 && pcMove === 2) || (myMove === 0 && pcMove === 1)) {
  //     return 1;
  //   };
  // };
  // //рухунок
  // $scope.pcScore = 0;
  // $scope.myScore = 0;
  // $scope.drawScore = 0;
  // $scope.resMessage;
  // //опрацювання результату партії
  // function resultProcessing(res) {
  //   switch (res) {
  //     case 0:
  //     {
  //       $scope.myScore++;
  //       $scope.resMessage = "You won!!!";
  //     };
  //     break;
  //     case 1:
  //     {
  //       $scope.pcScore++;
  //       $scope.resMessage = "You lost!!!";
  //     };
  //     break;
  //     case 2:
  //             { // is it needed? :)
  //               $scope.drawScore++;
  //               $scope.resMessage = "Its draw!";
  //             };
  //             break;
  //           };
  //           $scope.$apply();
  //           console.log($scope.myScore, $scope.drawScore, $scope.pcScore);
  //         }

  // //оновлення масиву статистики
  // function refreshArrOfStats(currentSituation, currentMove) {
  //   arrOfStats[currentSituation][currentMove]++;
  // }


}
