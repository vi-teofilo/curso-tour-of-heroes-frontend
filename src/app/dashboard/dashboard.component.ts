import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/heroes.model';
import { HeroService } from '../core/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = []

  constructor(private heroService: HeroService){

  }

  ngOnInit(): void {
      this.getHeroes()
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes.slice(1, 5))
  }

}
