import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Hero } from '../heroes/heroes.model';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){

  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    //return throwError(new Error('Errouu'))
    return heroes;
  }
}
