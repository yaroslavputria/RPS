import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaincardComponent } from './maincard/maincard.component';

import { RPSService } from './services/rps.service'; // should be mocked

describe('AppComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, MaincardComponent],
        providers: [RPSService]});
      TestBed.compileComponents();
    });

    it('should instantiate the AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
