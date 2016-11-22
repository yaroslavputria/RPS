import { Component } from '@angular/core';

import { RPSService } from '../services/rps.service';

@Component({
  selector: 'gamespace',
  template: require('./gamespace.component.html')
})
export class GamespaceComponent{
  constructor(private rpsService: RPSService){}
}
