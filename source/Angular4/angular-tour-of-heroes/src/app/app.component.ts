import { HeroService } from './hero.service';
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService) {
    
   }
  title = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }
 
}
// export class Hero{
//   id: number;
//   name: string;
// }
