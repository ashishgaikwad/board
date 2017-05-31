import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-ticketbox',
  templateUrl: './ticketbox.component.html',
  styleUrls: ['./ticketbox.component.scss']
})
export class TicketboxComponent implements OnInit {

  heroes:Array<Hero>;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
  }

}
