import { Hero } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogHeroComponent } from '../../components/dialog-hero/dialog-hero.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  publishers = [

    {
      id: 'DC Comics',
      desc: ' DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: ' Marvel - Comics'
    }
  ]

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: 'assets/no-image.png'

  }


  constructor(private heroesService: HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (this.Router.url.includes('edit')) {

      this.ActivatedRoute.params.
        pipe(
          switchMap(({ id }) => this.heroesService.getHeroByID(id))
        ).


        subscribe(hero => this.hero = hero

        )
    }
  }

  save() {
    console.log(this.hero);

    // this.openSnackBar();

    if (this.hero.superhero.trim().length === 0)
      return;

    if (this.hero.id) {

      this.heroesService.updateHero(this.hero).subscribe(hero => {

        this.Router.navigate([`/heroes`, hero.id]);
        this.showSnackBar(`${this.hero.superhero} updated`);
      })

    }
    else {
      this.heroesService.addHero(this.hero).subscribe(hero => {

        this.Router.navigate([`/heroes`, hero.id]);
        this.showSnackBar(`${this.hero.superhero} created`);
      })
    }
  }

  delete() {

    this.openDialog();

  }



  showSnackBar(messege: string) {
    this._snackBar.open(messege, 'Dismiss', {
      duration: 2500,
      panelClass: 'succesful'

    });
  }


  openDialog() {



    const dialog = this.dialog.open(DialogHeroComponent, {
      width: '300px',
      height: '200px',
      // data: {...this.hero}, (check this, for what is it?)
      data: this.hero,

    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          console.log("this is the id", this.hero.id)
          this.heroesService.deleteHero(this.hero.id!)
            .subscribe(resp => {
              this.Router.navigate(['heroes']);
              console.log('id de hero borrando', this.hero.superhero);
              this.showSnackBar(`${this.hero.superhero} deleted`);
            });
        }

      }
    )
  }





}
