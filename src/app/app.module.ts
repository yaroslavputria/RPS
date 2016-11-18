import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import "materialize-css";
// import "angular2-materialize";

// import { MaterializeDirective } from "angular2-materialize";

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { RPSService } from './services/rps.service';
import { MaincardComponent } from './maincard/maincard.component';

@NgModule({
    declarations: [
        AppComponent,
        MaincardComponent,
        // MaterializeDirective
        // HomeComponent,
        // AboutComponent
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
