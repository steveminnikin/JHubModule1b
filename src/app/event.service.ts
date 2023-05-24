import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from './event';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class EventService {

  events?:Event[];

  private eventsUrl = "https://www.gov.uk/bank-holidays.json"

  constructor(private http: HttpClient) { }

  getEvents(region: string): Observable<Event[]> {
    const events = this.http.get<Event[]>(this.eventsUrl).pipe(
      map(response => response[region].events)
      );
      return events;

    }

   
    
    
   
}