export interface Monster {
    id:          number;
    species:     string;
    elements:    MonsterElement[];
    name:        string;
    description: string;
    resistances: Resistance[];
    weaknesses:  Weakness[];
}

export enum MonsterElement {
  Blast = "blast",
  Dragon = "dragon",
  Fire = "fire",
  Ice = "ice",
  Paralysis = "paralysis",
  Poison = "poison",
  Sleep = "sleep",
  Stun = "stun",
  Thunder = "thunder",
  Water = "water",
}

export interface Resistance {
  element:   MonsterElement;
  condition: null | string;
}


export interface Weakness {
  element:   Element;
  stars:     number;
  condition: null | string;
}
