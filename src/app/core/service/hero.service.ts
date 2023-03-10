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
        tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`))
      );

    // const hero = HEROES.find(hero => hero.id === id)!;
    // this.log(`fetched hero id=${id}`)
    // return of(hero)
  }


  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero).pipe(
      tap((hero) => this.log(`updated ${this.descAttributes(hero)}`))
    )

  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero)
    .pipe(tap((hero) => this.log(`create ${this.descAttributes(hero)}`))
    )

  }

  private descAttributes(hero: Hero): string{
    return `Hero id=${hero.id} and name=${hero.name}`
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

}
