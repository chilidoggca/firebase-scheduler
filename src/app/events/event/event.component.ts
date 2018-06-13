import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(eventForm: NgForm) {
    if (eventForm.value.$key == null)
      this.eventService.insertEvent(eventForm.value);
    else
      this.eventService.updateEvent(eventForm.value);
    this.resetForm(eventForm);
    this.toastr.success('Submitted Successfully', 'Event Schedule');
  }

  resetForm(eventForm?: NgForm) {
    if (eventForm != null)
      eventForm.reset();
    this.eventService.selectedEvent = {
      $key: null,
      name: '',
      location: '',
      time: ''
    }
  }

}
