import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpService {

  constructor(private http: HttpClient) { }

  search(place: string): Observable<Object> {
    return this.http.get(`api/venues/${place}`);
  }

  getVenue(venue: string): Observable<Object> {
    return this.http.get(`api/venue/${venue}`);
  }

}
