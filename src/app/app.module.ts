import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RPSService } from './services/rps.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
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
