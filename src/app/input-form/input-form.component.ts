import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';
import { MatSelect, MatSelectChange, MatOption } from '@angular/material';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @ViewChild('ticketForm') ticketForm: NgForm;
  @ViewChild('teamSelect') teamSelect: MatSelect;

  teamList = ['All', 'User Interface', 'Middleware', 'Backend', 'DevOps', 'PMO', 'OPS', 'Compliance'];

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

  changeHandler(event:MatSelectChange) {
    
    if(event.value[0] == 'All' && event.source.selected) {
      this.teamSelect.options.forEach(x => {
        if(x.value != 'All'){
          x.select();
        }
      });
    }
    else if(event.value[0] != 'All' && event.source.selected){
      this.teamSelect.options.forEach(x => x.deselect());
    }
    console.log('here', event);
    console.log('selected', this.teamSelect.selected);
  }

  
}
