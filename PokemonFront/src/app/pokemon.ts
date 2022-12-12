import { Move } from "./move";
import { PokemonSprites } from "./pokemon-sprites";
import { SpeciesName } from "./species-name";
import { Stats } from "./stats";
import { Type } from "./type";

export interface Pokemon {
    id: number,
    name: string,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    moves: Move[],
    sprites: PokemonSprites,
    species: SpeciesName,
    stats: Stats[], 
    types: Type[]
}
