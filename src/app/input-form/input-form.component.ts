import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @ViewChild('ticketForm') ticketForm: NgForm;
  
  constructor(private ticketService:TicketService) { }

  ngOnInit() {}

  onSubmit() {
    let ticket = new Ticket(
      this.ticketForm.value.title,
      this.ticketForm.value.description,
      this.ticketForm.value.points,
      this.ticketForm.value.owner);
    
    this.ticketService.addTicket(ticket);
    this.ticketForm.reset();
  }

  
}
