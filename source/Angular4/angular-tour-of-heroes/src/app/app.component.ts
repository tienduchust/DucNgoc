import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  heroes =['Windstorm','Bombasto','Magneta','Tornado'];
  myHeroes= this.heroes[0];
  hero: Hero={
    id:1,
    name: 'windStorm'
  };
public heroe = HEROES;
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
export class Hero{
  id: number;
  name: string;
}


const HEROES: Hero[]=[{ id: 11, name: 'Mr. Nice' },
{ id: 12, name: 'Narco' },
{ id: 13, name: 'Bombasto' },
{ id: 14, name: 'Celeritas' },
{ id: 15, name: 'Magneta' },
{ id: 16, name: 'RubberMan' },
{ id: 17, name: 'Dynama' },
{ id: 18, name: 'Dr IQ' },
{ id: 19, name: 'Magma' },
{ id: 20, name: 'Tornado' }];