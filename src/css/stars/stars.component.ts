import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'css-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() stars: number;
  percent: string;

  constructor() { }

  ngOnInit() {
    this.percent = (this.stars / 5 * 100).toString() + '%';
  }

}
