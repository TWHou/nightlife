import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'css-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[];
  @Input() width = '100%';
  current = 0;

  constructor() { }

  ngOnInit() {
  }

  change(direction: number): void {
    const numImg = this.images.length;
    this.current = (numImg + this.current + direction) % numImg;
  }

}
