import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
    selector: 'alert-cmp',
    styleUrls: ['src/app/alert/alert.cmp.css'],
    template: require('./alert.cmp.html')
})
export class AlertCmp{
    header: string;
    message: string;
    visibility: boolean;
    constructor(private alertService: AlertService) {
        this.header = alertService.header;
        this.message = alertService.message;
    }
    hide() {
        this.alertService.hide();
    }

}
