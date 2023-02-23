import { Component, OnInit} from '@angular/core';
import { Location} from '@angular/common';
import { HeroService } from '../../../core/service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/heroes.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero
  constructor(private heroService: HeroService,
    private location: Location, private route: ActivatedRoute){

  }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero).subscribe((hero) => console.log(hero))
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }

}
