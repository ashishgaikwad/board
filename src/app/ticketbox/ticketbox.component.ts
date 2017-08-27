import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-ticketbox',
  templateUrl: './ticketbox.component.html',
  styleUrls: ['./ticketbox.component.scss']
})
export class TicketboxComponent implements OnInit {

  tickets:Array<Ticket>;

  constructor(private TicketService:TicketService) { }

  ngOnInit() {
    this.tickets = this.TicketService.tickets;
  }

}
