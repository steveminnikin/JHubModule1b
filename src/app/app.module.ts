import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule,
    BsDatepickerModule.forRoot() ],
  declarations: [ AppComponent, EventsComponent, EventDetailComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
