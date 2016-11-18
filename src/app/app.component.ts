import { Component, OnInit } from '@angular/core';
import { RPSService } from './services/rps.service';

import '../css/font-awesome/font-awesome.css';
import '../css/materialize.css';
import '../css/main.css';

@Component({
  selector: 'rps-app',
  templateUrl: './src/app/app.component.html'
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
      // let links = ['https://fonts.googleapis.com/icon?family=Material+Icons', 'styles/materialize.css', 'styles/main.css', 'styles/font-awesome/font-awesome.css'];
      // let allStyles = document.createDocumentFragment();
      // links.forEach((link) => {
      //   let st = document.createElement('link');
      //   st.href = link;
      //   st.rel = 'stylesheet'
      //   allStyles.appendChild(st);
      // });
      // document.head.appendChild(allStyles);
    },0);
  }
}
