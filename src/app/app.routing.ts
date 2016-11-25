import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaincardComponent } from './maincard/maincard.component';
import { MainformComponent } from './mainform/mainform.component';
import { GamespaceComponent } from './gamespace/gamespace.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '#', component: MaincardComponent }, // temporary route
  { path: '', component: MaincardComponent },
  { path: 'mainform', component: MainformComponent },
  { path: 'gamespace', component: GamespaceComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
