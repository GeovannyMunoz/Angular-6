import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { VerPokeComponent } from './components/ver-poke/ver-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonComponent,
    HomeComponent,
    VerPokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
