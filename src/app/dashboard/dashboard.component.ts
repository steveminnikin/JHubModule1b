import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  event?: Event;
  region: string = 'england-and-wales';
  today?: Date;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents(this.region);
  }
  
  getEvents(region: string): void {
    const event = this.eventService.getEvents(region)
    .subscribe(events => this.event = this.nextEvent(events));
    
  }
  
  nextEvent(events: Event[]): Event {
    let arrayNo: number | undefined;
    this.today = new Date();
    
    arrayNo = events.findIndex(e => e.date.toString() > this.today.toJSON());
    
    return events.slice(arrayNo,)[0]
    
  }
  
  setRegion(region: string){
    this.region = region;
    this.getEvents(this.region);
  }


}