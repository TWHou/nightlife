import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Venue } from './classes/venue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  place = '';
  venues: Venue[];

  constructor(private router: Router) { }

  onEnter(value: string) {
    this.place = value;
    this.router.navigate(['/venues', value]);
  }
}
