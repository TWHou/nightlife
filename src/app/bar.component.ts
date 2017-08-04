import { Component, Input } from '@angular/core';

import { Venue } from './venue';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  @Input() venue: Venue;
}
