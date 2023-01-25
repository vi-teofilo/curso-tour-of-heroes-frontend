import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: "Wolverine"
  }
  heroes = HEROES;
  seletedHero?: Hero
  onSelect(hero: Hero): void{
    this.seletedHero = hero
  }
}
