import { Component, OnInit } from '@angular/core';

import '../css/font-awesome/font-awesome.css';
import '../css/materialize.css';
import '../css/main.css';

import { AlertService } from './alert/alert.service';

@Component({
    selector: 'rps-app',
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    visibility: boolean;
    constructor(private alertService: AlertService){
        this.visibility = alertService.visibility;
        const subscription = alertService.visibilityChange.subscribe((value) => {
            this.visibility = value;
        });
    }
    ngOnInit(): void {

    }
}
