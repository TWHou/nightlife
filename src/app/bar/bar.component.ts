import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { YelpService } from '../services/yelp.service';
import { AppStateService } from '../services/app-state.service';

import { Venue } from '../classes/venue';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  place: string;
  hasPlace: boolean;
  venues: Venue[];

  constructor(
    private yelp: YelpService,
    private appStateService: AppStateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.appStateService.place$.subscribe(place => this.place = place);
    this.hasPlace = this.place !== null;
    if (this.hasPlace) {
      this.yelp.search(this.place)
      .subscribe((venues: Venue[]) => this.venues = venues);
    } else {
      this.router.navigate(['/']);
    }
  }

}
