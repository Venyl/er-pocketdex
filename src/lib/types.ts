export type PokemonType =
	| 'Normal'
	| 'Fighting'
	| 'Fire'
	| 'Ice'
	| 'Electric'
	| 'Bug'
	| 'Flying'
	| 'Steel'
	| 'Grass'
	| 'Ground'
	| 'Poison'
	| 'Dark'
	| 'Water'
	| 'Psychic'
	| 'Rock'
	| 'Dragon'
	| 'Ghost'
	| 'Fairy'
	| 'Mystery'
	| 'None'
	| 'Stellar';

export type Ability = {
	name: string;
	description: string;
};

export type Pokemon = {
	id: string;
	name: string;
	type: [PokemonType, PokemonType, PokemonType];
	conditionalThirdType: boolean;
	isMega: boolean;
	hasMega: boolean;
	isFinalEvo: boolean;
	hp: number;
	atk: number;
	def: number;
	spa: number;
	spd: number;
	spe: number;
	innates: [number, number, number];
	abilities: [number, number, number];
};
