import { Component, Input } from '@angular/core';
import { Hero } from './models/Hero';
import { HeroApiService } from './services/hero-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Hero site!';
  heroes?: Hero[];
  filterRole?: string;

  constructor(private heroService: HeroApiService) {
    this.heroes = [];
    //this.loadStaticHeroes();
    //this.loadApiHeroes();
    this.loadServiceHeroes();
  }

  loadStaticHeroes(): void {
    this.heroes?.push({
      name: 'Superman',
      imageurl: 'assets/superman.jpg',
      type: 'Superhero'
    });

    this.heroes?.push({
      name: 'Superman',
      imageurl: 'assets/superman.jpg',
      type: 'Superhero'
    });
  }

  loadHeroesByRole(): void{
    //Make sure "role" is tank|support|damage
    //?role=tank
    console.log("filter click with role: ", this.filterRole);
    this.heroService.getHeroesByRole(this.filterRole)
    .subscribe(data => {
      this.heroes = [];
      this.loadHeroes(data as any);
    })
  }

  loadServiceHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(data => {
        this.loadHeroes(data as any);
      });
  }

  loadApiHeroes(): void {
    const url = 'https://overfast-api.tekrop.fr/heroes';
    fetch(url)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        this.loadHeroes(data);
      });
  }

  loadHeroes(data: any): void {
    for(let apiHero of data){
      this.heroes?.push({
        name: apiHero.name,
        imageurl: apiHero.portrait,
        type: apiHero.role
      });
    }
  }

}