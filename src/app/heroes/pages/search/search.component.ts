import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  termino: string = '';
  // filteredOptions!: Observable<string[]>;
  heroes: Hero[] = []
  heroSelected!: Hero;
  terminoFound: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {


  }

  searching() {
    this.heroesService.getTips(this.termino.trim()).subscribe(

      (heroes) => {
        this.heroes = heroes;
        this.terminoFound = ((heroes.length > 0) ? true : false)



      });

  }

  optionSelected(event: MatAutocompleteSelectedEvent) {

    if (event.option.value !== "") {
      console.log('este es el value --->',event.option.value);
      const hero: Hero = event.option.value;
      console.log(hero);
      this.termino = hero.superhero;

      this.heroesService.getHeroByID(hero.id!).subscribe(hero => this.heroSelected = hero)
      return
    }
  }
}
