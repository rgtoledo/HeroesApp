import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
 
  hero!: Hero;


  constructor(private activatedRoute: ActivatedRoute,
    private heroService: HeroesService,
    private router: Router) { }


  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroService.getHeroByID(id))
      )

      .subscribe((hero) => this.hero = hero);
  }

  back(){
    this.router.navigate([`/heroes/list`]);
  }

}
