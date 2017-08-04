import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Venue } from './venue';

@Injectable()
export class YelpService {

  constructor(private http: HttpClient) { }

  search(place: string): Observable<Object> {
    return this.http.get<Venue[]>(`api/venues/${place}`);
  }

  getVenue(venue: string): Observable<Object> {
    return this.http.get<Venue>(`api/venue/${venue}`);
  }

}
