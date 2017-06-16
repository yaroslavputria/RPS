import 'materialize-css';
import 'angular2-materialize';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { MainformComponent } from './components/mainform/mainform.component';
import { GamespaceComponent } from './components/gamespace/gamespace.component';
import { AlertCmp } from './components/alert/alert.cmp';

// import { MaterializeDirective } from "angular2-materialize";

import { RPSService } from './services/rps.service';

@NgModule({
    declarations: [
        AppComponent,
        MaincardComponent,
        MainformComponent,
        GamespaceComponent,
        AlertCmp
        // MaterializeDirective
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        RPSService
    ],
    bootstrap: [ AppComponent ],
    // exports:[]
})

export class AppModule {
}
