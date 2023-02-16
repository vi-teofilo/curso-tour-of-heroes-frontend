import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Hero } from '../models/heroes.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,

  ) {}
  // GET /heroes
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));

    // const heroes = of(HEROES)
    // this.log('fetched heroes')
    //return throwError(new Error('Errouu'))
    // return heroes;
  }

  // GET /heroes/id
  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
      );

    // const hero = HEROES.find(hero => hero.id === id)!;
    // this.log(`fetched hero id=${id}`)
    // return of(hero)
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
