import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  schedule: AngularFireList<any>;
  selectedEvent: Event = new Event;

  constructor(private firebase : AngularFireDatabase ) { }

  getData(){
    this.schedule = this.firebase.list('events');
    return this.schedule;
  }

  insertEvent(event : Event) {
    // if(!this.schedule){
    //   this.schedule = this.getData();
    // }
    this.schedule.push({
      name : event.name,
      location : event.location,
      time : event.time
    });
  }

  updateEvent(event : Event) {
    this.schedule.update(event.$key, {
        name : event.name,
        location : event.location,
        time : event.time
      });
  }

  deleteEvent($key : string) {
    this.schedule.remove($key);
  }

}
