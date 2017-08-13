import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppStateService {

  // Observable source
  private place = new BehaviorSubject<string>(null);

  // Observable stream
  place$ = this.place.asObservable();

  setPlace(place: string) {
    this.place.next(place);
  }

}
