import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RPSService } from './services/rps.service';

@Component({
  selector: 'rps-app',
  templateUrl: './src/app/app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private rpsService: RPSService){}
  title = 'Rock Paper Scissors';
  ngOnInit(): void {
    console.dir(this);
  }
}