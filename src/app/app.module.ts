import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarComponent } from './bar.component';
import { YelpService } from './yelp.service';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
