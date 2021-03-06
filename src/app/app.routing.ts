import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaincardComponent } from './components/maincard/maincard.component';
import { MainformComponent } from './components/mainform/mainform.component';
import { GamespaceComponent } from './components/gamespace/gamespace.component';

const appRoutes: Routes = [
  { path: '#', component: MaincardComponent }, // temporary route
  { path: '', component: MaincardComponent },
  { path: 'mainform', component: MainformComponent },
  { path: 'gamespace', component: GamespaceComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
