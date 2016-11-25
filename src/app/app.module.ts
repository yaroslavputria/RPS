import 'materialize-css';
import 'angular2-materialize';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MaincardComponent } from './maincard/maincard.component';
import { MainformComponent } from './mainform/mainform.component';
import { GamespaceComponent } from './gamespace/gamespace.component';

// import { MaterializeDirective } from "angular2-materialize";

import { RPSService } from './services/rps.service';

@NgModule({
    declarations: [
        AppComponent,
        MaincardComponent,
        MainformComponent,
        GamespaceComponent,
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
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
