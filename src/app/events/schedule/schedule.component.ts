import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Event } from '../shared/event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  schedule: Event[];
  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    let x = this.eventService.getData();
    x.snapshotChanges().subscribe(item => {
      this.schedule = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.schedule.push(y as Event);
      });
    });
  }

  onEdit(event: Event) {
    this.eventService.selectedEvent = Object.assign({}, event);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this event ?') == true) {
      this.eventService.deleteEvent(key);
      this.toastr.warning("Deleted Successfully", "Event register");
    }
  }

}
