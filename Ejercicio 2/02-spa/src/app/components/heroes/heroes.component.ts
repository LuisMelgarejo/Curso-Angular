import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {


   }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(index: number) {
  this._router.navigate( ['/heroe', index] );
  }

}


