export interface Pokemon {
  [x: string]: any;
  id: number;
  name: string;
  image: string;
  backroundColor: string;
  textColor: string;
}

export interface PokemonDescription extends Pokemon {
  height: string;
  weight: string;
  type?: string[];
  stats?: {
    base_stat: number;
    effort: number;
    stat: { name: string };
  }[];
  types: { type: { name: string } }[];
}

export interface PokemonStats {
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  Speed: string;
}

