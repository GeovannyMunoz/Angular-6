import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../service/pokemon.service';
import {Pokemon} from '../../interfaces/pokemonInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemon [] = [];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.pokeService.getPokemons()
      .subscribe(res => {
        console.log(res);
        this.pokemons = res;
      }, err => {
        console.log(err);
      });
  }


}
