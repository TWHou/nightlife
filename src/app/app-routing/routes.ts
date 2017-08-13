import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { BarComponent } from '../bar/bar.component';
import { BarDetailComponent } from '../bar-detail/bar-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: BarComponent },
  { path: 'venue/:id', component: BarDetailComponent },
];
