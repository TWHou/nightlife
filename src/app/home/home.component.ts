import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  place: string;

  constructor(
    private router: Router,
    private appStateService: AppStateService
  ) { }

  search() {
    console.log(this.place);
    this.appStateService.setPlace(this.place);
    this.place = '';
    this.router.navigate(['/search']);
  }

}
