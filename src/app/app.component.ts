import { Component } from '@angular/core';

import { YelpService } from './yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  place = '';
  venues;

  constructor(private yelp: YelpService) { }

  onEnter(value: string) {
    this.place = value;
    this.yelp.search(value).subscribe(
      data => {
        this.venues = data;
        console.log(this.venues);
      },
      err => {
        console.log(err);
      }
    );
  }
}
