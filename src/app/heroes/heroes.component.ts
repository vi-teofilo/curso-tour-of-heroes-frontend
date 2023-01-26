import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';

import { Hero } from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  seletedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.seletedHero = hero;
  }
}
