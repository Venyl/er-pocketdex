import type { Ability } from "./types";

export const abilityList: Ability[] = [
	{
		name: "-------",
		description: "Empty ability slot."
	},
	{
		name: "Stench",
		description: "10% chance to flinch targets. Toxic terrain is permanent."
	},
	{
		name: "Drizzle",
		description: "Summons rain on entry. Lasts 8 turns."
	},
	{
		name: "Speed Boost",
		description: "Raises own Speed by one stage after every turn."
	},
	{
		name: "Battle Armor",
		description: "Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Sturdy",
		description: "At full HP, cannot be KO in one hit, stays at 1 HP instead."
	},
	{
		name: "Damp",
		description: "Makes foe Water-type on contact. Also works on offense."
	},
	{
		name: "Limber",
		description: "Para immune, takes half recoil, immune to self stat drops."
	},
	{
		name: "Sand Veil",
		description: "Evasion is boosted by 1.25x while a sandstorm is active."
	},
	{
		name: "Static",
		description: "30% chance to paralyze on contact, 10% on non-contact."
	},
	{
		name: "Volt Absorb",
		description: "Heals 25% of max HP when hit by an Electric-type move."
	},
	{
		name: "Water Absorb",
		description: "Heals 25% of max HP when hit by a Water-type move."
	},
	{
		name: "Oblivious",
		description: "Immune to infatuation, Scare, Intimidate and Taunt."
	},
	{
		name: "Cloud Nine",
		description: "Clears weather and prevents its effects."
	},
	{
		name: "Compound Eyes",
		description: "Grants a 1.3x accuracy boost."
	},
	{
		name: "Insomnia",
		description: "Cannot fall asleep. Rest fails if used."
	},
	{
		name: "Color Change",
		description: "Changes type to a resist or an immunity before getting hit."
	},
	{
		name: "Immunity",
		description: "Cannot be poisoned. Halves damage taken from Poison moves."
	},
	{
		name: "Flash Fire",
		description: "Powers up Fire-type moves by 1.5x if hit by a Fire-type move."
	},
	{
		name: "Shield Dust",
		description: "Immune to added move effects, hazards, and powder moves."
	},
	{
		name: "Own Tempo",
		description: "Immune to confusion, Intimidate and Scare."
	},
	{
		name: "Suction Cups",
		description: "Cannot be forced to switch out by an enemy's move."
	},
	{
		name: "Intimidate",
		description: "Lowers foes' Atk by one stage on entry."
	},
	{
		name: "Shadow Tag",
		description: "Opponents can't be switched out. Ghosts aren't affected."
	},
	{
		name: "Rough Skin",
		description: "Enemies lose 1/8 of max HP if they use a contact move."
	},
	{
		name: "Wonder Guard",
		description: "Is only hit by Super-effective attacks or indirect damage."
	},
	{
		name: "Levitate",
		description: "Immune to Ground-type moves. Ups own Flying moves by 1.25x."
	},
	{
		name: "Effect Spore",
		description: "30% chance to inflict SLP, PARA or PSN if hit by a contact move."
	},
	{
		name: "Synchronize",
		description: "Enemies inflicting status on this Pokémon get same status."
	},
	{
		name: "Clear Body",
		description: "Immune to stat drops."
	},
	{
		name: "Natural Cure",
		description: "Heals status condition upon switching out."
	},
	{
		name: "Lightning Rod",
		description: "Redirects Electric moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Serene Grace",
		description: "Doubles chance of secondary effects on its own moves."
	},
	{
		name: "Swift Swim",
		description: "This Pokémon's Speed gets a 1.5x boost if rain is active."
	},
	{
		name: "Chlorophyll",
		description: "This Pokémon's Speed gets a 1.5x boost if sun is active."
	},
	{
		name: "Illuminate",
		description: "Grants a 1.2x accuracy boost."
	},
	{
		name: "Trace",
		description: "Copies the foe's ability. Does not copy innates."
	},
	{
		name: "Huge Power",
		description: "Doubles own Attack stat. Boosts raw stat, not base stat."
	},
	{
		name: "Poison Point",
		description: "30% chance to poison on contact. Also works on offense."
	},
	{
		name: "Inner Focus",
		description: "Blocks flinch, Intimidate, Scare. Focus Blast never misses."
	},
	{
		name: "Magma Armor",
		description: "Frostbite-immune. Takes 30% less damage from Water/Ice-type moves."
	},
	{
		name: "Water Veil",
		description: "Burn-immune. Casts Aqua Ring on entry."
	},
	{
		name: "Magnet Pull",
		description: "Traps opposing Steel-types. Ghosts aren't affected."
	},
	{
		name: "Soundproof",
		description: "Immune to sound-based moves."
	},
	{
		name: "Rain Dish",
		description: "Heals 1/8 of max HP every turn if rain is active."
	},
	{
		name: "Sand Stream",
		description: "Summons a sandstorm on entry. Lasts 8 turns."
	},
	{
		name: "Pressure",
		description: "Doubles foe's PP usage. Clears stat buffs on entry."
	},
	{
		name: "Thick Fat",
		description: "Takes 1/2 damage from Fire-type and Ice-type attacks."
	},
	{
		name: "Early Bird",
		description: "Awakens twice as fast from sleep."
	},
	{
		name: "Flame Body",
		description: "30% chance to burn on contact, 20% non. Also works on offense."
	},
	{
		name: "Run Away",
		description: "Guarantees fleeing. Raises Speed if stats lowered by an enemy."
	},
	{
		name: "Keen Eye",
		description: "Immune to accuracy drops. Grants a 1.2x accuracy boost."
	},
	{
		name: "Hyper Cutter",
		description: "Enemies can't lower Atk/SpAtk. Contact moves get +1 Crit."
	},
	{
		name: "Pickup",
		description: "Removes all hazards on entry. Not immune to hazards."
	},
	{
		name: "Truant",
		description: "Can't use attacking moves twice in a row."
	},
	{
		name: "Hustle",
		description: "0.9x accuracy. Boosts damage by 1.4x."
	},
	{
		name: "Cute Charm",
		description: "50% chance to attract on contact. Also works on offense."
	},
	{
		name: "Plus",
		description: "Deals double damage if an ally Pokémon has Minus or Plus."
	},
	{
		name: "Minus",
		description: "Deals double damage if an ally Pokémon has Minus or Plus."
	},
	{
		name: "Forecast",
		description: "Changes form with the weather. Attacks when setting weather."
	},
	{
		name: "Sticky Hold",
		description: "Can't lose its item."
	},
	{
		name: "Shed Skin",
		description: "30% chance to heal its status condition at the end of a turn."
	},
	{
		name: "Guts",
		description: "Ups Atk by 1.5x if suffering from a status condition."
	},
	{
		name: "Marvel Scale",
		description: "Ups Def by 1.5x when statused."
	},
	{
		name: "Liquid Ooze",
		description: "Draining causes harm to enemies instead of healing them."
	},
	{
		name: "Overgrow",
		description: "Boosts Grass-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Blaze",
		description: "Boosts Fire-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Torrent",
		description: "Boosts Water-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Swarm",
		description: "Boosts Bug-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Rock Head",
		description: "Immune to recoil damage, but not immune to Explosion/crash damage."
	},
	{
		name: "Drought",
		description: "Summons sun on entry. Lasts 8 turns."
	},
	{
		name: "Arena Trap",
		description: "Enemies can't flee. Ghosts and ungrounded Pokémon are immune."
	},
	{
		name: "Vital Spirit",
		description: "Can't fall asleep. Fighting-type moves heal status."
	},
	{
		name: "White Smoke",
		description: "Sets Smokescreen for 3 turns on switch-in."
	},
	{
		name: "Pure Power",
		description: "Doubles own Sp.Atk stat. Boosts raw stat, not base stat."
	},
	{
		name: "Shell Armor",
		description: "Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Air Lock",
		description: "Clears weather and prevents its effects. Casts a 3-turn Tailwind on entry."
	},
	{
		name: "Tangled Feet",
		description: "Uses Speed as defensive stat when confused or enraged."
	},
	{
		name: "Motor Drive",
		description: "Boosts Speed instead of being hit by Electric-type moves."
	},
	{
		name: "Rivalry",
		description: "Deals 1.25x to same gender. Takes 0.75x from opposite gender."
	},
	{
		name: "Steadfast",
		description: "Raises Speed by one stage if this Pokémon flinches."
	},
	{
		name: "Snow Cloak",
		description: "Evasion is boosted by 1.25x under hail."
	},
	{
		name: "Gluttony",
		description: "Eats berries early. Berries also restore 1/3 of max HP."
	},
	{
		name: "Anger Point",
		description: "Getting hit raises Atk by +1. Critical hits maximize Attack."
	},
	{
		name: "Unburden",
		description: "Consuming its held item doubles Speed until switched out."
	},
	{
		name: "Heatproof",
		description: "Halves damage taken from Fire-type moves. Takes no burn damage."
	},
	{
		name: "Simple",
		description: "Doubles all stat changes on this Pokémon."
	},
	{
		name: "Dry Skin",
		description: "Water/Rain heals. Fire/Sun hurts."
	},
	{
		name: "Download",
		description: "Raises Atk/Sp. Atk by one stage depending on opponent."
	},
	{
		name: "Iron Fist",
		description: "Boosts the power of punching moves by 1.3x."
	},
	{
		name: "Poison Heal",
		description: "Restores 1/8 of max HP after each turn if poisoned."
	},
	{
		name: "Adaptability",
		description: "Increases STAB from 1.5x to 2x."
	},
	{
		name: "Skill Link",
		description: "Multi-hit moves always hit the maximum number of times."
	},
	{
		name: "Hydration",
		description: "Cures own status at the end of every turn in rain."
	},
	{
		name: "Solar Power",
		description: "Ups highest attacking stat by 1.5x in sun."
	},
	{
		name: "Quick Feet",
		description: "Ups Speed by 1.5x if suffering from a status condition."
	},
	{
		name: "Normalize",
		description: "Its moves become Normal-type, get 1.1x boost, ignore resists."
	},
	{
		name: "Sniper",
		description: "Critical hits have a 2.25x damage multiplier instead of 1.5x."
	},
	{
		name: "Magic Guard",
		description: "Only damaged by attacks."
	},
	{
		name: "No Guard",
		description: "Attacks used by and on this Pokémon bypass accuracy checks."
	},
	{
		name: "Stall",
		description: "Takes 30% less damage if it hasn't moved yet."
	},
	{
		name: "Technician",
		description: "Moves with 60 BP or less get a 1.5x boost."
	},
	{
		name: "Leaf Guard",
		description: "Cures own status at the end of every turn in sun."
	},
	{
		name: "Klutz",
		description: "Own held item has no effect. Mega Stones are unaffected."
	},
	{
		name: "Mold Breaker",
		description: "Moves hit through abilities. Also affects innates."
	},
	{
		name: "Super Luck",
		description: "Raises critical-hit ratio of own moves by +1."
	},
	{
		name: "Aftermath",
		description: "Triggers a 100 BP Explosion or Outburst after fainting."
	},
	{
		name: "Anticipation",
		description: "Senses Super-effective moves. Dodges one Super-effective hit."
	},
	{
		name: "Forewarn",
		description: "Triggers an 80 BP Future Sight on entry."
	},
	{
		name: "Unaware",
		description: "Ignores foes' stat changes, both positive and negative ones."
	},
	{
		name: "Tinted Lens",
		description: "Attacks deal double damage if resisted."
	},
	{
		name: "Filter",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Slow Start",
		description: "Halves Offenses and Speed during the first 5 turns out."
	},
	{
		name: "Scrappy",
		description: "Normal/Fighting can hit Ghosts. Immune to Intimidate/Scare."
	},
	{
		name: "Storm Drain",
		description: "Redirects Water moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Ice Body",
		description: "Heals 1/8 of max HP every turn in hail."
	},
	{
		name: "Solid Rock",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Snow Warning",
		description: "Summons hail on entry. Lasts 8 turns."
	},
	{
		name: "Honey Gather",
		description: "Has a 50% chance to find Honey each turn."
	},
	{
		name: "Frisk",
		description: "Checks foes' item and disables their items for two turns."
	},
	{
		name: "Reckless",
		description: "Moves causing recoil damage deal 1.2x more damage."
	},
	{
		name: "Multitype",
		description: "Held Plate item decides holder's type."
	},
	{
		name: "Flower Gift",
		description: "Increases the party's SpAtk and SpDef by 1.5x in Sun."
	},
	{
		name: "Bad Dreams",
		description: "Sleeping Pokémon lose 1/4 of max HP at the end of each turn."
	},
	{
		name: "Pickpocket",
		description: "Steals the foe's held item on contact."
	},
	{
		name: "Sheer Force",
		description: "Exchanges added effects on its moves for 1.3x more power."
	},
	{
		name: "Contrary",
		description: "Stat raises turn into stat drops for this Pokémon and vice versa."
	},
	{
		name: "Unnerve",
		description: "Foes can't use consumable items."
	},
	{
		name: "Defiant",
		description: "Raises Attack by two stages if stats are lowered by an enemy."
	},
	{
		name: "Defeatist",
		description: "Halves Atk and Sp. Atk stats if user is below 1/3 of max HP."
	},
	{
		name: "Cursed Body",
		description: "30% chance to disable moves if enemy makes contact."
	},
	{
		name: "Healer",
		description: "30% chance to heal user or ally's status at the end of each turn."
	},
	{
		name: "Friend Guard",
		description: "Reduces damage that ally takes by 50% in double battles."
	},
	{
		name: "Weak Armor",
		description: "If hit by a contact attack: -1 Defense and +2 Speed."
	},
	{
		name: "Heavy Metal",
		description: "Take half damage from Ghost and Dark."
	},
	{
		name: "Light Metal",
		description: "Boosts Speed by 1.3x and halves this Pokémon's weight."
	},
	{
		name: "Multiscale",
		description: "At full HP, halves damage taken from attacks"
	},
	{
		name: "Toxic Boost",
		description: "Ups Atk by 1.5x if poisoned. Immune to Poison status damage."
	},
	{
		name: "Flare Boost",
		description: "Ups Sp. Atk by 1.5x if burned. Ignites in fog."
	},
	{
		name: "Harvest",
		description: "50% chance to recycle a used Berry every turn, 100% in sun."
	},
	{
		name: "Telepathy",
		description: "Protects team from friendly fire."
	},
	{
		name: "Moody",
		description: "Sharply raises one stat and lowers another each turn."
	},
	{
		name: "Overcoat",
		description: "Blocks weather damage and powders. Takes -20% special damage."
	},
	{
		name: "Poison Touch",
		description: "30% chance to poison on contact. Also works on offense."
	},
	{
		name: "Regenerator",
		description: "Heals 1/3 of max HP upon switching out."
	},
	{
		name: "Big Pecks",
		description: "Boosts the power of contact moves by 1.3x."
	},
	{
		name: "Sand Rush",
		description: "This Pokémon's Speed gets a 1.5x boost in a sandstorm."
	},
	{
		name: "Wonder Skin",
		description: "Blocks most damage boosting and multihit abilities."
	},
	{
		name: "Analytic",
		description: "Attacks get a 1.3x power boost if it moves last."
	},
	{
		name: "Illusion",
		description: "Appears as last party slot and boosts power by 1.3x until hit."
	},
	{
		name: "Imposter",
		description: "Transforms into the foe on entry."
	},
	{
		name: "Infiltrator",
		description: "Own moves bypass Substitutes and damage reduction screens."
	},
	{
		name: "Mummy",
		description: "If hit, makes the attacker's ability Mummy."
	},
	{
		name: "Moxie",
		description: "Dealing a KO raises Attack by one stage."
	},
	{
		name: "Justified",
		description: "Boosts Attack instead of being hit by Dark-type moves."
	},
	{
		name: "Rattled",
		description: "If hit by Bug, Dark or Ghost move, or flinches: +1 Speed."
	},
	{
		name: "Magic Bounce",
		description: "Bounces back the effect of status moves to their user."
	},
	{
		name: "Sap Sipper",
		description: "Redirects Grass moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Prankster",
		description: "Status moves have +1 priority but fail on opposing Dark-types."
	},
	{
		name: "Sand Force",
		description: "Ups highest attacking stat by 1.5x in sand."
	},
	{
		name: "Iron Barbs",
		description: "Enemies lose 1/8 of max HP if they use a contact move."
	},
	{
		name: "Zen Mode",
		description: "Transforms into Zen Mode on entry until end of battle."
	},
	{
		name: "Victory Star",
		description: "Gives 1.2x accuracy boost to its own and its allies' moves."
	},
	{
		name: "Turboblaze",
		description: "Moves hit through abilities. Adds Fire type to itself."
	},
	{
		name: "Teravolt",
		description: "Moves hit through abilities. Adds Electric type to itself."
	},
	{
		name: "Aroma Veil",
		description: "Protects team from infatuation, heal block, and disabling."
	},
	{
		name: "Flower Veil",
		description: "Protects Grass-type allies from status and stat drops."
	},
	{
		name: "Cheek Pouch",
		description: "This ability has no effect."
	},
	{
		name: "Protean",
		description: "Changes type depending on the move it's about to use."
	},
	{
		name: "Fur Coat",
		description: "Halves damage taken by Physical moves. Does NOT double Defense."
	},
	{
		name: "Magician",
		description: "Steals the foe's held item after using a non-contact move."
	},
	{
		name: "Bulletproof",
		description: "Immune to projectile, ball, or bomb-based moves."
	},
	{
		name: "Competitive",
		description: "Raises Sp. Atk by two stages if stats are lowered by an enemy."
	},
	{
		name: "Strong Jaw",
		description: "Boosts the power of bite/fang moves by 1.3x."
	},
	{
		name: "Refrigerate",
		description: "Normal moves become Ice. Ice moves are empowered."
	},
	{
		name: "Sweet Veil",
		description: "This Pokémon and its ally are immune to sleep."
	},
	{
		name: "Stance Change",
		description: "Turns into Blade or Shield form depending on move used."
	},
	{
		name: "Gale Wings",
		description: "Flying-type moves get +1 priority at full HP."
	},
	{
		name: "Mega Launcher",
		description: "Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x."
	},
	{
		name: "Grass Pelt",
		description: "This Pokémon's Defense gets a 1.5x boost in Grassy Terrain."
	},
	{
		name: "Symbiosis",
		description: "Passes own item to its ally if said ally consumes its item."
	},
	{
		name: "Tough Claws",
		description: "Boosts the power of contact moves by 1.3x."
	},
	{
		name: "Pixilate",
		description: "Normal moves become Fairy. Fairy moves are empowered."
	},
	{
		name: "Gooey",
		description: "Lowers Speed of enemies that make contact with this Pokémon."
	},
	{
		name: "Aerilate",
		description: "Normal moves become Flying. Flying moves are empowered."
	},
	{
		name: "Parental Bond",
		description: "Moves hit twice. 1st hit at 100% power, 2nd hit at 25%."
	},
	{
		name: "Dark Aura",
		description: "Boosts Dark moves by 1.33x for all while this Pokémon is out."
	},
	{
		name: "Fairy Aura",
		description: "Boosts Fairy moves by 1.33x for all while this Pokémon is out."
	},
	{
		name: "Aura Break",
		description: "Cancels aura abilities and makes them 25% weaker instead."
	},
	{
		name: "Primordial Sea",
		description: "Heavy Rain until switched out. Fire-type moves are unusable."
	},
	{
		name: "Desolate Land",
		description: "Intense Sun until switched out. Water-type moves are unusable."
	},
	{
		name: "Delta Stream",
		description: "Strong Winds until switched out. Weather-based moves not usable."
	},
	{
		name: "Stamina",
		description: "Getting hit raises Def by +1. Critical hits maximize Defense."
	},
	{
		name: "Wimp Out",
		description: "At 1/2 of max HP or below, instantly switches out."
	},
	{
		name: "Emergency Exit",
		description: "At 1/2 of max HP or below, instantly switches out."
	},
	{
		name: "Water Compaction",
		description: "Takes 1/2 damage from Water-type moves. +2 Def when hit by those."
	},
	{
		name: "Merciless",
		description: "Always crits slowed, poisoned, paralyzed, or bleeding foes."
	},
	{
		name: "Shields Down",
		description: "At 1/2 of max HP or below, transforms into Core form."
	},
	{
		name: "Stakeout",
		description: "Deals double damage to opponents being switched in."
	},
	{
		name: "Water Bubble",
		description: "Halves Fire damage taken. Doubles Water damage dealt. No burns."
	},
	{
		name: "Steelworker",
		description: "Normal moves become Steel. Steel resists Ghost and Dark."
	},
	{
		name: "Berserk",
		description: "Boosts highest attack by +1 when at 1/2 of max HP or lower."
	},
	{
		name: "Slush Rush",
		description: "This Pokémon's Speed gets a 1.5x boost in hail."
	},
	{
		name: "Long Reach",
		description: "Physical moves get a 1.2x bonus and don't make contact."
	},
	{
		name: "Liquid Voice",
		description: "Sound moves get a 1.2x boost and become Water if Normal."
	},
	{
		name: "Triage",
		description: "Moves that have a healing effect gain +3 priority."
	},
	{
		name: "Galvanize",
		description: "Normal moves become Electric. Electric moves are empowered."
	},
	{
		name: "Surge Surfer",
		description: "If Electric Terrain is active, gets a 1.5x Speed boost."
	},
	{
		name: "Schooling",
		description: "If Lv. 20 or more: changes into School form until 1/4 HP or less."
	},
	{
		name: "Disguise",
		description: "Protects once against an attack. Restores protection in fog."
	},
	{
		name: "Battle Bond",
		description: "Transforms into Battle Bond form after dealing a KO."
	},
	{
		name: "Power Construct",
		description: "At 1/2 of max HP or below, transforms into Complete form."
	},
	{
		name: "Corrosion",
		description: "Poison is super effective vs Steel. Can poison any type."
	},
	{
		name: "Comatose",
		description: "Can move, but is always asleep. Immune to status conditions."
	},
	{
		name: "Queenly Majesty",
		description: "Protects itself and ally from priority moves."
	},
	{
		name: "Innards Out",
		description: "If KO'd, deals as much damage as what the fatal attack dealt."
	},
	{
		name: "Dancer",
		description: "Copies dance moves used by others."
	},
	{
		name: "Battery",
		description: "Grants a 1.3x power boost to ally's Special attacks."
	},
	{
		name: "Fluffy",
		description: "Takes 1/2 damage from contact moves but Fire moves hurt it 2x more."
	},
	{
		name: "Dazzling",
		description: "Protects itself and ally from priority moves."
	},
	{
		name: "Soul-Heart",
		description: "KOs dealt anywhere on the field raise Sp. Atk by one stage."
	},
	{
		name: "Tangling Hair",
		description: "Lowers Speed of enemies that make contact with this Pokémon."
	},
	{
		name: "Receiver",
		description: "In Double Battles, copies its fainting partner's ability."
	},
	{
		name: "Power of Alchemy",
		description: "Transmutes berries on entry. Transmutes items when lost."
	},
	{
		name: "Beast Boost",
		description: "Dealing a KO raises highest calculated stat by one stage."
	},
	{
		name: "RKS System",
		description:
			"Held Memory determines its type. Changes type depending on the move it's about to use. Increases STAB from 1.5x to 2x."
	},
	{
		name: "Electro Surge",
		description: "Casts Electric Terrain on entry. Lasts 8 turns."
	},
	{
		name: "Psychic Surge",
		description: "Casts Psychic Terrain on entry. Lasts 8 turns."
	},
	{
		name: "Misty Surge",
		description: "Casts Misty Terrain on entry. Lasts 8 turns."
	},
	{
		name: "Grassy Surge",
		description: "Casts Grassy Terrain on entry. Lasts 8 turns."
	},
	{
		name: "Full Metal Body",
		description: "Immune to stat drops."
	},
	{
		name: "Shadow Shield",
		description: "At full HP, halves damage taken from attacks"
	},
	{
		name: "Prism Armor",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Neuroforce",
		description: "Grants an additional 1.35x boost to Super-effective moves."
	},
	{
		name: "Intrepid Sword",
		description: "On entry, raises Attack by one stage."
	},
	{
		name: "Dauntless Shield",
		description: "On entry, raises Defense by one stage."
	},
	{
		name: "Libero",
		description: "Before using a move, changes its type to the move's type."
	},
	{
		name: "Ball Fetch",
		description: "No effect in battle."
	},
	{
		name: "Cotton Down",
		description: "Lowers the Speed of all foes by one stage when hit."
	},
	{
		name: "Propeller Tail",
		description: "This Pokémon's Speed gets a 1.5x boost if rain is active. Redirection Immunity."
	},
	{
		name: "Mirror Armor",
		description: "Bounces back any stat drops inflicted by an enemy."
	},
	{
		name: "Gulp Missile",
		description: "Gulps a prey after Dive/Surf. If hit, shoots prey at enemy."
	},
	{
		name: "Stalwart",
		description: "Isn't affected by redirection, crits, or ability suppression."
	},
	{
		name: "Steam Engine",
		description: "Maximizes Speed if hit by a Fire-type or Water-type attack."
	},
	{
		name: "Punk Rock",
		description: "Sound moves deal 1.3x more damage. Takes -50% damage from sound moves."
	},
	{
		name: "Sand Spit",
		description: "Summons a sandstorm when hit. Attacker is then grounded."
	},
	{
		name: "Ice Scales",
		description: "Halves damage taken by Special moves. Does NOT double SpDef."
	},
	{
		name: "Ripen",
		description: "Doubles resistance, healing and stat raises provided by Berries."
	},
	{
		name: "Ice Face",
		description: "Protects once against an attack. Restores protection under hail."
	},
	{
		name: "Power Spot",
		description: "Grants a 1.3x boost to ally's attacks."
	},
	{
		name: "Mimicry",
		description: "Changes type depending on active Terrain."
	},
	{
		name: "Screen Cleaner",
		description: "Clears screens from both sides on entry. Can reset screens."
	},
	{
		name: "Steely Spirit",
		description: "Boosts own & ally's Steel-type moves by 1.3x."
	},
	{
		name: "Perish Body",
		description: "If hit, casts Perish Song."
	},
	{
		name: "WandrngSprit",
		description: "Trades ability with attacker on contact."
	},
	{
		name: "Gorilla Tactics",
		description: "Raises own Atk by 1.5x, but can only use the first chosen move."
	},
	{
		name: "Neutralizing Gas",
		description: "All abilities are nullified."
	},
	{
		name: "Pastel Veil",
		description: "Casts Safeguard on entry."
	},
	{
		name: "Hunger Switch",
		description: "Changes between Full and Hangry forms after each turn."
	},
	{
		name: "Quick Draw",
		description: "30% chance to move first."
	},
	{
		name: "Unseen Fist",
		description: "Contact moves strike through protection."
	},
	{
		name: "CuriusMedicn",
		description: "Resets its ally's stat changes on entry."
	},
	{
		name: "Transistor",
		description: "Boosts the power of Electric-type moves by 1.5x."
	},
	{
		name: "Dragon's Maw",
		description: "Boosts the power of Dragon-type moves by 1.5x."
	},
	{
		name: "ChillngNeigh",
		description: "KOs raise Attack by one stage."
	},
	{
		name: "Grim Neigh",
		description: "KOs raise Sp. Atk by one stage."
	},
	{
		name: "As One",
		description: "Foes can't use consumable items. KOs raise Attack by one stage."
	},
	{
		name: "As One",
		description: "Foes can't use consumable items. KOs raise Sp. Atk by one stage."
	},
	{
		name: "Chloroplast",
		description: "Weather Ball, Solar Beam/Blade, Growth act as if used in sun."
	},
	{
		name: "Whiteout",
		description: "Ups highest attacking stat by 1.5x in hail."
	},
	{
		name: "Pyromancy",
		description: "Moves inflict burn 5x as often."
	},
	{
		name: "Keen Edge",
		description: "Boosts the power of slashing moves by 1.3x."
	},
	{
		name: "Prism Scales",
		description: "Takes 30% less damage from Special attacks."
	},
	{
		name: "Power Fists",
		description: "Iron Fist moves target Special Defense and get a 1.3x boost."
	},
	{
		name: "Sand Song",
		description: "Sound moves get a 1.2x boost and become Ground if Normal."
	},
	{
		name: "Rampage",
		description: "No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Vengeance",
		description: "Boosts Ghost-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Blitz Boxer",
		description: "At full HP, gives +1 priority to this Pokémon's punching moves."
	},
	{
		name: "Antarctic Bird",
		description: "Ice-type and Flying-type moves get a 1.3x power boost."
	},
	{
		name: "Immolate",
		description: "Normal moves become Fire. Fire moves are empowered."
	},
	{
		name: "Crystallize",
		description: "Rock-type moves become Ice and get a 1.1x boost."
	},
	{
		name: "Electrocytes",
		description: "Boosts the power of Electric-type moves by 1.25x."
	},
	{
		name: "Aerodynamics",
		description: "Boosts Speed instead of being hit by Flying-type moves."
	},
	{
		name: "Christmas Spirit",
		description: "Takes 50% less damage if hail is active."
	},
	{
		name: "Exploit Weakness",
		description: "Targets lowest defense vs statused foes."
	},
	{
		name: "Ground Shock",
		description: "Target Grounds aren't immune to Electric but resist it instead."
	},
	{
		name: "Ancient Idol",
		description: "Uses Def and Sp. Def instead of Atk and Sp. Atk when attacking."
	},
	{
		name: "Mystic Power",
		description: "All moves gain the 1.5x power boost from STAB."
	},
	{
		name: "Perfectionist",
		description: "Move BP < 51 BP: +1 to crit rate. Move BP < 26 BP: +1 priority too."
	},
	{
		name: "Growing Tooth",
		description: "Raises Attack by one stage after using a biting move."
	},
	{
		name: "Inflatable",
		description: "Ups Def and Sp. Def by one stage if hit by Flying or Fire moves."
	},
	{
		name: "Aurora Borealis",
		description: "Ice gains STAB. Moves always benefit from hail."
	},
	{
		name: "Avenger",
		description: "If a party Pokémon fainted last turn, next move gets 1.5x boost."
	},
	{
		name: "Let's Roll",
		description: "Casts Defense Curl on entry."
	},
	{
		name: "Aquatic",
		description: "Adds Water type on entry."
	},
	{
		name: "Loud Bang",
		description: "Sound-based moves have 50% chance to confuse the foe."
	},
	{
		name: "Lead Coat",
		description: "Takes 40% less from Phys. moves. This Pokémon's Speed is 0.9x."
	},
	{
		name: "Amphibious",
		description: "Water gains STAB. Can't become drenched."
	},
	{
		name: "Grounded",
		description: "Adds Ground type on entry."
	},
	{
		name: "Earthbound",
		description: "Boosts Ground-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Fighting Spirit",
		description: "Normal moves become Fighting. Fighting moves are empowered."
	},
	{
		name: "Cryptic Power",
		description: "Doubles own Sp. Atk stat. Boosts raw stat, not base stat."
	},
	{
		name: "Coil Up",
		description: "On entry, gives +1 priority once to the first biting move used."
	},
	{
		name: "Fossilized",
		description: "Halves damage taken by Rock moves. Boosts own Rock moves by 1.2x."
	},
	{
		name: "Magical Dust",
		description: "Makes foe Psychic-type on contact. Also works on offense."
	},
	{
		name: "Dreamcatcher",
		description: "Doubles damage if an opponent is sleeping. Pursues sleeping foes."
	},
	{
		name: "Nocturnal",
		description: "Boosts own Dark moves by 1.25x. Takes -25% damage from Dark/Fairy."
	},
	{
		name: "Self Sufficient",
		description: "Recovers 1/16 of max HP at the end of each turn."
	},
	{
		name: "Tectonize",
		description: "Normal moves becomes Ground. Might ignore hazards."
	},
	{
		name: "Ice Age",
		description: "Adds Ice type on entry."
	},
	{
		name: "Half Drake",
		description: "Adds Dragon type on entry."
	},
	{
		name: "Liquified",
		description: "Takes 1/2 damage from contact moves but Water moves hurt it 2x more."
	},
	{
		name: "Dragonfly",
		description: "Adds Dragon type on entry. Avoids Ground attacks."
	},
	{
		name: "Dragonslayer",
		description: "Deals 1.5x damage to Dragons. Takes 0.5x damage from Dragons."
	},
	{
		name: "Mountaineer",
		description: "Immune to Rock-type attacks and Stealth Rock damage."
	},
	{
		name: "Hydrate",
		description: "Normal moves become Water. Water moves are empowered."
	},
	{
		name: "Metallic",
		description: "Adds Steel type on entry."
	},
	{
		name: "Permafrost",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Primal Armor",
		description: "Takes 50% less damage from Super-effective moves."
	},
	{
		name: "Raging Boxer",
		description: "Punching moves hit twice. 1st hit at 100% power, 2nd hit at 40%."
	},
	{
		name: "Air Blower",
		description: "Casts a 3-turn Tailwind on entry."
	},
	{
		name: "Juggernaut",
		description: "Contact moves add 20% Def to attack. Paralysis-immune."
	},
	{
		name: "Short Circuit",
		description: "Boosts Elec.-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Majestic Bird",
		description: "Boosts own Sp. Atk by 1.5x. Boosts raw stat, not base stat."
	},
	{
		name: "Phantom",
		description: "Adds Ghost type on entry."
	},
	{
		name: "Intoxicate",
		description: "Normal moves become Poison. Poison moves are empowered."
	},
	{
		name: "Impenetrable",
		description: "Only damaged by attacks."
	},
	{
		name: "Hypnotist",
		description: "Hypnosis accuracy is 90% when used by this Pokémon."
	},
	{
		name: "Overwhelm",
		description: "Hits Fairies with Dragon moves. Immune to Intimidate and Scare."
	},
	{
		name: "Scare",
		description: "Lowers foes' Sp. Atk by one stage on entry."
	},
	{
		name: "Majestic Moth",
		description: "On entry, raises highest calculated stat by one stage."
	},
	{
		name: "Soul Eater",
		description: "Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Soul Linker",
		description: "Enemies take all the damage they deal, same for this Pokémon."
	},
	{
		name: "Sweet Dreams",
		description: "Heals 1/8 of max HP every turn if asleep. Immune to Bad Dreams."
	},
	{
		name: "Bad Luck",
		description: "Foes can't crit, deal min damage, have 5% less accuracy & no effect chance."
	},
	{
		name: "Haunted Spirit",
		description: "When this Pokémon is KO'd, casts a Curse on the attacker."
	},
	{
		name: "Electric Burst",
		description: "Electric-type moves deal 1.35x damage but have 10% recoil."
	},
	{
		name: "Raw Wood",
		description: "Halves damage taken by Grass moves. Boosts own Grass moves by 1.2x."
	},
	{
		name: "Solenoglyphs",
		description: "Biting moves have a 50% chance to badly poison the target."
	},
	{
		name: "Spider Lair",
		description: "Casts Sticky Web on entry. Lasts 5 turns."
	},
	{
		name: "Fatal Precision",
		description: "Super-effective moves never miss and always crit."
	},
	{
		name: "Fort Knox",
		description: "Blocks most damage boosting and multihit abilities."
	},
	{
		name: "Seaweed",
		description: "Takes 1/2 damage from Fire if Grass. Grass deals x2 damage to Fire."
	},
	{
		name: "Psychic Mind",
		description: "Boosts Psychic-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Poison Absorb",
		description: "Redirects Poison moves. Absorbs them, healing 25% HP."
	},
	{
		name: "Scavenger",
		description: "Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Twist. Dimension",
		description: "Sets up Trick Room on entry, lasts 3 turns."
	},
	{
		name: "Multi-Headed",
		description: "Hits as many times, as it has heads."
	},
	{
		name: "North Wind",
		description: "Casts a 3 turn Aurora Veil on entry. Immune to Hail damage."
	},
	{
		name: "Overcharge",
		description: "Electric is super effective vs Electric. Can paralyze Electric."
	},
	{
		name: "Violent Rush",
		description: "Boosts Speed by 50% + Attack by 20% on first turn."
	},
	{
		name: "Flaming Soul",
		description: "Fire-type moves get +1 priority at max HP."
	},
	{
		name: "Sage Power",
		description: "Ups Special Attack by 50% and locks move."
	},
	{
		name: "Bone Zone",
		description: "Bone moves ignore immunities and deal 2x on not very effective."
	},
	{
		name: "Weather Control",
		description: "Negates all weather based moves from enemies."
	},
	{
		name: "Speed Force",
		description: "Contact moves use 20% of its Speed stat additionally."
	},
	{
		name: "Sea Guardian",
		description: "Ups highest stat by +1 on entry when it rains."
	},
	{
		name: "Molten Down",
		description: "Fire-type is super effective against Rock-type."
	},
	{
		name: "Hyper Aggressive",
		description: "Moves hit twice. Second hit does 25% damage."
	},
	{
		name: "Flock",
		description: "Boosts Flying-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Field Explorer",
		description: "Boosts field moves by 50%. Cut, Surf, Strength etc."
	},
	{
		name: "Striker",
		description: "Boosts the power of kicking moves by 1.3x."
	},
	{
		name: "Frozen Soul",
		description: "Ice-type moves get +1 priority at max HP."
	},
	{
		name: "Predator",
		description: "Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Looter",
		description: "Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Lunar Eclipse",
		description: "Fairy & Dark gain STAB. Hypnosis has 1.5x accuracy."
	},
	{
		name: "Solar Flare",
		description:
			"Weather Ball, Solar Beam/Blade, Growth act as if used in sun. Normal moves become Fire. Fire moves are empowered."
	},
	{
		name: "Power Core",
		description: "The Pokémon's moves use 20% of its Defense or SpDef additionally."
	},
	{
		name: "Sighting System",
		description: "Moves always hit. Moves last for moves less than 80% accuracy."
	},
	{
		name: "Bad Company",
		description: "Not implemented right now. Has no effect."
	},
	{
		name: "Opportunist",
		description: "+1 priority vs foes below 1/2 max HP."
	},
	{
		name: "Giant Wings",
		description: "Boosts the power of wing, wind or air-based moves by 1.3x."
	},
	{
		name: "Momentum",
		description: "Contact moves use the Speed stat for damage calculation."
	},
	{
		name: "Grip Pincer",
		description: "50% chance to trap. Then ignores Defense & accuracy checks."
	},
	{
		name: "Big Leaves",
		description:
			"Weather Ball, Solar Beam/Blade, Growth act as if used in sun. This Pokémon's Speed gets a 1.5x boost if sun is active. Cures own status at the end of every turn in sun. 50% chance to recycle a used Berry every turn, 100% in sun. Ups highest attacking stat by 1.5x in sun."
	},
	{
		name: "Precise Fist",
		description: "Punching moves get +1 crit and 5x effect chance."
	},
	{
		name: "Deadeye",
		description: "Arrow & cannon moves never miss. Crits hit weakest defense."
	},
	{
		name: "Artillery",
		description: "Mega Launcher moves always hit and hit both foes."
	},
	{
		name: "Amplifier",
		description: "Ups sound moves by 30% and makes them hit both foes."
	},
	{
		name: "Ice Dew",
		description: "Redirects Ice moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Sun Worship",
		description: "Ups highest stat by +1 on entry when sunny."
	},
	{
		name: "Pollinate",
		description: "Normal moves become Bug. Immune to powder if Bug-type."
	},
	{
		name: "Volcano Rage",
		description: "Triggers a 50 BP Eruption after using a Fire-type move."
	},
	{
		name: "Cold Rebound",
		description: "Attacks with Icy Wind when hit by a contact move."
	},
	{
		name: "Low Blow",
		description: "Triggers a 40 BP Feint Attack on switch-in."
	},
	{
		name: "Nosferatu",
		description: "Contact moves deal +20% damage and heal 1/2 of damage dealt."
	},
	{
		name: "Spectralize",
		description: "Normal moves become Ghost. Ghost moves are empowered."
	},
	{
		name: "Spectral Shroud",
		description:
			"Normal moves become Ghost. Ghost moves are empowered. 30% chance to badly poison the foe."
	},
	{
		name: "Discipline",
		description: "Can switch while rampaging. Can't be confused or intimidated."
	},
	{
		name: "Thundercall",
		description: "Triggers Smite at 20% power when using an Electric move."
	},
	{
		name: "Marine Apex",
		description:
			"50% more damage to Water-types. Own moves bypass Substitutes and damage reduction screens."
	},
	{
		name: "Mighty Horn",
		description: "Boosts the power of horn and drill-based moves by 30%"
	},
	{
		name: "Hardened Sheath",
		description: "Ups Attack by +1 when using horn moves."
	},
	{
		name: "Arctic Fur",
		description: "Weakens incoming physical and special moves by 35%."
	},
	{
		name: "Lethargy",
		description: "Damage drops 20% each turn to 20%. Resets on switch-in."
	},
	{
		name: "Iron Barrage",
		description:
			"Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x. Moves always hit. Moves last for moves less than 80% accuracy."
	},
	{
		name: "Steel Barrel",
		description: "Immune to recoil damage, but not immune to Explosion/crash damage."
	},
	{
		name: "Pyro Shells",
		description: "Triggers a 50 BP Outburst after using a Mega Launcher move."
	},
	{
		name: "Fungal Infection",
		description: "Contact moves inflict Leech Seed on the target."
	},
	{
		name: "Parry",
		description: "Counters contact with Mach Punch. Takes 20% less damage."
	},
	{
		name: "Scrapyard",
		description: "Sets a layer of Spikes when hit by a contact move."
	},
	{
		name: "Loose Quills",
		description: "Sets a layer of Spikes when hit by a contact move."
	},
	{
		name: "Toxic Debris",
		description: "Sets a layer of Toxic Spikes when hit by a contact move."
	},
	{
		name: "Roundhouse",
		description: "Kicks always hit. Damages foes' weaker defenses."
	},
	{
		name: "Mineralize",
		description: "Normal moves become Rock. Rock moves are empowered."
	},
	{
		name: "Loose Rocks",
		description: "Deploys Stealth Rocks when hit by a contact move."
	},
	{
		name: "Spinning Top",
		description: "Fighting moves up speed +1 and clear hazards."
	},
	{
		name: "Retribution Blow",
		description: "Uses Hyper Beam if any foe uses a stat boosting move."
	},
	{
		name: "Fearmonger",
		description:
			"Lowers foes' Atk and Sp. Atk by one stage on entry. 10% chance to fear with contact moves."
	},
	{
		name: "King's Wrath",
		description: "Lowering any stats on its side raises Atk and Def."
	},
	{
		name: "Queen's Mourning",
		description: "Lowering any stats on its side raises SpAtk and SpDef."
	},
	{
		name: "Toxic Spill",
		description: "Non-Poison-types lose 1/8 of max HP every turn when on field."
	},
	{
		name: "Desert Cloak",
		description: "Protects its side from status and secondary effects in sand."
	},
	{
		name: "Draconize",
		description: "Normal moves become Dragon. Dragon moves are empowered."
	},
	{
		name: "Pretty Princess",
		description: "Does 50% more damage if the target has any lowered stat."
	},
	{
		name: "Self Repair",
		description:
			"Recovers 1/16 of max HP at the end of each turn. Heals status condition upon switching out."
	},
	{
		name: "Atomic Burst",
		description:
			"Charges up when getting hit. Normal moves become Electric. Electric moves are empowered."
	},
	{
		name: "Hellblaze",
		description: "Boosts Fire-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Riptide",
		description: "Boosts Water-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Forest Rage",
		description: "Boosts Grass-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Primal Maw",
		description: "Biting moves hit twice. 2nd hit does 40% damage."
	},
	{
		name: "Sweeping Edge",
		description: "Keen Edge moves always hit and hit both foes."
	},
	{
		name: "Gifted Mind",
		description: "Nulls Psychic weakness; status moves always hit."
	},
	{
		name: "Hydro Circuit",
		description: "Electric moves +50%; Water moves siphon 25% damage."
	},
	{
		name: "Equinox",
		description: "Boosts Atk or SpAtk to match the higher value."
	},
	{
		name: "Absorbant",
		description: "Drain moves recover +50% HP & apply Leech Seed."
	},
	{
		name: "Clueless",
		description: "Negates Weather, Rooms and Terrains."
	},
	{
		name: "Cheating Death",
		description: "Gets no damage for the first two hits."
	},
	{
		name: "Cheap Tactics",
		description: "Attacks with Scratch on switch-in."
	},
	{
		name: "Coward",
		description: "Sets up Protect on switch-in. Only works once."
	},
	{
		name: "Volt Rush",
		description: "At full HP, gives +1 priority to its Electric-type moves."
	},
	{
		name: "Dune Terror",
		description: "Sand reduces damage by 35%. Boosts Ground moves by 20%."
	},
	{
		name: "Infernal Rage",
		description: "Fire-type moves are boosted by 35% with 5% recoil."
	},
	{
		name: "Dual Wield",
		description: "Mega Launcher and Keen Edge moves hit twice for 70% damage."
	},
	{
		name: "Elemental Charge",
		description: "20% chance to BRN/FRZ/PARA with respective types."
	},
	{
		name: "Ambush",
		description: "Guaranteed critical hit on first turn."
	},
	{
		name: "Atlas",
		description: "Sets Gravity on entry for 8 turns."
	},
	{
		name: "Radiance",
		description: "+20% accuracy; Dark moves fail when user is present."
	},
	{
		name: "Jaws of Carnage",
		description: "Devours 1/2 of the foe when defeating it."
	},
	{
		name: "Angel's Wrath",
		description: "Drastically alters all of the users moves."
	},
	{
		name: "Prismatic Fur",
		description:
			"Changes type to a resist or an immunity before getting hit. Changes type depending on the move it's about to use. Halves damage taken by Physical and Special moves. Does NOT double Defense or SpDef."
	},
	{
		name: "Shocking Jaws",
		description: "Biting moves have 50% chance to paralyze the target."
	},
	{
		name: "Fae Hunter",
		description: "Deals 1.5x damage to Fairy. Takes 0.5x damage from Fairy."
	},
	{
		name: "Gravity Well",
		description: "Sets Gravity on entry for 5 turns."
	},
	{
		name: "Evaporate",
		description: "Takes no damage and sets Mist if hit by water."
	},
	{
		name: "Lumberjack",
		description: "Deals 1.5x damage to Grass. Takes 0.5x damage from Grass."
	},
	{
		name: "Well Baked Body",
		description: "Boosts Defense sharply instead of being hit by Fire-type moves."
	},
	{
		name: "Furnace",
		description: "User gains +2 Speed when when hit by rocks."
	},
	{
		name: "Electromorphosis",
		description: "Charges up when getting hit."
	},
	{
		name: "Rocky Payload",
		description: "Boosts the power of Rock-type and throwing moves by 1.5x."
	},
	{
		name: "Earth Eater",
		description: "Heals 25% of max HP when hit by a Ground move."
	},
	{
		name: "Lingering Aroma",
		description: "If hit, makes the attacker's ability Lingering Aroma."
	},
	{
		name: "Fairy Tale",
		description: "Adds Fairy type on entry."
	},
	{
		name: "Raging Moth",
		description: "Fire moves hits twice, both hits at 70% power."
	},
	{
		name: "Adrenaline Rush",
		description: "KOs raise Speed by one stage."
	},
	{
		name: "Archmage",
		description: "30% chance of adding a type related effect to each move."
	},
	{
		name: "Cryomancy",
		description: "Moves inflict frostbite 5x as often."
	},
	{
		name: "Phantom Pain",
		description: "Ghost-type moves deal normal damage to Normal."
	},
	{
		name: "Purgatory",
		description: "Boosts Ghost-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Emanate",
		description: "Normal moves become Psychic. Psychic moves are empowered."
	},
	{
		name: "Kunoichi's Blade",
		description:
			"Moves with 60 BP or less get a 1.5x boost. Multi-hit moves always hit the maximum number of times."
	},
	{
		name: "Monkey Business",
		description: "Uses Tickle on entry."
	},
	{
		name: "Combat Specialist",
		description: "Boosts the power of punching and kicking moves by 1.3x."
	},
	{
		name: "Jungle's Guard",
		description: "Protects Grass-type allies from status and stat drops."
	},
	{
		name: "Hunter's Horn",
		description: "Boost horn moves and heals 1/4 HP when defeating an enemy."
	},
	{
		name: "Pixie Power",
		description: "1.2x accuracy. Boosts Fairy moves by 1.33x for all."
	},
	{
		name: "Plasma Lamp",
		description: "Boost accuracy & power of Fire & Electric type moves by 1.2x."
	},
	{
		name: "Magma Eater",
		description:
			"Dealing a KO heals 1/4 of this Pokémon's max HP. Fire-type is super effective against Rock-type."
	},
	{
		name: "Super Hot Goo",
		description: "Inflicts burn and lowers Speed on contact."
	},
	{
		name: "Nika",
		description:
			"Boosts the power of punching moves by 1.3x. Water moves function normally under sun."
	},
	{
		name: "Archer",
		description: "Boosts the power of arrow moves by 1.3x."
	},
	{
		name: "Cold Plasma",
		description: "Electric type moves now inflict burn instead of paralysis."
	},
	{
		name: "Super Slammer",
		description: "Boosts the power of hammer and slamming moves by 1.3x."
	},
	{
		name: "Inversion",
		description: "Sets up Inverse Room on entry, lasts 3 turns."
	},
	{
		name: "Accelerate",
		description: "Moves that need a charge turn are now used instantly."
	},
	{
		name: "Frost Burn",
		description: "Triggers a 40 BP Ice Beam after using a Fire-type move."
	},
	{
		name: "Itchy Defense",
		description: "Causes infestation when hit by a contact move."
	},
	{
		name: "Generator",
		description: "Charges up once on entry or when electric terrain is active."
	},
	{
		name: "Moon Spirit",
		description: "Fairy & Dark gain STAB. Moonlight recovers 75% HP."
	},
	{
		name: "Dust Cloud",
		description: "Attacks with Sand Attack on switch-in."
	},
	{
		name: "Berserker Rage",
		description:
			"Getting hit raises SpAtk. Critical hits maximize SpAtk. No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Trickster",
		description: "Uses Disable on switch-in."
	},
	{
		name: "Sand Guard",
		description: "Blocks priority and reduces special damage by 1/2 in sand."
	},
	{
		name: "Natural Recovery",
		description:
			"Heals status condition upon switching out. Heals 1/3 of max HP upon switching out."
	},
	{
		name: "Wind Rider",
		description: "Increases attack in tailwind or when hit by wind move."
	},
	{
		name: "Soothing Aroma",
		description: "Cures party status on entry."
	},
	{
		name: "Prim and Proper",
		description:
			"Blocks most damage boosting and multihit abilities. 50% chance to attract on contact. Also works on offense."
	},
	{
		name: "Super Strain",
		description: "KOs lower Attack by +1. Take 25% recoil damage."
	},
	{
		name: "Tipping Point",
		description: "Getting hit raises SpAtk. Critical hits maximize SpAtk."
	},
	{
		name: "Enlightened",
		description:
			"Normal moves become Psychic. Psychic moves are empowered. Blocks flinch, Intimidate, Scare. Focus Blast never misses."
	},
	{
		name: "Peaceful Slumber",
		description:
			"Heals 1/8 of max HP every turn if asleep. Immune to Bad Dreams. Recovers 1/16 of max HP at the end of each turn."
	},
	{
		name: "Aftershock",
		description: "Triggers Magnitude 4-7 after using a damaging move."
	},
	{
		name: "Freezing Point",
		description: "20% chance to get frostbitten on contact and 30% non-contact."
	},
	{
		name: "Cryo Proficiency",
		description:
			"20% chance to get frostbitten on contact and 30% non-contact. Triggers hail when hit."
	},
	{
		name: "Arcane Force",
		description: "All moves gain STAB. Ups “supereffective” by 10%."
	},
	{
		name: "Doombringer",
		description: "Uses Doom Desire on switch-in."
	},
	{
		name: "Wishmaker",
		description: "Uses Wish on switch-in. Three uses per battle."
	},
	{
		name: "Yuki Onna",
		description:
			"Lowers foes' Atk and Sp. Atk by one stage on entry. 30% chance to infatuate on hit."
	},
	{
		name: "Suppress",
		description: "Casts Torment on entry."
	},
	{
		name: "Refrigerator",
		description: "Takes 35% less damage from Super-effective moves. Grants a 1.2x accuracy boost."
	},
	{
		name: "Heaven Asunder",
		description: "Spacial Rend always crits. Ups crit level by +1."
	},
	{
		name: "Purifying Waters",
		description:
			"Cures own status at the end of every turn in rain. Burn-immune. Casts Aqua Ring on entry."
	},
	{
		name: "Seaborne",
		description:
			"Summons rain on entry. Lasts 8 turns. This Pokémon's Speed gets a 1.5x boost if rain is active."
	},
	{
		name: "High Tide",
		description: "Triggers a 50 BP Surf after using a Water-type move."
	},
	{
		name: "Change of Heart",
		description: "Uses Heart Swap on switch-in."
	},
	{
		name: "Mystic Blades",
		description: "Keen edge moves become special and deal 30% more damage."
	},
	{
		name: "Determination",
		description: "Ups Special Attack by 50% if suffering."
	},
	{
		name: "Fertilize",
		description: "Normal moves become Grass. Grass moves are empowered."
	},
	{
		name: "Pure Love",
		description:
			"50% chance to attract on contact. Also works on offense. heal 25% damage vs infatuated."
	},
	{
		name: "Fighter",
		description: "Boosts Fight.-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Mycelium Might",
		description: "Status moves ignore immunities but go last."
	},
	{
		name: "Telekinetic",
		description: "Casts Telekinesis on entry."
	},
	{
		name: "Combustion",
		description: "Boosts the power of Fire-type moves by 1.5x."
	},
	{
		name: "Blade's Essence",
		description:
			"Boosts the power of slashing moves by 1.3x. Keen edge moves become special and deal 30% more damage."
	},
	{
		name: "Powder Burst",
		description: "Casts Powder on entry."
	},
	{
		name: "Retriever",
		description: "Retrieves item on switch-out."
	},
	{
		name: "Monster Mash",
		description: "Casts Trick-or-Treat on entry."
	},
	{
		name: "Two Step",
		description: "Triggers a 50 BP Revelation Dance after using a Dance move."
	},
	{
		name: "Spiteful",
		description: "Reduces attacker's PP on contact."
	},
	{
		name: "Fortitude",
		description: "Boosts SpDef +1 when hit. Maxes SpDef on crit."
	},
	{
		name: "Devourer",
		description:
			"Boosts the power of bite/fang moves by 1.3x. Biting moves hit twice. 2nd hit does 40% damage."
	},
	{
		name: "Phantom Thief",
		description: "Triggers a 40 BP Spectral Thief on switch-in."
	},
	{
		name: "Early Grave",
		description: "Ghost-type moves get +1 priority at max HP."
	},
	{
		name: "Grappler",
		description: "Trapping moves last 6 turns. Trapping deals 1/6 HP."
	},
	{
		name: "Bass Boosted",
		description:
			"Ups sound moves by 30% and makes them hit both foes. Sound moves deal 1.3x more damage. Takes -50% damage from sound moves."
	},
	{
		name: "Flaming Jaws",
		description: "Biting moves have 50% chance to burn the target."
	},
	{
		name: "Monster Hunter",
		description: "Deals 1.5x damage to Dark. Takes 0.5x damage from Dark."
	},
	{
		name: "Crowned Sword",
		description:
			"On entry, raises Attack by one stage. Getting hit raises Atk by +1. Critical hits maximize Attack."
	},
	{
		name: "Crowned Shield",
		description:
			"On entry, raises Defense by one stage. Getting hit raises Def by +1. Critical hits maximize Defense."
	},
	{
		name: "Berserk DNA",
		description: "Sharply ups highest attacking stat but enrages on entry."
	},
	{
		name: "Crowned King",
		description: "Foes can't use consumable items. KOs raise Attack and Sp. Atk by one stage."
	},
	{
		name: "Clap Trap",
		description: "Counters contact with a 50 BP Snap Trap."
	},
	{
		name: "Permanence",
		description: "Foes can't heal in any way."
	},
	{
		name: "Hubris",
		description: "KOs raise SpAtk by one stage."
	},
	{
		name: "Cosmic Daze",
		description: "Deals 2x damage vs confused and enraged foes."
	},
	{
		name: "Mind's Eye",
		description: "Hits Ghost-type Pokémon. Accuracy can't be lowered."
	},
	{
		name: "Blood Price",
		description: "Does 30% more damage but lose 10% HP when attacking."
	},
	{
		name: "Spike Armor",
		description: "30% chance to bleed on contact or offense."
	},
	{
		name: "Voodoo Power",
		description: "30% chance to bleed when hit by special attacks."
	},
	{
		name: "Chrome Coat",
		description: "Reduces special damage taken by 40%, but decreases Speed by 10%."
	},
	{
		name: "Banshee",
		description: "Sound moves get a 1.2x boost and become Ghost if Normal."
	},
	{
		name: "Web Spinner",
		description: "Uses String Shot on switch-in."
	},
	{
		name: "Showdown Mode",
		description: "Boosts Speed by 50%, Attack by 20% and guarantees a critical hit on first turn."
	},
	{
		name: "Seed Sower",
		description: "Sets Grassy Terrain when hit. Heals party status when it does."
	},
	{
		name: "Airborne",
		description: "Boosts own & ally's Flying-type moves by 1.3x."
	},
	{
		name: "Parroting",
		description: "Copies sound moves used by others."
	},
	{
		name: "Salt Circle",
		description: "Prevents opposing pokemon from fleeing on entry."
	},
	{
		name: "Purifying Salt",
		description: "Immune to status conditions. Take 1/2 damage from Ghost."
	},
	{
		name: "Protosynthesis",
		description: "Boosts highest stat in Sun or with Booster Energy."
	},
	{
		name: "Quark Drive",
		description: "Boosts highest stat in Electric Terrain or with Booster Energy."
	},
	{
		name: "Wind Power",
		description: "Charges up when hit by wind moves or Tailwind starts."
	},
	{
		name: "Impulse",
		description: "Non-contact moves use the Speed stat for damage."
	},
	{
		name: "Terminal Velocity",
		description: "Special moves use 20% of its Speed stat additionally."
	},
	{
		name: "Guard Dog",
		description: "Can't be forced out. Inverts Intimidate effects."
	},
	{
		name: "Anger Shell",
		description: "Applies Shell Smash when reduced below 1/2 HP."
	},
	{
		name: "Egoist",
		description: "Raises its own stats when foes raise theirs."
	},
	{
		name: "Subdue",
		description: "Doubles stat drop effects used by this pokemon."
	},
	{
		name: "Readied Action",
		description: "Doubles attack on first turn."
	},
	{
		name: "Stygian Rush",
		description: "Dark-type moves get +1 priority at max HP."
	},
	{
		name: "Guilt Trip",
		description: "Sharply lowers attacker's Attack and SpAtk when fainting."
	},
	{
		name: "Tidal Rush",
		description: "Water-type moves get +1 priority at max HP."
	},
	{
		name: "Zero To Hero",
		description: "Changes forms after switching out."
	},
	{
		name: "Costar",
		description: "Copies its ally's stat changes on switch-in."
	},
	{
		name: "Commander",
		description: "Hops inside an allied Dondozo. Boosts its ally but can't act."
	},
	{
		name: "Tactical Retreat",
		description: "Flees when stats are lowered."
	},
	{
		name: "Vengeful Spirit",
		description:
			"When this Pokémon is KO'd, casts a Curse on the attacker. Boosts Ghost-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Cud Chew",
		description: "Eats berries again at the end of the next turn."
	},
	{
		name: "Armor Tail",
		description: "Protects itself and ally from priority moves."
	},
	{
		name: "Mind Crunch",
		description: "Biting moves use SpAtk and deal 30% more damage."
	},
	{
		name: "Supreme Overlord",
		description: "Each fainted ally increases Attack and SpAtk by 10%."
	},
	{
		name: "Ill Will",
		description: "Deletes the PP of the move that faints this Pokemon."
	},
	{
		name: "Fire Scales",
		description: "Halves damage taken by Special moves. Does NOT double SpDef."
	},
	{
		name: "Watch Your Step",
		description: "Spreads two layers of Spikes on switch-in."
	},
	{
		name: "Rapid Response",
		description: "Boosts Speed by 50% + SpAtk by 20% on first turn."
	},
	{
		name: "Sharp Edges",
		description: "1/6 HP damage when touched."
	},
	{
		name: "Thermal Exchange",
		description: "Ups Attack when hit by Fire. Immune to burn."
	},
	{
		name: "Good As Gold",
		description: "Immune to all Status moves, unless whole field is affected."
	},
	{
		name: "Sharing Is Caring",
		description: "Stat changes are shared between all battlers."
	},
	{
		name: "Tablets Of Ruin",
		description: "Lowers the Attack of other Pokemon by 25%."
	},
	{
		name: "Sword Of Ruin",
		description: "Lowers the Defense of other Pokemon by 25%."
	},
	{
		name: "Vessel Of Ruin",
		description: "Lowers the Special Attack of other Pokemon by 25%."
	},
	{
		name: "Beads Of Ruin",
		description: "Lowers the Special Defense of other Pokemon by 25%."
	},
	{
		name: "Thick Skin",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Gallantry",
		description: "Gets no damage for first hit."
	},
	{
		name: "Orichalcum Pulse",
		description: "Summons sun on entry. Raises Atk by 1.33x in sun."
	},
	{
		name: "Sun Basking",
		description: "Blocks priority and reduces physical damage by 1/2 in sun."
	},
	{
		name: "Winged King",
		description: "Ups “supereffective” by 33%."
	},
	{
		name: "Hadron Engine",
		description: "Field becomes Electric. +33% SpAtk in Electric Terrain."
	},
	{
		name: "Iron Serpent",
		description: "Ups “supereffective” by 33%."
	},
	{
		name: "Catastrophe",
		description: "Sun boosts Water. Rain boosts Fire."
	},
	{
		name: "Blademaster",
		description:
			"Keen Edge moves always hit and hit both foes. Boosts the power of slashing moves by 1.3x."
	},
	{
		name: "Celestial Blessing",
		description: "Recovers 1/12 of its health each turn under Misty Terrain."
	},
	{
		name: "Minion Control",
		description: "Moves hit an extra time for each healthy party member."
	},
	{
		name: "Molten Blades",
		description:
			"Boosts the power of slashing moves by 1.3x. Keen Edge moves have a 20% chance to burn."
	},
	{
		name: "Haunting Frenzy",
		description: "20% chance to flinch the opponent. +1 speed on kill."
	},
	{
		name: "Noise Cancel",
		description: "Protects the party from sound-based moves."
	},
	{
		name: "Radio Jam",
		description: "Sound-based moves have a 20% chance to inflict disable."
	},
	{
		name: "Olé!",
		description: "20% chance to evade single-target moves."
	},
	{
		name: "Malicious",
		description: "Lowers the foe's highest Attack and Defense stat."
	},
	{
		name: "Dead Power",
		description: "1.5x Attack boost. 20% chance to curse on contact moves."
	},
	{
		name: "Brawling Wyvern",
		description:
			"Attacks used by and on this Pokémon bypass accuracy checks. Dragon type moves become punching moves."
	},
	{
		name: "Mythical Arrows",
		description: "Arrow moves become special and deal 30% more damage."
	},
	{
		name: "Lawnmower",
		description: "Removes terrain on switch-in. Stat up if terrain removed."
	},
	{
		name: "Flourish",
		description: "Boosts Grass moves by 50% in grassy terrain."
	},
	{
		name: "Desert Spirit",
		description: "Summons sand on entry. Ground moves hit airborne in sand."
	},
	{
		name: "Contempt",
		description:
			"Ignores foes' stat changes, both positive and negative ones. Raises Attack by two stages if stats are lowered by an enemy."
	},
	{
		name: "Aerialist",
		description:
			"Immune to Ground-type moves. Ups own Flying moves by 1.25x. Boosts Flying-type moves by 1.2x, or 1.5x when below 1/3 HP."
	},
	{
		name: "Tera Shell",
		description: "All hits will be not very effective while at full HP."
	},
	{
		name: "Toxic Chain",
		description: "Moves have a 30% chance to badly poison the foe."
	},
	{
		name: "Parasitic Spores",
		description: "Deals 1/8 HP damage to non-Ghost. Spreads on contact."
	},
	{
		name: "Poison Puppeteer",
		description: "Poison also inflicts confusion."
	},
	{
		name: "Entrance",
		description: "Confusion also inflicts infatuation."
	},
	{
		name: "Rejection",
		description: "Applies Quash on switch-in."
	},
	{
		name: "Apple Enlightenment",
		description:
			"Halves damage taken by Physical moves. Does NOT double Defense. Only damaged by attacks."
	},
	{
		name: "Balloon Bomb",
		description:
			"Triggers a 100 BP Explosion or Outburst after fainting. Ups Def and Sp. Def by one stage if hit by Flying or Fire moves."
	},
	{
		name: "Flaming Maw",
		description:
			"Boosts the power of bite/fang moves by 1.3x. Biting moves have 50% chance to burn the target."
	},
	{
		name: "Demolitionist",
		description: "Doubles attack and breaks screens on first turn. Ignores Protect."
	},
	{
		name: "Rockhard Will",
		description: "Boosts Rock-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Fragrant Daze",
		description: "30% chance to confuse on contact."
	},
	{
		name: "Low Visibility",
		description: "Summons Eerie Fog on entry."
	},
	{
		name: "Old Mariner",
		description:
			"Takes 1/2 damage from Fire if Grass. Grass deals x2 damage to Fire. Water gains STAB."
	},
	{
		name: "Ectoplasm",
		description: "Ups highest attacking stat by 1.5x in fog."
	},
	{
		name: "Beautiful Music",
		description: "Sound moves have 50% chance to infatuate, ignoring gender."
	},
	{
		name: "Surprise!",
		description: "Astonishes enemy priority users in fog."
	},
	{
		name: "Snow Song",
		description: "Sound moves get a 1.2x boost and become Ice if Normal."
	},
	{
		name: "Greater Spirit",
		description: "Ups highest stat by +1 on entry in fog."
	},
	{
		name: "Resonance",
		description: "Sound moves have a 30% chance to cause bleeding."
	},
	{
		name: "Ethereal Rush",
		description: "This Pokémon's Speed gets a 1.5x boost in fog."
	},
	{
		name: "Pretty Privilege",
		description: "At full HP, gives +1 priority to its Fairy-type moves."
	},
	{
		name: "Shallow Grave",
		description: "Revives at 25% HP once after fainting in fog."
	},
	{
		name: "Menacing Situation",
		description: "30% chance to Fear on contact. Also works on offense."
	},
	{
		name: "Shiny Lightning",
		description: "Grants a 1.2x accuracy boost. Thunder never misses."
	},
	{
		name: "Terrify",
		description: "Lowers foes' Sp. Atk by two stages on entry."
	},
	{
		name: "Ice Downfall",
		description: "Counters contact with a 60 BP Icicle Crash."
	},
	{
		name: "Last Stand",
		description: "Def and SpDef increase as HP drops. Max 1.6x."
	},
	{
		name: "Pyroclastic Flow",
		description:
			"Fire-type is super effective against Rock-type. Poison is super effective vs Steel. Can poison any type."
	},
	{
		name: "Blood Bath",
		description: "Immune to bleed. Inflict fear when inflicting bleed."
	},
	{
		name: "Battle Aura",
		description: "Boosts each battler's crit rate by +2."
	},
	{
		name: "Bloodlust",
		description:
			"Immune to bleed. Inflict fear when inflicting bleed. Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Piercing Solo",
		description: "Sound moves cause bleeding."
	},
	{
		name: "Rhythmic",
		description: "Deals 10% more damage for each repeated move use."
	},
	{
		name: "Chunky Bass Line",
		description: "Triggers a 40 BP Earthquake after using a sound move."
	},
	{
		name: "Jackhammer",
		description: "Super Slammer moves hit twice for 70% damage."
	},
	{
		name: "Denting Blows",
		description: "Hammer moves lower Defense."
	},
	{
		name: "Ice Cold Hunter",
		description: "Ice-type moves hit twice in hail."
	},
	{
		name: "Soul Crusher",
		description: "Hammer moves hit SpDef and get a 1.1x power boost."
	},
	{
		name: "Arc Flash",
		description: "50% chance to burn when hit or paralyze when dealing damage."
	},
	{
		name: "Unicorn",
		description:
			"Boosts the power of horn and drill-based moves by 30%. Normal moves become Fairy. Fairy moves are empowered."
	},
	{
		name: "On the Prowl",
		description: "+1 priority for the first turn. Negative priority becomes +0."
	},
	{
		name: "Pretentious",
		description: "Dealing a KO raises Crit by one stage."
	},
	{
		name: "Venoblaze Pincers",
		description: "1.2x boost to physical moves and 20% chance to Burn or Poison."
	},
	{
		name: "Eternal Blessing",
		description:
			"Recovers 1/12 of its health each turn under Misty Terrain. Heals 1/3 of max HP upon switching out."
	},
	{
		name: "Sugar Rush",
		description:
			"Consuming its held item doubles Speed until switched out. Doubles resistance, healing and stat raises provided by Berries."
	},
	{
		name: "Rest in Peace",
		description: "Heals 1/8 of max HP every turn in fog."
	},
	{
		name: "White Noise",
		description:
			"30% chance to paralyze on contact, 10% on non-contact. Heals 1/8 of max HP every turn in fog."
	},
	{
		name: "Smokey Maneuvers",
		description: "Evasion is boosted by 1.25x in fog."
	},
	{
		name: "Tag",
		description: "Attacks switching opponents with a 20 BP Pursuit."
	},
	{
		name: "Power Metal",
		description: "Sound moves get a 1.2x boost and become Steel if Normal."
	},
	{
		name: "Power Edge",
		description: "Keen Edge moves target Special Defense and get a 1.3x boost."
	},
	{
		name: "Superconductor",
		description: "Steel-type moves become Electric and get a 1.1x boost."
	},
	{
		name: "Ultra Instinct",
		description: "Counters contact with a 20 BP Vacuum Wave. Takes 0.8x damage."
	},
	{
		name: "Unlocked Potential",
		description:
			"Blocks flinch, Intimidate, Scare. Focus Blast never misses. Boosts highest attack by +1 when at 1/2 of max HP or lower."
	},
	{
		name: "Higher Rank",
		description: "Priority moves get a 1.2x boost."
	},
	{
		name: "Funeral Pyre",
		description: "Non-Ghost and Dark-types take 1/4 damage every turn."
	},
	{
		name: "Flame Bubble",
		description:
			"Halves Fire damage taken. Doubles Water damage dealt. No burns. Fire-type moves get +1 priority at max HP."
	},
	{
		name: "Elemental Vortex",
		description:
			"Powers up Fire-type moves by 1.5x if hit by a Fire-type move. Heals 25% of max HP when hit by a Water-type move."
	},
	{
		name: "Snowy Wrath",
		description: "Summons hail on entry. Lasts 8 turns. Moves inflict frostbite 5x as often."
	},
	{
		name: "Pattern Change",
		description:
			"Changes type depending on the move it's about to use. 30% chance to heal its status condition at the end of a turn."
	},
	{
		name: "No Turning Back",
		description: "Boosts all stats but can't retreat when below 1/2 max HP."
	},
	{
		name: "Flammable Coat",
		description: "Changes forms when using or hit by a Fire-type move."
	},
	{
		name: "Draco Morale",
		description: "Uses Dragon Cheer on switch-in."
	},
	{
		name: "Bad Omen",
		description: "Foes min roll. Takes 1/4 damage from crits."
	},
	{
		name: "Mosh Pit",
		description: "Ally's attacks get a 1.25x boost. 1.5x if attack causes recoil."
	},
	{
		name: "Blood Stain",
		description: "Is always bleeding if not immune. Spreads on contact."
	},
	{
		name: "Blood Stigma",
		description: "Immune to status. Gets a 2x boost vs bleeding foes."
	},
	{
		name: "Max Acceleration",
		description:
			"Raises own Speed by one stage after every turn. Moves use 20% of its Speed stat additionally."
	},
	{
		name: "Sidewinder",
		description: "First biting move each entry gets +1 priority. Resets on KO."
	},
	{
		name: "Petrify",
		description: "Clears stat buffs then lowers speed by one stage on entry."
	},
	{
		name: "Fluffiest",
		description: "Quarters contact damage taken. 4x weak to fire."
	},
	{
		name: "Way of Precision",
		description:
			"Blocks flinch, Intimidate, Scare. Focus Blast never misses. Punching moves get +1 crit and 5x effect chance."
	},
	{
		name: "Way of Swiftness",
		description:
			"Dealing a KO raises Crit by one stage. This Pokémon's Speed gets a 1.5x boost if rain is active."
	},
	{
		name: "Atomic Punch",
		description: "Boosts the power of punching moves by 1.3x. Boosts Steel-type damage by 1.3x."
	},
	{
		name: "Iron Giant",
		description:
			"Halves damage taken from Fire-type moves. Takes no burn damage. Contact moves add 20% Def to attack. Paralysis-immune."
	},
	{
		name: "Master Hand",
		description:
			"Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x. No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Final Blow",
		description:
			"Contact moves strike through protection. Super-effective moves never miss and always crit."
	},
	{
		name: "Hospitality",
		description: "Heals partner for 25% of its max HP on switch-in."
	},
	{
		name: "Butter Up",
		description: "Heals partner for 25% of its max HP on switch-in. Cures party status on entry."
	},
	{
		name: "Vitality Strike",
		description: "Heals for 10% of the damage dealt by punching moves."
	},
	{
		name: "Imposing Wings",
		description:
			"Boosts the power of wing, wind or air-based moves by 1.3x. Immune to Ground-type moves. Ups own Flying moves by 1.25x."
	},
	{
		name: "Sword of Damnation",
		description:
			"Ignores foes' stat changes, both positive and negative ones. Lowers the Defense of other Pokemon by 25%."
	},
	{
		name: "Restraining Order",
		description: "Forces the attacker out when hit, once each switch-in."
	},
	{
		name: "Assassin's Tools",
		description: "Contact moves have a 30% chance to PSN, PRLZ, or BLD."
	},
	{
		name: "Frostmaw",
		description: "Biting moves have a 50% chance to inflict frostbite."
	},
	{
		name: "Patchwork",
		description:
			"Protects once against an attack. Restores protection in fog. Curses the opponent when its Disguise breaks."
	},
	{
		name: "Blind Rage",
		description:
			"Normal/Fighting can hit Ghosts. Immune to Intimidate/Scare. Moves hit through abilities. Also affects innates."
	},
	{
		name: "Slipstream",
		description: "Moves use 20% of its Speed stat additionally."
	},
	{
		name: "Apex Predator",
		description:
			"Boosts the power of contact moves by 1.3x. Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Dragon's Ritual",
		description: "Dealing a KO raises Attack and Speed by one stage."
	},
	{
		name: "Pinnacle Blade",
		description: "Slashing moves always hit and break protection and barriers."
	},
	{
		name: "Energized",
		description:
			"Charges up once on entry or when electric terrain is active. Charges up on KO with an Electric-type move."
	},
	{
		name: "Color Spectrum",
		description: "Same-type attacks get a 1.2x boost. Changes type each turn."
	},
	{
		name: "Steel Beetle",
		description:
			"Punching moves hit twice. 1st hit at 100% power, 2nd hit at 40%. Normal moves become Bug. Immune to powder if Bug-type."
	},
	{
		name: "From the Shadows",
		description: "Attacks trap and have a 20% flinch chance when moving first."
	},
	{
		name: "Rage Point",
		description: "Gets a 1.5x boost while statused. Raises offenses when crit."
	},
	{
		name: "Hot Coals",
		description: "Sets a trap that burns the next foe that switches in."
	},
	{
		name: "Terastal Treasure",
		description: "Reduces damage taken by 40%, but lowers speed by 20%."
	},
	{
		name: "Shocking Maw",
		description:
			"Boosts the power of bite/fang moves by 1.3x. Bite moves have 50% paralysis chance."
	},
	{
		name: "Gleam Eyes",
		description:
			"Checks foes' item and disables their items for two turns. Lowers foes' Sp. Atk by one stage on entry."
	},
	{
		name: "Megabite",
		description: "Biting moves use SpAtk and deal 30% more damage."
	},
	{
		name: "Dream State",
		description: "Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Dream Whimsy",
		description: "Uses Yawn on switch-in."
	},
	{
		name: "Lunar Affinity",
		description: "Copies lunar moves used by others."
	},
	{
		name: "Flame Shield",
		description: "Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Aquatic Dweller",
		description: "Adds Water type on entry. Boosts the power of Water-type moves by 1.5x."
	},
	{
		name: "Apple Pie",
		description:
			"Recovers 1/16 of max HP at the end of each turn. Doubles resistance, healing and stat raises provided by Berries."
	},
	{
		name: "Hover",
		description: "Adds Psychic type to itself. Avoids Ground attacks."
	},
	{
		name: "Depravity",
		description:
			"Always crits slowed, poisoned, paralyzed, or bleeding foes. Electric is super effective vs Electric. Can paralyze Electric."
	},
	{
		name: "Wildfire",
		description: "Attacks with Fire Spin on entry."
	},
	{
		name: "Jumpscare",
		description: "Attacks with Astonish on first switch-in."
	},
	{
		name: "Tar Toss",
		description: "Uses Tar Shot on switch-in."
	},
	{
		name: "Stun Shock",
		description: "Attacks have a 60% chance to Paralyze or Poison."
	},
	{
		name: "Raging Goddess",
		description:
			"No recharge after a KO, if it usually would need to recharge. Moves hit twice. Second hit does 25% damage."
	},
	{
		name: "Whiplash",
		description: "Physical attacks lower defense."
	},
	{
		name: "Supersweet Syrup",
		description: "Can't lose its item. Disables foe's item for 2 turns on contact."
	},
	{
		name: "Lucky Halo",
		description: "Negates self stat drops. Endures the a single KO."
	},
	{
		name: "Trash Heap",
		description:
			"Poison is super effective vs Steel. Can poison any type. Non-Poison-types lose 1/8 of max HP every turn when on field."
	},
	{
		name: "Sludgy Mix",
		description:
			"Normal moves become Poison. Poison moves are empowered. Sound moves deal 1.3x more damage. Takes -50% damage from sound moves."
	},
	{
		name: "Overwatch",
		description:
			"+1 priority for the first turn. Negative priority becomes +0. Deals double damage to opponents being switched in."
	},
	{
		name: "Wind Rage",
		description: "Uses Defog on switch-in. Air-based moves get a 1.3x boost."
	},
	{
		name: "Victory Bomb",
		description: "Attacks with a 100 BP Fire-type Explosion on fainting."
	},
	{
		name: "Razor Sharp",
		description: "Critical hits also inflict bleeding."
	},
	{
		name: "To The Bone",
		description: "Critical hits get a 1.5x boost and inflict bleeding."
	},
	{
		name: "Blade Dance",
		description: "Triggers a 50 BP Leaf Blade after using a dance move."
	},
	{
		name: "Taekkyeon",
		description: "All attacks are dances."
	},
	{
		name: "Ape Shift",
		description: "Transforms below 50% HP, curing status and always critting."
	},
	{
		name: "Know Your Place",
		description: "Contact attacks make foes move last for 5 turns."
	},
	{
		name: "Deep Cuts",
		description: "Slashing moves have a 50% chance to inflict bleeding."
	},
	{
		name: "Life Steal",
		description: "Steals 1/10 HP from foes each turn."
	},
	{
		name: "Rude Awakening",
		description: "Raises all stats becomes immune to sleep after waking up."
	},
	{
		name: "Teraform Zero",
		description:
			"All hits will be not very effective while at full HP. clears weather and terrain on first entry."
	},
	{
		name: "Set Ablaze",
		description: "Inflicting burn also inflicts fear."
	},
	{
		name: "Breakwater",
		description:
			"This Pokémon's Speed gets a 1.5x boost if rain is active. Takes 30% less damage if it hasn't moved yet."
	},
	{
		name: "Magical Fists",
		description: "Punching moves use Special Attack and get a 1.3x boost."
	},
	{
		name: "Cutthroat",
		description: "The first slicing move used on each entry in gets +1 priority."
	},
	{
		name: "Sand Bender",
		description:
			"Summons a sandstorm on entry. Lasts 8 turns. Ups highest attacking stat by 1.5x in sand."
	},
	{
		name: "Sand Pit",
		description: "Triggers a 20 BP Sand Tomb on switch-in."
	},
	{
		name: "Desolate Sun",
		description:
			"Intense Sun until switched out. Water-type moves are unusable. Heals 25% of max HP when hit by a Ground move."
	},
	{
		name: "Daybreak",
		description: "Burns the foe on contact. Also works on offense."
	},
	{
		name: "Energy Siphon",
		description: "Heals the user for 1/4 of the damage they deal."
	},
	{
		name: "Reservoir",
		description:
			"Heals 25% of max HP when hit by a Water-type move. Redirects Water moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Neurotoxin",
		description: "Inflicting poison also lowers Attack, SpAtk, and Speed."
	},
	{
		name: "Energy Horns",
		description: "Mighty horn moves become special and deal 30% more damage."
	},
	{
		name: "Rising Dough",
		description: "Casts Sticky Web on entry. Lasts 7 turns."
	},
	{
		name: "Crust Coat",
		description: "Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Puffy",
		description: "Takes 1/2 damage from contact moves but Fire moves hurt it 2x more."
	},
	{
		name: "Balloon Blitz",
		description:
			"Ups Def and Sp. Def by one stage if hit by Flying or Fire moves. Moves hit twice. Second hit does 25% damage."
	},
	{
		name: "Twinkle Toes",
		description:
			"Boosts the power of kicking moves by 1.3x. Normal moves become Fairy. Fairy moves are empowered."
	},
	{
		name: "Doom Blast",
		description: "Dark-type moves deal 1.35x damage but have 10% recoil."
	},
	{
		name: "Brute Force",
		description:
			"Immune to recoil damage, but not immune to Explosion/crash damage. Moves causing recoil damage deal 1.2x more damage."
	},
	{
		name: "Faraday Cage",
		description:
			"Immune to critical hits. Takes 20% less damage from attacks. Triggers a 50 BP Thunder Cage when hit by a contact move."
	},
	{
		name: "Acidic Slime",
		description: "Poison is super effective vs Steel. Can poison any type. Poison gains STAB."
	},
	{
		name: "Rose Garden",
		description: "Spreads two layers of Toxic Spikes on switch-in."
	},
	{
		name: "Qigong",
		description:
			"Always hits. Normal moves become Fighting. Fighting moves are empowered. No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Conjurer Of Deceit",
		description: "Only damaged by attacks. Bounces back the effect of status moves to their user."
	},
	{
		name: "Deep Freeze",
		description: "Boosts Water and Ice by 1.25x. Halves Fire damage taken."
	},
	{
		name: "Soul Devourer",
		description:
			"Dealing a KO heals 1/4 of this Pokémon's max HP. Ghost-type moves deal normal damage to Normal."
	},
	{
		name: "Champion's Entrance",
		description:
			"Lowers foes' Atk by one stage on entry. Boosts Speed by 50% + Attack by 20% on first turn."
	},
	{
		name: "Presto",
		description: "Sound moves get +1 priority at full HP."
	},
	{
		name: "Samba",
		description: "Boosts the power of kicking moves by 1.3x. Copies dance moves used by others."
	},
	{
		name: "JunshiSanda",
		description: "Punches and Kicks are both Punches and Kicks."
	},
	{
		name: "Gladiator",
		description: "Boosts Fighting-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Forsaken Heart",
		description: "KOs dealt anywhere on the field raise Attack by one stage."
	},
	{
		name: "Relentless",
		description:
			"Targets lowest defense vs statused foes. Always crits slowed, poisoned, paralyzed, or bleeding foes."
	},
	{
		name: "Soothsayer",
		description: "Resists all attacks for three turns on first entry."
	},
	{
		name: "Corrupted Mind",
		description: "Psychic moves ignore resists and get 1.4x effect chance."
	},
	{
		name: "Flame Coat",
		description: "Non-Fire-types lose 1/8 of max HP every turn when on field."
	},
	{
		name: "Unown Power",
		description:
			"All moves gain the 1.5x power boost from STAB. Hidden and Secret Power hit Super-effectively."
	},
	{
		name: "Super Scope",
		description:
			"Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x. Mega Launcher moves always hit and hit both foes."
	},
	{
		name: "Venom Crown",
		description:
			"30% chance to poison on contact. Also works on offense. Boosts the power of horn and drill-based moves by 30%."
	},
	{
		name: "Blight Scale",
		description:
			"At full HP, halves damage taken from attacks. 30% chance to poison on contact. Also works on offense."
	},
	{
		name: "Gunman",
		description:
			"Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x. Status moves are Mega Launcher moves."
	},
	{
		name: "Hunter's Mark",
		description:
			"Guaranteed critical hit on first turn. Arrow & cannon moves never miss. Crits hit weakest defense."
	},
	{
		name: "Hemolysis",
		description: "Poisoned foes lose all stat buffs and can't heal."
	},
	{
		name: "Caretaker",
		description:
			"30% chance to heal user or ally's status at the end of each turn. Reduces damage that ally takes by 50% in double battles."
	},
	{
		name: "Poseidon's Dominion",
		description: "Attacks with Whirlpool on entry."
	},
	{
		name: "Two-Faced",
		description:
			"Changes between Full and Hangry forms after each turn. Electric and Dark deal 1.35x damage with 10% recoil."
	},
	{
		name: "Lullaby",
		description: "Sing accuracy is 90% when used by this Pokémon."
	},
	{
		name: "Cryo Architect",
		description: "Boosts Attack and Def when hit by Water or Ice."
	},
	{
		name: "Glacial Rage",
		description: "Triggers a 50 BP Blizzard after using an Ice-type move."
	},
	{
		name: "Immovable Object",
		description:
			"Only damaged by attacks. At full HP, cannot be KO in one hit, stays at 1 HP instead."
	},
	{
		name: "Frenzied Phantom",
		description:
			"Moves hit twice. Second hit does 25% damage. Opponents can't be switched out. Ghosts aren't affected."
	},
	{
		name: "DNA Scramble",
		description: "Changes forms based on the the move used."
	},
	{
		name: "Metallic Jaws",
		description: "Adds Steel type on entry. Biting moves hit twice. 2nd hit does 40% damage."
	},
	{
		name: "Calculative",
		description:
			"Attacks get a 1.3x power boost if it moves last. Grants an additional 1.35x boost to Super-effective moves."
	},
	{
		name: "Deadly Precision",
		description: "Super-effective moves never miss and ignore abilities."
	},
	{
		name: "Embody Aspect",
		description: "+1 Speed on Entry."
	},
	{
		name: "Embody Aspect",
		description: "+1 Attack on Entry."
	},
	{
		name: "Embody Aspect",
		description: "+1 Defense on Entry."
	},
	{
		name: "Embody Aspect",
		description: "+1 Spdef on Entry."
	},
	{
		name: "We Will Rock You",
		description: "Boosts Rock-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Deviate",
		description: "Normal moves become Dark. Dark moves are empowered."
	},
	{
		name: "Sun's Bounty",
		description:
			"Cures own status at the end of every turn in sun. 50% chance to recycle a used Berry every turn, 100% in sun."
	},
	{
		name: "Rite Of Spring",
		description:
			"This Pokémon's Speed gets a 1.5x boost if sun is active. Ups highest attacking stat by 1.5x in sun."
	},
	{
		name: "Headstrong",
		description: "+1 Spdef on entry."
	},
	{
		name: "Firefighter",
		description: "Deals 1.5x damage to Fire. Takes 0.5x damage from Fire."
	},
	{
		name: "Sepia Lens",
		description:
			"Attacks deal double damage if resisted. Blocks priority and reduces special damage by 1/2 in sand."
	},
	{
		name: "Super Sniper",
		description:
			"Critical hits have a 2.25x damage multiplier instead of 1.5x. Attacks hit switching foes with 1/2 Power."
	},
	{
		name: "Woodland Curse",
		description: "Uses Forest's Curse on Entry. Adds Grass type on contact."
	},
	{
		name: "Malodor",
		description: "Suppresses attacker's abilities on contact."
	},
	{
		name: "Blur",
		description: "Uses Speed as defense stat when hit by a contact move."
	},
	{
		name: "Elude",
		description: "Uses Speed as defense stat when hit by a non-contact move."
	},
	{
		name: "Drake Of Rage",
		description:
			"Attacks deal double damage if resisted. No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Reverberate",
		description: "Normal moves are Sound moves."
	},
	{
		name: "Mixed Martial Arts",
		description: "Normal moves are flagged as Punch + Kick moves."
	},
	{
		name: "Strategic Pause",
		description: "+2 crit rate and 1.3x power when moving last."
	},
	{
		name: "Overrule",
		description: "Crits bypass abilities and do 2x damage vs resists."
	},
	{
		name: "Mental Pollution",
		description: "Suppresses others' abilities when it becomes enraged."
	},
	{
		name: "Madness Enhancement",
		description: "Enrages in fog, halves damage when enraged."
	},
	{
		name: "Tentalock",
		description:
			"Trapping moves last 6 turns. Trapping deals 1/6 HP. 50% chance to trap, then drop the their speed by -1 each turn."
	},
	{
		name: "Serpent Bind",
		description: "50% chance to trap, then drop the their speed by -1 each turn."
	},
	{
		name: "Soul Tap",
		description: "Drain 10% HP from foes at the end of each turn in fog."
	},
	{
		name: "Scarecrow",
		description:
			"Lowers foes' Sp. Atk by one stage on entry. Foes can't crit, deal min damage, have 5% less accuracy & no effect chance."
	},
	{
		name: "Ominous Shroud",
		description: "Adds Ghost type on entry. At full HP, halves damage taken from attacks."
	},
	{
		name: "Chilling Presence",
		description: "Triggers a 10 BP Icy Wind on entry."
	},
	{
		name: "Frostbind",
		description: "Inflicting Frostbite also inflicts Disable."
	},
	{
		name: "Glacial Ghost",
		description:
			"This Pokémon's Speed gets a 1.5x boost in hail. Evasion is boosted by 1.25x under hail."
	},
	{
		name: "Tender Affection",
		description: "50% chance to attract on contact. Also works on offense. Fairy gains STAB."
	},
	{
		name: "Wonder Scale",
		description:
			"30% chance to heal its status condition at the end of a turn. Blocks most damage boosting and multihit abilities."
	},
	{
		name: "Overzealous (N)",
		description: "User's super-effective moves have +1 prio."
	},
	{
		name: "Stainless Steel",
		description:
			"Blocks most damage boosting and multihit abilities. Normal moves become Steel. Steel resists Ghost and Dark."
	},
	{
		name: "Temporal Rupture",
		description: "Roar of Time is altered drastically."
	},
	{
		name: "Grass Flute",
		description: "Sound moves inflict Fear."
	},
	{
		name: "Hemotoxin",
		description: "Supresses abilities of the target when they're poisoned."
	},
	{
		name: "Harukaze",
		description: "Setting Grassy Terrain sets Tailwind and vice versa."
	},
	{
		name: "Toxic Surge",
		description: "sets Toxic Terrain on entry."
	},
	{
		name: "Atlantic Ruler",
		description:
			"Adds Water type on entry. Boosts the power of Water-type moves by 1.5x. This Pokémon's Speed gets a 1.5x boost if rain is active."
	},
	{
		name: "Biofilm",
		description: "50% spdef boost under Toxic Terrain."
	},
	{
		name: "Chokehold",
		description: "Binding moves lower speed and paralyze."
	},
	{
		name: "Guardian Coat",
		description: "Blocks weather damage and powders. Takes -20% physical damage."
	},
	{
		name: "Neutralizing Fog",
		description: "Uses Defog on entry."
	},
	{
		name: "Poison Quills",
		description:
			"Enemies lose 1/8 of max HP if they use a contact move. 30% chance to poison on contact. Also works on offense."
	},
	{
		name: "Draconic Might",
		description:
			"Normal moves become Dragon. Dragon moves are empowered. Adds Dragon type on entry."
	},
	{
		name: "Festivities",
		description: "Sound moves become dance moves and vice versa."
	},
	{
		name: "Fey Flight",
		description: "Adds Fairy-type and levitates."
	},
	{
		name: "Best Offense",
		description: "Keen edge moves become special and deal 30% more damage. Moves use 20% of SpDef."
	},
	{
		name: "Impaler",
		description:
			"Boosts the power of horn and drill-based moves by 30%. Also gives them a 30% Bleed chance."
	},
	{
		name: "Magus Blades",
		description:
			"Mega Launcher and Keen Edge moves hit twice for 70% damage. Keen edge moves become special and deal 30% more damage. Moves use 20% of SpDef."
	},
	{
		name: "Lightning Born",
		description: "Adds Electric-type on entry."
	},
	{
		name: "Superheavy",
		description: "Raises Speed by one stage if this Pokémon flinches. Blocks phasing moves."
	},
	{
		name: "World Serpent",
		description:
			"Physical moves get a 1.2x bonus and don't make contact. 50% chance to trap. Then ignores Defense & accuracy checks."
	},
	{
		name: "Lucky Wings",
		description:
			"Doubles chance of secondary effects on its own moves. Boosts the power of wing, wind or air-based moves by 1.3x."
	},
	{
		name: "Komodo",
		description: "Adds Dragon-type + moves have 30% Bad Poison chance."
	},
	{
		name: "Envenom",
		description: "Moves have a 30% chance to poison the target."
	},
	{
		name: "Purple Haze",
		description: "Triggers a 20 BP Poison Gas after using a move."
	},
	{
		name: "Gnashing Cannon",
		description:
			"Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x. Biting moves use SpAtk and deal 30% more damage."
	},
	{
		name: "Hyper Cleanse",
		description: "Immune to status. Halves poison damage taken."
	},
	{
		name: "Molten Coat",
		description: "Normal moves become Rock. Rock moves are empowered and have 50% burn chance."
	},
	{
		name: "Royal Decree",
		description: "Protects itself and ally from priority moves. Glare on entry once per battle."
	},
	{
		name: "Breezy Neigh",
		description: "KOs raise Speed by one stage."
	},
	{
		name: "Dreamscape",
		description:
			"Can move, but is always asleep. Immune to status conditions. Doubles damage if an opponent is sleeping. Pursues sleeping foes. Deals 20% more damage."
	},
	{
		name: "Haste Makes Waste",
		description:
			"Takes 30% less damage if it hasn't moved yet. Attacks get a 1.3x power boost if it moves last."
	},
	{
		name: "Hungry Maws",
		description:
			"Boosts the power of bite/fang moves by 1.3x. Devours 1/2 of the foe when defeating it."
	},
	{
		name: "Thermal Slide",
		description: "Ups speed by 50% in sun or hail."
	},
	{
		name: "Thermomancy",
		description: "Moves inflict burn and frostbite 5x as often."
	},
	{
		name: "Chuckster",
		description: "Once per entry, take 1/2 damage and force-switch the target."
	},
	{
		name: "Heat Sink",
		description: "Redirects Fire moves. Absorbs them, ups highest Atk."
	},
	{
		name: "Relic Stone",
		description: "Other battlers don't benefit from STAB."
	},
	{
		name: "Supercell",
		description: "Summons rain and casts electric terrain on entry. Both last 8 turns."
	},
	{
		name: "Lightning Aspect",
		description: "Absorbs electric moves then ups highest stat by +1."
	},
	{
		name: "Fire Aspect",
		description: "Absorbs fire moves and always burns with fire."
	},
	{
		name: "Ice Plumes",
		description: "Halves damage taken by Special moves. Does NOT double SpDef."
	},
	{
		name: "Blistering Sun",
		description:
			"Intense Sun until switched out. Water-type moves are unusable. Casts a 3-turn Tailwind on entry."
	},
	{
		name: "Molten Core",
		description:
			"User gains +2 Speed when when hit by a Rock-type move. Absorbs Rock-type moves and Stealth Rocks."
	},
	{
		name: "Aurora's Gale",
		description:
			"Boosts own Sp. Atk by 1.5x. Boosts raw stat, not base stat. Casts a 3 turn Aurora Veil on entry. Immune to Hail damage."
	},
	{
		name: "Winter Throne",
		description: "1/8 Damage each turn to non-ice. Heals Ice 1/8 each turn."
	},
	{
		name: "Energy Tap",
		description: "Heals the user for 1/8 of the damage they deal."
	},
	{
		name: "Sludge Spit",
		description: "Triggers a 35 BP Venom Bolt after using an attack."
	},
	{
		name: "Swamp Thing",
		description: "Sets the Swamp Pledge effect on entry."
	},
	{
		name: "Frosty Prescence",
		description: "Uses Mist on entry."
	},
	{
		name: "Chilling Pellets",
		description: "Triggers a 13 BP Icicle Spear when hit by a contact move."
	},
	{
		name: "Paint Shot",
		description: "Mega launcher moves change the target's type to the move used."
	},
	{
		name: "Stonecutter",
		description:
			"Halves damage taken by Rock moves. Rock moves have a 20% boost and ignore abilities."
	},
	{
		name: "Edgelord",
		description: "First Keen Edge move each entry gets +1 priority. Resets on KO."
	},
	{
		name: "Warmonger",
		description: "Boosts the user's Rock, Steel, and Fighting moves by 30%."
	},
	{
		name: "Locust Swarm",
		description: "Changes into Hivemind form until 1/4 HP or less."
	},
	{
		name: "Revelation",
		description: "Changes into Revelation form until 1/4 HP or less."
	},
	{
		name: "Curse of Famine",
		description: "Eats terrain, restores hp, and boosts a defense."
	},
	{
		name: "Crystalline Armor",
		description: "Reflects stat drops and immune to critical hits."
	},
	{
		name: "Soul Harvest",
		description: "Fainted Pokemon increase your offenses and spdef by 5%."
	},
	{
		name: "Thick Blubber",
		description: "Take 1/4 damage from fire and ice in return for having 1/2 speed."
	},
	{
		name: "Craving",
		description: "Eat a random berry at the end of the turn."
	},
	{
		name: "Rat King",
		description: "Allies with a BST below 400 get their stats boosted by 50%."
	},
	{
		name: "Crispy Cream",
		description: "30% to inflict burn/frostbite when hit by a contact move."
	},
	{
		name: "Deep Fried",
		description: "Summons a sea of fire on entry."
	},
	{
		name: "Food Lovers",
		description:
			"Heals partner for 25% of its max HP on switch-in and reduces the damage they take by 50% during double battles."
	},
	{
		name: "Lunar Wrath",
		description: "Triggers a 50 BP Moongeist Beam after using a Ghost move."
	},
	{
		name: "Spyware",
		description: "Sharply raises a stat based on foe's strong point."
	},
	{
		name: "Virus",
		description: "Electric moves have 30% chance to poison as well."
	},
	{
		name: "Power Leak",
		description: "When hit, set up Electric Terrain."
	},
	{
		name: "Backup Power",
		description: "Revives at 25% HP once after fainting in Electric Terrain."
	},
	{
		name: "Sand Fiend",
		description:
			"Ups highest attacking stat by 1.5x in sand. Blocks priority and reduces special damage by 1/2 in sand."
	},
	{
		name: "Moustache",
		description:
			"Lowers Speed of enemies that make contact with this Pokémon. Getting hit raises Def by +1. Critical hits maximize Defense."
	},
	{
		name: "Depth Explorer",
		description: "Boosts field moves by 50%. Cut, Surf, Strength etc. Grants a 1.2x accuracy boost."
	},
	{
		name: "Dune Veil",
		description:
			"Protects its side from status and secondary effects in sand. Recovers 1/16 of max HP at the end of each turn."
	},
	{
		name: "Strong Foundation",
		description: "Takes 1/2 Water and Ground damage and can't be forced out."
	},
	{
		name: "Fog Machine",
		description: "When hit, Set up Eerie Fog."
	},
	{
		name: "Drop Blocks",
		description: "When hit, set up spikes."
	},
	{
		name: "Turf War",
		description: "Destroys terrain and boosts highest stat on entry."
	},
	{
		name: "Greedy",
		description: "Uses Thief when it loses an item."
	},
	{
		name: "Lightsaber",
		description: "Adds Fire-type. Keen Edge moves have 25% burn or paralysis."
	},
	{
		name: "Loose Thorns",
		description: "Sets Creeping Thorns when hit by a contact move."
	},
	{
		name: "Musical Notes",
		description: "Status moves become sound-based."
	},
	{
		name: "Laser Drill",
		description: "Horn moves have a 50% burn chance."
	},
	{
		name: "Strikeout",
		description: "Forces the foe out if they don't attack for 3 turns."
	},
	{
		name: "Home Run",
		description: "Landing a crit boosts your 3 lowest stats once per turn."
	},
	{
		name: "Bruiser",
		description: "Adds Fighting type on entry."
	},
	{
		name: "Narcissist",
		description: "When a stat is lowered, sharply raise both offenses."
	},
	{
		name: "Let's Dance",
		description: "Uses Teeter Dance on entry, Confusing the field."
	},
	{
		name: "Dragonfruit",
		description: "Adds Dragon type on entry. Enemies lose 1/8 of max HP if they use a contact move."
	},
	{
		name: "Rocky Exterior",
		description: "Adds Rock type on entry."
	},
	{
		name: "Lead Claws",
		description:
			"Boosts the power of contact moves by 1.3x. Normal moves become Rock. Rock moves are empowered."
	},
	{
		name: "Flawless Precision",
		description: "Super-effective moves never miss, always crit and ignore abilities."
	},
	{
		name: "Chainsaw",
		description: "Keen edge attacks lower defense by -1."
	},
	{
		name: "Galeforce Wings",
		description: "Flying moves get +1 Priority."
	},
	{
		name: "Empress",
		description:
			"Protects itself and ally from priority moves. Deals 1.25x to same gender. Takes 0.75x from opposite gender."
	},
	{
		name: "Mashed Potato",
		description: "Syrup Bomb effect on the foe for 3 turns."
	},
	{
		name: "Rainbow Scales",
		description:
			"Halves damage taken by Special moves. Does NOT double SpDef. Summons the Rainbow Pledge effect on entry."
	},
	{
		name: "Taste the Rainbow",
		description: "Summons the Rainbow Pledge effect on entry."
	},
	{
		name: "Hypnotic Touch",
		description: "20% chance to sleep on contact. Also works on offense."
	},
	{
		name: "Hydra",
		description: "Hits as many times, as it has heads. KOs raise SpAtk by one stage."
	},
	{
		name: "Wings of Pestilence",
		description: "Every attack has a 20% Bleed chance and 10% Curse chance."
	},
	{
		name: "Sundae",
		description: "Summons hail on entry. Lasts 8 turns. Heals 1/8 of max HP every turn in hail."
	},
	{
		name: "Ice Picks",
		description:
			"Boosts the power of contact moves by 1.3x. This Pokémon's Speed gets a 1.5x boost in hail."
	},
	{
		name: "Hammer Fist",
		description: "Boosts punch and hammer moves by 25%."
	},
	{
		name: "Mach 3",
		description:
			"Super-effective moves never miss and ignore abilities. Moves use 20% of its Speed stat additionally."
	},
	{
		name: "Raging Storm",
		description: "Ups highest attacking stat by 1.5x in rain."
	},
	{
		name: "Sumo Guard",
		description:
			"Contact moves add 20% Def to attack. Paralysis-immune. Takes 1/2 damage from Fire-type and Ice-type attacks."
	},
	{
		name: "Sumo Wrestler",
		description: "Triggers a 20 BP Circle Throw at the end of each 2nd turn."
	},
	{
		name: "Cosmic Wings",
		description: "Flying moves become Fairy-type."
	},
	{
		name: "Cosmic Dust",
		description: "Only damaged by attacks. Deals 2x damage vs confused and enraged foes."
	},
	{
		name: "Cool Exit",
		description: "Uses Chilly Reception at the end of your 2nd turn."
	},
	{
		name: "Devious Present",
		description: "Boosts Ice and throwing moves by 50%."
	},
	{
		name: "Christmas Nightmare",
		description: "Enemies lose 1/8 of max HP when in hail."
	},
	{
		name: "Sap Trap",
		description: "Lowers foe's speed at the end of turns. At -3 they get trapped."
	},
	{
		name: "Dead Bark",
		description: "Adds Ghost type. Takes 15% less damage. 30% less damage if SE."
	},
	{
		name: "Echolocation",
		description: "In fog, deal 20% more damage and never miss."
	},
	{
		name: "Massive Pelt",
		description:
			"Lowers Speed of enemies that make contact with this Pokémon. Takes 1/2 damage from contact moves but Fire moves hurt it 2x more."
	},
	{
		name: "I Am Steve",
		description: "Uses No Retreat on entry."
	},
	{
		name: "Tangled Tails",
		description:
			"Contact attacks make foes move last for 5 turns. Trapping moves last 6 turns. Trapping deals 1/6 HP."
	},
	{
		name: "Foamy Web",
		description: "Casts an unremovable Sticky Web on entry. Lasts 5 turns."
	},
	{
		name: "Sharp Talons",
		description: "Kicking moves have a 50% Bleed chance."
	},
	{
		name: "Zen Garden",
		description: "Sets up Grassy or Psychic Terrain at random."
	},
	{
		name: "Tummyache",
		description:
			"Takes 1/2 damage from Fire-type and Ice-type attacks. Poison is super effective vs Steel. Can poison any type."
	},
	{
		name: "Hypnotic Trance",
		description: "Hypnosis never misses and also causes Confusion."
	},
	{
		name: "Brain Overload",
		description: "When hit, sets up Psychic Terrain."
	},
	{
		name: "Brain Mass",
		description: "Halves damage taken while at full HP."
	},
	{
		name: "Chestnut Shield",
		description: "Only damaged by attacks. Immune to projectile, ball, or bomb-based moves."
	},
	{
		name: "Chestnut Axe",
		description: "Boosts the power of slashing moves by 1.3x. Grass moves become Keen Edge boosted."
	},
	{
		name: "Giant Shuriken",
		description: "Water Shuriken hits once with 100 BP and +1 crit."
	},
	{
		name: "Rain Shroud",
		description: "Ups evasion by 30% in rain."
	},
	{
		name: "Witch Broom",
		description:
			"Moves hit twice. Second hit does 25% damage. Adds Psychic type to itself. Avoids Ground attacks."
	},
	{
		name: "Angelic Wings",
		description:
			"Takes 30% less damage from Special attacks. Boosts the power of wing, wind or air-based moves by 1.3x."
	},
	{
		name: "Wrestle Showman",
		description: "Flying Press gains +10 BP and causes Taunt."
	},
	{
		name: "Fire Ruler",
		description:
			"Lowering any stats on its side raises Atk and Def. Takes 35% less damage from Super-effective moves."
	},
	{
		name: "Chandelier",
		description: "Grants a 1.2x accuracy boost. Moves inflict burn 5x as often."
	},
	{
		name: "Foggy Eye",
		description: "While in Fog, boost Ghost moves by 50% and resist Ghost moves."
	},
	{
		name: "Toxic Shell",
		description:
			"Immune to critical hits. Takes 20% less damage from attacks. 30% chance to poison on contact. Also works on offense."
	},
	{
		name: "Hand Barnacles",
		description: "Hits as many times, as it has heads. Water gains STAB."
	},
	{
		name: "Voltron",
		description:
			"Adds Steel type on entry. Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Fire's Wrath",
		description:
			"Lowers foes' Atk and Sp. Atk by one stage on entry. 10% burn chance on non contact moves."
	},
	{
		name: "Emperor's Wrath",
		description: "Lowering any stats on its side raises Atk, Def, SpAtk and SpDef."
	},
	{
		name: "Lepidopteran",
		description:
			"Boosts Bug-type moves by 1.2x, or 1.5x when under 1/3 HP. Ignores foes' stat changes, both positive and negative ones."
	},
	{
		name: "Break it Down",
		description: "After using an attack, follow up with a 20 BP Rapid Spin."
	},
	{
		name: "Talon Trap",
		description: "50% chance to trap on contact. 100% if entered this turn."
	},
	{
		name: "Backstreet Boy",
		description:
			"Boosts the power of kicking moves by 1.3x. Kicking moves are Dance moves and vice-versa."
	},
	{
		name: "Backflip",
		description: "Triggers a 50 BP Chip Away after using a Dance move."
	},
	{
		name: "Crushing Jaw",
		description:
			"Boosts the power of bite/fang moves by 1.3x. Biting moves have a 50% chance to lower defense."
	},
	{
		name: "Eternal Flower",
		description: "Reduces the stats of other Megas by 20%."
	},
	{
		name: "Nihil Blaster",
		description:
			"Cancels aura abilities and makes them 25% weaker instead. Boosts Beam/Pump/Cannon/Shot/Gun/Pulse etc. moves by 1.3x."
	},
	{
		name: "Hollow Ice Zone",
		description: "Ice-type moves apply Ice Statue and then make the user switch."
	},
	{
		name: "Overcast",
		description: "Summons Eerie Fog on entry. Sets Mist on entry."
	},
	{
		name: "Cryostasis",
		description: "Moves inflict frostbite 5x as often. Frostbite causes flinching."
	},
	{
		name: "Flower Necklace",
		description: "This Pokémon's SpDef gets a 1.5x boost in Grassy Terrain."
	},
	{
		name: "Mega Drill",
		description: "Boosts the power of horn and drill-based moves by 69%."
	},
	{
		name: "Mucus Membrane",
		description:
			"Takes 30% less damage from attacks. Lowers Speed of enemies that make contact with this Pokémon."
	},
	{
		name: "Lucha Libre",
		description:
			"Protects itself and ally from priority moves. Raises Attack by two stages if stats are lowered by an enemy."
	},
	{
		name: "Curlipede",
		description:
			"Casts Defense Curl on entry and gives +1 priority once to the first biting move used."
	},
	{
		name: "Storm Cloud",
		description: "Summon rain on entry for 8 turns. Electric gains STAB."
	},
	{
		name: "Waterborne",
		description: "Adds Water type on entry. Increases STAB from 1.5x to 2x."
	},
	{
		name: "Drakelp Head",
		description: "Weakens first move taken and drops opponent's attack."
	},
	{
		name: "Polarity",
		description: "Increases the party's highest stat by 30%."
	},
	{
		name: "Resilience",
		description: "Heal 1/4 of max HP whenever below 1/2 health."
	},
	{
		name: "Going Berserk",
		description:
			"Boosts highest attack by +1 when at 1/2 of max HP or lower. No recharge after a KO, if it usually would need to recharge."
	},
	{
		name: "Thunder Clouds",
		description: "Triggers a 35 BP Thunderbolt after using a special move."
	},
	{
		name: "Unrelenting",
		description: "All attacking moves can hit 2-5 times."
	},
	{
		name: "Elemental Aegis",
		description: "Takes 1/2 damage from Fire, Electric and Water-type attacks."
	},
	{
		name: "Aegis Ward",
		description: "Takes 1/2 damage from Dark, Ghost and Psychic-type attacks."
	},
	{
		name: "Shattered Armor",
		description:
			"Immune to critical hits. Takes 20% less damage from attacks. Sets a layer of Spikes when hit by a contact move."
	},
	{
		name: "Acid Reflux",
		description: "Triggers a 20 BP Acid when it takes damage."
	},
	{
		name: "Ghost Frenzy",
		description:
			"Moves hit twice. Second hit does 25% damage. Dealing a KO heals 1/4 of this Pokémon's max HP."
	},
	{
		name: "Survivor Bias",
		description: "Not very effective moves can't cause fainting."
	},
	{
		name: "Bandit",
		description:
			"Dealing a KO heals 1/4 of this Pokémon's max HP. Moves with 60 BP or less get a 1.5x boost."
	},
	{
		name: "Fortress",
		description:
			"Takes 35% less damage from Super-effective moves. Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "Bird of Prey",
		description:
			"Boosts the power of contact moves by 1.3x. Normal/Fighting can hit Ghosts. Immune to Intimidate/Scare."
	},
	{
		name: "Feathercoat",
		description: "Takes 10% less damage from attacks, 20% if resisted."
	},
	{
		name: "Power Outage",
		description: "Boosts first Electric attack by 2x then loses Electric type."
	},
	{
		name: "Electro Booster",
		description: "Uses Magnet Rise on entry."
	},
	{
		name: "Current Crash",
		description:
			"Moves causing recoil damage deal 1.2x more damage. Triggers Smite at 20% power when using an Electric move."
	},
	{
		name: "Daredevil",
		description: "+1 Atk after using recoil move. 1/2 recoil damage."
	},
	{
		name: "Frost Dragon",
		description: "Triggers a 50 BP Blizzard after using a Dragon or Ice-type move."
	},
	{
		name: "Thermal Entropy",
		description:
			"Ups Attack when hit by Fire. Immune to burn. Halves damage taken from Fire-type moves."
	},
	{
		name: "Sinister Claws",
		description: "Keen edge moves become special, deal 30% more damage and lower SpDef."
	},
	{
		name: "Petal Shield",
		description: "Maxes Def on entry. -1 Def when hit."
	},
	{
		name: "Mob Boss",
		description:
			"Lowers foes' Sp. Atk by two stages on entry. Normal moves become Dark. Dark moves are empowered."
	},
	{
		name: "Ghost Pepper",
		description: "Grass moves have a 30% to cause burn."
	},
	{
		name: "Droideka",
		description:
			"Halves damage taken from Fire-type moves. Takes no burn damage. Immune to critical hits. Takes 20% less damage from attacks."
	},
	{
		name: "3 > 1",
		description:
			"Hits as many times, as it has heads. Boosts Water-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Icicle Fist",
		description:
			"Boosts the power of punching moves by 1.3x and gives them a 30% chance to cause frostbite."
	},
	{
		name: "Abominable Monster",
		description: "Ups SpDef by 1.5x in hail."
	},
	{
		name: "Wind Chimes",
		description:
			"Ups sound moves by 30% and makes them hit both foes. Triggers a 30 BP Hyper Voice when hit."
	},
	{
		name: "Unstable Core",
		description:
			"The Pokémon's moves use 20% of its Defense or SpDef additionally. Triggers a 100 BP Explosion or Outburst after fainting."
	},
	{
		name: "Aura Armor",
		description: "Takes 35% reduced damage."
	},
	{
		name: "Deflect",
		description: "Counters with 20 BP Vacuum Wave when hit. Takes 20% less damage."
	},
	{
		name: "Overwhelming Mind",
		description: "Boosts Psychic-type moves by 1.3x, or 1.8x when below 1/3 HP."
	},
	{
		name: "Duality",
		description:
			"Own moves bypass Substitutes and damage reduction screens. Raises Sp. Atk by two stages if stats are lowered by an enemy."
	},
	{
		name: "Reaper's Embarce",
		description:
			"Boosts the power of contact moves by 1.3x. Boosts Dark-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Foul Energy",
		description: "Boosts Dark-type moves by 1.2x, or 1.5x when under 1/3 HP."
	},
	{
		name: "Jungle Fever",
		description: "If Grassy Terrain is active, gets a 1.5x Speed boost."
	},
	{
		name: "King of the Jungle",
		description:
			"Own moves bypass Substitutes and damage reduction screens. Deals 1.5x more damage to Grass."
	},
	{
		name: "Warrior's Spear",
		description:
			"Boosts the power of horn and drill-based moves by 30%. Normal moves become Fighting. Fighting moves are empowered."
	},
	{
		name: "Sleek Scales",
		description: "The Pokémon uses +15% of its Speed when defending."
	},
	{
		name: "Rock Armor",
		description: "Adds Rock type on entry. Takes 10% less damage from attacks."
	},
	{
		name: "Smoldering Wood",
		description:
			"Halves damage taken by Grass moves. Boosts own Grass moves by 1.2x. 30% chance to burn on contact, 20% non. Also works on offense."
	},
	{
		name: "Slime Mold",
		description: "Can't lose its item. Lowers Speed of enemies that make contact with this Pokémon."
	}
];
