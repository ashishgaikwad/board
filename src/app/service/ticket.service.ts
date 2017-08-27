import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket';

@Injectable()
export class TicketService {

  public tickets:Array<Ticket> = [];

  constructor() { }

  addTicket(ticket:Ticket) {
    this.tickets.push(ticket);
  }

}
