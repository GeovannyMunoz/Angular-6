import { Component, OnInit } from '@angular/core';
import { PokemonService} from '../../service/pokemon.service';
import {Pokemon} from '../../interfaces/pokemonInterface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ver-poke',
  templateUrl: './ver-poke.component.html',
  styleUrls: ['./ver-poke.component.css']
})
export class VerPokeComponent implements OnInit {
  id;
  pokemon: Pokemon = {
    nombre: '',
    descripcion: '',
    tipo: '',
    numero: null,
    imagen: ''
  }


  constructor(private activeRoute: ActivatedRoute, private pokeService: PokemonService, private router: Router) {
    this.activeRoute.params.subscribe(
      route => {
        this.id = route['id'];
        this.pokeService.getPokemonId(this.id)
          .subscribe(res => {
            this.pokemon = res;
            //console.log(this.pokemon.nombre);
            }
          );
        });
  }

  ngOnInit() {
  }

  eliminar(id) {
    this.pokeService.deletePokemon(id)
      .subscribe(
        resp => {
          this.router.navigate(['/home']);
        }
      );
  }

}
