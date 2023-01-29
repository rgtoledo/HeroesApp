import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imgHero',
  // pure: false
})
export class ImgHeroPipe implements PipeTransform {

  transform(hero: Hero): string {

    if (!hero.id)
      return 'assets/no-image.png'
if(hero.id && hero.alt_img)
return hero.alt_img;

    return `assets/heroes/${hero.id}.jpg`;
  }

}
