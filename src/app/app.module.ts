import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';

import { YelpService } from './services/yelp.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BarDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
