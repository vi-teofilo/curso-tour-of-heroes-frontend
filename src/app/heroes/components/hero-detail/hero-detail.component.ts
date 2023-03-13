import { Component, OnInit} from '@angular/core';
import { Location} from '@angular/common';
import { HeroService } from '../../../core/service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/heroes.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero
  isEditing!: boolean

  form = this.fb.group({
    id: [{value: '', disable: true}],
    name: []
  })
  constructor(private heroService: HeroService,
    private location: Location, private route: ActivatedRoute, private fb: FormBuilder){

  }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(): void{
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId == 'new') {
      this.isEditing = false
      this.hero = {name: ''} as Hero
    }else{
      this.isEditing = true
      const id = Number(paramId)
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
    }


  }

  goBack(): void{
    this.location.back();
  }

  create(): void{
    this.heroService.create(this.hero).subscribe((hero) => console.log(hero))
  }

  update(): void{
    this.heroService.updateHero(this.hero).subscribe((hero) => console.log(hero))
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }

}
