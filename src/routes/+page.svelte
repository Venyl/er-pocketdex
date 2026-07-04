<script lang="ts">
	import { abilityList } from "$lib/abilityData";
	import { pokemonList } from "$lib/pokemonData";
	import type { Pokemon, PokemonType } from "$lib/types";

	const sprites = import.meta.glob("$lib/assets/sprites/*.png", {
		eager: true,
		query: "?url",
		import: "default"
	});
	let topPagination: HTMLDivElement | undefined = $state();

	const colors: Record<PokemonType, string> = {
		Normal: "#aaaa99",
		Fire: "#ff4422",
		Water: "#3399ff",
		Electric: "#ffcc33",
		Grass: "#77cc55",
		Ice: "#66ccff",
		Fighting: "#bb5544",
		Poison: "#aa5599",
		Ground: "#ddbb55",
		Flying: "#8899ff",
		Psychic: "#ff5599",
		Bug: "#aabb22",
		Rock: "#bbaa66",
		Ghost: "#6666bb",
		Dragon: "#7766ee",
		Dark: "#775544",
		Steel: "#aaaabb",
		Fairy: "#ee99ee",
		Mystery: "oklch(0.99 0 0)",
		None: "oklch(0.99 0 0)",
		Stellar: "oklch(0.99 0 0)"
	};
	const stats = {
		hp: "HP",
		atk: "Atk",
		def: "Def",
		spa: "SpA",
		spd: "SpD",
		spe: "Spe"
	};

	let favorites: string[] = $state([]);
	function toggleFavorite(pokemon: Pokemon) {
		const idx = favorites.findIndex((p) => p === pokemon.id);
		if (idx !== -1) {
			favorites.splice(idx, 1);
			return;
		}
		favorites.push(pokemon.id);
		localStorage.setItem("favorites", favorites.toString());
	}

	let caught: string[] = $state([]);
	function toggleCaught(pokemon: Pokemon) {
		const idx = caught.findIndex((p) => p === pokemon.id);
		if (idx !== -1) {
			caught.splice(idx, 1);
			return;
		}
		caught.push(pokemon.id);
		localStorage.setItem("caught", caught.toString());
	}

	$effect(() => {
		const savedFavorites = localStorage.getItem("favorites");
		if (savedFavorites) {
			favorites = savedFavorites.split(",");
		}

		const savedCaught = localStorage.getItem("caught");
		if (savedCaught) {
			caught = savedCaught.split(",");
		}
	});

	let showPrematureStage = $state(true);
	let showFinalStage = $state(true);
	let showMega = $state(true);
	let showCaught = $state(true);
	let showUncaught = $state(true);
	let showFavorite = $state(true);
	let showNonFavorite = $state(true);
	let nameQuery = $state("");
	let typeQuery = $state("");
	let abilityNameQuery = $state("");
	let abilityDescriptionQuery = $state("");

	const filteredPokemon = $derived(
		pokemonList.filter((pokemon) => {
			if (!showPrematureStage && !pokemon.isFinalEvo && !pokemon.isMega) return false;
			if (!showFinalStage && pokemon.isFinalEvo) return false;
			if (!showMega && pokemon.isMega) return false;
			if (!showCaught && caught.includes(pokemon.id)) return false;
			if (!showUncaught && !caught.includes(pokemon.id)) return false;
			if (!showFavorite && favorites.includes(pokemon.id)) return false;
			if (!showNonFavorite && !favorites.includes(pokemon.id)) return false;
			if (nameQuery && !pokemon.name.toLowerCase().includes(nameQuery.toLowerCase())) return false;
			if (typeQuery) {
				const queriedTypes = typeQuery.toLowerCase().split(" ") as PokemonType[];
				if (!queriedTypes.every((t) => pokemon.type.toString().toLowerCase().includes(t)))
					return false;
			}
			if (abilityNameQuery || abilityDescriptionQuery) {
				const nameQuery = abilityNameQuery.toLowerCase();
				const descQuery = abilityDescriptionQuery.toLowerCase();

				let abilityNameMatches = 0;
				let abilityDescMatches = 0;

				for (const innateIdx of pokemon.innates) {
					const innate = abilityList[innateIdx];
					abilityNameMatches += Number(innate.name.toLowerCase().includes(nameQuery));
					abilityDescMatches += Number(innate.description.toLowerCase().includes(descQuery));
				}

				for (const abilityIdx of pokemon.abilities) {
					const ability = abilityList[abilityIdx];
					abilityNameMatches += Number(ability.name.toLowerCase().includes(nameQuery));
					abilityDescMatches += Number(ability.description.toLowerCase().includes(descQuery));
				}
				if (abilityNameQuery && abilityNameMatches === 0) return false;
				if (abilityDescriptionQuery && abilityDescMatches === 0) return false;
			}
			return true;
		})
	);

	let showingFrom = $state(0);
	let showingStep = $state(30);
	let showingTo = $derived(Math.min(showingFrom + showingStep, filteredPokemon.length));

	$effect(() => {
		void filteredPokemon;
		showingFrom = 0;
	});
</script>

<div class="container filters stack">
	<div class="checkboxes cluster">
		<label>
			<input type="checkbox" bind:checked={showPrematureStage} />
			Premature
		</label>
		<label>
			<input type="checkbox" bind:checked={showFinalStage} />
			Final stage
		</label>
		<label>
			<input type="checkbox" bind:checked={showMega} />
			Mega
		</label>
		<label>
			<input type="checkbox" bind:checked={showCaught} />
			Caught
		</label>
		<label>
			<input type="checkbox" bind:checked={showUncaught} />
			Uncaught
		</label>
		<label>
			<input type="checkbox" bind:checked={showFavorite} />
			Favorite
		</label>
		<label>
			<input type="checkbox" bind:checked={showNonFavorite} />
			Non-favorite
		</label>
	</div>

	<div class="ability-filters cluster">
		<label>
			Ability name
			<input type="text" bind:value={abilityNameQuery} placeholder="drought" />
		</label>

		<label>
			Ability description
			<input type="text" bind:value={abilityDescriptionQuery} placeholder="summons sun on entry" />
		</label>
	</div>

	<div class="pokemon-filters cluster">
		<label>
			Pokémon
			<input type="text" bind:value={nameQuery} placeholder="charizard" />
		</label>
		<label>
			Type
			<input type="text" bind:value={typeQuery} placeholder="fire flying" />
		</label>
	</div>
</div>

<div class="pagination-controls container cluster" bind:this={topPagination}>
	<button
		class="btn-ghost"
		title="Previous page"
		disabled={showingFrom === 0}
		onclick={() => (showingFrom -= showingStep)}
	>
		<span class="icon-arrow-left"></span>
	</button>
	<div class="stack">
		<span class="range">{showingFrom + 1} - {showingTo}</span>
		<span class="amount">Out of {filteredPokemon.length}</span>
	</div>
	<button
		class="btn-ghost"
		title="Next page"
		disabled={showingTo >= filteredPokemon.length}
		onclick={() => (showingFrom += showingStep)}
	>
		<span class="icon-arrow-right"></span>
	</button>
</div>
<div class="grid-flow container">
	{#each filteredPokemon.slice(showingFrom, showingTo) as pokemon (pokemon.id)}
		<div class="pokemon">
			<div class="cluster header">
				<h2>{pokemon.name}</h2>
				<ul class="types cluster" role="list">
					{const types =
						pokemon.type[0] === pokemon.type[1] ? [pokemon.type[0], pokemon.type[2]] : pokemon.type}
					{#each types as type, i (i)}
						{#if type !== "None"}
							{#if i === 2 && pokemon.conditionalThirdType}
								{const id = crypto.randomUUID()}
								<li class="type-wrapper">
									<button
										class="type"
										style:--color={colors[type]}
										interestfor={id}
										commandfor={id}
										command="toggle-popover"
									>
										{type}
									</button>
									<span class="tooltip" {id} popover="hint"
										>This type depends on a chosen ability.</span
									>
								</li>
							{:else}
								<li class="type" style:--color={colors[type]}>
									{type}
								</li>
							{/if}
						{/if}
					{/each}
				</ul>
			</div>

			<div class="cluster">
				<div class="stack">
					<div class="buttons cluster">
						{const isCaught = $derived(caught.includes(pokemon.id))}
						<button
							class="btn-ghost btn-no-border"
							title="Caught"
							onclick={() => toggleCaught(pokemon)}
							><span class={["icon-pokeball", isCaught && "is-caught icon-solid-pokeball"]}></span>
						</button>
						{const isFavorite = $derived(favorites.includes(pokemon.id))}
						<button
							class="btn-ghost btn-no-border"
							title="Favorite"
							onclick={() => toggleFavorite(pokemon)}
							><span class={["icon-star", isFavorite && "is-favorite icon-solid-star"]}
							></span></button
						>
					</div>
					<img
						src={sprites[`/src/lib/assets/sprites/${pokemon.id}.png`]}
						alt={pokemon.name}
						loading="lazy"
					/>
				</div>
				<div class="stats stack">
					{#each Object.entries(stats) as [statKey, statName] (statKey)}
						{const stat = pokemon[statKey as keyof typeof stats]}
						{const hue = Math.min(200, Math.floor(stat / 20) * 20)}
						<div class="stat-wrapper" style:--hue="{hue}deg">
							<span class="stat-name">{statName}</span>
							<span class="stat-value">{stat}</span>
							<span class="stat-meter" style:--percentage="{100 - (stat / 255) * 100}%"></span>
						</div>
					{/each}
				</div>
			</div>

			{#snippet abilitySpan(abilityId: number)}
				{const ability = abilityList[abilityId]}
				{const id = crypto.randomUUID()}
				<div>
					<button interestfor={id} commandfor={id} command="toggle-popover">{ability.name}</button>
					<span class="tooltip" {id} popover="hint">{ability.description}</span>
				</div>
			{/snippet}

			<h3>Innates</h3>
			<div class="innates grid-flow">
				{const innates =
					pokemon.innates[1] === pokemon.innates[2] ? [pokemon.innates[0]] : pokemon.innates}

				{#if innates.length && innates[0] !== 0}
					{#each innates as innate, i (i)}
						{#if innate !== 0}
							{@render abilitySpan(innate)}
						{/if}
					{/each}
				{:else}
					<div>None</div>
				{/if}
			</div>

			<h3>Abilities</h3>
			<div class="abilities grid-flow">
				{const abilities =
					pokemon.abilities[1] === pokemon.abilities[2]
						? [pokemon.abilities[0]]
						: pokemon.abilities}

				{#if abilities.length && abilities[0] !== 0}
					{#each abilities as ability, i (i)}
						{#if ability !== 0}
							{@render abilitySpan(ability)}
						{/if}
					{/each}
				{:else}
					<div>None</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
<div class="pagination-controls container cluster">
	<button
		class="btn-ghost"
		title="Previous page"
		disabled={showingFrom === 0}
		onclick={() => {
			showingFrom -= showingStep;
			topPagination?.scrollIntoView();
		}}
	>
		<span class="icon-arrow-left"></span>
	</button>
	<div class="stack">
		<span class="range">{showingFrom + 1} - {showingTo}</span>
		<span class="amount">Out of {filteredPokemon.length}</span>
	</div>
	<button
		class="btn-ghost"
		title="Next page"
		disabled={showingTo >= filteredPokemon.length}
		onclick={() => {
			showingFrom += showingStep;
			topPagination?.scrollIntoView();
		}}
	>
		<span class="icon-arrow-right"></span>
	</button>
</div>

<style>
	.filters {
		.checkboxes {
			justify-content: center;
			--cluster-gap: 1rem;

			label {
				cursor: pointer;
				min-width: max-content;
				max-width: 7rem;
				flex: 1 1 0;
				display: flex;
				gap: 0.5rem;
				justify-content: center;
				align-items: center;
				padding: 0.25rem 1rem;
				background-color: var(--clr-neutral-5);
				border: 1px solid var(--clr-neutral-6);
				border-radius: 0.5rem;
				user-select: none;

				&:has(:not(:checked)) {
					opacity: 0.8;
				}
			}
		}

		.ability-filters,
		.pokemon-filters {
			display: flex;
			flex-wrap: wrap;
			margin-inline: auto;
			width: 100%;
			max-width: 100ch;

			label {
				min-width: 20ch;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
			}

			input {
				background-color: var(--clr-neutral-4);
				border-radius: 0.5rem;
				padding: 0.375rem 0.625rem;

				&:focus-visible {
					outline: 1px solid var(--clr-neutral-7);
				}
			}
		}
	}

	.pagination-controls {
		--cluster-gap: 2rem;
		margin-block: 2rem;
		justify-content: center;
		font-size: 1.5rem;
		scroll-margin-top: 2rem;

		> .stack {
			min-width: 8ch;
			--stack-gap: 0.125rem;
			justify-content: center;
			align-items: center;
		}

		.range {
			font-size: 1.125rem;
			color: var(--clr-neutral-12);
		}

		.amount {
			font-size: 0.875rem;
			color: var(--clr-neutral-10);
		}
	}

	.grid-flow.container {
		--min-col-width: 30rem;
		margin-block: 2rem;
	}

	.pokemon {
		margin-inline: auto;
		width: 100%;
		max-width: 50rem;
		border: 1px solid var(--clr-neutral-5);
		border-radius: 0.5em;
		padding: 1rem;
		background-color: var(--clr-neutral-4);

		.header {
			justify-content: space-between;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid var(--clr-neutral-5);
			margin-bottom: 0.5rem;
		}

		h2 {
			text-align: center;
			font-size: 1.5rem;
			font-weight: 700;
		}

		.types.cluster {
			--cluster-gap: 0.5rem;
		}

		.type {
			border-radius: 0.5em;
			background-color: color-mix(in oklch, var(--color) 90%, black);
			color: color-mix(in oklch, var(--color) 10%, white);
			text-shadow: 1px 1px 2px #000000c0;
			padding: 0.125rem;
			width: 10ch;
			text-align: center;
			font-size: 0.875rem;
		}

		.type-wrapper {
			anchor-scope: --type;
		}

		.type:has(+ .tooltip) {
			cursor: pointer;
			anchor-name: --type;

			&::after {
				content: "*";
			}
		}

		.type + .tooltip {
			inset-inline: -3rem;
			text-align: center;
			position-anchor: --type;
			background-color: color-mix(var(--clr-neutral-6) 95%, transparent);
			border: 1px solid color-mix(var(--clr-neutral-7) 95%, transparent);
		}

		.buttons {
			justify-content: center;
			font-size: 1.5rem;
		}

		.is-caught {
			color: oklch(0.5 0.3 10);
		}

		.is-favorite {
			color: oklch(0.8 0.5 100);
		}

		img {
			width: 128px;
			image-rendering: pixelated;
		}

		.stats {
			flex-grow: 1;
			--stack-gap: 0.5rem;
		}

		.stat-wrapper {
			--stat-color: hsl(var(--hue) 80% 30%);
			display: grid;
			align-items: center;
			grid-template-columns: 5ch 5ch 1fr;
		}

		.stat-value {
			background-color: var(--stat-color);
			border-radius: 0.25rem;
			text-align: center;
			font-weight: 700;
			font-size: 0.9375rem;
		}

		.stat-meter {
			position: relative;
			align-self: stretch;

			&::before {
				content: "";
				position: absolute;
				border-top-right-radius: 0.25rem;
				border-bottom-right-radius: 0.25rem;
				background-color: var(--stat-color);
				inset: 0.25rem var(--percentage) 0.25rem 0;
			}
		}

		h3 {
			font-size: 1rem;
			font-weight: 700;
			text-align: center;
			margin-block: 1rem 0.5rem;
		}

		.innates,
		.abilities {
			--min-col-width: 4rem;
			text-align: center;

			div {
				anchor-scope: --ability;
			}

			button {
				width: 100%;
				border-radius: 0.5em;
				padding: 0.125rem;
				background-color: var(--clr-neutral-5);
				cursor: pointer;
				anchor-name: --ability;

				&:focus {
					outline: 1px solid var(--clr-neutral-6);
					outline-offset: 0.125rem;
				}
			}

			span {
				position-anchor: --ability;
				background-color: color-mix(var(--clr-neutral-6) 95%, transparent);
				border: 1px solid color-mix(var(--clr-neutral-7) 95%, transparent);
			}
		}
	}

	.tooltip {
		position: absolute;
		margin-top: 0.25rem;
		position-area: bottom center;
		inset-inline: -1rem;
		max-width: max-content;
		text-wrap: pretty;
		border-radius: 0.5rem;
		background-color: color-mix(var(--clr-neutral-4) 95%, transparent);
		border: 1px solid color-mix(var(--clr-neutral-5) 95%, transparent);
		padding: 0.5rem;
		transition:
			opacity 50ms,
			translate 50ms,
			scale 50ms,
			display 50ms allow-discrete;

		opacity: 0;
		translate: 0 1rem;
		scale: 0.9;

		&:popover-open {
			opacity: 1;
			translate: 0;
			scale: 1;

			@starting-style {
				opacity: 0;
				translate: 0 1rem;
				scale: 0.9;
			}
		}
	}
</style>
