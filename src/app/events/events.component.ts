import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() region: string ='england-and-wales';
  event?: Event;
  events: Event[] = [];
  
  constructor(private eventService: EventService) {}

    ngOnInit(): void {
      this.getEvents(this.region);
      

    }

    getEvents(region: string): void {
      this.eventService.getEvents(region)
      .subscribe(events => this.events = this.getFutureEvents(events));
      
    }

    getFutureEvents(events: Event[]): Event[] {
      let arrayNo: number | undefined;
       const today: String = new Date().toJSON();

      arrayNo = events.findIndex(e => e.date.toString() > today);

      return events.slice(arrayNo,)

    }

    

  
}