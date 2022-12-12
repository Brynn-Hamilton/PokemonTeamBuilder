import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Move } from "../move";
import { PokemonSprites } from "../pokemon-sprites";
import { SpeciesName } from "../species-name";
import { Stats } from "../stats";
import { Type } from "../type";
import { PokemonSpeciesService } from '../pokemon-species.service';
import { PokemonSpecies } from '../pokemon-species';
import { FlavorText } from '../flavor-text';
import { Language } from '../language';
import { GVersion } from '../gversion';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  showdetails: boolean = false;
  
  movelist: Move[] = [];
  statlist: Stats[] = [];
  typelist: Type[] = [];
  sprites: PokemonSprites = {front_default: "", front_shiny: "", front_female: "", front_shiny_female: ""};
  species: SpeciesName = {name: "", url: ""}
  language: Language = {
    id:0, name: "en"
  }
  version: GVersion = {
    id:0, name: "red"
  }
  
  flavorlist: FlavorText[] = [{
    flavor_text : "",
    language : this.language,
    version : this.version
  }]

  pokemon: Pokemon = {
    id: 0,
      name: "",
      height: 0,
      is_default: true,
      order: 0,
      weight: 0,
      moves: this.movelist,
      sprites: this.sprites,
      species: this.species,
      stats: this.statlist, 
      types: this.typelist
   }

   pokeSpecies: PokemonSpecies = {
      id: 0,
      name: "",
      is_legendary: false,
      is_mythical: false,
      flavor_text_entries: this.flavorlist
   };

  

  pokemonList: Pokemon[] = [];
  closeResult: string = '';

  constructor(private PokemonSrv: PokemonService, private SpeciesSrv: PokemonSpeciesService) { 
    this.refresh();
  }

  ngOnInit(): void {
  }

  refresh(){
    this.PokemonSrv.getAllPokemon(
      (result: Pokemon[]) => {
        this.pokemonList = result;
      }
    )
  };


 showPoke(pokemon_id: number) {
    this.PokemonSrv.getOnePokemon (
      (result: Pokemon) => {
        this.pokemon = result;
      },
      pokemon_id
    )
    this.showdetails = true;
  };

  previous(pokemon_id: number) {
    this.PokemonSrv.getOnePokemon (
      (result: Pokemon) => {
        this.pokemon = result;
      },
      pokemon_id -1
    )
  };

  previousText(pokemon_id: number) {
    this.SpeciesSrv.getSpecies (
      (result: PokemonSpecies) => {
        this.pokeSpecies = result;
      },
      pokemon_id -1
    )
  };

  getSpecies(pokemon_id: number) {
    this.SpeciesSrv.getSpecies (
      (result: PokemonSpecies) => {
        this.pokeSpecies = result;
      },
      pokemon_id
    )
  };

  next(pokemon_id: number) {
    this.PokemonSrv.getOnePokemon (
      (result: Pokemon) => {
        this.pokemon = result;
      },
      pokemon_id +1
    )
  };

  nextText(pokemon_id: number) {
    this.SpeciesSrv.getSpecies (
      (result: PokemonSpecies) => {
        this.pokeSpecies = result;
      },
      pokemon_id +1
    )
  };

  cancel() {
    this.showdetails = false;
  };

  getTypes(pokemon: Pokemon) {
    return 
  };
}