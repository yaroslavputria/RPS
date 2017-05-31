import { Component, OnInit } from '@angular/core';

import '../css/font-awesome/font-awesome.css';
import '../css/materialize.css';
import '../css/main.css';

@Component({
    selector: 'rps-app',
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    // constructor(){}
    ngOnInit(): void {

    }
}
