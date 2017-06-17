import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    visibility: boolean = false;
    message: string = '';
    header: string = '';

    visibilityChange: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    show(header: string, message: string) {
        this.message = message;
        this.header = header;
        this.visibility = true;
        this.visibilityChange.next(this.visibility);
    }

    hide() {
        this.visibility = false;
        this.visibilityChange.next(this.visibility);
    }
}
