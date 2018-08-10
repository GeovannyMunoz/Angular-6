import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent} from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { VerPokeComponent} from './components/ver-poke/ver-poke.component';

const routes: Routes = [
  {path: 'pokemon/:id', component: PokemonComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ver/pokemon/:id', component: VerPokeComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
