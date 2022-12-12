import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs';
import { Move } from '../move';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Trainer } from '../trainer';
import { TrainerPokemon } from '../trainer-pokemon';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  newTeam: Team = {
    team_id: 0, team_name: '', trainer_id: 0,
    trainer_name: '', pokemon: []
  }

  trainerList: Trainer[] = [];
  pokemonList: Pokemon[] = [];

  firstPokemon: Pokemon | undefined;
  secondPokemon: Pokemon | undefined;
  thirdPokemon: Pokemon | undefined;
  fourthPokemon: Pokemon | undefined;
  fifthPokemon: Pokemon | undefined;
  sixthPokemon: Pokemon | undefined;

  @Output() save: EventEmitter<Team> = new EventEmitter<Team>();

  constructor(private TrainerSrv: TrainerService, private PokemonSrv: PokemonService, private TeamSrv: TeamService) {
    TrainerSrv.getAllTrainers(
      (result: Trainer[]) => {
        this.trainerList = result;
      }
    );

    PokemonSrv.getAllPokemon(
      (result: Pokemon[]) => {
        this.pokemonList = result;
      }
    );
  }

  ngOnInit(): void {
  }

  saveTeam(team: Team) {
    this.TeamSrv.addTeam(
      (result: Team) => { },
      team
    );
  }

  saveIt() {
    if (this.firstPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.firstPokemon?.id ?? 0 });
    }
    if (this.secondPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.secondPokemon?.id ?? 0 });
    }
    if (this.thirdPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.thirdPokemon?.id ?? 0 });
    }
    if (this.fourthPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.fourthPokemon?.id ?? 0 });
    }
    if (this.fifthPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.fifthPokemon?.id ?? 0 });
    }
    if (this.sixthPokemon) {
      this.newTeam.pokemon.push(<TrainerPokemon>{ pokemon_id: this.sixthPokemon?.id ?? 0 });
    }
    this.saveTeam(this.newTeam);
  }

}
