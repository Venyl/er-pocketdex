<script lang="ts">
	const abilities = [
		{
			name: '-------',
			desc: 'Empty ability slot.',
			id: 0
		},
		{
			name: 'Stench',
			desc: '10% chance to flinch targets. Toxic terrain is permanent.',
			id: 1
		},
		{
			name: 'Drizzle',
			desc: 'Summons rain on entry. Lasts 8 turns.',
			id: 2
		},
		{
			name: 'Speed Boost',
			desc: 'Raises own Speed by one stage after every turn.',
			id: 3
		},
		{
			name: 'Battle Armor',
			desc: 'Immune to critical hits. Takes 20% less damage from attacks.',
			id: 4
		},
		{
			name: 'Sturdy',
			desc: 'At full HP, cannot be KO in one hit, stays at 1 HP instead.',
			id: 5
		},
		{
			name: 'Damp',
			desc: 'Makes foe Water-type on contact. Also works on offense.',
			id: 6
		},
		{
			name: 'Limber',
			desc: 'Para immune, takes half recoil, immune to self stat drops.',
			id: 7
		},
		{
			name: 'Sand Veil',
			desc: 'Evasion is boosted by 1.25x while a sandstorm is active.',
			id: 8
		},
		{
			name: 'Static',
			desc: '30% chance to paralyze on contact, 10% on non-contact.',
			id: 9
		},
		{
			name: 'Volt Absorb',
			desc: 'Heals 25% of max HP when hit by an Electric-type move.',
			id: 10
		},
		{
			name: 'Water Absorb',
			desc: 'Heals 25% of max HP when hit by a Water-type move.',
			id: 11
		},
		{
			name: 'Oblivious',
			desc: 'Immune to infatuation, Scare, Intimidate and Taunt.',
			id: 12
		},
		{
			name: 'Cloud Nine',
			desc: 'Clears weather and prevents its effects.',
			id: 13
		},
		{
			name: 'Compound Eyes',
			desc: 'Grants a 1.3x accuracy boost.',
			id: 14
		},
		{
			name: 'Insomnia',
			desc: 'Cannot fall asleep. Rest fails if used.',
			id: 15
		},
		{
			name: 'Color Change',
			desc: 'Changes type to a resist or an immunity before getting hit.',
			id: 16
		},
		{
			name: 'Immunity',
			desc: 'Cannot be poisoned. Halves damage taken from Poison moves.',
			id: 17
		},
		{
			name: 'Flash Fire',
			desc: 'Powers up Fire-type moves by 1.5x if hit by a Fire-type move.',
			id: 18
		},
		{
			name: 'Shield Dust',
			desc: 'Immune to added move effects, hazards, and powder moves.',
			id: 19
		},
		{
			name: 'Own Tempo',
			desc: 'Immune to confusion, Intimidate and Scare.',
			id: 20
		},
		{
			name: 'Suction Cups',
			desc: "Cannot be forced to switch out by an enemy's move.",
			id: 21
		},
		{
			name: 'Intimidate',
			desc: "Lowers foes' Atk by one stage on entry.",
			id: 22
		},
		{
			name: 'Shadow Tag',
			desc: "Opponents can't be switched out. Ghosts aren't affected.",
			id: 23
		},
		{
			name: 'Rough Skin',
			desc: 'Enemies lose 1/8 of max HP if they use a contact move.',
			id: 24
		},
		{
			name: 'Wonder Guard',
			desc: 'Is only hit by Super-effective attacks or indirect damage.',
			id: 25
		},
		{
			name: 'Levitate',
			desc: 'Immune to Ground-type moves. Ups own Flying moves by 1.25x.',
			id: 26
		},
		{
			name: 'Effect Spore',
			desc: '30% chance to inflict SLP, PARA or PSN if hit by a contact move.',
			id: 27
		},
		{
			name: 'Synchronize',
			desc: 'Enemies inflicting status on this Pokémon get same status.',
			id: 28
		},
		{
			name: 'Clear Body',
			desc: 'Immune to stat drops.',
			id: 29
		},
		{
			name: 'Natural Cure',
			desc: 'Heals status condition upon switching out.',
			id: 30
		},
		{
			name: 'Lightning Rod',
			desc: 'Redirects Electric moves. Absorbs them, ups highest Atk.',
			id: 31
		},
		{
			name: 'Serene Grace',
			desc: 'Doubles chance of secondary effects on its own moves.',
			id: 32
		},
		{
			name: 'Swift Swim',
			desc: "This Pokémon's Speed gets a 1.5x boost if rain is active.",
			id: 33
		},
		{
			name: 'Chlorophyll',
			desc: "This Pokémon's Speed gets a 1.5x boost if sun is active.",
			id: 34
		},
		{
			name: 'Illuminate',
			desc: 'Grants a 1.2x accuracy boost.',
			id: 35
		},
		{
			name: 'Trace',
			desc: "Copies the foe's ability. Does not copy innates.",
			id: 36
		},
		{
			name: 'Huge Power',
			desc: 'Doubles own Attack stat. Boosts raw stat, not base stat.',
			id: 37
		},
		{
			name: 'Poison Point',
			desc: '30% chance to poison on contact. Also works on offense.',
			id: 38
		},
		{
			name: 'Inner Focus',
			desc: 'Blocks flinch, Intimidate, Scare. Focus Blast never misses.',
			id: 39
		},
		{
			name: 'Magma Armor',
			desc: 'Frostbite-immune. Takes 30% less dmg from Water/Ice-type moves.',
			id: 40
		},
		{
			name: 'Water Veil',
			desc: 'Burn-immune. Casts Aqua Ring on entry.',
			id: 41
		},
		{
			name: 'Magnet Pull',
			desc: "Traps opposing Steel-types. Ghosts aren't affected.",
			id: 42
		},
		{
			name: 'Soundproof',
			desc: 'Immune to sound-based moves.',
			id: 43
		},
		{
			name: 'Rain Dish',
			desc: 'Heals 1/8 of max HP every turn if rain is active.',
			id: 44
		},
		{
			name: 'Sand Stream',
			desc: 'Summons a sandstorm on entry. Lasts 8 turns.',
			id: 45
		},
		{
			name: 'Pressure',
			desc: "Doubles foe's PP usage. Clears stat buffs on entry.",
			id: 46
		},
		{
			name: 'Thick Fat',
			desc: 'Takes 1/2 damage from Fire-type and Ice-type attacks.',
			id: 47
		},
		{
			name: 'Early Bird',
			desc: 'Awakens twice as fast from sleep.',
			id: 48
		},
		{
			name: 'Flame Body',
			desc: '30% chance to burn on contact, 20% non. Also works on offense.',
			id: 49
		},
		{
			name: 'Run Away',
			desc: 'Guarantees fleeing. Raises Speed if stats lowered by an enemy.',
			id: 50
		},
		{
			name: 'Keen Eye',
			desc: 'Immune to accuracy drops. Grants a 1.2x accuracy boost.',
			id: 51
		},
		{
			name: 'Hyper Cutter',
			desc: "Enemies can't lower Atk/SpAtk. Contact moves get +1 Crit.",
			id: 52
		},
		{
			name: 'Pickup',
			desc: 'Removes all hazards on entry. Not immune to hazards.',
			id: 53
		},
		{
			name: 'Truant',
			desc: "Can't use attacking moves twice in a row.",
			id: 54
		},
		{
			name: 'Hustle',
			desc: '0.9x accuracy. Boosts damage by 1.4x.',
			id: 55
		},
		{
			name: 'Cute Charm',
			desc: '50% chance to attract on contact. Also works on offense.',
			id: 56
		},
		{
			name: 'Plus',
			desc: 'Deals double damage if an ally Pokémon has Minus or Plus.',
			id: 57
		},
		{
			name: 'Minus',
			desc: 'Deals double damage if an ally Pokémon has Minus or Plus.',
			id: 58
		},
		{
			name: 'Forecast',
			desc: 'Changes form with the weather. Attacks when setting weather.',
			id: 59
		},
		{
			name: 'Sticky Hold',
			desc: "Can't lose its item.",
			id: 60
		},
		{
			name: 'Shed Skin',
			desc: '30% chance to heal its status condition at the end of a turn.',
			id: 61
		},
		{
			name: 'Guts',
			desc: 'Ups Atk by 1.5x if suffering from a status condition.',
			id: 62
		},
		{
			name: 'Marvel Scale',
			desc: 'Ups Def by 1.5x when statused.',
			id: 63
		},
		{
			name: 'Liquid Ooze',
			desc: 'Draining causes harm to enemies instead of healing them.',
			id: 64
		},
		{
			name: 'Overgrow',
			desc: 'Boosts Grass-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 65
		},
		{
			name: 'Blaze',
			desc: 'Boosts Fire-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 66
		},
		{
			name: 'Torrent',
			desc: 'Boosts Water-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 67
		},
		{
			name: 'Swarm',
			desc: 'Boosts Bug-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 68
		},
		{
			name: 'Rock Head',
			desc: 'Immune to recoil damage, but not immune to Explosion/crash dmg.',
			id: 69
		},
		{
			name: 'Drought',
			desc: 'Summons sun on entry. Lasts 8 turns.',
			id: 70
		},
		{
			name: 'Arena Trap',
			desc: "Enemies can't flee. Ghosts and ungrounded Pokémon are immune.",
			id: 71
		},
		{
			name: 'Vital Spirit',
			desc: "Can't fall asleep. Fighting-type moves heal status.",
			id: 72
		},
		{
			name: 'White Smoke',
			desc: 'Sets Smokescreen for 3 turns on switch-in.',
			id: 73
		},
		{
			name: 'Pure Power',
			desc: 'Doubles own Sp.Atk stat. Boosts raw stat, not base stat.',
			id: 74
		},
		{
			name: 'Shell Armor',
			desc: 'Immune to critical hits. Takes 20% less damage from attacks.',
			id: 75
		},
		{
			name: 'Air Lock',
			desc: 'Cloud Nine + Air Blower.',
			id: 76
		},
		{
			name: 'Tangled Feet',
			desc: 'Uses Speed as defensive stat when confused or enraged.',
			id: 77
		},
		{
			name: 'Motor Drive',
			desc: 'Boosts Speed instead of being hit by Electric-type moves.',
			id: 78
		},
		{
			name: 'Rivalry',
			desc: 'Deals 1.25x to same gender. Takes .75x from opposite gender.',
			id: 79
		},
		{
			name: 'Steadfast',
			desc: 'Raises Speed by one stage if this Pokémon flinches.',
			id: 80
		},
		{
			name: 'Snow Cloak',
			desc: 'Evasion is boosted by 1.25x under hail.',
			id: 81
		},
		{
			name: 'Gluttony',
			desc: 'Eats berries early. Berries also restore 1/3 of max HP.',
			id: 82
		},
		{
			name: 'Anger Point',
			desc: 'Getting hit raises Atk by +1. Critical hits maximize Attack.',
			id: 83
		},
		{
			name: 'Unburden',
			desc: 'Consuming its held item doubles Speed until switched out.',
			id: 84
		},
		{
			name: 'Heatproof',
			desc: 'Halves damage taken from Fire-type moves. Takes no burn damage.',
			id: 85
		},
		{
			name: 'Simple',
			desc: 'Doubles all stat changes on this Pokémon.',
			id: 86
		},
		{
			name: 'Dry Skin',
			desc: 'Water/Rain heals. Fire/Sun hurts.',
			id: 87
		},
		{
			name: 'Download',
			desc: 'Raises Atk/Sp. Atk by one stage depending on opponent.',
			id: 88
		},
		{
			name: 'Iron Fist',
			desc: 'Boosts the power of punching moves by 1.3x.',
			id: 89
		},
		{
			name: 'Poison Heal',
			desc: 'Restores 1/8 of max HP after each turn if poisoned.',
			id: 90
		},
		{
			name: 'Adaptability',
			desc: 'Increases STAB from 1.5x to 2x.',
			id: 91
		},
		{
			name: 'Skill Link',
			desc: 'Multi-hit moves always hit the maximum number of times.',
			id: 92
		},
		{
			name: 'Hydration',
			desc: 'Cures own status at the end of every turn in rain.',
			id: 93
		},
		{
			name: 'Solar Power',
			desc: 'Ups highest attacking stat by 1.5x in sun.',
			id: 94
		},
		{
			name: 'Quick Feet',
			desc: 'Ups Speed by 1.5x if suffering from a status condition.',
			id: 95
		},
		{
			name: 'Normalize',
			desc: 'Its moves become Normal-type, get 1.1x boost, ignore resists.',
			id: 96
		},
		{
			name: 'Sniper',
			desc: 'Critical hits have a 2.25x dmg multiplier instead of 1.5x.',
			id: 97
		},
		{
			name: 'Magic Guard',
			desc: 'Only damaged by attacks.',
			id: 98
		},
		{
			name: 'No Guard',
			desc: 'Attacks used by and on this Pokémon bypass accuracy checks.',
			id: 99
		},
		{
			name: 'Stall',
			desc: "Takes 30% less damage if it hasn't moved yet.",
			id: 100
		},
		{
			name: 'Technician',
			desc: 'Moves with 60 BP or less get a 1.5x boost.',
			id: 101
		},
		{
			name: 'Leaf Guard',
			desc: 'Cures own status at the end of every turn in sun.',
			id: 102
		},
		{
			name: 'Klutz',
			desc: 'Own held item has no effect. Mega Stones are unaffected.',
			id: 103
		},
		{
			name: 'Mold Breaker',
			desc: 'Moves hit through abilities. Also affects innates.',
			id: 104
		},
		{
			name: 'Super Luck',
			desc: 'Raises critical-hit ratio of own moves by +1.',
			id: 105
		},
		{
			name: 'Aftermath',
			desc: 'After fainting uses 100 BP Explosion or Outburst.',
			id: 106
		},
		{
			name: 'Anticipation',
			desc: 'Senses Super-effective moves. Dodges one Super-effective hit.',
			id: 107
		},
		{
			name: 'Forewarn',
			desc: 'Casts an 80 BP Future Sight on entry.',
			id: 108
		},
		{
			name: 'Unaware',
			desc: "Ignores foes' stat changes, both positive and negative ones.",
			id: 109
		},
		{
			name: 'Tinted Lens',
			desc: 'Attacks deal double damage if resisted.',
			id: 110
		},
		{
			name: 'Filter',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 111
		},
		{
			name: 'Slow Start',
			desc: 'Halves Offenses and Speed during the first 5 turns out.',
			id: 112
		},
		{
			name: 'Scrappy',
			desc: 'Normal/Fighting can hit Ghosts. Immune to Intimidate/Scare.',
			id: 113
		},
		{
			name: 'Storm Drain',
			desc: 'Redirects Water moves. Absorbs them, ups highest Atk.',
			id: 114
		},
		{
			name: 'Ice Body',
			desc: 'Heals 1/8 of max HP every turn in hail.',
			id: 115
		},
		{
			name: 'Solid Rock',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 116
		},
		{
			name: 'Snow Warning',
			desc: 'Summons hail on entry. Lasts 8 turns.',
			id: 117
		},
		{
			name: 'Honey Gather',
			desc: 'Has a 50% chance to find Honey each turn.',
			id: 118
		},
		{
			name: 'Frisk',
			desc: "Checks foes' item and disables their items for two turns.",
			id: 119
		},
		{
			name: 'Reckless',
			desc: 'Moves causing recoil damage deal 1.2x more damage.',
			id: 120
		},
		{
			name: 'Multitype',
			desc: "Held Plate item decides holder's type.",
			id: 121
		},
		{
			name: 'Flower Gift',
			desc: "Increases the party's SpAtk and SpDef by 1.5x in Sun.",
			id: 122
		},
		{
			name: 'Bad Dreams',
			desc: 'Sleeping Pokémon lose 1/4 of max HP at the end of each turn.',
			id: 123
		},
		{
			name: 'Pickpocket',
			desc: "Steals the foe's held item on contact.",
			id: 124
		},
		{
			name: 'Sheer Force',
			desc: 'Exchanges added effects on its moves for 1.3x more power.',
			id: 125
		},
		{
			name: 'Contrary',
			desc: 'Stat raises turn into stat drops for this Pokémon and vice versa.',
			id: 126
		},
		{
			name: 'Unnerve',
			desc: "Foes can't use consumable items.",
			id: 127
		},
		{
			name: 'Defiant',
			desc: 'Raises Attack by two stages if stats are lowered by an enemy.',
			id: 128
		},
		{
			name: 'Defeatist',
			desc: 'Halves Atk and Sp. Atk stats if user is below 1/3 of max HP.',
			id: 129
		},
		{
			name: 'Cursed Body',
			desc: '30% chance to disable moves if enemy makes contact.',
			id: 130
		},
		{
			name: 'Healer',
			desc: "30% chance to heal user or ally's status at the end of each turn.",
			id: 131
		},
		{
			name: 'Friend Guard',
			desc: 'Reduces damage that ally takes by 50% in double battles.',
			id: 132
		},
		{
			name: 'Weak Armor',
			desc: 'If hit by a contact attack: -1 Defense and +2 Speed.',
			id: 133
		},
		{
			name: 'Heavy Metal',
			desc: 'Take half damage from Ghost and Dark.',
			id: 134
		},
		{
			name: 'Light Metal',
			desc: "Boosts Speed by 1.3x and halves this Pokémon's weight.",
			id: 135
		},
		{
			name: 'Multiscale',
			desc: 'At full HP, halves damage taken from attacks',
			id: 136
		},
		{
			name: 'Toxic Boost',
			desc: 'Ups Atk by 1.5x if poisoned. Immune to Poison status damage.',
			id: 137
		},
		{
			name: 'Flare Boost',
			desc: 'Ups Sp. Atk by 1.5x if burned. Ignites in fog.',
			id: 138
		},
		{
			name: 'Harvest',
			desc: '50% chance to recycle a used Berry every turn, 100% in sun.',
			id: 139
		},
		{
			name: 'Telepathy',
			desc: 'Protects team from friendly fire.',
			id: 140
		},
		{
			name: 'Moody',
			desc: 'Sharply raises one stat and lowers another each turn.',
			id: 141
		},
		{
			name: 'Overcoat',
			desc: 'Blocks weather dmg and powders. Takes -20% special damage.',
			id: 142
		},
		{
			name: 'Poison Touch',
			desc: '30% chance to poison on contact. Also works on offense.',
			id: 143
		},
		{
			name: 'Regenerator',
			desc: 'Heals 1/3 of max HP upon switching out.',
			id: 144
		},
		{
			name: 'Big Pecks',
			desc: 'Boosts the power of contact moves by 1.3x.',
			id: 145
		},
		{
			name: 'Sand Rush',
			desc: "This Pokémon's Speed gets a 1.5x boost in a sandstorm.",
			id: 146
		},
		{
			name: 'Wonder Skin',
			desc: 'Blocks most damage boosting and multihit abilities.',
			id: 147
		},
		{
			name: 'Analytic',
			desc: 'Attacks get a 1.3x power boost if it moves last.',
			id: 148
		},
		{
			name: 'Illusion',
			desc: 'Appears as last party slot and boosts power by 1.3x until hit.',
			id: 149
		},
		{
			name: 'Imposter',
			desc: 'Transforms into the foe on entry.',
			id: 150
		},
		{
			name: 'Infiltrator',
			desc: 'Own moves bypass Substitutes and damage reduction screens.',
			id: 151
		},
		{
			name: 'Mummy',
			desc: "If hit, makes the attacker's ability Mummy.",
			id: 152
		},
		{
			name: 'Moxie',
			desc: 'Dealing a KO raises Attack by one stage.',
			id: 153
		},
		{
			name: 'Justified',
			desc: 'Boosts Attack instead of being hit by Dark-type moves.',
			id: 154
		},
		{
			name: 'Rattled',
			desc: 'If hit by Bug, Dark or Ghost move, or flinches: +1 Speed.',
			id: 155
		},
		{
			name: 'Magic Bounce',
			desc: 'Bounces back the effect of status moves to their user.',
			id: 156
		},
		{
			name: 'Sap Sipper',
			desc: 'Redirects Grass moves. Absorbs them, ups highest Atk.',
			id: 157
		},
		{
			name: 'Prankster',
			desc: 'Status moves have +1 priority but fail on opposing Dark-types.',
			id: 158
		},
		{
			name: 'Sand Force',
			desc: 'Ups highest attacking stat by 1.5x in sand.',
			id: 159
		},
		{
			name: 'Iron Barbs',
			desc: 'Enemies lose 1/8 of max HP if they use a contact move.',
			id: 160
		},
		{
			name: 'Zen Mode',
			desc: 'Transforms into Zen Mode on entry until end of battle.',
			id: 161
		},
		{
			name: 'Victory Star',
			desc: "Gives 1.2x accuracy boost to its own and its allies' moves.",
			id: 162
		},
		{
			name: 'Turboblaze',
			desc: 'Moves hit through abilities. Adds Fire type to itself.',
			id: 163
		},
		{
			name: 'Teravolt',
			desc: 'Moves hit through abilities. Adds Electric type to itself.',
			id: 164
		},
		{
			name: 'Aroma Veil',
			desc: 'Protects team from infatuation, heal block, and disabling.',
			id: 165
		},
		{
			name: 'Flower Veil',
			desc: 'Protects Grass-type allies from status and stat drops.',
			id: 166
		},
		{
			name: 'Cheek Pouch',
			desc: 'This ability has no effect.',
			id: 167
		},
		{
			name: 'Protean',
			desc: "Changes type depending on the move it's about to use.",
			id: 168
		},
		{
			name: 'Fur Coat',
			desc: 'Halves damage taken by Physical moves. Does NOT double Defense.',
			id: 169
		},
		{
			name: 'Magician',
			desc: "Steals the foe's held item after using a non-contact move.",
			id: 170
		},
		{
			name: 'Bulletproof',
			desc: 'Immune to projectile, ball, or bomb-based moves.',
			id: 171
		},
		{
			name: 'Competitive',
			desc: 'Raises Sp. Atk by two stages if stats are lowered by an enemy.',
			id: 172
		},
		{
			name: 'Strong Jaw',
			desc: 'Boosts the power of bite/fang moves by 1.3x.',
			id: 173
		},
		{
			name: 'Refrigerate',
			desc: 'Normal moves become Ice. Ice moves are empowered.',
			id: 174
		},
		{
			name: 'Sweet Veil',
			desc: 'This Pokémon and its ally are immune to sleep.',
			id: 175
		},
		{
			name: 'Stance Change',
			desc: 'Turns into Blade or Shield form depending on move used.',
			id: 176
		},
		{
			name: 'Gale Wings',
			desc: 'Flying-type moves get +1 priority at full HP.',
			id: 177
		},
		{
			name: 'Mega Launcher',
			desc: 'Boosts Beam/Pump/Cannon/Shot/ Gun/Pulse, etc. moves by 1.3x.',
			id: 178
		},
		{
			name: 'Grass Pelt',
			desc: "This Pokémon's Defense gets a 1.5x boost in Grassy Terrain.",
			id: 179
		},
		{
			name: 'Symbiosis',
			desc: 'Passes own item to its ally if said ally consumes its item.',
			id: 180
		},
		{
			name: 'Tough Claws',
			desc: 'Boosts the power of contact moves by 1.3x.',
			id: 181
		},
		{
			name: 'Pixilate',
			desc: 'Normal moves become Fairy. Fairy moves are empowered.',
			id: 182
		},
		{
			name: 'Gooey',
			desc: 'Lowers Speed of enemies that make contact with this Pokémon.',
			id: 183
		},
		{
			name: 'Aerilate',
			desc: 'Normal moves become Flying. Flying moves are empowered.',
			id: 184
		},
		{
			name: 'Parental Bond',
			desc: 'Moves hit twice. 1st hit at 100% power, 2nd hit at 25%.',
			id: 185
		},
		{
			name: 'Dark Aura',
			desc: 'Boosts Dark moves by 1.33x for all while this Pokémon is out.',
			id: 186
		},
		{
			name: 'Fairy Aura',
			desc: 'Boosts Fairy moves by 1.33x for all while this Pokémon is out.',
			id: 187
		},
		{
			name: 'Aura Break',
			desc: 'Cancels aura abilities and makes them 25% weaker instead.',
			id: 188
		},
		{
			name: 'Primordial Sea',
			desc: 'Heavy Rain until switched out. Fire-type moves are unusable.',
			id: 189
		},
		{
			name: 'Desolate Land',
			desc: 'Intense Sun until switched out. Water-type moves are unusable.',
			id: 190
		},
		{
			name: 'Delta Stream',
			desc: 'Strong Winds until switched out. Weather-based moves not usable.',
			id: 191
		},
		{
			name: 'Stamina',
			desc: 'Getting hit raises Def by +1. Critical hits maximize Defense.',
			id: 192
		},
		{
			name: 'Wimp Out',
			desc: 'At 1/2 of max HP or below, instantly switches out.',
			id: 193
		},
		{
			name: 'Emergency Exit',
			desc: 'At 1/2 of max HP or below, instantly switches out.',
			id: 194
		},
		{
			name: 'Water Compaction',
			desc: 'Takes 1/2 dmg from Water-type moves. +2 Def when hit by those.',
			id: 195
		},
		{
			name: 'Merciless',
			desc: 'Always crits slowed, poisoned, paralyzed, or bleeding foes.',
			id: 196
		},
		{
			name: 'Shields Down',
			desc: 'At 1/2 of max HP or below, transforms into Core form.',
			id: 197
		},
		{
			name: 'Stakeout',
			desc: 'Deals double damage to opponents being switched in.',
			id: 198
		},
		{
			name: 'Water Bubble',
			desc: 'Halves Fire dmg taken. Doubles Water dmg dealt. No burns.',
			id: 199
		},
		{
			name: 'Steelworker',
			desc: 'Normal moves become Steel. Steel resists Ghost and Dark.',
			id: 200
		},
		{
			name: 'Berserk',
			desc: 'Boosts highest attack by +1 when at 1/2 of max HP or lower.',
			id: 201
		},
		{
			name: 'Slush Rush',
			desc: "This Pokémon's Speed gets a 1.5x boost in hail.",
			id: 202
		},
		{
			name: 'Long Reach',
			desc: "Physical moves get a 1.2x bonus and don't make contact.",
			id: 203
		},
		{
			name: 'Liquid Voice',
			desc: 'Sound moves get a 1.2x boost and become Water if Normal.',
			id: 204
		},
		{
			name: 'Triage',
			desc: 'Moves that have a healing effect gain +3 priority.',
			id: 205
		},
		{
			name: 'Galvanize',
			desc: 'Normal moves become Electric. Electric moves are empowered.',
			id: 206
		},
		{
			name: 'Surge Surfer',
			desc: 'If Electric Terrain is active, gets a 1.5x Speed boost.',
			id: 207
		},
		{
			name: 'Schooling',
			desc: 'If Lv. 20 or more: changes into School form until 1/4 HP or less.',
			id: 208
		},
		{
			name: 'Disguise',
			desc: 'Protects once against an attack. Restores protection in fog.',
			id: 209
		},
		{
			name: 'Battle Bond',
			desc: 'Transforms into Battle Bond form after dealing a KO.',
			id: 210
		},
		{
			name: 'Power Construct',
			desc: 'At 1/2 of max HP or below, transforms into Complete form.',
			id: 211
		},
		{
			name: 'Corrosion',
			desc: 'Poison is super effective vs Steel. Can poison any type.',
			id: 212
		},
		{
			name: 'Comatose',
			desc: 'Can move, but is always asleep. Immune to status conditions.',
			id: 213
		},
		{
			name: 'Queenly Majesty',
			desc: 'Protects itself and ally from priority moves.',
			id: 214
		},
		{
			name: 'Innards Out',
			desc: "If KO'd, deals as much damage as what the fatal attack dealt.",
			id: 215
		},
		{
			name: 'Dancer',
			desc: 'Copies dance moves used by others.',
			id: 216
		},
		{
			name: 'Battery',
			desc: "Grants a 1.3x power boost to ally's Special attacks.",
			id: 217
		},
		{
			name: 'Fluffy',
			desc: 'Takes 1/2 dmg from contact moves but Fire moves hurt it 2x more.',
			id: 218
		},
		{
			name: 'Dazzling',
			desc: 'Protects itself and ally from priority moves.',
			id: 219
		},
		{
			name: 'Soul-Heart',
			desc: 'KOs dealt anywhere on the field raise Sp. Atk by one stage.',
			id: 220
		},
		{
			name: 'Tangling Hair',
			desc: 'Lowers Speed of enemies that make contact with this Pokémon.',
			id: 221
		},
		{
			name: 'Receiver',
			desc: "In Double Battles, copies its fainting partner's ability.",
			id: 222
		},
		{
			name: 'Power of Alchemy',
			desc: 'Transmutes berries on entry. Transmutes items when lost.',
			id: 223
		},
		{
			name: 'Beast Boost',
			desc: 'Dealing a KO raises highest calculated stat by one stage.',
			id: 224
		},
		{
			name: 'RKS System',
			desc: 'Held Memory determines its type. Also has Protean + Adaptability.',
			id: 225
		},
		{
			name: 'Electro Surge',
			desc: 'Casts Electric Terrain on entry. Lasts 8 turns.',
			id: 226
		},
		{
			name: 'Psychic Surge',
			desc: 'Casts Psychic Terrain on entry. Lasts 8 turns.',
			id: 227
		},
		{
			name: 'Misty Surge',
			desc: 'Casts Misty Terrain on entry. Lasts 8 turns.',
			id: 228
		},
		{
			name: 'Grassy Surge',
			desc: 'Casts Grassy Terrain on entry. Lasts 8 turns.',
			id: 229
		},
		{
			name: 'Full Metal Body',
			desc: 'Immune to stat drops.',
			id: 230
		},
		{
			name: 'Shadow Shield',
			desc: 'At full HP, halves damage taken from attacks',
			id: 231
		},
		{
			name: 'Prism Armor',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 232
		},
		{
			name: 'Neuroforce',
			desc: 'Grants an additional 1.35x boost to Super-effective moves.',
			id: 233
		},
		{
			name: 'Intrepid Sword',
			desc: 'On entry, raises Attack by one stage.',
			id: 234
		},
		{
			name: 'Dauntless Shield',
			desc: 'On entry, raises Defense by one stage.',
			id: 235
		},
		{
			name: 'Libero',
			desc: "Before using a move, changes its type to the move's type.",
			id: 236
		},
		{
			name: 'Ball Fetch',
			desc: 'No effect in battle.',
			id: 237
		},
		{
			name: 'Cotton Down',
			desc: 'Lowers the Speed of all foes by one stage when hit.',
			id: 238
		},
		{
			name: 'Propeller Tail',
			desc: 'Swift Swim + Redirection Immunity.',
			id: 239
		},
		{
			name: 'Mirror Armor',
			desc: 'Bounces back any stat drops inflicted by an enemy.',
			id: 240
		},
		{
			name: 'Gulp Missile',
			desc: 'Gulps a prey after Dive/Surf. If hit, shoots prey at enemy.',
			id: 241
		},
		{
			name: 'Stalwart',
			desc: "Isn't affected by redirection, crits, or ability suppression.",
			id: 242
		},
		{
			name: 'Steam Engine',
			desc: 'Maximizes Speed if hit by a Fire-type or Water-type attack.',
			id: 243
		},
		{
			name: 'Punk Rock',
			desc: 'Sound moves deal 1.3x more dmg. Takes -50% dmg from sound moves.',
			id: 244
		},
		{
			name: 'Sand Spit',
			desc: 'Summons a sandstorm when hit. Attacker is then grounded.',
			id: 245
		},
		{
			name: 'Ice Scales',
			desc: 'Halves damage taken by Special moves. Does NOT double SpDef.',
			id: 246
		},
		{
			name: 'Ripen',
			desc: 'Doubles resistance, healing and stat raises provided by Berries.',
			id: 247
		},
		{
			name: 'Ice Face',
			desc: 'Protects once against an attack. Restores protection under hail.',
			id: 248
		},
		{
			name: 'Power Spot',
			desc: "Grants a 1.3x boost to ally's attacks.",
			id: 249
		},
		{
			name: 'Mimicry',
			desc: 'Changes type depending on active Terrain.',
			id: 250
		},
		{
			name: 'Screen Cleaner',
			desc: 'Clears screens from both sides on entry. Can reset screens.',
			id: 251
		},
		{
			name: 'Steely Spirit',
			desc: "Boosts own & ally's Steel-type moves by 1.3x.",
			id: 252
		},
		{
			name: 'Perish Body',
			desc: 'If hit, casts Perish Song.',
			id: 253
		},
		{
			name: 'WandrngSprit',
			desc: 'Trades ability with attacker on contact.',
			id: 254
		},
		{
			name: 'Gorilla Tactics',
			desc: 'Raises own Atk by 1.5x, but can only use the first chosen move.',
			id: 255
		},
		{
			name: 'Neutralizing Gas',
			desc: 'All abilities are nullified.',
			id: 256
		},
		{
			name: 'Pastel Veil',
			desc: 'Casts Safeguard on entry.',
			id: 257
		},
		{
			name: 'HungerSwitch',
			desc: 'Changes between Full and Hangry forms after each turn.',
			id: 258
		},
		{
			name: 'Quick Draw',
			desc: '30% chance to move first.',
			id: 259
		},
		{
			name: 'Unseen Fist',
			desc: 'Contact moves strike through protection.',
			id: 260
		},
		{
			name: 'CuriusMedicn',
			desc: "Resets its ally's stat changes on entry.",
			id: 261
		},
		{
			name: 'Transistor',
			desc: 'Boosts the power of Electric-type moves by 1.5x.',
			id: 262
		},
		{
			name: "Dragon's Maw",
			desc: 'Boosts the power of Dragon-type moves by 1.5x.',
			id: 263
		},
		{
			name: 'ChillngNeigh',
			desc: 'KOs raise Attack by one stage.',
			id: 264
		},
		{
			name: 'Grim Neigh',
			desc: 'KOs raise Sp. Atk by one stage.',
			id: 265
		},
		{
			name: 'As One',
			desc: 'Unnerve + Chilling Neigh.',
			id: 266
		},
		{
			name: 'As One',
			desc: 'Unnerve + Grim Neigh.',
			id: 267
		},
		{
			name: 'Chloroplast',
			desc: 'Weather Ball, Solar Beam/Blade, Growth act as if used in sun.',
			id: 268
		},
		{
			name: 'Whiteout',
			desc: 'Ups highest attacking stat by 1.5x in hail.',
			id: 269
		},
		{
			name: 'Pyromancy',
			desc: 'Moves inflict burn 5x as often.',
			id: 270
		},
		{
			name: 'Keen Edge',
			desc: 'Boosts the power of slashing moves by 1.3x.',
			id: 271
		},
		{
			name: 'Prism Scales',
			desc: 'Takes 30% less damage from Special attacks.',
			id: 272
		},
		{
			name: 'Power Fists',
			desc: 'Iron Fist moves target Special Defense and get a 1.3x boost.',
			id: 273
		},
		{
			name: 'Sand Song',
			desc: 'Sound moves get a 1.2x boost and become Ground if Normal.',
			id: 274
		},
		{
			name: 'Rampage',
			desc: 'No recharge after a KO, if it usually would need to recharge.',
			id: 275
		},
		{
			name: 'Vengeance',
			desc: 'Boosts Ghost-type moves by 1.2x, or 1.5x when below 1/3 HP.',
			id: 276
		},
		{
			name: 'Blitz Boxer',
			desc: "At full HP, gives +1 priority to this Pokémon's punching moves.",
			id: 277
		},
		{
			name: 'Antarctic Bird',
			desc: 'Ice-type and Flying-type moves get a 1.3x power boost.',
			id: 278
		},
		{
			name: 'Immolate',
			desc: 'Normal moves become Fire. Fire moves are empowered.',
			id: 279
		},
		{
			name: 'Crystallize',
			desc: 'Rock-type moves become Ice and get a 1.1x boost.',
			id: 280
		},
		{
			name: 'Electrocytes',
			desc: 'Boosts the power of Electric-type moves by 1.25x.',
			id: 281
		},
		{
			name: 'Aerodynamics',
			desc: 'Boosts Speed instead of being hit by Flying-type moves.',
			id: 282
		},
		{
			name: 'Christmas Spirit',
			desc: 'Takes 50% less damage if hail is active.',
			id: 283
		},
		{
			name: 'Exploit Weakness',
			desc: 'Targets lowest defense vs statused foes.',
			id: 284
		},
		{
			name: 'Ground Shock',
			desc: "Target Grounds aren't immune to Electric but resist it instead.",
			id: 285
		},
		{
			name: 'Ancient Idol',
			desc: 'Uses Def and Sp. Def instead of Atk and Sp. Atk when attacking.',
			id: 286
		},
		{
			name: 'Mystic Power',
			desc: 'All moves gain the 1.5x power boost from STAB.',
			id: 287
		},
		{
			name: 'Perfectionist',
			desc: 'Move BP < 51 BP: +1 to crit rate. Move BP < 26 BP: +1 priority too.',
			id: 288
		},
		{
			name: 'Growing Tooth',
			desc: 'Raises Attack by one stage after using a biting move.',
			id: 289
		},
		{
			name: 'Inflatable',
			desc: 'Ups Def and Sp. Def by one stage if hit by Flying or Fire moves.',
			id: 290
		},
		{
			name: 'Aurora Borealis',
			desc: 'Ice-type moves gain STAB. Moves always benefit from hail.',
			id: 291
		},
		{
			name: 'Avenger',
			desc: 'If a party Pokémon fainted last turn, next move gets 1.5x boost.',
			id: 292
		},
		{
			name: "Let's Roll",
			desc: 'Casts Defense Curl on entry.',
			id: 293
		},
		{
			name: 'Aquatic',
			desc: 'Adds Water type on entry.',
			id: 294
		},
		{
			name: 'Loud Bang',
			desc: 'Sound-based moves have 50% chance to confuse the foe.',
			id: 295
		},
		{
			name: 'Lead Coat',
			desc: "Takes 40% less from Phys. moves. This Pokémon's Speed is 0.9x.",
			id: 296
		},
		{
			name: 'Amphibious',
			desc: "Water moves gain STAB. Can't become drenched.",
			id: 297
		},
		{
			name: 'Grounded',
			desc: 'Adds Ground type on entry.',
			id: 298
		},
		{
			name: 'Earthbound',
			desc: 'Boosts Ground-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 299
		},
		{
			name: 'Fighting Spirit',
			desc: 'Normal moves become Fighting. Fighting moves are empowered.',
			id: 300
		},
		{
			name: 'Cryptic Power',
			desc: 'Doubles own Sp. Atk stat. Boosts raw stat, not base stat.',
			id: 301
		},
		{
			name: 'Coil Up',
			desc: 'On entry, gives +1 priority once to the first biting move used.',
			id: 302
		},
		{
			name: 'Fossilized',
			desc: 'Halves dmg taken by Rock moves. Boosts own Rock moves by 1.2x.',
			id: 303
		},
		{
			name: 'Magical Dust',
			desc: 'Makes foe Psychic-type on contact. Also works on offense.',
			id: 304
		},
		{
			name: 'Dreamcatcher',
			desc: 'Doubles damage if an opponent is sleeping. Pursues sleeping foes.',
			id: 305
		},
		{
			name: 'Nocturnal',
			desc: 'Boosts own Dark moves by 1.25x. Takes -25% dmg from Dark/Fairy.',
			id: 306
		},
		{
			name: 'Self Sufficient',
			desc: 'Recovers 1/16 of max HP at the end of each turn.',
			id: 307
		},
		{
			name: 'Tectonize',
			desc: 'Normal moves becomes Ground. Might ignore hazards.',
			id: 308
		},
		{
			name: 'Ice Age',
			desc: 'Adds Ice type on entry.',
			id: 309
		},
		{
			name: 'Half Drake',
			desc: 'Adds Dragon type on entry.',
			id: 310
		},
		{
			name: 'Liquified',
			desc: 'Takes 1/2 dmg from contact moves but Water moves hurt it 2x more.',
			id: 311
		},
		{
			name: 'Dragonfly',
			desc: 'Adds Dragon type on entry. Avoids Ground attacks.',
			id: 312
		},
		{
			name: 'Dragonslayer',
			desc: 'Deals 1.5x damage to Dragons. Takes 0.5x damage from Dragons.',
			id: 313
		},
		{
			name: 'Mountaineer',
			desc: 'Immune to Rock-type attacks and Stealth Rock damage.',
			id: 314
		},
		{
			name: 'Hydrate',
			desc: 'Normal moves become Water. Water moves are empowered.',
			id: 315
		},
		{
			name: 'Metallic',
			desc: 'Adds Steel type on entry.',
			id: 316
		},
		{
			name: 'Permafrost',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 317
		},
		{
			name: 'Primal Armor',
			desc: 'Takes 50% less damage from Super-effective moves.',
			id: 318
		},
		{
			name: 'Raging Boxer',
			desc: 'Punching moves hit twice. 1st hit at 100% power, 2nd hit at 40%.',
			id: 319
		},
		{
			name: 'Air Blower',
			desc: 'Casts a 3-turn Tailwind on entry.',
			id: 320
		},
		{
			name: 'Juggernaut',
			desc: 'Contact moves add 20% Def to attack. Paralysis-immune.',
			id: 321
		},
		{
			name: 'Short Circuit',
			desc: 'Boosts Elec.-type moves by 1.2x, or 1.5x when below 1/3 HP.',
			id: 322
		},
		{
			name: 'Majestic Bird',
			desc: 'Boosts own Sp. Atk by 1.5x. Boosts raw stat, not base stat.',
			id: 323
		},
		{
			name: 'Phantom',
			desc: 'Adds Ghost type on entry.',
			id: 324
		},
		{
			name: 'Intoxicate',
			desc: 'Normal moves become Poison. Poison moves are empowered.',
			id: 325
		},
		{
			name: 'Impenetrable',
			desc: 'Only damaged by attacks.',
			id: 326
		},
		{
			name: 'Hypnotist',
			desc: 'Hypnosis accuracy is 90% when used by this Pokémon.',
			id: 327
		},
		{
			name: 'Overwhelm',
			desc: 'Hits Fairies with Dragon moves. Immune to Intimidate and Scare.',
			id: 328
		},
		{
			name: 'Scare',
			desc: "Lowers foes' Sp. Atk by one stage on entry.",
			id: 329
		},
		{
			name: 'Majestic Moth',
			desc: 'On entry, raises highest calculated stat by one stage.',
			id: 330
		},
		{
			name: 'Soul Eater',
			desc: "Dealing a KO heals 1/4 of this Pokémon's max HP.",
			id: 331
		},
		{
			name: 'Soul Linker',
			desc: 'Enemies take all the damage they deal, same for this Pokémon.',
			id: 332
		},
		{
			name: 'Sweet Dreams',
			desc: 'Heals 1/8 of max HP every turn if asleep. Immune to Bad Dreams.',
			id: 333
		},
		{
			name: 'Bad Luck',
			desc: "Foes can't crit, deal min damage, 5% less acc, & no effect chance.",
			id: 334
		},
		{
			name: 'Haunted Spirit',
			desc: "When this Pokémon is KO'd, casts a Curse on the attacker.",
			id: 335
		},
		{
			name: 'Electric Burst',
			desc: 'Electric-type moves deal 1.35x damage but have 10% recoil.',
			id: 336
		},
		{
			name: 'Raw Wood',
			desc: 'Halves dmg taken by Grass moves. Boosts own Grass moves by 1.2x.',
			id: 337
		},
		{
			name: 'Solenoglyphs',
			desc: 'Biting moves have a 50% chance to badly poison the target.',
			id: 338
		},
		{
			name: 'Spider Lair',
			desc: 'Casts Sticky Web on entry. Lasts 5 turns.',
			id: 339
		},
		{
			name: 'Fatal Precision',
			desc: 'Super-effective moves never miss and always crit.',
			id: 340
		},
		{
			name: 'Fort Knox',
			desc: 'Blocks most damage boosting and multihit abilities.',
			id: 341
		},
		{
			name: 'Seaweed',
			desc: 'Takes 1/2 dmg from Fire if Grass. Grass deals x2 dmg to Fire.',
			id: 342
		},
		{
			name: 'Psychic Mind',
			desc: 'Boosts Psychic-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 343
		},
		{
			name: 'Poison Absorb',
			desc: 'Redirects Poison moves. Absorbs them, healing 25% HP.',
			id: 344
		},
		{
			name: 'Scavenger',
			desc: "Dealing a KO heals 1/4 of this Pokémon's max HP.",
			id: 345
		},
		{
			name: 'Twist. Dimension',
			desc: 'Sets up Trick Room on entry, lasts 3 turns.',
			id: 346
		},
		{
			name: 'Multi-Headed',
			desc: 'Hits as many times, as it has heads.',
			id: 347
		},
		{
			name: 'North Wind',
			desc: '3 turns Aurora Veil on entry. Immune to Hail damage.',
			id: 348
		},
		{
			name: 'Overcharge',
			desc: 'Electric is super effective vs Electric. Can paralyze Electric.',
			id: 349
		},
		{
			name: 'Violent Rush',
			desc: 'Boosts Speed by 50% + Attack by 20% on first turn.',
			id: 350
		},
		{
			name: 'Flaming Soul',
			desc: 'Fire-type moves get +1 priority at max HP.',
			id: 351
		},
		{
			name: 'Sage Power',
			desc: 'Ups Special Attack by 50% and locks move.',
			id: 352
		},
		{
			name: 'Bone Zone',
			desc: 'Bone moves ignore immunities and deal 2x on not very effective.',
			id: 353
		},
		{
			name: 'Weather Control',
			desc: 'Negates all weather based moves from enemies.',
			id: 354
		},
		{
			name: 'Speed Force',
			desc: 'Contact moves use 20% of its Speed stat additionally.',
			id: 355
		},
		{
			name: 'Sea Guardian',
			desc: 'Ups highest stat by +1 on entry when it rains.',
			id: 356
		},
		{
			name: 'Molten Down',
			desc: 'Fire-type is super effective against Rock-type.',
			id: 357
		},
		{
			name: 'Hyper Aggressive',
			desc: 'Moves hit twice. Second hit does 25% damage.',
			id: 358
		},
		{
			name: 'Flock',
			desc: 'Boosts Flying-type moves by 1.2x, or 1.5x when below 1/3 HP.',
			id: 359
		},
		{
			name: 'Field Explorer',
			desc: 'Boosts field moves by 50%. Cut, Surf, Strength etc.',
			id: 360
		},
		{
			name: 'Striker',
			desc: 'Boosts the power of kicking moves by 1.3x.',
			id: 361
		},
		{
			name: 'Frozen Soul',
			desc: 'Ice-type moves get +1 priority at max HP.',
			id: 362
		},
		{
			name: 'Predator',
			desc: "Dealing a KO heals 1/4 of this Pokémon's max HP.",
			id: 363
		},
		{
			name: 'Looter',
			desc: "Dealing a KO heals 1/4 of this Pokémon's max HP.",
			id: 364
		},
		{
			name: 'Lunar Eclipse',
			desc: 'Fairy & Dark gains STAB. Hypnosis has 1.5x accuracy.',
			id: 365
		},
		{
			name: 'Solar Flare',
			desc: 'Chloroplast + Immolate.',
			id: 366
		},
		{
			name: 'Power Core',
			desc: 'The Pokémon uses +20% of its Defense or SpDef during moves.',
			id: 367
		},
		{
			name: 'Sighting System',
			desc: 'Moves always hit. Moves last for moves less than 80% accuracy.',
			id: 368
		},
		{
			name: 'Bad Company',
			desc: 'Not implemented right now. Has no effect.',
			id: 369
		},
		{
			name: 'Opportunist',
			desc: '+1 priority vs foes below 1/2 max HP.',
			id: 370
		},
		{
			name: 'Giant Wings',
			desc: 'Boosts the power of wing, wind or air-based moves by 1.3x.',
			id: 371
		},
		{
			name: 'Momentum',
			desc: 'Contact moves use the Speed stat for damage calculation.',
			id: 372
		},
		{
			name: 'Grip Pincer',
			desc: '50% chance to trap. Then ignores Defense & accuracy checks.',
			id: 373
		},
		{
			name: 'Big Leaves',
			desc: 'Chloroplast + Chlorophyll + Leaf Guard + Harvest + Solar Power.',
			id: 374
		},
		{
			name: 'Precise Fist',
			desc: 'Punching moves get +1 crit and 5x effect chance.',
			id: 375
		},
		{
			name: 'Deadeye',
			desc: 'Arrow & cannon moves never miss. Crits hit weakest defense.',
			id: 376
		},
		{
			name: 'Artillery',
			desc: 'Mega Launcher moves always hit and hit both foes.',
			id: 377
		},
		{
			name: 'Amplifier',
			desc: 'Ups sound moves by 30% and makes them hit both foes.',
			id: 378
		},
		{
			name: 'Ice Dew',
			desc: 'Redirects Ice moves. Absorbs them, ups highest Atk.',
			id: 379
		},
		{
			name: 'Sun Worship',
			desc: 'Ups highest stat by +1 on entry when sunny.',
			id: 380
		},
		{
			name: 'Pollinate',
			desc: 'Normal moves becomes Bug. Immune to powder if Bug-type.',
			id: 381
		},
		{
			name: 'Volcano Rage',
			desc: 'Triggers 50 BP Eruption after using a Fire-type move.',
			id: 382
		},
		{
			name: 'Cold Rebound',
			desc: 'Attacks with Icy Wind when hit by a contact move.',
			id: 383
		},
		{
			name: 'Low Blow',
			desc: 'Attacks with 40BP Feint Attack on switch-in.',
			id: 384
		},
		{
			name: 'Nosferatu',
			desc: 'Contact moves do +20% damage and heal 1/2 of damage dealt.',
			id: 385
		},
		{
			name: 'Spectralize',
			desc: 'Normal moves become Ghost. Ghost moves are empowered.',
			id: 393
		},
		{
			name: 'Spectral Shroud',
			desc: 'Spectralize + 30% chance to badly poison the foe.',
			id: 386
		},
		{
			name: 'Discipline',
			desc: "Can switch while rampaging. Can't be confused or intimidated.",
			id: 387
		},
		{
			name: 'Thundercall',
			desc: 'Triggers Smite at 20% power when using an Electric move.',
			id: 388
		},
		{
			name: 'Marine Apex',
			desc: '50% more damage to Water-types + Infiltrator.',
			id: 389
		},
		{
			name: 'Mighty Horn',
			desc: 'Boosts the power of horn and drill-based by 1.3x.',
			id: 390
		},
		{
			name: 'Hardened Sheath',
			desc: 'Ups Attack by +1 when using horn moves.',
			id: 391
		},
		{
			name: 'Arctic Fur',
			desc: 'Weakens incoming physical and special moves by 35%.',
			id: 392
		},
		{
			name: 'Lethargy',
			desc: 'Damage drops 20% each turn to 20%. Resets on switch-in.',
			id: 394
		},
		{
			name: 'Iron Barrage',
			desc: 'Mega Launcher + Sighting System.',
			id: 395
		},
		{
			name: 'Steel Barrel',
			desc: 'Immune to recoil damage, but not immune to Explosion/crash dmg.',
			id: 396
		},
		{
			name: 'Pyro Shells',
			desc: 'Triggers 50 BP Outburst after using a Mega Launcher move.',
			id: 397
		},
		{
			name: 'Fungal Infection',
			desc: 'Contact moves inflict Leech Seed on the target.',
			id: 398
		},
		{
			name: 'Parry',
			desc: 'Counters contact with Mach Punch. Takes 20% less damage.',
			id: 399
		},
		{
			name: 'Scrapyard',
			desc: 'Sets a layer of Spikes when hit (contact move).',
			id: 400
		},
		{
			name: 'Loose Quills',
			desc: 'Sets a layer of Spikes when hit (contact move).',
			id: 401
		},
		{
			name: 'Toxic Debris',
			desc: 'Sets a layer of Toxic Spikes when hit by contact moves.',
			id: 402
		},
		{
			name: 'Roundhouse',
			desc: "Kicks always hit. Damages foes' weaker defenses.",
			id: 403
		},
		{
			name: 'Mineralize',
			desc: 'Normal moves become Rock. Rock moves are empowered.',
			id: 404
		},
		{
			name: 'Loose Rocks',
			desc: 'Deploys Stealth Rocks when hit by contact.',
			id: 405
		},
		{
			name: 'Spinning Top',
			desc: 'Fighting moves up speed +1 and clear hazards.',
			id: 406
		},
		{
			name: 'Retribution Blow',
			desc: 'Uses Hyper Beam if any foe uses an stat boosting move.',
			id: 407
		},
		{
			name: 'Fearmonger',
			desc: 'Intimidate + Scare; 10% chance to fear with contact moves.',
			id: 408
		},
		{
			name: "King's Wrath",
			desc: 'Lowering any stats on its side raises Atk and Def.',
			id: 409
		},
		{
			name: "Queen's Mourning",
			desc: 'Lowering any stats on its side raises SpAtk and SpDef.',
			id: 410
		},
		{
			name: 'Toxic Spill',
			desc: 'Non-Poison-types take 1/8 dmg every turn when on field.',
			id: 411
		},
		{
			name: 'Desert Cloak',
			desc: 'Protects its side from status and secondary effects in sand.',
			id: 412
		},
		{
			name: 'Draconize',
			desc: 'Normal moves become Dragon. Dragon moves are empowered.',
			id: 413
		},
		{
			name: 'Pretty Princess',
			desc: 'Does 50% more damage if the target has any lowered stat.',
			id: 414
		},
		{
			name: 'Self Repair',
			desc: 'Self Sufficient + Natural Cure.',
			id: 415
		},
		{
			name: 'Atomic Burst',
			desc: 'Electromorphosis + Galvanize.',
			id: 416
		},
		{
			name: 'Hellblaze',
			desc: 'Boosts Fire-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 417
		},
		{
			name: 'Riptide',
			desc: 'Boosts Water-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 418
		},
		{
			name: 'Forest Rage',
			desc: 'Boosts Grass-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 419
		},
		{
			name: 'Primal Maw',
			desc: 'Biting moves hit twice. 2nd hit does 0.4x damage.',
			id: 420
		},
		{
			name: 'Sweeping Edge',
			desc: 'Keen Edge moves always hit and hit both foes.',
			id: 421
		},
		{
			name: 'Gifted Mind',
			desc: 'Nulls Psychic weakness; status moves always hit.',
			id: 422
		},
		{
			name: 'Hydro Circuit',
			desc: 'Electric moves +50%; Water moves siphon 25% damage.',
			id: 423
		},
		{
			name: 'Equinox',
			desc: 'Boosts Atk or SpAtk to match the higher value.',
			id: 424
		},
		{
			name: 'Absorbant',
			desc: 'Drain moves recover +50% HP & apply Leech Seed.',
			id: 425
		},
		{
			name: 'Clueless',
			desc: 'Negates Weather, Rooms and Terrains.',
			id: 426
		},
		{
			name: 'Cheating Death',
			desc: 'Gets no damage for the first two hits.',
			id: 427
		},
		{
			name: 'Cheap Tactics',
			desc: 'Attacks with Scratch on switch-in.',
			id: 428
		},
		{
			name: 'Coward',
			desc: 'Sets up Protect on switch-in. Only works once.',
			id: 429
		},
		{
			name: 'Volt Rush',
			desc: 'At full HP, gives +1 priority to its Electric-type moves.',
			id: 430
		},
		{
			name: 'Dune Terror',
			desc: 'Sand reduces damage by 35%. Boosts Ground moves by 20%.',
			id: 431
		},
		{
			name: 'Infernal Rage',
			desc: 'Fire-type moves are boosted by 35% with 5% recoil.',
			id: 432
		},
		{
			name: 'Dual Wield',
			desc: 'Mega Launcher and Keen Edge moves hit twice for 70% damage.',
			id: 433
		},
		{
			name: 'Elemental Charge',
			desc: '20% chance to BRN/FRZ/PARA with respective types.',
			id: 434
		},
		{
			name: 'Ambush',
			desc: 'Guaranteed critical hit on first turn.',
			id: 435
		},
		{
			name: 'Atlas',
			desc: 'Sets Gravity on entry for 8 turns.',
			id: 436
		},
		{
			name: 'Radiance',
			desc: '+20% accuracy; Dark moves fail when user is present.',
			id: 437
		},
		{
			name: 'Jaws of Carnage',
			desc: 'Devours 1/2 of the foe when defeating it.',
			id: 438
		},
		{
			name: "Angel's Wrath",
			desc: 'Drastically alters all of the users moves.',
			id: 439
		},
		{
			name: 'Prismatic Fur',
			desc: 'Color Change + Protean + Fur Coat + Ice Scales.',
			id: 440
		},
		{
			name: 'Shocking Jaws',
			desc: 'Biting moves have 50% chance to paralyze the target.',
			id: 441
		},
		{
			name: 'Fae Hunter',
			desc: 'Deals 1.5x damage to Fairy. Takes 0.5x damage from Fairy.',
			id: 442
		},
		{
			name: 'Gravity Well',
			desc: 'Sets Gravity on entry for 5 turns.',
			id: 443
		},
		{
			name: 'Evaporate',
			desc: 'Takes no damage and sets Mist if hit by water.',
			id: 444
		},
		{
			name: 'Lumberjack',
			desc: 'Deals 1.5x damage to Grass. Takes 0.5x damage from Grass.',
			id: 445
		},
		{
			name: 'Well Baked Body',
			desc: 'Boosts Defense sharply instead of being hit by Fire-type moves.',
			id: 446
		},
		{
			name: 'Furnace',
			desc: 'User gains +2 Speed when when hit by rocks.',
			id: 447
		},
		{
			name: 'Electromorphosis',
			desc: 'Charges up when getting hit.',
			id: 448
		},
		{
			name: 'Rocky Payload',
			desc: 'Boosts the power of Rock-type and throwing moves by 1.5x.',
			id: 449
		},
		{
			name: 'Earth Eater',
			desc: 'Heals 25% of max HP when hit by a Ground move.',
			id: 450
		},
		{
			name: 'Lingering Aroma',
			desc: "If hit, makes the attacker's ability Lingering Aroma.",
			id: 451
		},
		{
			name: 'Fairy Tale',
			desc: 'Adds Fairy type on entry.',
			id: 452
		},
		{
			name: 'Raging Moth',
			desc: 'Fire moves hits twice, both hits at 70% power.',
			id: 453
		},
		{
			name: 'Adrenaline Rush',
			desc: 'KOs raise Speed by one stage.',
			id: 454
		},
		{
			name: 'Archmage',
			desc: '30% chance of adding a type related effect to each move.',
			id: 455
		},
		{
			name: 'Cryomancy',
			desc: 'Moves inflict frostbite 5x as often.',
			id: 456
		},
		{
			name: 'Phantom Pain',
			desc: 'Ghost-type moves deal normal damage to Normal.',
			id: 457
		},
		{
			name: 'Purgatory',
			desc: 'Boosts Ghost-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 458
		},
		{
			name: 'Emanate',
			desc: 'Normal moves become Psychic. Psychic moves are empowered.',
			id: 459
		},
		{
			name: "Kunoichi's Blade",
			desc: 'Technician + Skill Link.',
			id: 460
		},
		{
			name: 'Monkey Business',
			desc: 'Uses Tickle on entry.',
			id: 461
		},
		{
			name: 'Combat Specialist',
			desc: 'Boosts the power of punching and kicking moves by 1.3x.',
			id: 462
		},
		{
			name: "Jungle's Guard",
			desc: 'Protects Grass-type allies from status and stat drops.',
			id: 463
		},
		{
			name: "Hunter's Horn",
			desc: 'Boost horn moves and heals 1/4 HP when defeating an enemy.',
			id: 464
		},
		{
			name: 'Pixie Power',
			desc: '1.2x accuracy. Boosts Fairy moves by 1.33x for all.',
			id: 465
		},
		{
			name: 'Plasma Lamp',
			desc: 'Boost accuracy & power of Fire & Electric type moves by 1.2x.',
			id: 466
		},
		{
			name: 'Magma Eater',
			desc: 'Predator + Molten Down.',
			id: 467
		},
		{
			name: 'Super Hot Goo',
			desc: 'Inflicts burn and lowers Speed on contact.',
			id: 468
		},
		{
			name: 'Nika',
			desc: 'Iron fist + Water moves function normally under sun.',
			id: 469
		},
		{
			name: 'Archer',
			desc: 'Boosts the power of arrow moves by 1.3x.',
			id: 470
		},
		{
			name: 'Cold Plasma',
			desc: 'Electric type moves now inflict burn instead of paralysis.',
			id: 471
		},
		{
			name: 'Super Slammer',
			desc: 'Boosts the power of hammer and slamming moves by 1.3x.',
			id: 472
		},
		{
			name: 'Inversion',
			desc: 'Sets up Inverse Room on entry, lasts 3 turns.',
			id: 473
		},
		{
			name: 'Accelerate',
			desc: 'Moves that need a charge turn are now used instantly.',
			id: 474
		},
		{
			name: 'Frost Burn',
			desc: 'Triggers 40BP Ice Beam after using a Fire-type move.',
			id: 475
		},
		{
			name: 'Itchy Defense',
			desc: 'Causes infestation when hit by a contact move.',
			id: 476
		},
		{
			name: 'Generator',
			desc: 'Charges up once on entry or when electric terrain is active.',
			id: 477
		},
		{
			name: 'Moon Spirit',
			desc: 'Fairy & Dark gains STAB. Moonlight recovers 75% HP.',
			id: 478
		},
		{
			name: 'Dust Cloud',
			desc: 'Attacks with Sand Attack on switch-in.',
			id: 479
		},
		{
			name: 'Berserker Rage',
			desc: 'Tipping Point + Rampage.',
			id: 480
		},
		{
			name: 'Trickster',
			desc: 'Uses Disable on switch-in.',
			id: 481
		},
		{
			name: 'Sand Guard',
			desc: 'Blocks priority and reduces special damage by 1/2 in sand.',
			id: 482
		},
		{
			name: 'Natural Recovery',
			desc: 'Natural Cure + Regenerator.',
			id: 483
		},
		{
			name: 'Wind Rider',
			desc: 'Increases attack in tailwind or when hit by wind move.',
			id: 484
		},
		{
			name: 'Soothing Aroma',
			desc: 'Cures party status on entry.',
			id: 485
		},
		{
			name: 'Prim and Proper',
			desc: 'Wonder Skin + Cute Charm.',
			id: 486
		},
		{
			name: 'Super Strain',
			desc: 'KOs lower Attack by +1. Take 25% recoil damage.',
			id: 487
		},
		{
			name: 'Tipping Point',
			desc: 'Getting hit raises SpAtk. Critical hits maximize SpAtk.',
			id: 488
		},
		{
			name: 'Enlightened',
			desc: 'Emanate + Inner Focus.',
			id: 489
		},
		{
			name: 'Peaceful Slumber',
			desc: 'Sweet Dreams + Self Sufficient.',
			id: 490
		},
		{
			name: 'Aftershock',
			desc: 'Triggers Magnitude 4-7 after using a damaging move.',
			id: 491
		},
		{
			name: 'Freezing Point',
			desc: '20% chance to get frostbitten on contact and 30% non-contact.',
			id: 492
		},
		{
			name: 'Cryo Proficiency',
			desc: 'Freezing Point + triggers hail when hit.',
			id: 493
		},
		{
			name: 'Arcane Force',
			desc: 'All moves gain STAB. Ups “supereffective” by 10%.',
			id: 494
		},
		{
			name: 'Doombringer',
			desc: 'Uses Doom Desire on switch-in.',
			id: 495
		},
		{
			name: 'Wishmaker',
			desc: 'Uses Wish on switch-in. Three uses per battle.',
			id: 496
		},
		{
			name: 'Yuki Onna',
			desc: 'Scare + Intimidate. 30% chance to infatuate on hit.',
			id: 497
		},
		{
			name: 'Suppress',
			desc: 'Casts Torment on entry.',
			id: 498
		},
		{
			name: 'Refrigerator',
			desc: 'Filter + Illuminate.',
			id: 499
		},
		{
			name: 'Heaven Asunder',
			desc: 'Spacial Rend always crits. Ups crit level by +1.',
			id: 500
		},
		{
			name: 'Purifying Waters',
			desc: 'Hydration + Water Veil.',
			id: 501
		},
		{
			name: 'Seaborne',
			desc: 'Drizzle + Swift Swim.',
			id: 502
		},
		{
			name: 'High Tide',
			desc: 'Triggers 50 BP Surf after using a Water-type move.',
			id: 503
		},
		{
			name: 'Change of Heart',
			desc: 'Uses Heart Swap on switch-in.',
			id: 504
		},
		{
			name: 'Mystic Blades',
			desc: 'Keen edge moves become special and deal 30% more damage.',
			id: 505
		},
		{
			name: 'Determination',
			desc: 'Ups Special Attack by 50% if suffering.',
			id: 506
		},
		{
			name: 'Fertilize',
			desc: 'Normal moves become Grass. Grass moves are empowered.',
			id: 507
		},
		{
			name: 'Pure Love',
			desc: 'Cute Charm + heal 25% damage vs infatuated.',
			id: 508
		},
		{
			name: 'Fighter',
			desc: 'Boosts Fight.-type moves by 1.2x, or 1.5x when below 1/3 HP.',
			id: 509
		},
		{
			name: 'Mycelium Might',
			desc: 'Status moves ignore immunities but go last.',
			id: 510
		},
		{
			name: 'Telekinetic',
			desc: 'Casts Telekinesis on entry.',
			id: 511
		},
		{
			name: 'Combustion',
			desc: 'Boosts the power of Fire-type moves by 1.5x.',
			id: 512
		},
		{
			name: "Blade's Essence",
			desc: 'Keen Edge + Mystic Blades.',
			id: 513
		},
		{
			name: 'Powder Burst',
			desc: 'Casts Powder on entry.',
			id: 514
		},
		{
			name: 'Retriever',
			desc: 'Retrieves item on switch-out.',
			id: 515
		},
		{
			name: 'Monster Mash',
			desc: 'Casts Trick-or-Treat on entry.',
			id: 516
		},
		{
			name: 'Two Step',
			desc: 'Triggers 50BP Revelation Dance after using a Dance move.',
			id: 517
		},
		{
			name: 'Spiteful',
			desc: "Reduces attacker's PP on contact.",
			id: 518
		},
		{
			name: 'Fortitude',
			desc: 'Boosts SpDef +1 when hit. Maxes SpDef on crit.',
			id: 519
		},
		{
			name: 'Devourer',
			desc: 'Strong Jaw + Primal Maw.',
			id: 520
		},
		{
			name: 'Phantom Thief',
			desc: 'Attacks with 40BP Spectral Thief on switch-in.',
			id: 521
		},
		{
			name: 'Early Grave',
			desc: 'Ghost-type moves get +1 priority at max HP.',
			id: 522
		},
		{
			name: 'Grappler',
			desc: 'Trapping moves last 6 turns. Trapping deals 1/6 HP.',
			id: 523
		},
		{
			name: 'Bass Boosted',
			desc: 'Amplifier + Punk Rock.',
			id: 524
		},
		{
			name: 'Flaming Jaws',
			desc: 'Biting moves have 50% chance to burn the target.',
			id: 525
		},
		{
			name: 'Monster Hunter',
			desc: 'Deals 1.5x damage to Dark. Takes 0.5x damage from Dark.',
			id: 526
		},
		{
			name: 'Crowned Sword',
			desc: 'Intrepid Sword + Anger Point.',
			id: 527
		},
		{
			name: 'Crowned Shield',
			desc: 'Dauntless Shield + Stamina.',
			id: 528
		},
		{
			name: 'Berserk DNA',
			desc: 'Sharply ups highest attacking stat but enrages on entry.',
			id: 529
		},
		{
			name: 'Crowned King',
			desc: 'Unnerve + Grim Neigh + Chilling Neigh.',
			id: 530
		},
		{
			name: 'Clap Trap',
			desc: 'Counters contact with 50BP Snap Trap.',
			id: 531
		},
		{
			name: 'Permanence',
			desc: "Foes can't heal in any way.",
			id: 532
		},
		{
			name: 'Hubris',
			desc: 'KOs raise SpAtk by one stage.',
			id: 533
		},
		{
			name: 'Cosmic Daze',
			desc: 'Deals 2x damage vs confused and enraged foes.',
			id: 534
		},
		{
			name: "Mind's Eye",
			desc: "Hits Ghost-type Pokémon. Accuracy can't be lowered.",
			id: 535
		},
		{
			name: 'Blood Price',
			desc: 'Does 30% more damage but lose 10% HP when attacking.',
			id: 536
		},
		{
			name: 'Spike Armor',
			desc: '30% chance to bleed on contact or offense.',
			id: 537
		},
		{
			name: 'Voodoo Power',
			desc: '30% chance to bleed when hit by special attacks.',
			id: 538
		},
		{
			name: 'Chrome Coat',
			desc: 'Reduces special damage taken by 40%, but decreases Speed by 10%.',
			id: 539
		},
		{
			name: 'Banshee',
			desc: 'Sound moves get a 1.2x boost and become Ghost if Normal.',
			id: 540
		},
		{
			name: 'Web Spinner',
			desc: 'Uses String Shot on switch-in.',
			id: 541
		},
		{
			name: 'Showdown Mode',
			desc: 'Ambush + Violent Rush.',
			id: 542
		},
		{
			name: 'Seed Sower',
			desc: 'Sets Grassy Terrain when hit. Heals party status when it does.',
			id: 543
		},
		{
			name: 'Airborne',
			desc: "Boosts own & ally's Flying-type moves by 1.3x.",
			id: 544
		},
		{
			name: 'Parroting',
			desc: 'Copies sound moves used by others.',
			id: 545
		},
		{
			name: 'Salt Circle',
			desc: 'Prevents opposing pokemon from fleeing on entry.',
			id: 546
		},
		{
			name: 'Purifying Salt',
			desc: 'Immune to status conditions. Take 1/2 damage from Ghost.',
			id: 547
		},
		{
			name: 'Protosynthesis',
			desc: 'Boosts highest stat in Sun or with Booster Energy.',
			id: 548
		},
		{
			name: 'Quark Drive',
			desc: 'Boosts highest stat in Electric Terrain or with Booster Energy.',
			id: 549
		},
		{
			name: 'Wind Power',
			desc: 'Charges up when hit by wind moves or Tailwind starts.',
			id: 550
		},
		{
			name: 'Impulse',
			desc: 'Non-contact moves use the Speed stat for damage.',
			id: 551
		},
		{
			name: 'Terminal Velocity',
			desc: 'Special moves use 20% of its Speed stat additionally.',
			id: 552
		},
		{
			name: 'Guard Dog',
			desc: "Can't be forced out. Inverts Intimidate effects.",
			id: 553
		},
		{
			name: 'Anger Shell',
			desc: 'Applies Shell Smash when reduced below 1/2 HP.',
			id: 554
		},
		{
			name: 'Egoist',
			desc: 'Raises its own stats when foes raise theirs.',
			id: 555
		},
		{
			name: 'Subdue',
			desc: 'Doubles stat drop effects used by this pokemon.',
			id: 556
		},
		{
			name: 'Readied Action',
			desc: 'Doubles attack on first turn.',
			id: 557
		},
		{
			name: 'Stygian Rush',
			desc: 'Dark-type moves get +1 priority at max HP.',
			id: 558
		},
		{
			name: 'Guilt Trip',
			desc: "Sharply lowers attacker's Attack and SpAtk when fainting.",
			id: 559
		},
		{
			name: 'Tidal Rush',
			desc: 'Water-type moves get +1 priority at max HP.',
			id: 560
		},
		{
			name: 'Zero To Hero',
			desc: 'Changes forms after switching out.',
			id: 561
		},
		{
			name: 'Costar',
			desc: "Copies its ally's stat changes on switch-in.",
			id: 562
		},
		{
			name: 'Commander',
			desc: "Hops inside an allied Dondozo. Boosts its ally but can't act.",
			id: 563
		},
		{
			name: 'Tactical Retreat',
			desc: 'Flees when stats are lowered.',
			id: 564
		},
		{
			name: 'Vengeful Spirit',
			desc: 'Haunted Spirit + Vengeance.',
			id: 565
		},
		{
			name: 'Cud Chew',
			desc: 'Eats berries again at the end of the next turn.',
			id: 566
		},
		{
			name: 'Armor Tail',
			desc: 'Protects itself and ally from priority moves.',
			id: 567
		},
		{
			name: 'Mind Crunch',
			desc: 'Biting moves use SpAtk and deal 30% more damage.',
			id: 568
		},
		{
			name: 'Supreme Overlord',
			desc: 'Each fainted ally increases Attack and SpAtk by 10%.',
			id: 569
		},
		{
			name: 'Ill Will',
			desc: 'Deletes the PP of the move that faints this Pokemon.',
			id: 570
		},
		{
			name: 'Fire Scales',
			desc: 'Halves damage taken by Special moves. Does NOT double SpDef.',
			id: 571
		},
		{
			name: 'Watch Your Step',
			desc: 'Spreads two layers of Spikes on switch-in.',
			id: 572
		},
		{
			name: 'Rapid Response',
			desc: 'Boosts Speed by 50% + SpAtk by 20% on first turn.',
			id: 573
		},
		{
			name: 'Sharp Edges',
			desc: '1/6 HP damage when touched.',
			id: 574
		},
		{
			name: 'Thermal Exchange',
			desc: 'Ups Attack when hit by Fire. Immune to burn.',
			id: 575
		},
		{
			name: 'Good As Gold',
			desc: 'Immune to all Status moves, unless whole field is affected.',
			id: 576
		},
		{
			name: 'Sharing Is Caring',
			desc: 'Stat changes are shared between all battlers.',
			id: 577
		},
		{
			name: 'Tablets Of Ruin',
			desc: 'Lowers the Attack of other Pokemon by 25%.',
			id: 578
		},
		{
			name: 'Sword Of Ruin',
			desc: 'Lowers the Defense of other Pokemon by 25%.',
			id: 579
		},
		{
			name: 'Vessel Of Ruin',
			desc: 'Lowers the Special Attack of other Pokemon by 25%.',
			id: 580
		},
		{
			name: 'Beads Of Ruin',
			desc: 'Lowers the Special Defense of other Pokemon by 25%.',
			id: 581
		},
		{
			name: 'Thick Skin',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 582
		},
		{
			name: 'Gallantry',
			desc: 'Gets no damage for first hit.',
			id: 583
		},
		{
			name: 'Orichalcum Pulse',
			desc: 'Summons sun on entry. Raises Atk by 1.33x in sun.',
			id: 584
		},
		{
			name: 'Sun Basking',
			desc: 'Blocks priority and reduces physical damage by 1/2 in sun.',
			id: 585
		},
		{
			name: 'Winged King',
			desc: 'Ups “supereffective” by 33%.',
			id: 586
		},
		{
			name: 'Hadron Engine',
			desc: 'Field becomes Electric. +33% SpAtk in Electric Terrain.',
			id: 587
		},
		{
			name: 'Iron Serpent',
			desc: 'Ups “supereffective” by 33%.',
			id: 588
		},
		{
			name: 'Catastrophe',
			desc: 'Sun boosts Water. Rain boosts Fire.',
			id: 589
		},
		{
			name: 'Blademaster',
			desc: 'Sweeping Edge + Keen Edge.',
			id: 590
		},
		{
			name: 'Celestial Blessing',
			desc: 'Recovers 1/12 of its health each turn under Misty Terrain.',
			id: 591
		},
		{
			name: 'Minion Control',
			desc: 'Moves hit an extra time for each healthy party member.',
			id: 592
		},
		{
			name: 'Molten Blades',
			desc: 'Keen Edge + Keen Edge moves have a 20% chance to burn.',
			id: 593
		},
		{
			name: 'Haunting Frenzy',
			desc: '20% chance to flinch the opponent. +1 speed on kill.',
			id: 594
		},
		{
			name: 'Noise Cancel',
			desc: 'Protects the party from sound-based moves.',
			id: 595
		},
		{
			name: 'Radio Jam',
			desc: 'Sound-based moves have a 20% chance to inflict disable.',
			id: 596
		},
		{
			name: 'Olé!',
			desc: '20% chance to evade single-target moves.',
			id: 597
		},
		{
			name: 'Malicious',
			desc: "Lowers the foe's highest Attack and Defense stat.",
			id: 598
		},
		{
			name: 'Dead Power',
			desc: '1.5x Attack boost. 20% chance to curse on contact moves.',
			id: 599
		},
		{
			name: 'Brawling Wyvern',
			desc: 'No guard + Dragon type moves become punching moves.',
			id: 600
		},
		{
			name: 'Mythical Arrows',
			desc: 'Arrow moves become special and deal 30% more damage.',
			id: 601
		},
		{
			name: 'Lawnmower',
			desc: 'Removes terrain on switch-in. Stat up if terrain removed.',
			id: 602
		},
		{
			name: 'Flourish',
			desc: 'Boosts Grass moves by 50% in grassy terrain.',
			id: 603
		},
		{
			name: 'Desert Spirit',
			desc: 'Summons sand on entry. Ground moves hit airborne in sand.',
			id: 604
		},
		{
			name: 'Contempt',
			desc: 'Unaware + Defiant.',
			id: 605
		},
		{
			name: 'Aerialist',
			desc: 'Levitate + Flock.',
			id: 606
		},
		{
			name: 'Tera Shell',
			desc: 'All hits will be not very effective while at full HP.',
			id: 607
		},
		{
			name: 'Toxic Chain',
			desc: 'Moves have a 30% chance to badly poison the foe.',
			id: 608
		},
		{
			name: 'Parasitic Spores',
			desc: 'Deals 1/8 HP damage to non-Ghost. Spreads on contact.',
			id: 609
		},
		{
			name: 'Poison Puppeteer',
			desc: 'Poison also inflicts confusion.',
			id: 610
		},
		{
			name: 'Entrance',
			desc: 'Confusion also inflicts infatuation.',
			id: 611
		},
		{
			name: 'Rejection',
			desc: 'Applies Quash on switch-in.',
			id: 612
		},
		{
			name: 'Apple Enlightenment',
			desc: 'Fur coat + Magic Guard.',
			id: 613
		},
		{
			name: 'Balloon Bomb',
			desc: 'Aftermath + Inflatable',
			id: 614
		},
		{
			name: 'Flaming Maw',
			desc: 'Strong Jaw + Flaming Jaws',
			id: 615
		},
		{
			name: 'Demolitionist',
			desc: 'Readied Action + Ignores Protect + screens break on readied turn',
			id: 616
		},
		{
			name: 'Rockhard Will',
			desc: 'Boosts Rock-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 617
		},
		{
			name: 'Fragrant Daze',
			desc: '30% chance to confuse on contact.',
			id: 618
		},
		{
			name: 'Low Visibility',
			desc: 'Summons Eerie Fog on entry.',
			id: 619
		},
		{
			name: 'Old Mariner',
			desc: 'Seaweed + Water STAB.',
			id: 620
		},
		{
			name: 'Ectoplasm',
			desc: 'Ups highest attacking stat by 1.5x in fog.',
			id: 621
		},
		{
			name: 'Beautiful Music',
			desc: 'Sound moves have 50% chance to infatuate, ignoring gender.',
			id: 622
		},
		{
			name: 'Surprise!',
			desc: 'Astonishes enemy priority users in fog.',
			id: 623
		},
		{
			name: 'Snow Song',
			desc: 'Sound moves get a 1.2x boost and become Ice if Normal.',
			id: 624
		},
		{
			name: 'Greater Spirit',
			desc: 'Ups highest stat by +1 on entry in fog.',
			id: 625
		},
		{
			name: 'Resonance',
			desc: 'Sound moves have a 30% chance to cause bleeding.',
			id: 626
		},
		{
			name: 'Ethereal Rush',
			desc: "This Pokémon's Speed gets a 1.5x boost in fog.",
			id: 627
		},
		{
			name: 'Pretty Privilege',
			desc: 'At full HP, gives +1 priority to its Fairy-type moves.',
			id: 628
		},
		{
			name: 'Shallow Grave',
			desc: 'Revives at 25% HP once after fainting in fog.',
			id: 629
		},
		{
			name: 'Menacing Situation',
			desc: '30% chance to Fear on contact. Also works on offense.',
			id: 630
		},
		{
			name: 'Shiny Lightning',
			desc: 'Grants a 1.2x accuracy boost. Thunder never misses.',
			id: 631
		},
		{
			name: 'Terrify',
			desc: "Lowers foes' Sp. Atk by two stages on entry.",
			id: 632
		},
		{
			name: 'Ice Downfall',
			desc: 'Counters contact with 60BP Icicle Crash.',
			id: 633
		},
		{
			name: 'Last Stand',
			desc: 'Def and SpDef increase as HP drops. Max 1.6x.',
			id: 634
		},
		{
			name: 'Pyroclastic Flow',
			desc: 'Molten Down + Corrosion.',
			id: 635
		},
		{
			name: 'Blood Bath',
			desc: 'Immune to bleed. Inflict fear when inflicting bleed.',
			id: 636
		},
		{
			name: 'Battle Aura',
			desc: "Boosts each battler's crit rate by +2.",
			id: 637
		},
		{
			name: 'Bloodlust',
			desc: 'Blood Bath + Soul Eater.',
			id: 638
		},
		{
			name: 'Piercing Solo',
			desc: 'Sound moves cause bleeding.',
			id: 639
		},
		{
			name: 'Rhythmic',
			desc: 'Deals 10% more damage for each repeated move use.',
			id: 640
		},
		{
			name: 'Chunky Bass Line',
			desc: 'Triggers a 40BP Earthquake after using a sound move.',
			id: 641
		},
		{
			name: 'Jackhammer',
			desc: 'Super Slammer moves hit twice for 70% damage.',
			id: 642
		},
		{
			name: 'Denting Blows',
			desc: 'Hammer moves lower Defense.',
			id: 643
		},
		{
			name: 'Ice Cold Hunter',
			desc: 'Ice-type moves hit twice in hail.',
			id: 644
		},
		{
			name: 'Soul Crusher',
			desc: 'Hammer moves hit SpDef and get a 1.1x power boost.',
			id: 645
		},
		{
			name: 'Arc Flash',
			desc: '50% chance to burn when hit or paralyze when dealing damage.',
			id: 646
		},
		{
			name: 'Unicorn',
			desc: 'Mighty Horn + Pixilate.',
			id: 647
		},
		{
			name: 'On the Prowl',
			desc: '+1 priority for the first turn. Negative priority becomes +0.',
			id: 648
		},
		{
			name: 'Pretentious',
			desc: 'Dealing a KO raises Crit by one stage.',
			id: 649
		},
		{
			name: 'Venoblaze Pincers',
			desc: '1.2x boost to physical moves and 20% chance to Burn or Poison.',
			id: 650
		},
		{
			name: 'Eternal Blessing',
			desc: 'Celestial Blessing + Regenerator.',
			id: 651
		},
		{
			name: 'Sugar Rush',
			desc: 'Unburden + Ripen',
			id: 652
		},
		{
			name: 'Rest in Peace',
			desc: 'Heals 1/8 of max HP every turn in fog.',
			id: 653
		},
		{
			name: 'White Noise',
			desc: 'Static + Rest in Peace.',
			id: 654
		},
		{
			name: 'Smokey Maneuvers',
			desc: 'Evasion is boosted by 1.25x in fog.',
			id: 655
		},
		{
			name: 'Tag',
			desc: 'Attacks switching opponents with a 20BP Pursuit.',
			id: 656
		},
		{
			name: 'Power Metal',
			desc: 'Sound moves get a 1.2x boost and become Steel if Normal.',
			id: 657
		},
		{
			name: 'Power Edge',
			desc: 'Keen Edge moves target Special Defense and get a 1.3x boost.',
			id: 658
		},
		{
			name: 'Superconductor',
			desc: 'Steel-type moves become Electric and get a 1.1x boost.',
			id: 659
		},
		{
			name: 'Ultra Instinct',
			desc: 'Counters contact with 20BP Vacuum Wave. Takes .8x damage.',
			id: 660
		},
		{
			name: 'Unlocked Potential',
			desc: 'Inner Focus + Berserk.',
			id: 661
		},
		{
			name: 'Higher Rank',
			desc: 'Priority moves get a 1.2x boost.',
			id: 662
		},
		{
			name: 'Funeral Pyre',
			desc: 'Non-Ghost and Dark-types take 1/4 damage every turn.',
			id: 663
		},
		{
			name: 'Flame Bubble',
			desc: 'Water Bubble + Flaming Soul.',
			id: 664
		},
		{
			name: 'Elemental Vortex',
			desc: 'Flash Fire + Water Absorb.',
			id: 665
		},
		{
			name: 'Snowy Wrath',
			desc: 'Snow Warning + Cryomancy.',
			id: 666
		},
		{
			name: 'Pattern Change',
			desc: 'Protean + Shed Skin',
			id: 667
		},
		{
			name: 'No Turning Back',
			desc: "Boosts all stats but can't retreat when below 1/2 max HP.",
			id: 668
		},
		{
			name: 'Flammable Coat',
			desc: 'Changes forms when using or hit by a Fire-type move.',
			id: 669
		},
		{
			name: 'Draco Morale',
			desc: 'Uses Dragon Cheer on switch-in.',
			id: 670
		},
		{
			name: 'Bad Omen',
			desc: 'Foes min roll. Takes 1/4 damage from crits.',
			id: 671
		},
		{
			name: 'Mosh Pit',
			desc: "Ally's attacks get a 1.25x boost. 1.5x if attack causes recoil.",
			id: 672
		},
		{
			name: 'Blood Stain',
			desc: 'Is always bleeding if not immune. Spreads on contact.',
			id: 673
		},
		{
			name: 'Blood Stigma',
			desc: 'Immune to status. Gets a 2x boost vs bleeding foes.',
			id: 674
		},
		{
			name: 'Max Acceleration',
			desc: 'Speed Boost + Slipstream.',
			id: 675
		},
		{
			name: 'Sidewinder',
			desc: 'First biting move each entry gets +1 priority. Resets on KO.',
			id: 676
		},
		{
			name: 'Petrify',
			desc: 'Clears stat buffs then lowers speed by one stage on entry.',
			id: 677
		},
		{
			name: 'Fluffiest',
			desc: 'Quarters contact damage taken. 4x weak to fire.',
			id: 678
		},
		{
			name: 'Way of Precision',
			desc: 'Inner Focus + Precise Fist.',
			id: 679
		},
		{
			name: 'Way of Swiftness',
			desc: 'Pretentious + Swift Swim.',
			id: 680
		},
		{
			name: 'Atomic Punch',
			desc: 'Iron Fist + 30% Steel type damage.',
			id: 681
		},
		{
			name: 'Iron Giant',
			desc: 'Heatproof + Juggernaut.',
			id: 682
		},
		{
			name: 'Master Hand',
			desc: 'Mega Launcher + Rampage.',
			id: 683
		},
		{
			name: 'Final Blow',
			desc: 'Unseen Fist + Fatal Precision.',
			id: 684
		},
		{
			name: 'Hospitality',
			desc: 'Heals partner for 25% of its max HP on switch-in.',
			id: 685
		},
		{
			name: 'Butter Up',
			desc: 'Hospitality + Soothing Aroma',
			id: 686
		},
		{
			name: 'Vitality Strike',
			desc: 'Heals for 10% of the damage dealt by punching moves.',
			id: 687
		},
		{
			name: 'Imposing Wings',
			desc: 'Giant Wings + Levitate.',
			id: 688
		},
		{
			name: 'Sword of Damnation',
			desc: 'Unaware + Sword of Ruin.',
			id: 689
		},
		{
			name: 'Restraining Order',
			desc: 'Forces the attacker out when hit, once each switch-in.',
			id: 690
		},
		{
			name: "Assassin's Tools",
			desc: 'Contact moves have a 30% chance to PSN, PRLZ, or BLD.',
			id: 691
		},
		{
			name: 'Frostmaw',
			desc: 'Biting moves have a 50% chance to inflict frostbite.',
			id: 692
		},
		{
			name: 'Patchwork',
			desc: 'Disguise + curses the opponent when its Disguise breaks.',
			id: 693
		},
		{
			name: 'Blind Rage',
			desc: 'Scrappy + Mold Breaker.',
			id: 694
		},
		{
			name: 'Slipstream',
			desc: 'Moves use 20% of its Speed stat additionally.',
			id: 695
		},
		{
			name: 'Apex Predator',
			desc: 'Tough Claws + Predator.',
			id: 696
		},
		{
			name: "Dragon's Ritual",
			desc: 'Dealing a KO raises Attack and Speed by one stage.',
			id: 697
		},
		{
			name: 'Pinnacle Blade',
			desc: 'Slashing moves always hit and break protection and barriers.',
			id: 698
		},
		{
			name: 'Energized',
			desc: 'Generator + charges up on KO with an Electric-type move.',
			id: 699
		},
		{
			name: 'Color Spectrum',
			desc: 'Same-type attacks get a 1.2x boost. Changes type each turn.',
			id: 700
		},
		{
			name: 'Steel Beetle',
			desc: 'Raging Boxer + Pollinate.',
			id: 701
		},
		{
			name: 'From the Shadows',
			desc: 'Attacks trap and have a 20% flinch chance when moving first.',
			id: 702
		},
		{
			name: 'Rage Point',
			desc: 'Gets a 1.5x boost while statused. Raises offenses when crit.',
			id: 703
		},
		{
			name: 'Hot Coals',
			desc: 'Sets a trap that burns the next foe that switches in.',
			id: 704
		},
		{
			name: 'Terastal Treasure',
			desc: 'Reduces damage taken by 40%, but lowers speed by 20%.',
			id: 705
		},
		{
			name: 'Shocking Maw',
			desc: 'Strong Jaw + Bite moves have 50% paralysis chance.',
			id: 706
		},
		{
			name: 'Gleam Eyes',
			desc: 'Frisk + Scare.',
			id: 707
		},
		{
			name: 'Megabite',
			desc: 'Biting moves use SpAtk and deal 30% more damage.',
			id: 708
		},
		{
			name: 'Dream State',
			desc: 'Immune to critical hits. Takes 20% less damage from attacks.',
			id: 709
		},
		{
			name: 'Dream Whimsy',
			desc: 'Uses Yawn on switch-in.',
			id: 710
		},
		{
			name: 'Lunar Affinity',
			desc: 'Copies lunar moves used by others.',
			id: 711
		},
		{
			name: 'Flame Shield',
			desc: 'Takes 35% less damage from Super-effective moves.',
			id: 712
		},
		{
			name: 'Aquatic Dweller',
			desc: 'Aquatic + Boosts the power of Water-type moves by 1.5x.',
			id: 713
		},
		{
			name: 'Apple Pie',
			desc: 'Self Sufficient + Ripen.',
			id: 714
		},
		{
			name: 'Hover',
			desc: 'Adds Psychic type to itself. Avoids Ground attacks.',
			id: 715
		},
		{
			name: 'Depravity',
			desc: 'Merciless + Overcharge.',
			id: 716
		},
		{
			name: 'Wildfire',
			desc: 'Attacks with Fire Spin on entry.',
			id: 717
		},
		{
			name: 'Jumpscare',
			desc: 'Attacks with Astonish on first switch-in.',
			id: 718
		},
		{
			name: 'Tar Toss',
			desc: 'Uses Tar Shot on switch-in.',
			id: 719
		},
		{
			name: 'Stun Shock',
			desc: 'Attacks have a 60% chance to Paralyze or Poison.',
			id: 720
		},
		{
			name: 'Raging Goddess',
			desc: 'Rampage + Hyper Aggressive.',
			id: 721
		},
		{
			name: 'Whiplash',
			desc: 'Physical attacks lower defense.',
			id: 722
		},
		{
			name: 'Supersweet Syrup',
			desc: "Sticky Hold + Disables foe's item for 2 turns on contact.",
			id: 723
		},
		{
			name: 'Lucky Halo',
			desc: 'Negates self stat drops. Endures the a single KO.',
			id: 724
		},
		{
			name: 'Trash Heap',
			desc: 'Corrosion + Toxic Spill.',
			id: 725
		},
		{
			name: 'Sludgy Mix',
			desc: 'Intoxicate + Punk Rock.',
			id: 726
		},
		{
			name: 'Overwatch',
			desc: 'On the Prowl + Stakeout.',
			id: 727
		},
		{
			name: 'Wind Rage',
			desc: 'Uses Defog on switch-in. Air-based moves get a 1.3x boost.',
			id: 728
		},
		{
			name: 'Victory Bomb',
			desc: 'Attacks with a 100BP Fire-type Explosion on fainting.',
			id: 729
		},
		{
			name: 'Razor Sharp',
			desc: 'Critical hits also inflict bleeding.',
			id: 730
		},
		{
			name: 'To The Bone',
			desc: 'Critical hits get a 1.5x boost and inflict bleeding.',
			id: 731
		},
		{
			name: 'Blade Dance',
			desc: 'Triggers 50 BP Leaf Blade after using a dance move.',
			id: 732
		},
		{
			name: 'Taekkyeon',
			desc: 'All attacks are dances.',
			id: 733
		},
		{
			name: 'Ape Shift',
			desc: 'Transforms below 50% HP, curing status and always critting.',
			id: 734
		},
		{
			name: 'Know Your Place',
			desc: 'Contact attacks make foes move last for 5 turns.',
			id: 735
		},
		{
			name: 'Deep Cuts',
			desc: 'Slashing moves have a 50% chance to inflict bleeding.',
			id: 736
		},
		{
			name: 'Life Steal',
			desc: 'Steals 1/10 HP from foes each turn.',
			id: 737
		},
		{
			name: 'Rude Awakening',
			desc: 'Raises all stats becomes immune to sleep after waking up.',
			id: 738
		},
		{
			name: 'Teraform Zero',
			desc: 'Tera Shell + clears weather and terrain on first entry.',
			id: 739
		},
		{
			name: 'Set Ablaze',
			desc: 'Inflicting burn also inflicts fear.',
			id: 740
		},
		{
			name: 'Breakwater',
			desc: 'Swift Swim + Stall.',
			id: 741
		},
		{
			name: 'Magical Fists',
			desc: 'Punching moves use Special Attack and get a 1.3x boost.',
			id: 742
		},
		{
			name: 'Cutthroat',
			desc: 'The first slicing move used on each entry in gets +1 priority.',
			id: 743
		},
		{
			name: 'Sand Bender',
			desc: 'Sand Stream + Sand Force.',
			id: 744
		},
		{
			name: 'Sand Pit',
			desc: 'Attacks with 20BP Sand Tomb on switch-in.',
			id: 745
		},
		{
			name: 'Desolate Sun',
			desc: 'Desolate Land + Earth Eater.',
			id: 746
		},
		{
			name: 'Daybreak',
			desc: 'Burns the foe on contact. Also works on offense.',
			id: 747
		},
		{
			name: 'Energy Siphon',
			desc: 'Heals the user for 1/4 of the damage they deal.',
			id: 748
		},
		{
			name: 'Reservoir',
			desc: 'Water Absorb + Storm Drain.',
			id: 749
		},
		{
			name: 'Neurotoxin',
			desc: 'Inflicting poison also lowers Attack, SpAtk, and Speed.',
			id: 750
		},
		{
			name: 'Energy Horns',
			desc: 'Mighty horn moves become special and deal 30% more damage.',
			id: 751
		},
		{
			name: 'Rising Dough',
			desc: 'Casts Sticky Web on entry. Lasts 7 turns.',
			id: 752
		},
		{
			name: 'Crust Coat',
			desc: 'Immune to critical hits. Takes 20% less damage from attacks.',
			id: 753
		},
		{
			name: 'Puffy',
			desc: 'Takes 1/2 dmg from contact moves but Fire moves hurt it 2x more.',
			id: 754
		},
		{
			name: 'Balloon Blitz',
			desc: 'Inflatable + Hyper Aggressive.',
			id: 755
		},
		{
			name: 'Twinkle Toes',
			desc: 'Boosts the power of kicking moves by 1.3x + Pixilate.',
			id: 756
		},
		{
			name: 'Doom Blast',
			desc: 'Dark-type moves deal 1.35x damage but have 10% recoil.',
			id: 757
		},
		{
			name: 'Brute Force',
			desc: 'Rock Head + Reckless',
			id: 758
		},
		{
			name: 'Faraday Cage',
			desc: 'Shell Armor + 50BP Thunder Cage when hit by contact.',
			id: 759
		},
		{
			name: 'Acidic Slime',
			desc: 'Corrosion + Poison STAB.',
			id: 760
		},
		{
			name: 'Rose Garden',
			desc: 'Spreads two layers of Toxic Spikes on switch-in.',
			id: 761
		},
		{
			name: 'Qigong',
			desc: 'Always hits. Fighting Spirit + Rampage.',
			id: 762
		},
		{
			name: 'Conjurer Of Deceit',
			desc: 'Magic Guard + Magic Bounce',
			id: 763
		},
		{
			name: 'Deep Freeze',
			desc: 'Boosts Water and Ice by 1.25x. Halves Fire damage taken.',
			id: 764
		},
		{
			name: 'Soul Devourer',
			desc: 'Soul Eater + Phantom Pain',
			id: 765
		},
		{
			name: "Champion's Entrance",
			desc: 'Intimidate + Violent Rush',
			id: 766
		},
		{
			name: 'Presto',
			desc: 'Sound moves get +1 priority at full HP.',
			id: 767
		},
		{
			name: 'Samba',
			desc: 'Striker + Dancer',
			id: 768
		},
		{
			name: 'JunshiSanda',
			desc: 'Punches and Kicks are both Punches and Kicks.',
			id: 769
		},
		{
			name: 'Gladiator',
			desc: 'Boosts Fighting-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 770
		},
		{
			name: 'Forsaken Heart',
			desc: 'KOs dealt anywhere on the field raise Attack by one stage.',
			id: 771
		},
		{
			name: 'Relentless',
			desc: 'Exploit Weakness + Merciless',
			id: 772
		},
		{
			name: 'Soothsayer',
			desc: 'Resists all attacks for three turns on first entry.',
			id: 773
		},
		{
			name: 'Corrupted Mind',
			desc: 'Psychic moves ignore resists and get 1.4x effect chance.',
			id: 774
		},
		{
			name: 'Flame Coat',
			desc: 'Non-Fire-types take 1/8 dmg every turn when on field.',
			id: 775
		},
		{
			name: 'Unown Power',
			desc: 'Mystic Power + Hidden and Secret Power hit Super-effectively.',
			id: 776
		},
		{
			name: 'Super Scope',
			desc: 'Mega Launcher + Artillery.',
			id: 777
		},
		{
			name: 'Venom Crown',
			desc: 'Poison Point + Mighty Horn.',
			id: 778
		},
		{
			name: 'Blight Scale',
			desc: 'Multiscale + Poison Point',
			id: 779
		},
		{
			name: 'Gunman',
			desc: 'Mega Launcher + Status moves are Mega Launcher moves.',
			id: 780
		},
		{
			name: "Hunter's Mark",
			desc: 'Ambush + Deadeye.',
			id: 781
		},
		{
			name: 'Hemolysis',
			desc: "Poisoned foes lose all stat buffs and can't heal.",
			id: 782
		},
		{
			name: 'Caretaker',
			desc: 'Healer + Friend Guard.',
			id: 783
		},
		{
			name: "Poseidon's Dominion",
			desc: 'Attacks with Whirlpool on entry.',
			id: 784
		},
		{
			name: 'Two-Faced',
			desc: 'Hunger Switch + Elec and Dark deal 1.35x with 10% recoil.',
			id: 785
		},
		{
			name: 'Lullaby',
			desc: 'Sing accuracy is 90% when used by this Pokémon.',
			id: 786
		},
		{
			name: 'Cryo Architect',
			desc: 'Boosts Attack and Def when hit by Water or Ice.',
			id: 787
		},
		{
			name: 'Glacial Rage',
			desc: 'Triggers 50 BP Blizzard after using a Ice-type move.',
			id: 788
		},
		{
			name: 'Immovable Object',
			desc: 'Impenetrable + Sturdy.',
			id: 789
		},
		{
			name: 'Frenzied Phantom',
			desc: 'Hyper Aggressive + Shadow Tag.',
			id: 790
		},
		{
			name: 'DNA Scramble',
			desc: 'Changes forms based on the the move used.',
			id: 791
		},
		{
			name: 'Metallic Jaws',
			desc: 'Metallic + Primal Maw.',
			id: 792
		},
		{
			name: 'Calculative',
			desc: 'Analytic + Neuroforce.',
			id: 793
		},
		{
			name: 'Deadly Precision',
			desc: 'Super-effective moves never miss and ignore abilities.',
			id: 794
		},
		{
			name: 'Embody Aspect',
			desc: '+1 Speed on Entry.',
			id: 795
		},
		{
			name: 'Embody Aspect',
			desc: '+1 Attack on Entry.',
			id: 796
		},
		{
			name: 'Embody Aspect',
			desc: '+1 Defense on Entry.',
			id: 797
		},
		{
			name: 'Embody Aspect',
			desc: '+1 Spdef on Entry.',
			id: 798
		},
		{
			name: 'We Will Rock You',
			desc: 'Boosts Rock-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 799
		},
		{
			name: 'Deviate',
			desc: 'Normal moves become Dark. Dark moves are empowered.',
			id: 800
		},
		{
			name: "Sun's Bounty",
			desc: 'Leaf Guard + Harvest.',
			id: 801
		},
		{
			name: 'Rite Of Spring',
			desc: 'Chlorophyll + Solar Power.',
			id: 802
		},
		{
			name: 'Headstrong',
			desc: '+1 Spdef on entry.',
			id: 803
		},
		{
			name: 'Firefighter',
			desc: 'Deals 1.5x damage to Fire. Takes 0.5x damage from Fire.',
			id: 804
		},
		{
			name: 'Sepia Lens',
			desc: 'Tinted Lens + Sand Guard.',
			id: 805
		},
		{
			name: 'Super Sniper',
			desc: 'Sniper + Attacks hit switching foes with 1/2 Power.',
			id: 806
		},
		{
			name: 'Woodland Curse',
			desc: "Uses Forest's Curse on Entry. Adds Grass type on contact.",
			id: 807
		},
		{
			name: 'Malodor',
			desc: "Suppresses attacker's abilities on contact.",
			id: 808
		},
		{
			name: 'Blur',
			desc: 'Uses Speed as defense stat when hit by contact.',
			id: 809
		},
		{
			name: 'Elude',
			desc: 'Uses Speed as defense stat when hit by non-contact.',
			id: 810
		},
		{
			name: 'Drake Of Rage',
			desc: 'Tinted Lens + Rampage',
			id: 811
		},
		{
			name: 'Reverberate',
			desc: 'Normal moves are Sound moves.',
			id: 812
		},
		{
			name: 'Mixed Martial Arts',
			desc: 'Normal moves are flagged as Punch + Kick moves.',
			id: 813
		},
		{
			name: 'Strategic Pause',
			desc: '+2 crit rate when moving last + Analytic.',
			id: 814
		},
		{
			name: 'Overrule',
			desc: 'Crits bypass abilities and do 2x damage vs resists.',
			id: 815
		},
		{
			name: 'Mental Pollution',
			desc: "Suppresses others' abilities when it becomes enraged.",
			id: 816
		},
		{
			name: 'Madness Enhancement',
			desc: 'Enrages in fog, halves damage when enraged.',
			id: 817
		},
		{
			name: 'Tentalock',
			desc: 'Grappler + Serpent Bind.',
			id: 818
		},
		{
			name: 'Serpent Bind',
			desc: '50% chance to trap, then drop the their speed by -1 each turn.',
			id: 819
		},
		{
			name: 'Soul Tap',
			desc: 'Drain 10% HP from foes at the end of each turn in fog.',
			id: 820
		},
		{
			name: 'Scarecrow',
			desc: 'Scare + Bad Luck.',
			id: 821
		},
		{
			name: 'Ominous Shroud',
			desc: 'Phantom + Shadow Shield.',
			id: 822
		},
		{
			name: 'Chilling Presence',
			desc: '10BP Icy Wind on entry.',
			id: 823
		},
		{
			name: 'Frostbind',
			desc: 'Inflicting Frostbite also inflicts Disable.',
			id: 824
		},
		{
			name: 'Glacial Ghost',
			desc: 'Slush Rush + Snow Cloak.',
			id: 825
		},
		{
			name: 'Tender Affection',
			desc: 'Cute Charm + Fairy STAB',
			id: 826
		},
		{
			name: 'Wonder Scale',
			desc: 'Shed Skin + Wonder Skin',
			id: 827
		},
		{
			name: 'Overzealous (N)',
			desc: "User's super-effective moves have +1 prio.",
			id: 828
		},
		{
			name: 'Stainless Steel',
			desc: 'Fort Knox + Steelworker.',
			id: 829
		},
		{
			name: 'Temporal Rupture',
			desc: 'Roar of Time is altered drastically.',
			id: 830
		},
		{
			name: 'Grass Flute',
			desc: 'Sound moves inflict Fear.',
			id: 831
		},
		{
			name: 'Hemotoxin',
			desc: "Supresses abilities of the target when they're poisoned.",
			id: 832
		},
		{
			name: 'Harukaze',
			desc: 'Setting Grassy Terrain sets Tailwind and vice versa.',
			id: 833
		},
		{
			name: 'Toxic Surge',
			desc: 'sets Toxic Terrain on entry.',
			id: 834
		},
		{
			name: 'Atlantic Ruler',
			desc: 'Aquatic Dweller + Swift Swim.',
			id: 835
		},
		{
			name: 'Biofilm',
			desc: '50% spdef boost under Toxic Terrain.',
			id: 836
		},
		{
			name: 'Chokehold',
			desc: 'Binding moves lower speed and paralyze.',
			id: 837
		},
		{
			name: 'Guardian Coat',
			desc: 'Blocks weather dmg and powders. Takes -20% physical damage.',
			id: 838
		},
		{
			name: 'Neutralizing Fog',
			desc: 'Uses Defog on entry.',
			id: 839
		},
		{
			name: 'Poison Quills',
			desc: 'Rough Skin + Poison Point.',
			id: 840
		},
		{
			name: 'Draconic Might',
			desc: 'Draconize + Half Drake.',
			id: 841
		},
		{
			name: 'Festivities',
			desc: 'Sound moves become dance moves and vice versa.',
			id: 842
		},
		{
			name: 'Fey Flight',
			desc: 'Adds Fairy-type and levitates.',
			id: 843
		},
		{
			name: 'Best Offense',
			desc: 'Mystic blades + use 20% of spdef during moves.',
			id: 844
		},
		{
			name: 'Impaler',
			desc: 'Mighty Horn + 30% Bleed chance on horn moves.',
			id: 845
		},
		{
			name: 'Magus Blades',
			desc: 'Dual Wield + Best Offense.',
			id: 846
		},
		{
			name: 'Lightning Born',
			desc: 'Adds Electric-type on entry.',
			id: 847
		},
		{
			name: 'Superheavy',
			desc: 'Steadfast + blocks phasing moves.',
			id: 848
		},
		{
			name: 'World Serpent',
			desc: 'Long Reach + Grip Pincer.',
			id: 849
		},
		{
			name: 'Lucky Wings',
			desc: 'Serene Grace + Giant Wings.',
			id: 850
		},
		{
			name: 'Komodo',
			desc: 'Adds Dragon-type + moves have 30% Bad Poison chance.',
			id: 851
		},
		{
			name: 'Envenom',
			desc: 'Moves have a 30% chance to poison the target.',
			id: 852
		},
		{
			name: 'Purple Haze',
			desc: 'Triggers a 20BP Poison Gas after using a move.',
			id: 853
		},
		{
			name: 'Gnashing Cannon',
			desc: 'Mega Launcher + Mind Crunch.',
			id: 854
		},
		{
			name: 'Hyper Cleanse',
			desc: 'Immune to status. Halves poison damage taken.',
			id: 855
		},
		{
			name: 'Molten Coat',
			desc: 'Mineralize + Rock moves have 50% burn chance.',
			id: 856
		},
		{
			name: 'Royal Decree',
			desc: 'Queenly Majesty + Glare on entry once per battle.',
			id: 857
		},
		{
			name: 'Breezy Neigh',
			desc: 'KOs raise Speed by one stage.',
			id: 858
		},
		{
			name: 'Dreamscape',
			desc: 'Comatose + Dreamcatcher + Deal 20% more damage.',
			id: 859
		},
		{
			name: 'Haste Makes Waste',
			desc: 'Stall + Analytic.',
			id: 860
		},
		{
			name: 'Hungry Maws',
			desc: 'Strong Jaw + Jaws of Carnage.',
			id: 861
		},
		{
			name: 'Thermal Slide',
			desc: 'Ups speed by 50% in sun or hail.',
			id: 862
		},
		{
			name: 'Thermomancy',
			desc: 'Pyromancy + Cryomancy.',
			id: 863
		},
		{
			name: 'Chuckster',
			desc: 'Once per entry, take 1/2 damage and force-switch the target.',
			id: 864
		},
		{
			name: 'Heat Sink',
			desc: 'Redirects Fire moves. Absorbs them, ups highest Atk.',
			id: 865
		},
		{
			name: 'Relic Stone',
			desc: "Other battlers don't benefit from STAB.",
			id: 866
		},
		{
			name: 'Supercell',
			desc: 'Drizzle + Electro Surge.',
			id: 867
		},
		{
			name: 'Lightning Aspect',
			desc: 'Absorbs electric moves then ups highest stat by +1.',
			id: 868
		},
		{
			name: 'Fire Aspect',
			desc: 'Absorbs fire moves and always burns with fire.',
			id: 871
		},
		{
			name: 'Ice Plumes',
			desc: 'Halves damage taken by Special moves. Does NOT double SpDef.',
			id: 873
		},
		{
			name: 'Blistering Sun',
			desc: 'Desolate Land + Air Blower.',
			id: 869
		},
		{
			name: 'Molten Core',
			desc: 'Furnace + Absorbs Rock-moves/Stealth Rocks.',
			id: 870
		},
		{
			name: "Aurora's Gale",
			desc: 'Majestic Bird + North Wind.',
			id: 872
		},
		{
			name: 'Winter Throne',
			desc: '1/8 Damage each turn to non-ice. Heals Ice 1/8 each turn.',
			id: 874
		},
		{
			name: 'Energy Tap',
			desc: 'Heals the user for 1/8 of the damage they deal.',
			id: 875
		},
		{
			name: 'Sludge Spit',
			desc: 'follows up with 35BP Venom Bolt after using an attack.',
			id: 876
		},
		{
			name: 'Swamp Thing',
			desc: 'Sets the Swamp Pledge effect on entry.',
			id: 877
		},
		{
			name: 'Frosty Prescence',
			desc: 'Uses Mist on entry.',
			id: 878
		},
		{
			name: 'Chilling Pellets',
			desc: 'Uses 13BP Icicle Spear when hit by contact.',
			id: 879
		},
		{
			name: 'Paint Shot',
			desc: "Mega launcher moves change the target's type to the move used.",
			id: 880
		},
		{
			name: 'Stonecutter',
			desc: 'Fossilized + Rock moves ignore abilities.',
			id: 881
		},
		{
			name: 'Edgelord',
			desc: 'First Keen Edge move each entry gets +1 priority. Resets on KO.',
			id: 882
		},
		{
			name: 'Warmonger',
			desc: "Boosts the user's rock, steel, and fighting moves by 30%.",
			id: 883
		},
		{
			name: 'Locust Swarm',
			desc: 'Changes into Hivemind form until 1/4 HP or less.',
			id: 884
		},
		{
			name: 'Revelation',
			desc: 'Changes into Revelation form until 1/4 HP or less.',
			id: 885
		},
		{
			name: 'Curse of Famine',
			desc: 'Eats terrain, restores hp, and boosts a defense.',
			id: 886
		},
		{
			name: 'Crystalline Armor',
			desc: 'Reflects stat drops and immune to critical hits.',
			id: 887
		},
		{
			name: 'Soul Harvest',
			desc: 'Fainted Pokemon increase your offenses and spdef by 5%.',
			id: 888
		},
		{
			name: 'Thick Blubber',
			desc: 'Take 1/4 damage from fire and ice in return for having 1/2 speed.',
			id: 889
		},
		{
			name: 'Craving',
			desc: 'Eat a random berry at the end of the turn.',
			id: 890
		},
		{
			name: 'Rat King',
			desc: 'Allies with a BST below 400 get their stats boosted by 50%.',
			id: 891
		},
		{
			name: 'Crispy Cream',
			desc: '30% to inflict burn/frostbite when hit by contact.',
			id: 892
		},
		{
			name: 'Deep Fried',
			desc: 'Summons a sea of fire on entry.',
			id: 893
		},
		{
			name: 'Food Lovers',
			desc: 'Hospitality + Friend Guard.',
			id: 894
		},
		{
			name: 'Lunar Wrath',
			desc: 'After using a Ghost move, follow up with a 50BP Moongeist Beam.',
			id: 895
		},
		{
			name: 'Spyware',
			desc: "Sharply raises a stat based on foe's strong point.",
			id: 896
		},
		{
			name: 'Virus',
			desc: 'Electric moves have 30% chance to poison as well.',
			id: 897
		},
		{
			name: 'Power Leak',
			desc: 'When hit, set up Electric Terrain.',
			id: 898
		},
		{
			name: 'Backup Power',
			desc: 'Revives at 25% HP once after fainting in Electric Terrain.',
			id: 899
		},
		{
			name: 'Sand Fiend',
			desc: 'Sand Force + Sand Guard.',
			id: 900
		},
		{
			name: 'Moustache',
			desc: 'Tangling Hair + Stamina.',
			id: 901
		},
		{
			name: 'Depth Explorer',
			desc: 'Field Explorer + Illuminate.',
			id: 902
		},
		{
			name: 'Dune Veil',
			desc: 'Desert Cloak + Self Sufficient.',
			id: 903
		},
		{
			name: 'Strong Foundation',
			desc: "Takes 1/2 Water and Ground dmg and can't be forced out.",
			id: 904
		},
		{
			name: 'Fog Machine',
			desc: 'When hit, Set up Eerie Fog.',
			id: 905
		},
		{
			name: 'Drop Blocks',
			desc: 'When hit, set up spikes.',
			id: 906
		},
		{
			name: 'Turf War',
			desc: 'Destroys terrain and boosts highest stat on entry.',
			id: 910
		},
		{
			name: 'Greedy',
			desc: 'Uses Thief when it loses an item.',
			id: 911
		},
		{
			name: 'Lightsaber',
			desc: 'Adds Fire-type. Keen Edge moves have 25% burn or paralysis.',
			id: 908
		},
		{
			name: 'Loose Thorns',
			desc: 'Sets Creeping Thorns when hit by contact.',
			id: 909
		},
		{
			name: 'Musical Notes',
			desc: 'Status moves become sound-based.',
			id: 912
		},
		{
			name: 'Laser Drill',
			desc: 'Horn moves have a 50% burn chance.',
			id: 907
		},
		{
			name: 'Strikeout',
			desc: "Forces the foe out if they don't attack for 3 turns.",
			id: 913
		},
		{
			name: 'Home Run',
			desc: 'Landing a crit boosts your 3 lowest stats once per turn.',
			id: 914
		},
		{
			name: 'Bruiser',
			desc: 'Adds Fighting type on entry.',
			id: 915
		},
		{
			name: 'Narcissist',
			desc: 'When a stat is lowered, sharply raise both offenses.',
			id: 916
		},
		{
			name: "Let's Dance",
			desc: 'Uses Teeter Dance on entry, Confusing the field.',
			id: 917
		},
		{
			name: 'Dragonfruit',
			desc: 'Half Drake + Rough Skin.',
			id: 918
		},
		{
			name: 'Rocky Exterior',
			desc: 'Adds Rock type on entry.',
			id: 920
		},
		{
			name: 'Lead Claws',
			desc: 'Tough Claws + Mineralize.',
			id: 919
		},
		{
			name: 'Flawless Precision',
			desc: 'Fatal + Deadly Precision.',
			id: 921
		},
		{
			name: 'Chainsaw',
			desc: 'Keen edge attacks lower defense by -1.',
			id: 945
		},
		{
			name: 'Galeforce Wings',
			desc: 'Flying moves get +1 Priority.',
			id: 946
		},
		{
			name: 'Empress',
			desc: 'Queenly Majesty + Rivalry.',
			id: 922
		},
		{
			name: 'Mashed Potato',
			desc: 'Syrup Bomb effect on the foe for 3 turns.',
			id: 923
		},
		{
			name: 'Rainbow Scales',
			desc: 'Fire Scales + Taste the Rainbow.',
			id: 925
		},
		{
			name: 'Taste the Rainbow',
			desc: 'Summons the Rainbow Pledge effect on entry.',
			id: 924
		},
		{
			name: 'Hypnotic Touch',
			desc: '20% chance to sleep on contact. Also works on offense.',
			id: 926
		},
		{
			name: 'Hydra',
			desc: 'Multi-Headed + Hubris.',
			id: 928
		},
		{
			name: 'Wings of Pestilence',
			desc: 'Every attack has a 20% Bleed chance and 10% Curse chance.',
			id: 927
		},
		{
			name: 'Sundae',
			desc: 'Snow Warning + Ice Body.',
			id: 929
		},
		{
			name: 'Ice Picks',
			desc: 'Tough Claws + Slush Rush.',
			id: 930
		},
		{
			name: 'Hammer Fist',
			desc: 'Boosts punch and hammer moves by 25%.',
			id: 931
		},
		{
			name: 'Mach 3',
			desc: 'Deadly Precision + Slipstream.',
			id: 934
		},
		{
			name: 'Raging Storm',
			desc: 'Ups highest attacking stat by 1.5x in rain.',
			id: 935
		},
		{
			name: 'Sumo Guard',
			desc: 'Juggernaut + Thick Fat.',
			id: 936
		},
		{
			name: 'Sumo Wrestler',
			desc: 'Uses 20BP Circle Throw at the end of each 2nd turn.',
			id: 937
		},
		{
			name: 'Cosmic Wings',
			desc: 'Flying moves become Fairy-type.',
			id: 938
		},
		{
			name: 'Cosmic Dust',
			desc: 'Magic Guard + Cosmic Daze.',
			id: 939
		},
		{
			name: 'Cool Exit',
			desc: 'Uses Chilly Reception at the end of your 2nd turn.',
			id: 940
		},
		{
			name: 'Devious Present',
			desc: 'Boosts Ice and throwing moves by 50%.',
			id: 941
		},
		{
			name: 'Christmas Nightmare',
			desc: 'Enemies take 1/8 damage when in hail.',
			id: 942
		},
		{
			name: 'Sap Trap',
			desc: "Lowers foe's speed at the end of turns. At -3 they get trapped.",
			id: 943
		},
		{
			name: 'Dead Bark',
			desc: 'Adds Ghost type. Takes 15% less damage. 30% less damage if SE.',
			id: 944
		},
		{
			name: 'Echolocation',
			desc: 'In fog, deal 20% more damage and never miss.',
			id: 947
		},
		{
			name: 'Massive Pelt',
			desc: 'Tangling Hair + Fluffy.',
			id: 948
		},
		{
			name: 'I Am Steve',
			desc: 'Uses No Retreat on entry.',
			id: 949
		},
		{
			name: 'Tangled Tails',
			desc: 'Know Your Place + Grappler.',
			id: 950
		},
		{
			name: 'Foamy Web',
			desc: 'Casts an unremovable Sticky Web on entry. Lasts 5 turns.',
			id: 951
		},
		{
			name: 'Sharp Talons',
			desc: 'Kicking moves have a 50% Bleed chance.',
			id: 952
		},
		{
			name: 'Zen Garden',
			desc: 'Sets up Grassy or Psychic Terrain at random.',
			id: 953
		},
		{
			name: 'Tummyache',
			desc: 'Thick Fat + Corrosion.',
			id: 954
		},
		{
			name: 'Hypnotic Trance',
			desc: 'Hypnosis never misses and also causes Confusion.',
			id: 955
		},
		{
			name: 'Brain Overload',
			desc: 'When hit, sets up Psychic Terrain.',
			id: 956
		},
		{
			name: 'Brain Mass',
			desc: 'Halves damage taken while at full HP.',
			id: 957
		},
		{
			name: 'Chestnut Shield',
			desc: 'Impenetrable + Bulletproof',
			id: 958
		},
		{
			name: 'Chestnut Axe',
			desc: 'Keen edge + Grass moves become Keen Edge boosted.',
			id: 959
		},
		{
			name: 'Giant Shuriken',
			desc: 'Water Shuriken hits once with 100BP and +1 crit.',
			id: 960
		},
		{
			name: 'Rain Shroud',
			desc: 'Ups evasion by 30% in rain.',
			id: 987
		},
		{
			name: 'Witch Broom',
			desc: 'Hyper Aggressive + Hover.',
			id: 961
		},
		{
			name: 'Angelic Wings',
			desc: 'Prism Scales + Huge Wings.',
			id: 962
		},
		{
			name: 'Wrestle Showman',
			desc: 'Flying Press gains +10BP and causes Taunt.',
			id: 963
		},
		{
			name: 'Fire Ruler',
			desc: "King's Wrath + Flame Shield",
			id: 965
		},
		{
			name: 'Chandelier',
			desc: 'Illuminate + Pyromancy.',
			id: 966
		},
		{
			name: 'Foggy Eye',
			desc: 'While in Fog, boost Ghost moves by 50% and resist Ghost moves.',
			id: 967
		},
		{
			name: 'Toxic Shell',
			desc: 'Shell Armor + Poison Point.',
			id: 968
		},
		{
			name: 'Hand Barnacles',
			desc: 'Multi-Headed + Water STAB.',
			id: 969
		},
		{
			name: 'Voltron',
			desc: 'Metallic + Battle Armor.',
			id: 970
		},
		{
			name: "Fire's Wrath",
			desc: 'Intimidate + Scare; 10% burn chance on non contact moves.',
			id: 971
		},
		{
			name: "Emperor's Wrath",
			desc: "King's Wrath + Queen's Mourning.",
			id: 972
		},
		{
			name: 'Lepidopteran',
			desc: 'Swarm + Unaware.',
			id: 973
		},
		{
			name: 'Break it Down',
			desc: 'After using an attack, follow up with a 20BP Rapid Spin.',
			id: 974
		},
		{
			name: 'Talon Trap',
			desc: '50% chance to trap on contact. 100% if entered this turn.',
			id: 975
		},
		{
			name: 'Backstreet Boy',
			desc: 'Striker + Kicking moves are Dance moves and vise-versa.',
			id: 976
		},
		{
			name: 'Backflip',
			desc: 'After using a Dance move, follow up with a 50BP Chip Away.',
			id: 977
		},
		{
			name: 'Crushing Jaw',
			desc: 'Strong Jaw + Biting moves have a 50% chance to lower defense.',
			id: 978
		},
		{
			name: 'Eternal Flower',
			desc: 'Reduces the stats of other Megas by 20%.',
			id: 979
		},
		{
			name: 'Nihil Blaster',
			desc: 'Aura Break + Mega Launcher.',
			id: 980
		},
		{
			name: 'Hollow Ice Zone',
			desc: 'Ice-type moves apply Ice Statue and then make the user switch.',
			id: 981
		},
		{
			name: 'Overcast',
			desc: 'Low Visibility + Sets Mist on entry.',
			id: 983
		},
		{
			name: 'Cryostasis',
			desc: 'Cryomancy + Frostbite causes flinching.',
			id: 982
		},
		{
			name: 'Flower Necklace',
			desc: "This Pokémon's SpDef gets a 1.5x boost in Grassy Terrain.",
			id: 984
		},
		{
			name: 'Mega Drill',
			desc: 'Mighty Horn + all Drill moves are 30% stronger.',
			id: 985
		},
		{
			name: 'Mucus Membrane',
			desc: 'Takes 30% less damage from attacks + Gooey',
			id: 986
		},
		{
			name: 'Lucha Libre',
			desc: 'Dazzling + Defiant.',
			id: 964
		},
		{
			name: 'Curlipede',
			desc: "Let's Roll + Coil Up",
			id: 988
		},
		{
			name: 'Storm Cloud',
			desc: 'Summon rain on entry for 8 turns. Gain Electric-type STAB.',
			id: 989
		},
		{
			name: 'Waterborne',
			desc: 'Aquatic + Adaptability',
			id: 990
		},
		{
			name: 'Drakelp Head',
			desc: "Weakens first move taken and drops opponent's attack.",
			id: 932
		},
		{
			name: 'Polarity',
			desc: "Increases the party's highest stat by 30%",
			id: 933
		},
		{
			name: 'Resilience',
			desc: 'Heal 1/4 of max HP whenever below 1/2 health',
			id: 991
		},
		{
			name: 'Going Berserk',
			desc: 'Berserk + Rampage',
			id: 992
		},
		{
			name: 'Thunder Clouds',
			desc: 'After using a special move, launch a 35 BP Thunderbolt',
			id: 993
		},
		{
			name: 'Unrelenting',
			desc: 'All attacking moves can hit 2-5 times',
			id: 994
		},
		{
			name: 'Elemental Aegis',
			desc: 'Takes 1/2 damage from Fire, Electric and Water-type attacks.',
			id: 995
		},
		{
			name: 'Aegis Ward',
			desc: 'Takes 1/2 damage from Dark, Ghost and Psychic-type attacks.',
			id: 996
		},
		{
			name: 'Shattered Armor',
			desc: 'Battle Armor + Scrapyard.',
			id: 997
		},
		{
			name: 'Acid Reflux',
			desc: 'Uses 20BP Acid when it takes damage.',
			id: 998
		},
		{
			name: 'Ghost Frenzy',
			desc: 'Hyper Aggressive + Soul Eater.',
			id: 999
		},
		{
			name: 'Survivor Bias',
			desc: "Not very effective moves can't cause fainting.",
			id: 1000
		},
		{
			name: 'Bandit',
			desc: 'Scavenger + Technician.',
			id: 1001
		},
		{
			name: 'Fortress',
			desc: 'Filter + Shell Armor.',
			id: 1002
		},
		{
			name: 'Bird of Prey',
			desc: 'Big Pecks + Scrappy.',
			id: 1003
		},
		{
			name: 'Feathercoat',
			desc: 'Takes 10% less damage from attacks, 20% if resisted.',
			id: 1004
		},
		{
			name: 'Power Outage',
			desc: 'Boosts first Electric attack by 2x then loses Electric type.',
			id: 1005
		},
		{
			name: 'Electro Booster',
			desc: 'Uses Magnet Rise on entry.',
			id: 1006
		},
		{
			name: 'Current Crash',
			desc: 'Reckless + Thundercall.',
			id: 1007
		},
		{
			name: 'Daredevil',
			desc: '+1 Atk after using recoil move. 1/2 recoil damage.',
			id: 1008
		},
		{
			name: 'Frost Dragon',
			desc: 'Triggers 50 BP Blizzard after using a Dragon or Ice-type move.',
			id: 1009
		},
		{
			name: 'Thermal Entropy',
			desc: 'Thermal Exchange + Heatproof.',
			id: 1010
		},
		{
			name: 'Sinister Claws',
			desc: 'Mystic Blades + Keen Edge moves lower SpDef.',
			id: 1011
		},
		{
			name: 'Petal Shield',
			desc: 'Maxes Def on entry. -1 Def when hit.',
			id: 1012
		},
		{
			name: 'Mob Boss',
			desc: 'Terrify + Deviate.',
			id: 1013
		},
		{
			name: 'Ghost Pepper',
			desc: 'Grass moves have a 30% to cause burn.',
			id: 1014
		},
		{
			name: 'Droideka',
			desc: 'Heatproof + Shell Armor.',
			id: 1015
		},
		{
			name: '3 > 1',
			desc: 'Multi-Headed + Riptide',
			id: 1016
		},
		{
			name: 'Icicle Fist',
			desc: 'Iron Fist + 30% chance to cause frostbite with punches.',
			id: 1017
		},
		{
			name: 'Abominable Monster',
			desc: 'Ups SpDef by 1.5x in hail.',
			id: 1018
		},
		{
			name: 'Wind Chimes',
			desc: 'Amplifier + attacks with 30 BP Hyper Voice when hit.',
			id: 1019
		},
		{
			name: 'Unstable Core',
			desc: 'Power Core + Aftermath.',
			id: 1020
		},
		{
			name: 'Aura Armor',
			desc: 'Takes 35% reduced damage.',
			id: 1021
		},
		{
			name: 'Deflect',
			desc: 'Counters with 20 BP Vacuum Wave when hit. Takes 20% less damage.',
			id: 1022
		},
		{
			name: 'Overwhelming Mind',
			desc: 'Boosts Psychic-type moves by 1.3x, or 1.8x when below 1/3 HP.',
			id: 1023
		},
		{
			name: 'Duality',
			desc: 'Infiltrator + Competitive.',
			id: 1024
		},
		{
			name: "Reaper's Embarce",
			desc: 'Tough Claws + Foul Energy.',
			id: 1026
		},
		{
			name: 'Foul Energy',
			desc: 'Boosts Dark-type moves by 1.2x, or 1.5x when under 1/3 HP.',
			id: 1025
		},
		{
			name: 'Jungle Fever',
			desc: 'If Grassy Terrain is active, gets a 1.5x Speed boost.',
			id: 1027
		},
		{
			name: 'King of the Jungle',
			desc: 'Infiltrator + deals 1.5x more damage to Grass-types.',
			id: 1028
		},
		{
			name: "Warrior's Spear",
			desc: 'Mighty Horn + Fighting Spirit',
			id: 1029
		},
		{
			name: 'Sleek Scales',
			desc: 'The Pokémon uses +15% of its Speed when defending.',
			id: 1030
		},
		{
			name: 'Rock Armor',
			desc: 'Rocky Exterior + takes 10% less damage from attacks.',
			id: 1031
		},
		{
			name: 'Smoldering Wood',
			desc: 'Raw Wood + Flame Body.',
			id: 1032
		},
		{
			name: 'Slime Mold',
			desc: 'Sticky Hold + Gooey.',
			id: 1033
		}
	].map((a) => ({ name: a.name, description: a.desc }));
</script>

<pre>{JSON.stringify(abilities, null, 2)}</pre>
