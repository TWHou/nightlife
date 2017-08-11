import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { YelpService } from '../services/yelp.service';

import { Venue } from '../classes/venue';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  venues: Venue[];

  constructor(
    private route: ActivatedRoute,
    private yelp: YelpService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.yelp.search(params.get('place')))
    .subscribe((venues: Venue[]) => this.venues = venues);
  }

}
