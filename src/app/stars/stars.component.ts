import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
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
