import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

import { Hero } from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name']
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // usando o of na service ele ja faz o next e o complete por isso nos possibilita fazer a utilizacao de uma forma sucinta
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));


    // Para recuperar os valores e Tratar o erro se necessario Observable: mais detalhes (https://rxjs.dev/guide/observable).
    // this.heroService.getHeroes().subscribe({
    //   next(x) {
    //     console.log('got value ' + JSON.stringify(x, null, 2));
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });

    // Forma menos verbosa e mais simples que o JS proporciona.
    // this.heroService.getHeroes().subscribe(
    //   (value) => {
    //     console.log(value);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('foi');
    //   }
    // );

    // Forma menos verbosa e mais simples que o JS proporciona.
    // this.heroService.getHeroes().subscribe(
    //   (value) => console.log(value),
    //   (err) => console.log(err),
    //   () => console.log('foi')
    // );

    // const foo = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4); // happens asynchronously
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('before');
    // foo.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    // console.log('after');
  }
}
