import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http'

import { AppComponent } from './app.component';
//import { FormComponent } from './form.component';

import { RPSService } from './services/rps.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
//    FormComponent
  ],
  providers: [RPSService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

