import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert-cmp',
    styleUrls: ['src/app/components/alert/alert.cmp.css'],
    template: require('./alert.cmp.html')
})
export class AlertCmp{
//     constructor(public header: string, public message: string) {

//
    @Input()header: string;
    @Input()message: string;
}
