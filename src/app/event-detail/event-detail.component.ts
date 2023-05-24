import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event?: Event;


  constructor(private route:ActivatedRoute, private eventService: EventService, private location: Location) { }

  ngOnInit() {
    this.getEvent('england-and-wales');

  }

  getEvent(region: string): void {
    
    const date: String = this.route.snapshot.paramMap.get('date');
  
    this.eventService.getEvents(region)
    .subscribe(event => this.event = event.find(e => e.date.toString() == date));

  }

  goBack() : void {
    this.location.back();
  }
}