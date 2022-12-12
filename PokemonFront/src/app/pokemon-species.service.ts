import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonSpecies } from './pokemon-species';


@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  getSpecies(cb: any, pokemon_id: number){
    this.http.get<PokemonSpecies>(`https://localhost:7225/pokemon-species/${pokemon_id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
