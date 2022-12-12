import { GVersion } from "./gversion";
import { Language } from "./language";

export interface FlavorText {
    flavor_text: string,
    language: Language,
    version: GVersion
}
