import { Routes } from '@angular/router';

import { BarComponent } from '../bar/bar.component';
import { BarDetailComponent } from '../bar-detail/bar-detail.component';

export const routes: Routes = [
  { path: 'venues/:place', component: BarComponent },
  { path: 'venue/:id', component: BarDetailComponent },
  { path: '', redirectTo: '/venues', pathMatch: 'full' }
];
