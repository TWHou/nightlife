import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Venue } from '../classes/venue';

@Injectable()
export class YelpService {

  constructor(private http: HttpClient) { }

  search(place: string): Observable<Venue[]> {
    return this.http.get<Venue[]>(`api/venues/${place}`);
  }

  getVenue(venue: string): Observable<Venue> {
    return this.http.get<Venue>(`api/venue/${venue}`);
  }

}
