import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getAllPokemon(cb: any){
    this.http.get<Pokemon[]>('https://localhost:7225/pokemon').subscribe(cb);
  }

  getOnePokemon(cb: any, pokemon_id: number){
    this.http.get<Pokemon>(`https://localhost:7225/pokemon/${pokemon_id}`).subscribe(cb)
  }
  constructor(private http: HttpClient) { }
}
