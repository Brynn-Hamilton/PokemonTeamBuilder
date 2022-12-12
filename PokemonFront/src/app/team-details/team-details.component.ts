import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';
import { Team } from '../team';
import { TrainerPokemon } from '../trainer-pokemon';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team: Team = {
    team_id: 0, team_name: '', trainer_id: 0,
    trainer_name: '', pokemon: []
  }

  editTeam: Team = {
    team_id: 0,
    team_name: '',
    trainer_id: 0,
    trainer_name: '',
    pokemon: []
  };

  trainerList: Trainer[] = []; 
  pokemonList: Pokemon[] = [];

  firstPokemon: Pokemon|undefined;
  secondPokemon: Pokemon|undefined;
  thirdPokemon: Pokemon|undefined;
  fourthPokemon: Pokemon|undefined;
  fifthPokemon: Pokemon|undefined;
  sixthPokemon: Pokemon|undefined;

  @Output() update:EventEmitter<Team> = new EventEmitter<Team>();
  
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();

  constructor(private TrainerSrv: TrainerService, private PokemonSrv: PokemonService) { 
    TrainerSrv.getAllTrainers(
      (result: Trainer[]) => {
        this.trainerList = result;
      }
    );

    PokemonSrv.getAllPokemon(
      (result: Pokemon[]) =>{
        this.pokemonList = result;
        this.assignPokemon();
      }
    );
  }

  assignPokemon(): void {
    this.firstPokemon = this.team.pokemon[0] ? this.getPokemon(0) : undefined;
    this.secondPokemon = this.team.pokemon[1] ? this.getPokemon(1) : undefined;
    this.thirdPokemon = this.team.pokemon[2] ? this.getPokemon(2) : undefined;
    this.fourthPokemon = this.team.pokemon[3] ? this.getPokemon(3) : undefined;
    this.fifthPokemon = this.team.pokemon[4] ? this.getPokemon(4) : undefined;
    this.sixthPokemon = this.team.pokemon[5] ? this.getPokemon(5) : undefined;
  }

  getPokemon(id: number): Pokemon|undefined {
    return this.pokemonList.find(x => x.id == this.team.pokemon[id].pokemon_id);
  }
  
  ngOnInit(): void {
  }

  updateIt(){
    this.team.pokemon = [];

    if (this.firstPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.firstPokemon?.id ?? 0 });
    }
    if (this.secondPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.secondPokemon?.id ?? 0 });
    }
    if (this.thirdPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.thirdPokemon?.id ?? 0 });
    }
    if (this.fourthPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.fourthPokemon?.id ?? 0 });
    }
    if (this.fifthPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.fifthPokemon?.id ?? 0 });
    }
    if (this.sixthPokemon) {
      this.team.pokemon.push(<TrainerPokemon>{ pokemon_id: this.sixthPokemon?.id ?? 0 });
    }
    this.update.emit(this.team);
   
  }

  deleteIt(){
    this.delete.emit(this.team.team_id);
  }
}
