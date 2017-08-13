import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { YelpService } from '../services/yelp.service';
import { Venue } from '../classes/venue';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss']
})
export class BarDetailComponent implements OnInit {

  id: string;
  venue: Venue;

  constructor(
    private router: Router,
    private yelp: YelpService
  ) { }

  ngOnInit() {
    this.id = this.router.url.replace('/venue/', '');
    this.yelp.getVenue(this.id).subscribe(
      data => {
        this.venue = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
