import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mockHeros';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL = 'http://localhost:8087/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return of (HEROES);
    return this.http.get<Hero[]>(this.heroesURL);
  }
}
