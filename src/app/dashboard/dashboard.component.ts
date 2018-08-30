import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Attributs
  heroes : Hero[];


  // Initialiseurs
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    // Affiche les 4 derniers héros
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(heroes.length-4, heroes.length));

    // Affiche les 4 derniers héros le dernier en premier
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.reverse().slice(0, 4));
  }

}
