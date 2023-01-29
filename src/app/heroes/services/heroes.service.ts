import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL: string = environment.basURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`);
  }

  getHeroByID(id: string): Observable<Hero> {

       return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`);

  }

  getTips (termino: string):Observable<Hero[]> {

return this.http.get<Hero[]>(`${this.baseURL}/heroes?q=${termino}&_limit=6`);


  }

  addHero (hero: Hero): Observable<Hero>{

return this.http.post<Hero>(`${this.baseURL}/heroes`,hero);

  }

 updateHero (hero: Hero): Observable<Hero>{

    return this.http.put<Hero>(`${this.baseURL}/heroes/${hero.id}`,hero);
    
      }
 deleteHero (id: string): Observable<any>{

    return this.http.delete<any>(`${this.baseURL}/heroes/${id}`);
    
      }
}




