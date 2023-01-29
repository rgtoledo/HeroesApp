import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutinModule } from './heroes-routin.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImgHeroPipe } from './pipes/img-hero.pipe';
import { FormsModule } from '@angular/forms';
import { DialogHeroComponent } from './components/dialog-hero/dialog-hero.component';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    ListComponent,
    HomeComponent,
    HeroeTarjetaComponent,
    ImgHeroPipe,
    DialogHeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutinModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,


  ]
})
export class HeroesModule { }
