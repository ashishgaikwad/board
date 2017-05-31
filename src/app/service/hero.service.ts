import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable()
export class HeroService {

  public heroes:Array<Hero> = [];

  constructor() { }

  addHero(hero:Hero) {
    this.heroes.push(hero);
  }

}
