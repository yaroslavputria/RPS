import { Component, OnInit } from '@angular/core';
import { RPSService } from './services/rps.service';

import '../css/font-awesome/font-awesome.css';
import '../css/materialize.css';
import '../css/main.css';

import "materialize-css";
import "angular2-materialize";

@Component({
  selector: 'rps-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(private rpsService: RPSService){}
  ngOnInit(): void {
    console.dir(this);
    setTimeout(() => {//тимчасовий костиль
      //require('../materialize.js');
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "materialize.js";
      document.body.appendChild(s);
    },0);
  }
}
