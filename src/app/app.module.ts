import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';

import 'hammerjs';

import { YelpService } from './services/yelp.service';
import { AppStateService } from './services/app-state.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CssModule } from '../css/css.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    BarDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CssModule
  ],
  providers: [
    YelpService,
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
