import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    StarsComponent
  ],
  exports: [
    CarouselComponent,
    StarsComponent
  ]
})
export class CssModule { }
