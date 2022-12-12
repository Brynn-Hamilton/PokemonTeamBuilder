import { FlavorText } from "./flavor-text";

export interface PokemonSpecies {
    id: number,
    name: string,
    is_legendary: boolean,
    is_mythical: boolean,
    flavor_text_entries: FlavorText[]
}
