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
  isEditing = false

  form = this.fb.group({
    id: [{value: 0, disabled: true}],
    name: ['', Validators.required]
  })
  constructor(private heroService: HeroService,
    private location: Location, private route: ActivatedRoute, private fb: FormBuilder){

  }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(): void{
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId != 'new') {
      this.isEditing = true
      const id = Number(paramId)
      this.heroService.getHero(id).subscribe((hero) => {
        this.hero = hero
        this.form.controls['id'].setValue(hero.id);
        this.form.controls['name'].setValue(hero.name);
      })
    }


  }

  goBack(): void{
    this.location.back();
  }

  create(): void{
    const {valid, value} = this.form

    if (valid) {
      const hero: Hero = {
        name: value.name
      } as Hero
      this.heroService.create(hero).subscribe((hero) => console.log(hero))
    }
  }

  update(): void{
    const {valid, value} = this.form

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name
      } as Hero
      this.heroService.updateHero(hero).subscribe((hero) => console.log(hero))
    }
  }

}
