import { PokemonSprites } from "./pokemon-sprites"

export interface TrainerPokemon {
    pokemon_id: number,
    move_id: number,
    pokemon_name: string,
    move_name: string,
    pokemon_pics: PokemonSprites,
    height: number,
    weight: number,
    type: string[],
    hp: number

    constructor() : void;
}
