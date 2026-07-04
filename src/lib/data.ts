import type { Ability, Pokemon, PokemonType } from './types';
import { pokemonData } from './gameData';

function formatAbility(a: { name: string; desc: string; id: number }): Ability {
	return { name: a.name, description: a.desc };
}

function getThirdType(
	abilities: number[],
	innates: number[]
): { thirdType: PokemonType; conditionalThirdType: boolean } {
	let conditionalThirdType = false;
	let thirdType: PokemonType = 'None';

	const map: Record<number, PokemonType> = {
		163: 'Fire',
		908: 'Fire',
		294: 'Water',
		713: 'Water',
		835: 'Water',
		990: 'Water',
		298: 'Ground',
		309: 'Ice',
		310: 'Dragon',
		312: 'Dragon',
		841: 'Dragon',
		851: 'Dragon',
		918: 'Dragon',
		316: 'Steel',
		792: 'Steel',
		970: 'Steel',
		324: 'Ghost',
		822: 'Ghost',
		944: 'Ghost',
		452: 'Fairy',
		843: 'Fairy',
		164: 'Electric',
		847: 'Electric',
		915: 'Fighting',
		920: 'Rock',
		1031: 'Rock',
		715: 'Psychic'
	};

	for (const id of abilities) {
		const newType = map[id];
		if (newType) {
			conditionalThirdType = abilities[0] !== abilities[1];
			thirdType = newType;
			return { thirdType, conditionalThirdType };
		}
	}

	for (const id of innates) {
		const newType = map[id];
		if (newType) {
			thirdType = newType;
			return { thirdType, conditionalThirdType };
		}
	}

	return { thirdType, conditionalThirdType };
}

export const badPokemonList: Pokemon[] = [];

for (const pokemon of pokemonData.species) {
	if (pokemon.stats.base[0] === 0) continue;

	const id = pokemon.NAME.slice(8);

	const innates = pokemon.stats.inns as [number, number, number];
	const abilities = pokemon.stats.abis as [number, number, number];

	const isMega = id.includes('_MEGA');
	const hasMega = pokemon.evolutions.some(
		(evo) => evo.rs.startsWith('ITEM_') && evo.rs.slice(5).includes('ITE')
	);
	const isFinalEvo = isMega ? false : pokemon.evolutions.length === 0 || hasMega;

	const firstType = pokemonData.typeT[pokemon.stats.types[0]] as PokemonType;
	const secondType = pokemonData.typeT[pokemon.stats.types[1]] as PokemonType;
	const { thirdType, conditionalThirdType } = getThirdType(abilities, innates);

	const newPokemon: Pokemon = {
		id,
		name: pokemon.name,
		type: [
			firstType,
			secondType === firstType ? 'None' : secondType,
			[firstType, secondType].includes(thirdType) ? 'None' : thirdType
		],
		conditionalThirdType,
		hp: pokemon.stats.base[0],
		atk: pokemon.stats.base[1],
		def: pokemon.stats.base[2],
		spa: pokemon.stats.base[3],
		spd: pokemon.stats.base[4],
		spe: pokemon.stats.base[5],
		innates,
		abilities,
		isMega,
		hasMega,
		isFinalEvo
	};
	badPokemonList.push(newPokemon);
}
