import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Pokemon} from '../interfaces/pokemonInterface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private pokemonUrl = 'http://port-1337.pokemon-georoskax100pre399448.codeanyapp.com/pokemon';

  constructor(private http: HttpClient) { }

  //OBTENER TODOS LOS DATOS
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe();
  }

  //AÑADIR NUEVO
  addPokemon(pokemon): Observable<any> {
    return this.http.post(this.pokemonUrl, pokemon, httpOptions)
      .pipe();
  }

  //OBTENER DATO POR ID
  getPokemonId(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
    );
  }

  //EDITAR DATO
  updatePokemon (pokemon: Pokemon, id: number): Observable<any> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.put(url, pokemon, httpOptions).pipe();
  }

  //ELIMINAR DATO
  deletePokemon (id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
    );
  }
}
