import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @ViewChild('heroForm') heroForm: NgForm;
  name:string;
  ego:string;

  @Output() newHero:EventEmitter<Hero> = new EventEmitter();

  constructor(private heroService:HeroService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`name is ${this.name} and ego is ${this.ego}`);
    let hero:Hero = new Hero(this.name, this.ego);
    //this.newHero.emit(hero);
    this.heroService.addHero(hero);
    this.heroForm.reset();
  }

  
}
