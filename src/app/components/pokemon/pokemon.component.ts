import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../service/pokemon.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  id;
  pokeForm: FormGroup;

  constructor(private pokeService: PokemonService,
              private router: Router,
              private fbuilder: FormBuilder,
              private activeRoute: ActivatedRoute) {

    this.activeRoute.params.subscribe(
      route => {
        this.id = route['id'];
        if (this.id !== 'nuevo') {
          this.pokeService.getPokemonId(this.id)
            .subscribe(res => {
              this.pokeForm.setValue({
                nombre: res.nombre,
                descripcion: res.descripcion,
                tipo: res.tipo,
                numero: res.numero,
                imagen: res.imagen
              }) ;
              console.log(res);
            });
        } else {
          this.pokeForm = this.fbuilder.group({
              nombre: [''],
              descripcion: [''],
              tipo: [''],
              numero:  [],
              imagen: ['']
            }
          );
        }
      }
    );
  }

  ngOnInit() {
    this.pokeForm = this.fbuilder.group({
        nombre: [''],
        descripcion: [''],
        tipo: [''],
        numero:  [],
        imagen: ['']
      }
    );
  }

  guardarPokemon(form) {
    if (this.id === 'nuevo') {
      console.log(form);
      this.pokeService.addPokemon(form)
        .subscribe(res => {
          this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
        });
    } else {
      this.pokeService.updatePokemon(form, this.id)
        .subscribe(res => {
          this.router.navigate(['/home']);
        });
    }
  }

}
