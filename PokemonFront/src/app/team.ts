import { TrainerPokemon } from "./trainer-pokemon";

export interface Team {
    team_id: number,
    team_name: string,
    trainer_id: number,
    trainer_name: string,
    pokemon: TrainerPokemon[]
}
