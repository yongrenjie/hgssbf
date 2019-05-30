/* Type mapping				Nature mapping
0 Normal (Chilan)			0 Hardy
1 Fire (Occa)				1 Lonely
2 Water	(Passho)			2 Adamant
3 Electric (Wacan)			3 Naughty
4 Grass (Rindo)				4 Brave
5 Ice (Yache)				5 Docile
6 Fighting (Chople)			6 Bold
7 Poison (Kebia)			7 Impish
8 Ground (Shuca)			8 Lax
9 Flying (Coba)				9 Relaxed
10 Psychic (Payapa)			10 Bashful
11 Bug (Tanga)				11 Modest
12 Rock (Charti)			12 Mild
13 Ghost (Kasib)			13 Rash
14 Dragon (Haban)			14 Quiet
15 Dark (Colbur)			15 Quirky
16 Steel (Babiri)			16 Calm
							17 Gentle
							18 Careful
							19 Sassy
							20 Serious
							21 Timid
							22 Hasty
							23 Jolly
							24 Naive
*/

var waveadjust = 31;

function changeWave(){
	var oldwaveadjust = waveadjust;
	
	var wavenumber = document.getElementById("wave").value;
	if(wavenumber=="wave1") waveadjust = 31;
	else if(wavenumber=="wave2") waveadjust = 27;
	else if(wavenumber=="wave3") waveadjust = 23;
	else if(wavenumber=="wave4") waveadjust = 17;
	else if(wavenumber=="wave5") waveadjust = 13;
	else if(wavenumber=="wave6") waveadjust = 9;
	else if(wavenumber=="wave7") waveadjust = 5;
	else if(wavenumber=="wave8") waveadjust = 0;
	
	if((document.getElementById("attacker").value!="")){
		var oldhp1 = parseInt(document.dc.hp1.value,10);
		var oldatk1 = parseInt(document.dc.atk1.value,10);
		var olddef1 = parseInt(document.dc.def1.value,10);
		var oldspa1 = parseInt(document.dc.spa1.value,10);
		var oldspd1 = parseInt(document.dc.spd1.value,10);
		var oldspe1 = parseInt(document.dc.spe1.value,10);
		document.dc.hp1.value=(oldhp1+oldwaveadjust-waveadjust);
		document.dc.atk1.value=(oldatk1+oldwaveadjust-waveadjust);
		document.dc.def1.value=(olddef1+oldwaveadjust-waveadjust);
		document.dc.spa1.value=(oldspa1+oldwaveadjust-waveadjust);
		document.dc.spd1.value=(oldspd1+oldwaveadjust-waveadjust);
		document.dc.spe1.value=(oldspe1+oldwaveadjust-waveadjust);
	}
	
	if((document.getElementById("defender").value!="")){
		var oldhp2 = parseInt(document.dc.hp2.value,10);
		var oldatk2 = parseInt(document.dc.atk2.value,10);
		var olddef2 = parseInt(document.dc.def2.value,10);
		var oldspa2 = parseInt(document.dc.spa2.value,10);
		var oldspd2 = parseInt(document.dc.spd2.value,10);
		var oldspe2 = parseInt(document.dc.spe2.value,10);
		document.dc.hp2.value=(oldhp2+oldwaveadjust-waveadjust);
		document.dc.atk2.value=(oldatk2+oldwaveadjust-waveadjust);
		document.dc.def2.value=(olddef2+oldwaveadjust-waveadjust);
		document.dc.spa2.value=(oldspa2+oldwaveadjust-waveadjust);
		document.dc.spd2.value=(oldspd2+oldwaveadjust-waveadjust);
		document.dc.spe2.value=(oldspe2+oldwaveadjust-waveadjust);
	}
	
	if((document.getElementById("attacker").value!="")&&(document.getElementById("defender").value!="")) damageCalc();
}

function selAtk(id){
	switch(id){
	case "abomasnow1":
		chgAtk('Snow Warning','nil',16,'Lum Berry',4,5,384,198,186,283,226,156,'Giga Drain',60,4,2,'Ice Beam',95,5,2,'Water Pulse',60,2,2,'GrassWhistle',0,4,3);
		break;
	case "abomasnow2":
		chgAtk('Snow Warning','nil',6,'Big Root',4,5,363,198,250,220,248,156,'Giga Drain',60,4,2,'Sheer Cold',0,5,3,'Ingrain',0,4,3,'Leech Seed',0,4,3);
		break;
	case "abomasnow3":
		chgAtk('Snow Warning','nil',14,1,4,5,384,220,186,311,206,140,'Energy Ball',80,4,2,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "abomasnow4":
		chgAtk('Snow Warning','nil',4,'Shell Bell',4,5,384,311,186,220,206,140,'Wood Hammer',120,4,1,'Avalanche',60,5,1,'Earthquake',100,8,1,'Rock Slide',75,12,1);
		break;
	case "absol1":
		chgAtk('Pressure','Super Luck',23,6,15,17,271,359,156,167,156,273,'Sucker Punch',80,15,1,'Facade',70,0,1,'Double Team',0,0,3,'Taunt',0,15,3);
		break;
	case "absol2":
		chgAtk('Pressure','Super Luck',2,'Quick Claw',15,17,334,394,156,167,156,186,'Punishment',60,15,1,'Swagger',0,0,3,'Attract',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "absol3":
		chgAtk('Pressure','Super Luck',23,'Razor Claw',15,17,271,359,156,167,156,273,'Night Slash',70,15,1,'Psycho Cut',70,10,1,'X-Scissor',80,11,1,'Aerial Ace',60,9,1);
		break;
	case "absol4":
		chgAtk('Pressure','Super Luck',2,'Choice Band',15,17,271,394,156,167,156,249,'Night Slash',70,15,1,'Superpower',120,6,1,'Giga Impact',150,0,1,'Zen Headbutt',80,10,1);
		break;
	case "aerodactyl1":
		chgAtk('Rock Head','Pressure',23,'Kings Rock',12,9,301,309,166,140,186,394,'Rock Slide',75,12,1,'Aerial Ace',60,9,1,'Torment',0,15,3,'Taunt',0,15,3);
		break;
	case "aerodactyl2":
		chgAtk('Rock Head','Pressure',23,'Razor Fang',12,9,301,309,166,140,186,394,'Bite',60,15,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "aerodactyl3":
		chgAtk('Rock Head','Pressure',2,5,12,9,301,339,166,140,186,359,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Crunch',80,15,1);
		break;
	case "aerodactyl4":
		chgAtk('Rock Head','Pressure',2,'Choice Band',12,9,301,339,166,140,186,359,'Stone Edge',100,12,1,'Aerial Ace',60,9,1,'Earthquake',100,8,1,'Dragon Claw',80,14,1);
		break;
	case "aggron1":
		chgAtk('Sturdy','Rock Head',2,'Quick Claw',16,12,281,350,459,140,156,136,'Iron Head',80,16,1,'Rock Slide',75,12,1,'Sandstorm',0,12,3,'Screech',0,0,3);
		break;
	case "aggron2":
		chgAtk('Sturdy','Rock Head',2,'Quick Claw',16,12,281,350,459,140,156,136,'Metal Claw',50,16,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "aggron3":
		chgAtk('Sturdy','Rock Head',2,'Muscle Band',16,12,281,350,459,140,156,136,'Iron Tail',100,16,1,'Dragon Rush',100,14,1,'Avalanche',60,5,1,'Aerial Ace',60,9,1);
		break;
	case "aggron4":
		chgAtk('Sturdy','Rock Head',2,'Focus Sash',16,12,281,350,459,140,156,136,'Metal Burst',0,16,1,'Stone Edge',100,12,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1);
		break;
	case "alakazam1":
		chgAtk('Synchronize','Inner Focus',21,'Brightpowder',10,17,251,122,126,369,206,372,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3,'Future Sight',80,10,2);
		break;
	case "alakazam2":
		chgAtk('Synchronize','Inner Focus',11,15,10,17,251,122,126,405,206,339,'Psychic',90,10,2,'Focus Blast',120,6,2,'Charge Beam',50,3,2,'Recover',0,0,3);
		break;
	case "alakazam3":
		chgAtk('Synchronize','Inner Focus',21,'Wise Glasses',10,17,251,122,126,369,206,372,'Psychic',90,10,2,'Charge Beam',50,3,2,'Signal Beam',75,11,2,'Grass Knot',60,4,2);
		break;
	case "alakazam4":
		chgAtk('Synchronize','Inner Focus',11,'Expert Belt',10,17,251,122,126,405,206,339,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2);
		break;
	case "altaria1":
		chgAtk('Natural Cure','nil',18,'Chesto Berry',14,9,291,239,216,158,339,196,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,"Dragon Dance",0,14,3,'Rest',0,10,3);
		break;
	case "altaria2":
		chgAtk('Natural Cure','nil',11,'Shell Bell',14,9,291,158,216,262,309,196,'Dragon Pulse',90,14,2,'Ominous Wind',60,13,2,'Sing',0,0,3,'Perish Song',0,0,3);
		break;
	case "altaria3":
		chgAtk('Natural Cure','nil',2,'Brightpowder',14,9,291,262,216,158,309,196,'Dragon Rush',100,14,1,'Sky Attack',140,9,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "altaria4":
		chgAtk('Natural Cure','nil',11,'White Herb',14,9,291,158,216,262,309,196,'Draco Meteor',140,14,2,'Air Cutter',55,9,2,'Flamethrower',95,1,2,'Ice Beam',95,5,2);
		break;
	case "ambipom1":
		chgAtk('Technician','Pickup',23,'Muscle Band',0,17,291,299,168,140,168,361,'Double Hit',35,0,1,'Shadow Claw',70,13,1,'Brick Break',75,6,1,'Knock Off',20,15,1);
		break;
	case "ambipom2":
		chgAtk('Technician','Pickup',23,'Metronome',0,17,291,299,168,140,168,361,'Last Resort',130,0,1,'Thunder Wave',0,3,3,'Protect',0,0,3,'Fake Out',40,0,1);
		break;
	case "ambipom3":
		chgAtk('Technician','Pickup',2,'Life Orb',0,17,291,328,168,140,168,329,'Double Hit',35,0,1,'Gunk Shot',120,7,1,'Seed Bomb',80,4,1,'Aerial Ace',60,9,1);
		break;
	case "ambipom4":
		chgAtk('Technician','Pickup',2,'Life Orb',0,17,291,328,168,140,168,329,'Double Hit',35,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "ampharos1":
		chgAtk('Static','nil',11,8,3,17,321,167,186,361,279,146,'Thunderbolt',95,3,2,'Power Gem',70,12,2,'Light Screen',0,10,3,'Thunder Wave',0,3,3);
		break;
	case "ampharos2":
		chgAtk('Static','nil',18,'Cheri Berry',3,17,321,249,186,239,306,146,'ThunderPunch',75,3,1,'Fire Punch',75,1,1,'Focus Punch',150,6,1,'Thunder Wave',0,3,3);
		break;
	case "ampharos3":
		chgAtk('Static','nil',11,'Chesto Berry',3,17,384,167,186,361,216,146,'Charge Beam',50,3,2,'Hyper Beam',150,0,1,'Thunder Wave',0,3,3,'Rest',0,10,3);
		break;
	case "ampharos4":
		chgAtk('Static','nil',14,'Zoom Lens',3,17,384,186,186,361,216,131,'Thunder',120,3,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2,'Power Gem',70,12,2);
		break;
	case "arcanine1":
		chgAtk('Intimidate','Flash Fire',23,'Lum Berry',1,17,321,319,196,212,196,317,'Fire Fang',65,1,1,'ExtremeSpeed',80,0,1,'Crunch',80,15,1,'Will-O-Wisp',0,1,3);
		break;
	case "arcanine2":
		chgAtk('Intimidate','Flash Fire',23,'Salac Berry',1,17,321,319,196,212,196,317,'Flare Blitz',120,1,1,'Thunder Fang',65,3,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "arcanine3":
		chgAtk('Intimidate','Flash Fire',11,'White Herb',1,17,321,230,196,328,196,289,'Overheat',140,1,2,'SolarBeam',120,4,2,'Dragon Pulse',90,14,2,'Sunny Day',0,1,3);
		break;
	case "arcanine4":
		chgAtk('Intimidate','Flash Fire',2,'Focus Band',1,17,321,350,196,212,196,289,'Flare Blitz',120,1,1,'ExtremeSpeed',80,0,1,'Crunch',80,15,1,'Thunder Fang',65,3,1);
		break;
	case "armaldo1":
		chgAtk('Battle Armor','nil',2,'Razor Claw',12,11,291,383,236,158,259,126,'X-Scissor',80,11,1,'Rock Slide',75,12,1,'Earthquake',100,8,1,'Iron Defense',0,16,3);
		break;
	case "armaldo2":
		chgAtk('Battle Armor','nil',2,'Scope Lens',12,11,291,383,236,158,259,126,'Crush Claw',75,0,1,'Aqua Tail',90,2,1,'Aerial Ace',60,9,1,'Swagger',0,0,3);
		break;
	case "armaldo3":
		chgAtk('Battle Armor','nil',2,'Choice Band',12,11,291,383,299,158,196,126,'Stone Edge',100,12,1,'Superpower',120,6,1,'Earthquake',100,8,1,'Giga Impact',150,0,1);
		break;
	case "armaldo4":
		chgAtk('Battle Armor','nil',2,'Life Orb',12,11,291,383,299,158,196,126,'Stone Edge',100,12,1,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Cross Poison',70,7,1);
		break;
	case "articuno1":
		chgAtk('Pressure','nil',5,'Icy Rock',5,9,321,269,236,317,286,206,'Blizzard',120,5,2,'Fly',90,9,1,'Roost',0,9,3,'Hail',0,5,3);
		break;
	case "articuno2":
		chgAtk('Pressure','nil',4,3,5,9,321,295,299,226,286,185,'Avalanche',60,5,1,'Aerial Ace',60,9,1,'Facade',70,0,1,'Reflect',0,10,3);
		break;
	case "articuno3":
		chgAtk('Pressure','nil',11,'Wise Glasses',5,9,321,185,299,317,286,206,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Ominous Wind',60,13,2,'Water Pulse',60,2,2);
		break;
	case "articuno4":
		chgAtk('Pressure','nil',11,12,5,9,321,185,236,317,349,206,'Ice Beam',95,5,2,'Air Cutter',55,9,2,'AncientPower',60,12,2,'Sheer Cold',0,5,3);
		break;
	case "bastiodon1":
		chgAtk('Sturdy','nil',7,'Focus Band',12,16,261,140,478,117,375,96,'Iron Head',80,16,1,'Stone Edge',100,12,1,'Swagger',0,0,3,'Taunt',0,15,3);
		break;
	case "bastiodon2":
		chgAtk('Sturdy','nil',11,'Persim Berry',12,16,324,126,372,212,312,96,'AncientPower',60,12,2,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2);
		break;
	case "bastiodon3":
		chgAtk('Sturdy','nil',18,'Leftovers',12,16,324,140,372,117,412,96,'Iron Head',80,16,1,'Fissure',0,8,3,'Double Team',0,0,3,'Iron Defense',0,16,3);
		break;
	case "bastiodon4":
		chgAtk('Sturdy','nil',2,'Focus Sash',12,16,324,223,372,117,312,96,'Metal Burst',0,16,1,'Stone Edge',100,12,1,'Avalanche',60,5,1,'Curse',0,0,3);
		break;
	case "blastoise1":
		chgAtk('Torrent','nil',11,'Mystic Water',2,17,299,181,278,272,288,192,'Hydro Pump',120,2,2,'Signal Beam',75,11,2,'Icy Wind',55,5,2,'Mirror Coat',0,10,2);
		break;
	case "blastoise2":
		chgAtk('Torrent','nil',2,'Shell Bell',2,17,362,291,236,185,246,192,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Double Team',0,0,3,'Aqua Ring',0,2,3);
		break;
	case "blastoise3":
		chgAtk('Torrent','nil',2,'Life Orb',2,17,362,291,236,185,246,192,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Avalanche',60,5,1,'Zen Headbutt',80,10,1);
		break;
	case "blastoise4":
		chgAtk('Torrent','nil',11,'Shell Bell',2,17,362,181,236,295,246,192,'Hydro Cannon',150,2,2,'Ice Beam',95,5,2,'Hyper Beam',150,0,2,'Focus Blast',120,6,2);
		break;
	case "blaziken1":
		chgAtk('Blaze','nil',2,'Salac Berry',1,6,301,372,176,230,176,259,'Blaze Kick',85,1,1,'Reversal',0,6,1,'Aerial Ace',60,9,1,'Endure',0,0,3);
		break;
	case "blaziken2":
		chgAtk('Blaze','nil',21,'Brightpowder',1,6,301,248,176,319,176,284,'Blast Burn',150,1,2,'Focus Blast',120,6,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "blaziken3":
		chgAtk('Blaze','nil',2,2,1,6,301,372,176,230,176,259,'Blaze Kick',85,1,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1,'Stone Edge',100,12,1);
		break;
	case "blaziken4":
		chgAtk('Blaze','nil',2,'White Herb',1,6,301,372,176,230,176,259,'Flare Blitz',120,1,1,'Superpower',120,6,1,'ThunderPunch',75,3,1,'Night Slash',70,15,1);
		break;
	case "blissey1":
		chgAtk('Natural Cure','Serene Grace',11,6,0,17,714,50,56,273,306,146,'Hyper Beam',150,0,2,'Shadow Ball',80,13,2,'Water Pulse',60,2,2,'Sing',0,0,3);
		break;
	case "blissey2":
		chgAtk('Natural Cure','Serene Grace',16,'Chesto Berry',0,17,714,50,56,186,405,146,'Toxic',0,7,3,'Double Team',0,0,3,'Softboiled',0,0,3,'Counter',0,6,1);
		break;
	case "blissey3":
		chgAtk('Natural Cure','Serene Grace',11,'Brightpowder',0,17,714,50,56,273,306,146,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Calm Mind',0,10,3);
		break;
	case "blissey4":
		chgAtk('Natural Cure','Serene Grace',16,'Leftovers',0,17,714,50,56,186,405,146,'Dream Eater',100,10,2,'Sing',0,0,3,'Softboiled',0,0,3,'Counter',0,6,1);
		break;
	case "breloom1":
		chgAtk('Effect Spore','Poison Heal',7,'Focus Sash',4,6,261,359,284,140,156,176,'Seed Bomb',80,4,1,'Sky Uppercut',85,6,1,'Rock Slide',75,12,1,'Counter',0,6,1);
		break;
	case "breloom2":
		chgAtk('Effect Spore','Poison Heal',4,'Big Root',4,6,261,394,196,219,156,158,'Drain Punch',60,6,1,'Giga Drain',60,4,2,'Synthesis',0,4,3,'Leech Seed',0,4,3);
		break;
	case "breloom3":
		chgAtk('Effect Spore','Poison Heal',2,'Toxic Orb',4,6,261,394,259,140,156,176,'DynamicPunch',100,6,1,'ThunderPunch',75,3,1,'Stone Edge',100,12,1,'Facade',70,0,1);
		break;
	case "breloom4":
		chgAtk('Effect Spore','Poison Heal',2,'Shell Bell',4,6,261,394,259,140,156,176,'Focus Punch',150,6,1,'Seed Bomb',80,4,1,'Giga Impact',150,0,1,'Spore',0,4,3);
		break;
	case "bronzong1":
		chgAtk('Levitate','Heatproof',7,'Kings Rock',16,10,275,214,364,174,331,102,'Extrasensory',80,10,2,'Iron Head',80,16,1,'Rock Slide',75,12,1,'Trick Room',0,10,3);
		break;
	case "bronzong2":
		chgAtk('Levitate','Heatproof',16,'Lum Berry',16,10,275,192,331,194,364,102,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Signal Beam',75,11,2,'Trick Room',0,10,3);
		break;
	case "bronzong3":
		chgAtk('Levitate','Heatproof',11,'Leftovers',16,10,338,192,268,282,268,102,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Charge Beam',50,3,2,'Signal Beam',75,11,2);
		break;
	case "bronzong4":
		chgAtk('Levitate','Heatproof',2,'Quick Claw',16,10,338,304,268,174,268,102,'Zen Headbutt',80,10,1,'Iron Head',80,16,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "charizard1":
		chgAtk('Blaze','nil',11,'Petaya Berry',1,9,297,183,192,348,206,299,'Flamethrower',95,1,2,'Air Slash',75,9,2,'Smokescreen',0,0,3,'Scary Face',0,0,3);
		break;
	case "charizard2":
		chgAtk('Blaze','nil',11,'White Herb',1,9,297,183,192,348,206,299,'Overheat',140,1,2,'SolarBeam',120,4,2,'Will-O-Wisp',0,1,3,'Sunny Day',0,1,3);
		break;
	case "charizard3":
		chgAtk('Blaze','nil',2,'Scope Lens',1,9,297,293,192,228,206,299,'Flare Blitz',120,1,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Dragon Claw',80,14,1);
		break;
	case "charizard4":
		chgAtk('Blaze','nil',21,'Brightpowder',1,9,297,183,192,317,206,328,'Blast Burn',150,1,2,'Air Slash',75,9,2,'Focus Blast',120,6,2,'AncientPower',60,12,2);
		break;
	case "claydol1":
		chgAtk('Levitate','nil',4,13,8,10,261,193,309,176,339,167,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Grass Knot',60,4,2,'Trick Room',0,10,3);
		break;
	case "claydol2":
		chgAtk('Levitate','nil',11,4,8,10,261,158,309,262,276,186,'Earth Power',90,8,2,'AncientPower',60,12,2,'Signal Beam',75,11,2,'Shadow Ball',80,13,2);
		break;
	case "claydol3":
		chgAtk('Levitate','nil',11,'Wise Glasses',8,10,261,158,246,262,339,186,'Earth Power',90,8,2,'Psychic',90,10,2,'Charge Beam',50,3,2,'Ice Beam',95,5,2);
		break;
	case "claydol4":
		chgAtk('Levitate','nil',2,'Lax Incense',8,10,261,262,246,158,339,186,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Rock Slide',75,12,1,'Explosion',250,0,1);
		break;
	case "cradily1":
		chgAtk('Suction Cups','nil',7,'Razor Claw',12,4,355,198,299,178,292,122,'AncientPower',60,12,2,'Energy Ball',80,4,2,'Confuse Ray',0,13,3,'Sandstorm',0,12,3);
		break;
	case "cradily2":
		chgAtk('Suction Cups','nil',7,'Leftovers',12,4,355,198,299,178,292,122,'Toxic',0,7,3,'Stockpile',0,0,3,'Double Team',0,0,3,'Ingrain',0,4,3);
		break;
	case "cradily3":
		chgAtk('Suction Cups','nil',16,'Big Root',12,4,355,178,272,198,321,122,'Giga Drain',60,4,2,'Sludge Bomb',90,7,2,'Recover',0,0,3,'Ingrain',0,4,3);
		break;
	case "cradily4":
		chgAtk('Suction Cups','nil',16,'Leftovers',12,4,355,178,272,198,321,122,'Stone Edge',100,12,1,'Seed Bomb',80,4,1,'Earthquake',100,8,1,'Mirror Coat',0,10,3);
		break;
	case "cresselia1":
		chgAtk('Levitate','nil',6,'Heat Rock',10,17,381,158,372,186,359,206,'Psychic',90,10,2,'SolarBeam',120,4,2,'Moonlight',0,0,3,'Sunny Day',0,1,3);
		break;
	case "cresselia2":
		chgAtk('Levitate','nil',6,'Lum Berry',10,17,423,158,349,186,338,206,'Psychic',90,10,2,'Toxic',0,7,3,'Double Team',0,0,3,'Moonlight',0,0,3);
		break;
	case "cresselia3":
		chgAtk('Levitate','nil',11,'Wise Glasses',10,17,444,158,276,273,296,206,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Charge Beam',50,3,2);
		break;
	case "cresselia4":
		chgAtk('Levitate','nil',11,'Leftovers',10,17,423,158,318,204,338,206,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Moonlight',0,0,3);
		break;
	case "crobat1":
		chgAtk('Inner Focus','nil',23,10,7,9,311,279,196,158,196,394,'Cross Poison',70,7,1,'Aerial Ace',60,9,1,'Roost',0,9,3,'Hypnosis',0,10,3);
		break;
	case "crobat2":
		chgAtk('Inner Focus','nil',0,'Razor Fang',7,9,311,279,196,176,196,359,'Air Slash',75,9,2,'Zen Headbutt',80,10,1,'Bite',60,15,1,'Twister',40,14,2);
		break;
	case "crobat3":
		chgAtk('Inner Focus','nil',11,'Kings Rock',7,9,311,194,196,262,196,359,'Air Slash',75,9,2,'Sludge Bomb',90,7,2,'Heat Wave',100,1,2,'Dark Pulse',80,15,2);
		break;
	case "crobat4":
		chgAtk('Inner Focus','nil',2,'Razor Claw',7,9,311,306,196,158,196,359,'Cross Poison',70,7,1,'Brave Bird',120,9,1,'X-Scissor',80,11,1,'Zen Headbutt',80,10,1);
		break;
	case "dewgong1":
		chgAtk('Thick Fat','Hydration',18,'Razor Fang',2,5,321,239,196,158,317,176,'Waterfall',80,2,1,'Avalanche',60,5,1,'Headbutt',70,0,1,'Fake Out',40,0,1);
		break;
	case "dewgong2":
		chgAtk('Thick Fat','Hydration',16,3,2,5,321,158,196,239,317,176,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Encore',0,0,3,'Disable',0,0,3);
		break;
	case "dewgong3":
		chgAtk('Thick Fat','Hydration',16,'Salac Berry',2,5,321,158,238,176,294,176,'Sheer Cold',0,5,3,'Horn Drill',0,0,3,'Rest',0,10,3,'Sleep Talk',0,0,3);
		break;
	case "dewgong4":
		chgAtk('Thick Fat','Hydration',16,'Chesto Berry',2,5,321,158,196,239,317,176,'Surf',95,2,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Rest',0,10,3);
		break;
	case "donphan1":
		chgAtk('Sturdy','nil',7,'Razor Claw',8,17,321,339,372,140,156,136,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Poison Jab',80,7,1,'Sandstorm',0,12,3);
		break;
	case "donphan2":
		chgAtk('Sturdy','nil',2,'White Herb',8,17,321,372,339,140,156,136,'Earthquake',100,8,1,'Superpower',120,6,1,'Gunk Shot',120,7,1,'Counter',0,6,1);
		break;
	case "donphan3":
		chgAtk('Sturdy','nil',4,'Lax Incense',8,17,321,372,339,156,156,122,'Earthquake',100,8,1,'Gyro Ball',0,16,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1);
		break;
	case "donphan4":
		chgAtk('Sturdy','nil',2,'Quick Claw',8,17,321,372,339,140,156,136,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Seed Bomb',80,4,1,'Fissure',0,8,3);
		break;
	case "dragonite1":
		chgAtk('Inner Focus','nil',2,'Lum Berry',14,9,323,403,226,212,299,196,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,'Thunder Wave',0,3,3,'Dragon Dance',0,14,3);
		break;
	case "dragonite2":
		chgAtk('Inner Focus','nil',2,'Razor Claw',14,9,323,403,289,212,236,196,'Dragon Rush',100,14,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "dragonite3":
		chgAtk('Inner Focus','nil',11,'Expert Belt',14,9,323,273,289,328,236,196,'Draco Meteor',140,14,2,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Surf',95,2,2);
		break;
	case "dragonite4":
		chgAtk('Inner Focus','nil',2,'Choice Band',14,9,323,403,226,212,299,196,'Outrage',120,14,1,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Superpower',120,6,1);
		break;
	case "drapion1":
		chgAtk('Battle Armor','Sniper',2,'Lum Berry',7,15,281,306,319,140,186,226,'Poison Jab',80,7,1,'Crunch',80,15,1,'Aqua Tail',90,2,1,'Acupressure',0,0,3);
		break;
	case "drapion2":
		chgAtk('Battle Armor','Sniper',2,'Iron Ball',7,15,281,306,319,140,186,226,'Payback',60,15,1,'Poison Jab',80,7,1,'Fling',130,15,1,'Knock Off',20,15,1);
		break;
	case "drapion3":
		chgAtk('Battle Armor','Sniper',23,'Scope Lens',7,15,281,279,256,140,186,317,'Cross Poison',70,7,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "drapion4":
		chgAtk('Battle Armor','Sniper',2,'Razor Claw',7,15,281,306,256,140,186,289,'Cross Poison',70,7,1,'Night Slash',70,15,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "drifblim1":
		chgAtk('Aftermath','Unburden',11,'Salac Berry',13,9,504,176,124,306,144,196,'Ominous Wind',60,13,2,'Air Cutter',55,9,2,'Baton Pass',0,0,3,'Endure',0,0,3);
		break;
	case "drifblim2":
		chgAtk('Aftermath','Unburden',2,'Black Sludge',13,9,504,284,124,194,144,196,'Payback',60,15,1,'Facade',70,0,1,'Will-O-Wisp',0,1,3,'Trick',0,10,3);
		break;
	case "drifblim3":
		chgAtk('Aftermath','Unburden',11,'Wise Glasses',13,9,504,176,124,306,144,196,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Icy Wind',55,5,2,'Destiny Bond',0,13,3);
		break;
	case "drifblim4":
		chgAtk('Aftermath','Unburden',5,'Lax Incense',13,9,504,259,124,216,144,196,'Shadow Ball',80,13,2,'Air Cutter',55,9,2,'Silver Wind',60,11,2,'Explosion',250,0,1);
		break;
	case "dugtrio1":
		chgAtk('Sand Veil','Arena Trap',23,'Grip Claw',8,17,211,259,136,122,176,372,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Astonish',30,13,1,'Sand Tomb',15,8,1);
		break;
	case "dugtrio2":
		chgAtk('Sand Veil','Arena Trap',11,'Lax Incense',8,17,211,176,136,218,176,339,'Earth Power',90,8,2,'Sludge Bomb',90,7,2,'Tri Attack',80,0,2,'Sandstorm',0,12,3);
		break;
	case "dugtrio3":
		chgAtk('Sand Veil','Arena Trap',23,'Razor Claw',8,17,211,259,136,122,176,372,'Fissure',0,8,3,'Giga Impact',150,0,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1);
		break;
	case "dugtrio4":
		chgAtk('Sand Veil','Arena Trap',2,'Muscle Band',8,17,211,284,136,122,176,339,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Slash',70,0,1,'Shadow Claw',70,13,1);
		break;
	case "dusknoir1":
		chgAtk('Pressure','nil',4,'Iron Ball',13,17,231,328,369,166,306,113,'Shadow Punch',60,13,1,'Fling',130,15,1,'Will-O-Wisp',0,1,3,'Trick Room',0,10,3);
		break;
	case "dusknoir2":
		chgAtk('Pressure','nil',18,'Leftovers',13,17,231,236,369,149,405,126,'Curse',0,13,3,'Pain Split',0,0,3,'Confuse Ray',0,13,3,'Attract',0,0,3);
		break;
	case "dusknoir3":
		chgAtk('Pressure','nil',2,'Scope Lens',13,17,231,328,306,149,369,126,'Shadow Punch',60,13,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "dusknoir4":
		chgAtk('Pressure','nil',2,'Muscle Band',13,17,231,259,369,149,369,126,'Shadow Punch',60,13,1,'Earthquake',100,8,1,'Brick Break',75,6,1,'Rock Slide',75,12,1);
		break;
	case "electivire1":
		chgAtk('Motor Drive','nil',23,'Scope Lens',3,17,291,345,170,203,206,317,'ThunderPunch',75,3,1,'Cross Chop',100,6,1,'Thunder Wave',0,3,3,'Screech',0,0,3);
		break;
	case "electivire2":
		chgAtk('Motor Drive','nil',15,'Wide Lens',3,17,291,345,170,289,206,226,'Thunder',120,3,2,'DynamicPunch',100,6,1,'Rock Slide',75,12,1,'Iron Tail',100,16,1);
		break;
	case "electivire3":
		chgAtk('Motor Drive','nil',11,'Wise Glasses',3,17,291,253,170,317,206,289,'Thunderbolt',95,3,2,'Psychic',90,10,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2);
		break;
	case "electivire4":
		chgAtk('Motor Drive','nil',2,8,3,17,291,379,170,203,206,289,'ThunderPunch',75,3,1,'Fire Punch',75,1,1,'Ice Punch',75,5,1,'Earthquake',100,8,1);
		break;
	case "electrode1":
		chgAtk('Soundproof','Static',11,'Chesto Berry',3,17,261,122,176,284,196,379,'Thunderbolt',95,3,2,'Swift',60,0,2,'Thunder Wave',0,3,3,'Light Screen',0,10,3);
		break;
	case "electrode2":
		chgAtk('Soundproof','Static',21,'Brightpowder',3,17,261,122,176,259,196,416,'Charge Beam',50,3,2,'Thunder Wave',0,3,3,'Flash',0,0,3,'Swagger',0,0,3);
		break;
	case "electrode3":
		chgAtk('Soundproof','Static',21,'Damp Rock',3,17,261,122,176,259,196,416,'Thunder',120,3,2,'Hyper Beam',150,0,2,'Magnet Rise',0,3,3,'Rain Dance',0,2,3);
		break;
	case "electrode4":
		chgAtk('Soundproof','Static',15,'Focus Sash',3,17,261,136,176,259,196,379,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Explosion',250,0,1,'Mirror Coat',0,10,3);
		break;
	case "empoleon1":
		chgAtk('Torrent','nil',2,'Razor Claw',2,16,309,298,212,232,301,156,'Waterfall',80,2,1,'Metal Claw',50,16,1,'Brick Break',75,6,1,'Knock Off',20,15,1);
		break;
	case "empoleon2":
		chgAtk('Torrent','nil',2,'Razor Claw',2,16,309,298,212,232,301,156,'Drill Peck',80,9,1,'Aqua Jet',40,2,1,'Shadow Claw',70,13,1,'Rock Slide',75,12,1);
		break;
	case "empoleon3":
		chgAtk('Torrent','nil',4,'Quick Claw',2,16,309,298,212,321,238,140,'Surf',95,2,2,'Earthquake',100,8,1,'Blizzard',120,5,2,'Signal Beam',75,11,2);
		break;
	case "empoleon4":
		chgAtk('Torrent','nil',4,'Quick Claw',2,16,309,298,212,321,238,140,'Hydro Cannon',150,2,2,'Flash Cannon',80,16,2,'Drill Peck',80,9,1,'Earthquake',100,8,1);
		break;
	case "entei1":
		chgAtk('Pressure','nil',23,8,1,17,371,329,206,194,186,328,'Fire Fang',65,1,1,'Return',102,0,1,'Roar',0,0,3,'Reflect',0,10,3);
		break;
	case "entei2":
		chgAtk('Pressure','nil',23,'Kings Rock',1,17,371,329,206,194,186,328,'Fire Fang',65,1,1,'Bite',60,15,1,'Iron Head',80,16,1,'Stone Edge',100,12,1);
		break;
	case "entei3":
		chgAtk('Pressure','nil',11,8,1,17,371,239,206,306,186,299,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Sunny Day',0,1,3);
		break;
	case "entei4":
		chgAtk('Pressure','nil',11,8,1,17,371,239,206,306,186,299,'Overheat',140,1,2,'Extrasensory',80,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "espeon1":
		chgAtk('Synchronize','nil',21,'Lum Berry',10,17,271,149,156,359,226,350,'Psychic',90,10,2,'Reflect',0,10,3,'Calm Mind',0,10,3,'Baton Pass',0,0,3);
		break;
	case "espeon2":
		chgAtk('Synchronize','nil',21,'Brightpowder',10,17,271,149,156,359,226,350,'Psychic',90,10,2,'Swift',60,0,2,'Charm',0,0,3,'Attract',0,0,3);
		break;
	case "espeon3":
		chgAtk('Synchronize','nil',11,'Lum Berry',10,17,271,149,156,394,226,319,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Hyper Beam',150,0,2,'Grass Knot',60,4,2);
		break;
	case "espeon4":
		chgAtk('Synchronize','nil',11,'Wise Glasses',10,17,271,149,156,394,226,319,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Morning Sun',0,0,3);
		break;
	case "exeggutor1":
		chgAtk('Chlorophyll','nil',11,'Brightpowder',4,10,394,203,206,383,166,146,'SolarBeam',120,4,2,'Psychic',90,10,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "exeggutor2":
		chgAtk('Chlorophyll','nil',11,'Lum Berry',4,10,394,203,206,383,166,146,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Leech Seed',0,4,3,'Ingrain',0,4,3);
		break;
	case "exeggutor3":
		chgAtk('Chlorophyll','nil',4,'Focus Sash',4,10,394,317,206,286,166,131,'Wood Hammer',120,4,1,'Zen Headbutt',80,10,1,'Trick Room',0,10,3,'Explosion',250,0,1);
		break;
	case "exeggutor4":
		chgAtk('Chlorophyll','nil',11,'Expert Belt',4,10,394,203,206,383,166,146,'Leaf Storm',140,4,2,'Psychic',90,10,2,'Sludge Bomb',90,7,2,'AncientPower',60,12,2);
		break;
	case "exploud1":
		chgAtk('Soundproof','nil',11,6,0,17,412,196,162,309,162,172,'Hyper Voice',90,0,2,'Extrasensory',80,10,2,'Water Pulse',60,2,2,'Torment',0,15,3);
		break;
	case "exploud2":
		chgAtk('Soundproof','nil',2,'Life Orb',0,17,412,309,162,196,162,172,'Facade',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "exploud3":
		chgAtk('Soundproof','nil',2,'Life Orb',0,17,412,309,162,196,162,172,'Facade',70,0,1,'Earthquake',100,8,1,'Avalanche',60,5,1,'Crunch',80,15,1);
		break;
	case "exploud4":
		chgAtk('Soundproof','nil',11,'White Herb',0,17,412,196,162,309,162,172,'Hyper Voice',90,0,2,'Overheat',140,1,2,'Surf',95,2,2,'Ice Beam',95,5,2);
		break;
	case "feraligatr1":
		chgAtk('Torrent','nil',2,'Kings Rock',2,17,331,339,299,174,202,192,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Rock Slide',75,12,1,'Scary Face',0,0,3);
		break;
	case "feraligatr2":
		chgAtk('Torrent','nil',2,'White Herb',2,17,331,339,299,174,202,192,'Aqua Tail',90,2,1,'Superpower',120,6,1,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1);
		break;
	case "feraligatr3":
		chgAtk('Torrent','nil',11,'Wise Glasses',2,17,331,221,299,282,202,192,'Hydro Cannon',150,2,2,'Ice Beam',95,5,2,'Focus Blast',120,6,2,'AncientPower',60,12,2);
		break;
	case "feraligatr4":
		chgAtk('Torrent','nil',2,'Lum Berry',2,17,331,339,299,174,202,192,'Waterfall',80,2,1,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Dragon Dance',0,14,3);
		break;
	case "flareon1":
		chgAtk('Flash Fire','nil',2,'Quick Claw',1,17,271,394,156,203,319,166,'Fire Fang',65,1,1,'Superpower',120,6,1,'Curse',0,0,3,'Baton Pass',0,0,3);
		break;
	case "flareon2":
		chgAtk('Flash Fire','nil',23,'Salac Berry',1,17,271,359,156,203,256,251,'Fire Fang',65,1,1,'Flail',0,0,1,'Endure',0,0,3,'Sand-Attack',0,8,3);
		break;
	case "flareon3":
		chgAtk('Flash Fire','nil',11,'White Herb',1,17,271,266,156,317,319,166,'Overheat',140,1,2,'Shadow Ball',80,13,2,'Mud-Slap',20,8,2,'Will-O-Wisp',0,1,3);
		break;
	case "flareon4":
		chgAtk('Flash Fire','nil',2,'White Herb',1,17,271,394,156,203,319,166,'Fire Fang',65,1,1,'Giga Impact',150,0,1,'Superpower',120,6,1,'Bite',60,15,1);
		break;
	case "floatzel1":
		chgAtk('Swift Swim','nil',23,'Sitrus Berry',2,17,311,309,146,185,136,361,'Waterfall',80,2,1,'Ice Punch',75,5,1,'Quick Attack',40,0,1,'Rain Dance',0,2,3);
		break;
	case "floatzel2":
		chgAtk('Swift Swim','nil',23,'Chesto Berry',2,17,311,309,146,185,136,361,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Double Team',0,0,3,'Attract',0,0,3);
		break;
	case "floatzel3":
		chgAtk('Swift Swim','nil',11,'Wave Incense',2,17,311,221,146,295,136,329,'Surf',95,2,2,'Ice Beam',95,5,2,'Focus Blast',120,6,2,'Rain Dance',0,2,3);
		break;
	case "floatzel4":
		chgAtk('Swift Swim','nil',2,'Razor Fang',2,17,311,339,146,185,136,329,'Aqua Tail',90,2,1,'Ice Fang',65,5,1,'Crunch',80,15,1,'Brick Break',75,6,1);
		break;
	case "flygon1":
		chgAtk('Levitate','nil',2,5,8,14,301,328,196,176,196,299,'Earthquake',100,8,1,'Dragon Claw',80,14,1,'Roost',0,9,3,'Sandstorm',0,12,3);
		break;
	case "flygon2":
		chgAtk('Levitate','nil',23,'Razor Fang',8,14,301,299,196,176,196,328,'Fissure',0,8,3,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Aerial Ace',60,9,1);
		break;
	case "flygon3":
		chgAtk('Levitate','nil',21,'White Herb',8,14,301,212,196,259,196,328,'Draco Meteor',140,14,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Giga Drain',60,4,2);
		break;
	case "flygon4":
		chgAtk('Levitate','nil',2,'Lum Berry',8,14,301,328,196,176,196,299,'Earthquake',100,8,1,'Outrage',120,14,1,'Crunch',80,15,1,'Stone Edge',100,12,1);
		break;
	case "forretress1":
		chgAtk('Sturdy','nil',4,1,11,16,291,306,379,156,156,104,'Gyro Ball',0,16,1,'Bug Bite',60,11,1,'Revenge',60,6,1,'Counter',0,6,1);
		break;
	case "forretress2":
		chgAtk('Sturdy','nil',4,'Sitrus Berry',11,16,291,306,379,156,156,104,'Payback',60,15,1,'Stealth Rock',0,12,3,'Toxic Spikes',0,7,3,'Spikes',0,8,3);
		break;
	case "forretress3":
		chgAtk('Sturdy','nil',2,'Leftovers',11,16,291,306,379,140,156,116,'Dig',80,8,1,'Swagger',0,0,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "forretress4":
		chgAtk('Sturdy','nil',2,'Lax Incense',11,16,291,306,379,140,156,116,'Explosion',250,0,1,'Double-Edge',120,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1);
		break;
	case "froslass1":
		chgAtk('Snow Cloak','nil',21,'Cheri Berry',5,13,281,176,176,259,176,350,'Ice Beam',95,5,2,'Ominous Wind',60,13,2,'Confuse Ray',0,13,3,'Attract',0,0,3);
		break;
	case "froslass2":
		chgAtk('Snow Cloak','nil',2,'Focus Band',5,13,281,284,176,176,176,319,'Ice Punch',75,5,1,'Sucker Punch',80,15,1,'Swagger',0,0,3,'Psych Up',0,0,3);
		break;
	case "froslass3":
		chgAtk('Snow Cloak','nil',11,'Expert Belt',5,13,281,176,176,284,176,319,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Destiny Bond',0,13,3);
		break;
	case "froslass4":
		chgAtk('Snow Cloak','nil',11,'Lax Incense',5,13,281,176,176,284,176,319,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Psychic',90,10,2,'Hail',0,5,3);
		break;
	case "gallade1":
		chgAtk('Steadfast','nil',18,13,10,6,277,349,166,149,361,196,'Zen Headbutt',80,10,1,'Brick Break',75,6,1,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "gallade2":
		chgAtk('Steadfast','nil',23,'Brightpowder',10,6,277,349,166,149,266,284,'Drain Punch',60,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "gallade3":
		chgAtk('Steadfast','nil',2,'Scope Lens',10,6,277,383,166,149,329,196,'Psycho Cut',70,10,1,'Stone Edge',100,12,1,'Aerial Ace',60,9,1,'X-Scissor',80,11,1);
		break;
	case "gallade4":
		chgAtk('Steadfast','nil',2,'Scope Lens',10,6,277,383,166,149,329,196,'Psycho Cut',70,10,1,'Close Combat',120,6,1,'Leaf Blade',90,4,1,'Night Slash',70,15,1);
		break;
	case "garchomp1":
		chgAtk('Sand Veil','nil',23,'Brightpowder',14,8,357,359,226,176,206,333,'Dragon Claw',80,14,1,'Earthquake',100,8,1,'Double Team',0,0,3,'Sandstorm',0,12,3);
		break;
	case "garchomp2":
		chgAtk('Sand Veil','nil',11,'White Herb',14,8,357,266,226,284,206,303,'Draco Meteor',140,14,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Surf',95,2,2);
		break;
	case "garchomp3":
		chgAtk('Sand Veil','nil',2,'Focus Sash',14,8,357,394,226,176,206,303,'Dragon Rush',100,14,1,'Stone Edge',100,12,1,'Aqua Tail',90,2,1,'Aerial Ace',60,9,1);
		break;
	case "garchomp4":
		chgAtk('Sand Veil','nil',2,'Persim Berry',14,8,357,394,226,176,206,303,'Outrage',120,14,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Fire Fang',65,1,1);
		break;
	case "gardevoir1":
		chgAtk('Synchronize','Trace',16,'Lum Berry',10,17,277,149,166,349,361,196,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "gardevoir2":
		chgAtk('Synchronize','Trace',11,'Chesto Berry',10,17,277,149,166,383,329,196,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Calm Mind',0,10,3,'Rest',0,10,3);
		break;
	case "gardevoir3":
		chgAtk('Synchronize','Trace',11,'Brightpowder',10,17,277,149,166,383,329,196,'Psychic',90,10,2,'Charge Beam',50,3,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2);
		break;
	case "gardevoir4":
		chgAtk('Synchronize','Trace',21,'Wise Glasses',10,17,277,149,166,329,266,284,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2,'Destiny Bond',0,13,3);
		break;
	case "gastrodon1":
		chgAtk('Sticky Hold','Storm Drain',18,'Focus Sash',2,8,426,202,172,198,289,114,'Waterfall',80,2,1,'Earthquake',100,8,1,'Recover',0,0,3,'Mirror Coat',0,10,3);
		break;
	case "gastrodon2":
		chgAtk('Sticky Hold','Storm Drain',19,'Zoom Lens',2,8,363,202,172,283,289,102,'Muddy Water',95,2,2,'Mud Bomb',65,8,2,'Recover',0,0,3,'Yawn',0,0,3);
		break;
	case "gastrodon3":
		chgAtk('Sticky Hold','Storm Drain',2,'Shell Bell',2,8,426,291,172,198,200,114,'Waterfall',80,2,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Fissure',0,8,3);
		break;
	case "gastrodon4":
		chgAtk('Sticky Hold','Storm Drain',11,'Wise Glasses',2,8,426,181,172,311,200,114,'Surf',95,2,2,'Earth Power',90,8,2,'Ice Beam',95,5,2,'Sludge Bomb',90,7,2);
		break;
	case "gengar1":
		chgAtk('Levitate','nil',21,10,13,7,261,149,156,359,186,350,'Shadow Ball',80,13,2,'Sludge Bomb',90,7,2,'Spite',0,13,3,'Confuse Ray',0,13,3);
		break;
	case "gengar2":
		chgAtk('Levitate','nil',11,'Life Orb',13,7,261,149,156,394,186,319,'Shadow Ball',80,13,2,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Substitute',0,0,3);
		break;
	case "gengar3":
		chgAtk('Levitate','nil',11,'Scope Lens',13,7,261,149,156,394,186,319,'Psychic',90,10,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2,'Confuse Ray',0,13,3);
		break;
	case "gengar4":
		chgAtk('Levitate','nil',11,'Lum Berry',13,7,261,149,156,394,186,319,'Shadow Ball',80,13,2,'Sludge Bomb',90,7,2,'Thunderbolt',95,3,2,'Destiny Bond',0,13,3);
		break;
	case "glaceon1":
		chgAtk('Snow Cloak','nil',16,'Lax Incense',5,17,271,140,256,359,317,166,'Ice Beam',95,5,2,'Water Pulse',60,2,2,'Double Team',0,3,3,'Baton Pass',0,3,3);
		break;
	case "glaceon2":
		chgAtk('Snow Cloak','nil',16,'Leftovers',5,17,271,140,256,359,317,166,'Ice Beam',95,5,2,'Double Team',0,3,3,'Yawn',0,3,3,'Hail',0,5,3);
		break;
	case "glaceon3":
		chgAtk('Snow Cloak','nil',11,'Focus Sash',5,17,271,140,319,394,226,166,'Blizzard',120,5,2,'Hyper Beam',150,0,2,'Hail',0,5,3,'Mirror Coat',0,10,3);
		break;
	case "glaceon4":
		chgAtk('Snow Cloak','nil',11,'Wise Glasses',5,17,271,140,319,394,226,166,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Water Pulse',60,2,2);
		break;
	case "glalie1":
		chgAtk('Inner Focus','Ice Body',4,'Iron Ball',5,17,343,215,238,196,238,176,'Avalanche',60,5,1,'Payback',60,15,1,'Gyro Ball',0,16,1,'Ice Shard',40,5,1);
		break;
	case "glalie2":
		chgAtk('Inner Focus','Ice Body',2,'Lum Berry',5,17,364,284,196,176,196,196,'Ice Fang',65,5,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "glalie3":
		chgAtk('Inner Focus','Ice Body',11,'Scope Lens',5,17,364,176,196,284,196,196,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Water Pulse',60,2,2);
		break;
	case "glalie4":
		chgAtk('Inner Focus','Ice Body',11,'Lax Incense',5,17,364,176,196,284,196,196,'Blizzard',120,5,2,'Dark Pulse',80,15,2,'Sheer Cold',0,5,3,'Hail',0,5,3);
		break;
	case "gliscor1":
		chgAtk('Hyper Cutter','Sand Veil',2,5,8,9,291,317,349,113,186,226,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'Swords Dance',0,0,3,'Baton Pass',0,0,3);
		break;
	case "gliscor2":
		chgAtk('Hyper Cutter','Sand Veil',23,'Razor Fang',8,9,291,289,286,113,186,317,'Earthquake',100,8,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "gliscor3":
		chgAtk('Hyper Cutter','Sand Veil',23,'Focus Sash',8,9,354,226,286,113,186,317,'Guillotine',0,0,3,'Earthquake',100,8,1,'U-turn',70,11,1,'Counter',0,6,1);
		break;
	case "gliscor4":
		chgAtk('Hyper Cutter','Sand Veil',2,'Expert Belt',8,9,291,317,349,113,186,226,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'X-Scissor',80,11,1,'Stone Edge',100,12,1);
		break;
	case "golduck1":
		chgAtk('Damp','Cloud Nine',11,4,2,17,364,180,192,317,196,206,'Surf',95,2,2,'Psychic',90,10,2,'Confuse Ray',0,13,3,'Calm Mind',0,10,3);
		break;
	case "golduck2":
		chgAtk('Damp','Cloud Nine',2,'Shell Bell',2,17,301,289,192,203,196,269,'Waterfall',80,2,1,'Mud Bomb',65,8,2,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1);
		break;
	case "golduck3":
		chgAtk('Damp','Cloud Nine',2,'Scope Lens',2,17,364,289,192,203,196,206,'Aqua Tail',90,2,1,'Cross Chop',100,6,1,'Ice Punch',75,5,1,'Zen Headbutt',80,10,1);
		break;
	case "golduck4":
		chgAtk('Damp','Cloud Nine',11,3,2,17,364,180,192,317,196,206,'Hydro Pump',120,2,2,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2);
		break;
	case "golem1":
		chgAtk('Rock Head','Sturdy',7,'Focus Band',12,8,301,319,394,131,166,126,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Sucker Punch',80,15,1,'Sandstorm',0,8,1);
		break;
	case "golem2":
		chgAtk('Rock Head','Sturdy',2,'White Herb',12,8,301,350,359,131,166,126,'Earthquake',100,8,1,'Superpower',120,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1);
		break;
	case "golem3":
		chgAtk('Rock Head','Sturdy',4,'Iron Ball',12,8,301,350,359,146,166,113,'Gyro Ball',0,16,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Fling',130,15,1);
		break;
	case "golem4":
		chgAtk('Rock Head','Sturdy',4,'Quick Claw',12,8,301,350,359,146,166,113,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Gyro Ball',0,16,1,'Explosion',250,0,1);
		break;
	case "granbull1":
		chgAtk('Intimidate','Quick Feet',2,'Razor Claw',0,17,384,372,186,140,156,126,'Return',102,0,1,'Rock Slide',75,12,1,'Crunch',80,15,1,'Thunder Wave',0,3,3);
		break;
	case "granbull2":
		chgAtk('Intimidate','Quick Feet',2,'Quick Claw',0,17,384,372,186,140,156,126,'Facade',70,0,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "granbull3":
		chgAtk('Intimidate','Quick Feet',2,'Muscle Band',0,17,384,372,186,140,156,126,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Payback',60,15,1);
		break;
	case "granbull4":
		chgAtk('Intimidate','Quick Feet',2,'Life Orb',0,17,384,372,186,140,156,126,'Giga Impact',150,0,1,'Close Combat',120,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1);
		break;
	case "gyarados1":
		chgAtk('Intimidate','nil',18,'Razor Fang',2,9,331,349,194,140,328,198,'Aqua Tail',90,2,1,'Ice Fang',65,5,1,'Bite',60,15,1,'Rain Dance',0,2,3);
		break;
	case "gyarados2":
		chgAtk('Intimidate','nil',23,'Lum Berry',2,9,331,349,194,140,236,287,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Iron Head',80,16,1,'Dragon Dance',0,14,3);
		break;
	case "gyarados3":
		chgAtk('Intimidate','nil',2,'Persim Berry',2,9,331,383,194,140,299,198,'Outrage',120,14,1,'Waterfall',80,2,1,'Stone Edge',100,12,1,'Giga Impact',150,0,1);
		break;
	case "gyarados4":
		chgAtk('Intimidate','nil',2,'Chesto Berry',2,9,331,383,194,140,236,261,'Waterfall',80,2,1,'Earthquake',100,8,1,'Rest',0,10,3,'Dragon Dance',0,14,3);
		break;
	case "hariyama1":
		chgAtk('Thick Fat','Guts',2,'Persim Berry',6,17,492,372,156,104,156,136,'Arm Thrust',0,6,3,'Earthquake',100,8,1,'Facade',70,0,1,'Fake Out',40,0,1);
		break;
	case "hariyama2":
		chgAtk('Thick Fat','Guts',2,'Iron Ball',6,17,492,372,156,104,156,136,'Revenge',60,6,1,'Payback',60,15,1,'Fling',130,15,1,'Fake Out',40,0,1);
		break;
	case "hariyama3":
		chgAtk('Thick Fat','Guts',2,'Life Orb',6,17,492,372,156,104,156,136,'DynamicPunch',100,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "hariyama4":
		chgAtk('Thick Fat','Guts',2,'Scope Lens',6,17,492,372,156,104,156,136,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Poison Jab',80,7,1);
		break;
	case "heatran1":
		chgAtk('Flash Fire','nil',11,8,1,16,323,194,248,394,311,190,'Heat Wave',100,1,2,'Flash Cannon',80,16,2,'AncientPower',60,12,2,'Scary Face',0,0,3);
		break;
	case "heatran2":
		chgAtk('Flash Fire','nil',2,'Quick Claw',1,16,386,306,248,266,248,190,'Iron Head',80,16,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1);
		break;
	case "heatran3":
		chgAtk('Flash Fire','nil',11,'Brightpowder',1,16,386,194,248,394,248,190,'Flamethrower',95,1,2,'Earth Power',90,8,2,'Dragon Pulse',90,14,2,'Dark Pulse',80,15,2);
		break;
	case "heatran4":
		chgAtk('Flash Fire','nil',14,'Focus Sash',1,16,323,279,248,394,248,171,'Magma Storm',120,1,2,'Flash Cannon',80,16,2,'Earth Power',90,8,2,'Explosion',250,0,1);
		break;
	case "heracross1":
		chgAtk('Swarm','Guts',23,'Focus Band',11,6,301,349,186,104,226,295,'Megahorn',120,11,1,'Focus Punch',150,6,1,'Swagger',0,0,3,'Attract',0,0,3);
		break;
	case "heracross2":
		chgAtk('Swarm','Guts',2,'Scope Lens',11,6,301,383,186,104,289,206,'Close Combat',120,6,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1,'Bulk Up',0,6,3);
		break;
	case "heracross3":
		chgAtk('Swarm','Guts',2,9,11,6,301,383,186,104,226,269,'Megahorn',120,11,1,'Stone Edge',100,12,1,'Facade',70,0,1,'Shadow Claw',70,13,1);
		break;
	case "heracross4":
		chgAtk('Swarm','Guts',23,'Salac Berry',11,6,301,349,186,104,226,295,'Megahorn',120,11,1,'Earthquake',100,8,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "hippowdon1":
		chgAtk('Sand Stream','nil',7,'Persim Berry',8,17,357,323,368,154,180,130,'Earthquake',100,8,1,'Crunch',80,15,1,'Slack Off',0,0,3,'Curse',0,0,3);
		break;
	case "hippowdon2":
		chgAtk('Sand Stream','nil',7,'Sitrus Berry',8,17,357,323,368,154,180,130,'Earthquake',100,8,1,'Swagger',0,0,3,'Sand Tomb',15,8,1,'Yawn',0,0,3);
		break;
	case "hippowdon3":
		chgAtk('Sand Stream','nil',2,'White Herb',8,17,420,355,272,154,180,130,'Superpower',120,6,1,'Fire Fang',65,1,1,'Ice Fang',65,5,1,'Fissure',0,8,3);
		break;
	case "hippowdon4":
		chgAtk('Sand Stream','nil',2,'Quick Claw',8,17,420,355,272,154,180,130,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1,'Thunder Fang',65,3,1);
		break;
	case "honchkrow1":
		chgAtk('Insomnia','Super Luck',2,3,15,9,404,383,140,221,140,178,'Night Slash',70,15,1,'Aerial Ace',60,9,1,'Torment',0,15,3,'Taunt',0,15,3);
		break;
	case "honchkrow2":
		chgAtk('Insomnia','Super Luck',2,'White Herb',15,9,404,383,140,221,140,178,'Superpower',120,6,1,'Pluck',60,9,1,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3);
		break;
	case "honchkrow3":
		chgAtk('Insomnia','Super Luck',11,'Life Orb',15,9,404,257,140,339,140,178,'Dark Pulse',80,15,2,'Air Cutter',55,9,2,'Psychic',90,10,2,'Shadow Ball',80,13,2);
		break;
	case "honchkrow4":
		chgAtk('Insomnia','Super Luck',2,'Scope Lens',15,9,404,383,140,221,140,178,'Night Slash',70,15,1,'Drill Peck',80,9,1,'Sucker Punch',80,15,1,'Steel Wing',70,16,1);
		break;
	case "houndoom1":
		chgAtk('Early Bird','Flash Fire',23,'Focus Sash',15,1,291,279,136,230,196,317,'Fire Fang',65,1,1,'Crunch',80,15,1,'Roar',0,0,3,'Counter',0,6,3);
		break;
	case "houndoom2":
		chgAtk('Early Bird','Flash Fire',23,'Focus Sash',15,1,291,279,136,230,196,317,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "houndoom3":
		chgAtk('Early Bird','Flash Fire',11,2,15,1,291,194,136,350,196,317,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Sludge Bomb',80,7,2,'Will-O-Wisp',0,1,3);
		break;
	case "houndoom4":
		chgAtk('Early Bird','Flash Fire',21,'White Herb',15,1,291,194,136,319,196,317,'Overheat',140,1,2,'Dark Pulse',80,15,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "hypno1":
		chgAtk('Insomnia','Forewarn',4,'Iron Ball',10,17,311,269,176,182,329,153,'Psycho Cut',70,10,1,'Fling',130,15,1,'Hypnosis',0,10,3,'Trick Room',0,10,3);
		break;
	case "hypno2":
		chgAtk('Insomnia','Forewarn',15,'Persim Berry',10,17,311,182,176,245,329,170,'Dream Eater',100,10,2,'Nightmare',0,13,3,'Drain Punch',60,6,1,'Hypnosis',0,10,3);
		break;
	case "hypno3":
		chgAtk('Insomnia','Forewarn',2,'Sitrus Berry',10,17,311,269,176,163,329,170,'Zen Headbutt',80,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "hypno4":
		chgAtk('Insomnia','Forewarn',11,'Choice Specs',10,17,311,163,176,269,329,170,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Focus Blast',120,6,2);
		break;
	case "infernape1":
		chgAtk('Blaze','nil',23,9,1,6,293,307,178,219,178,346,'Close Combat',120,6,1,'Fire Punch',75,1,1,'U-turn',70,11,1,'Fake Out',40,0,1);
		break;
	case "infernape2":
		chgAtk('Blaze','nil',2,'Muscle Band',1,6,293,337,178,219,178,315,'Blaze Kick',85,1,1,'Shadow Claw',70,13,1,'ThunderPunch',75,3,1,'Gunk Shot',120,7,1);
		break;
	case "infernape3":
		chgAtk('Blaze','nil',11,'Brightpowder',1,6,293,219,178,337,178,315,'Flamethrower',95,1,2,'Focus Blast',120,6,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "infernape4":
		chgAtk('Blaze','nil',23,'Kings Rock',1,6,293,307,178,219,178,346,'Flare Blitz',120,1,1,'Close Combat',120,6,1,'Earthquake',100,8,1,'ThunderPunch',75,3,1);
		break;
	case "jolteon1":
		chgAtk('Volt Absorb','nil',21,'Focus Sash',3,17,271,149,156,319,226,394,'Thunderbolt',95,3,2,'Thunder Wave',0,3,3,'Agility',0,10,3,'Baton Pass',0,0,3);
		break;
	case "jolteon2":
		chgAtk('Volt Absorb','nil',0,'Razor Claw',3,17,271,229,156,319,226,296,'Discharge',80,3,2,'Double Kick',30,6,1,'Dig',80,8,1,'Thunder Wave',0,3,3);
		break;
	case "jolteon3":
		chgAtk('Volt Absorb','nil',21,'Lax Incense',3,17,271,149,156,319,226,394,'Thunder',120,3,2,'Shadow Ball',80,13,2,'Rain Dance',0,1,3,'Yawn',0,0,3);
		break;
	case "jolteon4":
		chgAtk('Volt Absorb','nil',11,'Razor Fang',3,17,271,149,156,350,226,359,'Thunderbolt',95,3,2,'Hyper Beam',150,0,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "jynx1":
		chgAtk('Oblivious','Forewarn',16,'Chesto Berry',5,10,271,122,106,329,317,226,'Psychic',90,10,2,'Ice Beam',95,5,2,'Lovely Kiss',0,0,3,'Fake Tears',0,15,3);
		break;
	case "jynx2":
		chgAtk('Oblivious','Forewarn',16,'Lax Incense',5,10,271,122,106,329,317,226,'Dream Eater',100,10,2,'Lovely Kiss',0,0,3,'Perish Song',0,0,3,'Mean Look',0,0,3);
		break;
	case "jynx3":
		chgAtk('Oblivious','Forewarn',11,'Expert Belt',5,10,271,122,106,361,226,289,'Blizzard',120,5,2,'Energy Ball',80,4,2,'Signal Beam',75,11,2,'Wring Out',120,0,2);
		break;
	case "jynx4":
		chgAtk('Oblivious','Forewarn',11,'Choice Specs',5,10,271,122,106,361,226,289,'Ice Beam',95,5,2,'Psychic',90,10,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2);
		break;
	case "kangaskhan1":
		chgAtk('Early Bird','Scrappy',23,'Salac Berry',0,17,351,289,196,104,196,306,'Double-Edge',120,0,1,'Crunch',80,15,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "kangaskhan2":
		chgAtk('Early Bird','Scrappy',2,'Razor Claw',0,17,414,317,196,104,196,216,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "kangaskhan3":
		chgAtk('Early Bird','Scrappy',23,'Life Orb',0,17,351,289,196,104,196,306,'Double Hit',35,0,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1,'Rock Slide',75,12,1);
		break;
	case "kangaskhan4":
		chgAtk('Early Bird','Scrappy',2,'Muscle Band',0,17,414,317,196,104,196,216,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Outrage',120,14,1);
		break;
	case "kingdra1":
		chgAtk('Swift Swim','Sniper',21,'Razor Fang',2,14,291,203,226,289,226,295,'Surf',95,2,2,'Dragon Pulse',90,14,2,'SmokeScreen',0,0,3,'Rain Dance',0,1,3);
		break;
	case "kingdra2":
		chgAtk('Swift Swim','Sniper',21,'Shell Bell',2,14,291,203,226,289,226,295,'Brine',65,2,2,'Ice Beam',95,5,2,'Twister',40,14,2,'Yawn',0,0,3);
		break;
	case "kingdra3":
		chgAtk('Swift Swim','Sniper',2,'Lum Berry',2,14,354,317,226,203,226,206,'Waterfall',80,2,1,'Outrage',120,14,1,'Iron Head',80,16,1,'Dragon Dance',0,14,3);
		break;
	case "kingdra4":
		chgAtk('Swift Swim','Sniper',11,'Wide Lens',2,14,354,203,226,317,226,206,'Hydro Pump',120,2,2,'Draco Meteor',140,14,2,'Blizzard',120,5,2,'Signal Beam',75,11,2);
		break;
	case "lanturn1":
		chgAtk('Volt Absorb','Illuminate',11,4,2,3,454,136,152,276,188,170,'Surf',95,2,2,'Discharge',80,3,2,'Thunder Wave',0,3,3,'Aqua Ring',0,2,3);
		break;
	case "lanturn2":
		chgAtk('Volt Absorb','Illuminate',16,'Lum Berry',2,3,454,136,152,188,276,170,'Dive',80,2,1,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3,'Attract',0,0,3);
		break;
	case "lanturn3":
		chgAtk('Volt Absorb','Illuminate',11,'Sitrus Berry',2,3,454,136,152,276,188,170,'Hydro Pump',120,2,2,'Thunder',120,3,2,'Blizzard',120,5,2,'Rain Dance',0,2,3);
		break;
	case "lanturn4":
		chgAtk('Volt Absorb','Illuminate',11,'Expert Belt',2,3,454,136,152,276,188,170,'Surf',95,2,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2);
		break;
	case "lapras1":
		chgAtk('Water Absorb','Shell Armor',2,'Leftovers',2,5,464,295,196,185,226,156,'Aqua Tail',90,2,1,'Avalanche',60,5,1,'Ice Shard',40,5,1,'Curse',0,0,3);
		break;
	case "lapras2":
		chgAtk('Water Absorb','Shell Armor',7,'Quick Claw',2,5,401,206,284,185,289,156,'Sheer Cold',0,5,3,'Perish Song',0,0,3,'Sing',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "lapras3":
		chgAtk('Water Absorb','Shell Armor',2,'Lum Berry',2,5,464,295,196,185,226,156,'Waterfall',80,2,1,'Outrage',120,14,1,'Zen Headbutt',80,10,1,'Dragon Dance',0,14,3);
		break;
	case "lapras4":
		chgAtk('Water Absorb','Shell Armor',11,'Brightpowder',2,5,464,185,196,295,226,156,'Surf',95,2,2,'Ice Beam',95,5,2,'Psychic',90,10,2,'Thunderbolt',95,3,2);
		break;
	case "latias1":
		chgAtk('Levitate','nil',16,'Lum Berry',14,10,301,176,216,319,394,319,'Psychic',90,10,2,'Dragon Pulse',90,14,2,'Attract',0,0,3,'Calm Mind',0,10,3);
		break;
	case "latias2":
		chgAtk('Levitate','nil',2,'Expert Belt',14,10,301,284,216,230,296,319,'Dragon Claw',80,14,1,'Zen Headbutt',80,10,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "latias3":
		chgAtk('Levitate','nil',21,'Brightpowder',14,10,301,176,216,319,296,350,'Psychic',90,10,2,'Ice Beam',95,5,2,'Energy Ball',80,4,2,'Shadow Ball',80,13,2);
		break;
	case "latias4":
		chgAtk('Levitate','nil',11,'White Herb',14,10,301,176,216,350,296,319,'Mist Ball',70,10,2,'Draco Meteor',140,14,2,'Thunderbolt',95,3,2,'Surf',95,2,2);
		break;
	case "latios1":
		chgAtk('Levitate','nil',16,'Focus Band',14,10,301,194,196,359,350,256,'Psychic',90,10,2,'Dragon Pulse',90,14,2,'Thunder Wave',0,3,3,'Calm Mind',0,10,3);
		break;
	case "latios2":
		chgAtk('Levitate','nil',2,'Lum Berry',14,10,301,306,196,266,256,319,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "latios3":
		chgAtk('Levitate','nil',21,'Brightpowder',14,10,301,194,196,359,256,350,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Energy Ball',80,4,2);
		break;
	case "latios4":
		chgAtk('Levitate','nil',11,'White Herb',14,10,301,194,196,394,256,319,'Luster Purge',70,10,2,'Draco Meteor',140,14,2,'Hyper Beam',150,0,2,'Surf',95,2,2);
		break;
	case "leafeon1":
		chgAtk('Leaf Guard','nil',23,'Scope Lens',4,17,271,319,296,140,166,317,'Leaf Blade',90,4,1,'Aerial Ace',60,9,1,'Double Team',0,0,3,'Baton Pass',0,0,3);
		break;
	case "leafeon2":
		chgAtk('Leaf Guard','nil',23,'Brightpowder',4,17,271,319,296,140,166,317,'Leaf Blade',90,4,1,'Last Resort',140,0,1,'Curse',0,0,3,'GrassWhistle',0,4,3);
		break;
	case "leafeon3":
		chgAtk('Leaf Guard','nil',2,'Heat Rock',4,17,271,350,359,140,166,226,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "leafeon4":
		chgAtk('Leaf Guard','nil',2,'Quick Claw',4,17,271,350,359,140,166,226,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Aerial Ace',60,9,1,'Bite',60,15,1);
		break;
	case "lickilicky1":
		chgAtk('Own Tempo','Oblivious',18,'Chesto Berry',0,17,424,269,226,176,248,136,'Return',102,0,1,'Earthquake',100,8,1,'Belly Drum',0,0,3,'Rest',0,10,3);
		break;
	case "lickilicky2":
		chgAtk('Own Tempo','Oblivious',11,'Expert Belt',0,17,424,185,226,284,226,136,'Surf',95,2,2,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2);
		break;
	case "lickilicky3":
		chgAtk('Own Tempo','Oblivious',4,'Lum Berry',0,17,424,295,226,196,226,122,'Return',102,0,1,'Gyro Ball',0,16,1,'Curse',0,0,3,'Rest',0,10,3);
		break;
	case "lickilicky4":
		chgAtk('Own Tempo','Oblivious',2,'Lax Incense',0,17,424,295,226,176,226,136,'Body Slam',85,0,1,'Power Whip',120,4,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "lopunny1":
		chgAtk('Cute Charm','Klutz',23,'Focus Band',0,17,271,251,204,129,228,339,'Return',102,0,1,'Drain Punch',60,6,1,'Charm',0,0,3,'Mirror Coat',0,10,2);
		break;
	case "lopunny2":
		chgAtk('Cute Charm','Klutz',23,'Brightpowder',0,17,334,188,204,129,228,339,'Focus Punch',150,6,1,'Sweet Kiss',0,0,3,'Attract',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "lopunny3":
		chgAtk('Cute Charm','Klutz',11,'Wise Glasses',0,17,271,169,204,227,228,309,'Charge Beam',50,3,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "lopunny4":
		chgAtk('Cute Charm','Klutz',23,'Muscle Band',0,17,271,251,204,129,228,339,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "lucario1":
		chgAtk('Steadfast','Inner Focus',11,'Brightpowder',6,16,281,230,176,361,176,279,'Aura Sphere',90,6,2,'Flash Cannon',80,16,2,'Water Pulse',60,2,2,'Roar',0,0,3);
		break;
	case "lucario2":
		chgAtk('Steadfast','Inner Focus',2,'Scope Lens',6,16,281,350,176,239,176,279,'Cross Chop',100,6,1,'Stone Edge',100,12,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "lucario3":
		chgAtk('Steadfast','Inner Focus',2,'Muscle Band',6,16,281,350,176,239,176,279,'Close Combat',120,6,1,'Earthquake',100,8,1,'Blaze Kick',85,1,1,'Shadow Claw',70,13,1);
		break;
	case "lucario4":
		chgAtk('Steadfast','Inner Focus',11,'Expert Belt',6,16,281,230,176,361,176,279,'Aura Sphere',90,6,2,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Dragon Pulse',90,14,2);
		break;
	case "ludicolo1":
		chgAtk('Swift Swim','Rain Dish',2,'Muscle Band',2,4,301,262,176,194,299,176,'Waterfall',80,2,1,'Razor Leaf',55,4,1,'Drain Punch',60,6,1,'Swords Dance',0,0,3);
		break;
	case "ludicolo2":
		chgAtk('Swift Swim','Rain Dish',7,'Leftovers',2,4,343,176,239,194,278,176,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3,'Rain Dance',0,2,3);
		break;
	case "ludicolo3":
		chgAtk('Swift Swim','Rain Dish',11,'Wide Lens',2,4,364,158,176,306,236,176,'Hydro Pump',120,2,2,'Grass Knot',60,4,2,'Blizzard',120,5,2,'Focus Blast',120,6,2);
		break;
	case "ludicolo4":
		chgAtk('Swift Swim','Rain Dish',11,'Lum Berry',2,4,301,158,176,306,299,176,'Surf',95,2,2,'Giga Drain',60,4,2,'Ice Beam',95,5,2,'Rain Dance',0,2,3);
		break;
	case "luxray1":
		chgAtk('Rivalry','Intimidate',2,'Razor Claw',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Howl',0,0,3,'Charge',0,3,3);
		break;
	case "luxray2":
		chgAtk('Rivalry','Intimidate',11,'Wise Glasses',3,17,364,248,194,317,194,176,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Thunder Wave',0,3,3,'Magnet Rise',0,3,3);
		break;
	case "luxray3":
		chgAtk('Rivalry','Intimidate',2,'White Herb',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Ice Fang',65,5,1,'Superpower',120,6,1,'Thunder Wave',0,3,3);
		break;
	case "luxray4":
		chgAtk('Rivalry','Intimidate',2,'Muscle Band',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Ice Fang',65,5,1,'Crunch',80,15,1,'Thunder Wave',0,3,3);
		break;
	case "machamp1":
		chgAtk('Guts','No Guard',2,'Scope Lens',6,17,384,394,196,149,206,146,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Bullet Punch',40,16,1,'Foresight',0,0,3);
		break;
	case "machamp2":
		chgAtk('Guts','No Guard',2,'Focus Sash',6,17,321,325,259,149,269,146,'Revenge',60,6,1,'Earthquake',100,8,1,'Payback',60,15,1,'Counter',0,6,1);
		break;
	case "machamp3":
		chgAtk('Guts','No Guard',2,'Quick Claw',6,17,384,394,196,149,206,146,'DynamicPunch',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Ice Punch',75,5,1);
		break;
	case "machamp4":
		chgAtk('Guts','No Guard',2,'Quick Claw',6,17,384,394,196,149,206,146,'Cross Chop',100,6,1,'Earthquake',100,8,1,'ThunderPunch',75,3,1,'Fire Punch',75,1,1);
		break;
	case "magmortar1":
		chgAtk('Flame Body','nil',11,'Heat Rock',1,17,291,203,170,383,226,265,'Fire Blast',120,1,2,'Focus Blast',120,6,2,'Will-O-Wisp',0,1,3,'Sunny Day',0,1,3);
		break;
	case "magmortar2":
		chgAtk('Flame Body','nil',2,8,1,17,291,317,170,257,226,265,'Fire Punch',75,1,1,'Focus Punch',150,6,1,'Confuse Ray',0,13,3,'SmokeScreen',0,0,3);
		break;
	case "magmortar3":
		chgAtk('Flame Body','nil',2,2,1,17,291,317,170,257,226,265,'Flare Blitz',120,1,1,'ThunderPunch',75,1,1,'Earthquake',100,8,1,'Brick Break',75,6,1);
		break;
	case "magmortar4":
		chgAtk('Flame Body','nil',11,'White Herb',1,17,291,203,170,383,226,265,'Overheat',140,1,1,'Psychic',90,10,2,'Focus Blast',120,6,2,'Confuse Ray',0,13,3);
		break;
	case "magnezone1":
		chgAtk('Magnet Pull','Sturdy',6,'Light Clay',3,16,281,158,361,359,216,156,'Thunderbolt',95,3,2,'Mirror Shot',65,16,2,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "magnezone2":
		chgAtk('Magnet Pull','Sturdy',7,'Lum Berry',3,16,281,239,361,266,216,156,'Iron Head',80,16,1,'Explosion',250,0,1,'Swagger',0,0,3,'Psych Up',0,0,3);
		break;
	case "magnezone3":
		chgAtk('Magnet Pull','Sturdy',11,'Chesto Berry',3,16,281,158,329,394,216,156,'Charge Beam',50,3,2,'Flash Cannon',80,16,2,'Magnet Rise',0,3,3,'Thunder Wave',0,3,3);
		break;
	case "magnezone4":
		chgAtk('Magnet Pull','Sturdy',11,'Brightpowder',3,16,281,158,329,394,216,156,'Thunderbolt',95,3,2,'Flash Cannon',80,16,2,'Tri Attack',80,0,2,'Signal Beam',75,11,2);
		break;
	case "mamoswine1":
		chgAtk('Oblivious','Snow Cloak',2,'Icy Rock',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Peck',35,6,1,'Hail',0,5,3);
		break;
	case "mamoswine2":
		chgAtk('Oblivious','Snow Cloak',2,'Sitrus Berry',8,5,424,394,196,158,156,196,'Avalanche',60,5,1,'Earthquake',100,8,1,'Iron Head',80,16,1,'Curse',0,0,3);
		break;
	case "mamoswine3":
		chgAtk('Oblivious','Snow Cloak',2,'Lax Incense',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Superpower',120,6,1,'Fissure',0,8,3,'Hail',0,5,3);
		break;
	case "mamoswine4":
		chgAtk('Oblivious','Snow Cloak',2,'Life Orb',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Stone Edge',100,12,1,'Double-Edge',120,0,1);
		break;
	case "manectric1":
		chgAtk('Static','Lightningrod',2,8,3,17,281,273,156,221,156,309,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Roar',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "manectric2":
		chgAtk('Static','Lightningrod',11,'Damp Rock',3,17,281,167,156,339,156,309,'Thunder',120,3,2,'Hyper Beam',150,0,2,'Thunder Wave',0,3,3,'Rain Dance',0,1,3);
		break;
	case "manectric3":
		chgAtk('Static','Lightningrod',2,'Quick Claw',3,17,281,273,156,221,156,309,'Thunder Fang',65,3,1,'Fire Fang',65,1,1,'Ice Fang',65,5,1,'Bite',60,15,1);
		break;
	case "manectric4":
		chgAtk('Static','Lightningrod',21,'Brightpowder',3,17,281,167,156,309,156,339,'Thunderbolt',95,3,2,'Flamethrower',95,1,2,'Signal Beam',75,11,2,'Swift',60,0,2);
		break;
	case "marowak1":
		chgAtk('Rock Head','Lightningrod',2,'Razor Claw',8,17,261,284,319,122,196,126,'Bone Rush',25,8,1,'Brick Break',75,6,1,'Iron Tail',100,16,1,'Sandstorm',0,8,3);
		break;
	case "marowak2":
		chgAtk('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Bone Rush',25,8,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Rock Slide',75,12,1);
		break;
	case "marowak3":
		chgAtk('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Earthquake',100,8,1,'Giga Impact',150,0,1,'Outrage',120,14,1,'Fire Punch',75,1,1);
		break;
	case "marowak4":
		chgAtk('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Iron Head',80,16,1,'ThunderPunch',75,3,1);
		break;
	case "medicham1":
		chgAtk('Pure Power','nil',23,'Salac Berry',6,10,261,219,186,140,186,284,'Zen Headbutt',80,10,1,'Reversal',0,6,1,'Endure',0,0,3,'Fake Out',40,0,1);
		break;
	case "medicham2":
		chgAtk('Pure Power','nil',23,'Cheri Berry',6,10,261,219,186,140,186,284,'Drain Punch',60,6,1,'Poison Jab',80,7,1,'Detect',0,0,3,'Recover',0,0,3);
		break;
	case "medicham3":
		chgAtk('Pure Power','nil',11,'Wise Glasses',6,10,261,140,186,240,186,259,'Psychic',90,10,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "medicham4":
		chgAtk('Pure Power','nil',2,'Scope Lens',6,10,261,240,186,140,186,259,'Psycho Cut',70,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "meganium1":
		chgAtk('Overgrow','nil',11,'Heat Rock',4,17,301,180,299,222,299,196,'SolarBeam',120,4,2,'AncientPower',60,12,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "meganium2":
		chgAtk('Overgrow','nil',16,'Big Root',4,17,343,180,278,202,305,196,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Substitute',0,0,3);
		break;
	case "meganium3":
		chgAtk('Overgrow','nil',6,'Light Clay',4,17,364,180,259,265,236,196,'Leaf Storm',140,4,2,'Wring Out',120,0,2,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "meganium4":
		chgAtk('Overgrow','nil',11,'Lax Incense',4,17,364,180,236,291,236,196,'Frenzy Plant',150,4,2,'AncientPower',60,12,2,'Hyper Beam',150,0,2,'Light Screen',0,10,3);
		break;
	case "metagross1":
		chgAtk('Clear Body','nil',2,'Brightpowder',16,10,301,405,359,203,216,176,'Zen Headbutt',80,10,1,'Bullet Punch',40,16,1,'Facade',70,0,1,'Light Screen',0,10,3);
		break;
	case "metagross2":
		chgAtk('Clear Body','nil',11,'Wise Glasses',16,10,301,275,359,317,216,176,'Psychic',90,10,2,'Flash Cannon',80,16,2,'Shadow Ball',80,13,2,'Sludge Bomb',70,7,2);
		break;
	case "metagross3":
		chgAtk('Clear Body','nil',2,1,16,10,301,405,359,203,216,176,'Hammer Arm',100,6,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1);
		break;
	case "metagross4":
		chgAtk('Clear Body','nil',2,'Quick Claw',16,10,364,405,296,203,216,176,'Meteor Mash',100,16,1,'Zen Headbutt',80,10,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "milotic1":
		chgAtk('Marvel Scale','nil',11,'Shell Bell',2,17,394,140,194,328,286,198,'Surf',95,2,2,'Ice Beam',95,5,2,'Attract',0,0,3,'Hypnosis',0,10,3);
		break;
	case "milotic2":
		chgAtk('Marvel Scale','nil',7,'Leftovers',2,17,394,156,282,212,286,198,'Toxic',0,7,3,'Confuse Ray',0,13,3,'Double Team',0,0,3,'Aqua Ring',0,2,3);
		break;
	case "milotic3":
		chgAtk('Marvel Scale','nil',16,'Wide Lens',2,17,331,140,194,299,383,198,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Mirror Coat',0,10,2,'Recover',0,0,3);
		break;
	case "milotic4":
		chgAtk('Marvel Scale','nil',11,'Lum Berry',2,17,394,140,194,328,286,198,'Surf',95,2,2,'Ice Beam',95,5,2,'Dragon Pulse',90,14,2,'Recover',0,0,3);
		break;
	case "miltank1":
		chgAtk('Thick Fat','Scrappy',7,'Cheri Berry',0,17,331,259,339,104,176,236,'Return',102,0,1,'Iron Head',80,16,1,'Thunder Wave',0,3,3,'Milk Drink',0,0,3);
		break;
	case "miltank2":
		chgAtk('Thick Fat','Scrappy',2,'Salac Berry',0,17,331,284,246,104,176,299,'Facade',70,0,1,'Zen Headbutt',80,10,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "miltank3":
		chgAtk('Thick Fat','Scrappy',2,'Scope Lens',0,17,331,284,309,104,176,236,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "miltank4":
		chgAtk('Thick Fat','Scrappy',2,'Muscle Band',0,17,331,284,246,104,176,299,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Zen Headbutt',80,10,1);
		break;
	case "mismagius1":
		chgAtk('Levitate','nil',11,13,13,17,261,140,156,339,246,309,'Shadow Ball',80,13,2,'Power Gem',70,12,2,'Magical Leaf',60,4,2,'Memento',0,15,3);
		break;
	case "mismagius2":
		chgAtk('Levitate','nil',11,'Lum Berry',13,17,261,140,156,339,309,246,'Shadow Ball',80,13,2,'Confuse Ray',0,13,3,'Perish Song',0,0,3,'Mean Look',0,0,3);
		break;
	case "mismagius3":
		chgAtk('Levitate','nil',21,'Wise Glasses',13,17,261,140,156,309,246,339,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Icy Wind',55,5,2,'Destiny Bond',0,13,3);
		break;
	case "mismagius4":
		chgAtk('Levitate','nil',21,'Focus Sash',13,17,261,140,156,309,246,339,'Shadow Ball',80,13,2,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Destiny Bond',0,13,3);
		break;
	case "moltres1":
		chgAtk('Pressure','nil',21,2,1,9,321,212,216,349,206,306,'Flamethrower',95,1,2,'Air Slash',75,9,2,'AncientPower',60,12,2,'Roost',0,9,3);
		break;
	case "moltres2":
		chgAtk('Pressure','nil',21,'Heat Rock',1,9,384,212,216,349,206,237,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Sunny Day',0,1,3);
		break;
	case "moltres3":
		chgAtk('Pressure','nil',2,'Power Herb',1,9,321,328,216,257,206,279,'Sky Attack',140,9,1,'Return',102,0,1,'Steel Wing',70,16,1,'U-turn',70,11,1);
		break;
	case "moltres4":
		chgAtk('Pressure','nil',11,'White Herb',1,9,321,212,216,383,206,279,'Overheat',140,1,2,'Air Slash',75,9,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2);
		break;
	case "mrmime1":
		chgAtk('Soundproof','Filter',16,'Cheri Berry',10,17,221,113,166,299,372,216,'Psychic',90,10,2,'Signal Beam',75,11,2,'Copycat',0,0,3,'Mimic',0,0,3);
		break;
	case "mrmime2":
		chgAtk('Soundproof','Filter',16,'Light Clay',10,17,221,113,166,299,372,216,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "mrmime3":
		chgAtk('Soundproof','Filter',11,13,10,17,221,113,166,328,339,216,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Energy Ball',80,4,2,'Hyper Beam',150,0,2);
		break;
	case "mrmime4":
		chgAtk('Soundproof','Filter',11,'Choice Specs',10,17,221,113,166,328,339,216,'Psychic',90,10,2,'Charge Beam',50,3,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "muk1":
		chgAtk('Stench','Sticky Hold',2,'Black Sludge',7,17,414,339,186,149,236,136,'Poison Jab',80,7,1,'Shadow Sneak',40,13,1,'Minimize',0,0,3,'Acid Armor',0,7,3);
		break;
	case "muk2":
		chgAtk('Stench','Sticky Hold',2,'Expert Belt',7,17,414,339,186,149,236,136,'Poison Jab',80,7,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "muk3":
		chgAtk('Stench','Sticky Hold',4,'Zoom Lens',7,17,414,339,186,166,236,122,'Gunk Shot',120,7,1,'Payback',60,15,1,'Shadow Sneak',40,13,1,'Curse',0,0,3);
		break;
	case "muk4":
		chgAtk('Stench','Sticky Hold',2,'Quick Claw',7,17,414,339,186,149,236,136,'Gunk Shot',120,7,1,'Shadow Sneak',40,13,1,'Brick Break',75,6,1,'Explosion',250,0,1);
		break;
	case "nidoking1":
		chgAtk('Poison Point','Rivalry',7,'Focus Band',7,8,366,283,209,185,186,206,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Double Kick',30,6,1,'Counter',0,6,1);
		break;
	case "nidoking2":
		chgAtk('Poison Point','Rivalry',18,'Brightpowder',7,8,345,220,232,185,250,206,'Focus Punch',150,6,1,'Dragon Pulse',90,14,2,'Horn Drill',0,0,3,'Substitute',0,0,3);
		break;
	case "nidoking3":
		chgAtk('Poison Point','Rivalry',11,'Expert Belt',7,8,303,198,190,295,186,269,'Earth Power',90,8,2,'Sludge Bomb',90,7,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2);
		break;
	case "nidoking4":
		chgAtk('Poison Point','Rivalry',2,'Muscle Band',7,8,303,311,190,185,186,269,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Megahorn',120,11,1,'Outrage',120,14,1);
		break;
	case "nidoqueen1":
		chgAtk('Poison Point','Rivalry',2,10,7,8,384,289,210,167,206,188,'Earthquake',100,8,1,'Poison Fang',50,7,1,'Aerial Ace',60,9,1,'Charm',0,0,3);
		break;
	case "nidoqueen2":
		chgAtk('Poison Point','Rivalry',2,'Scope Lens',7,8,384,289,210,167,206,188,'Poison Jab',80,7,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "nidoqueen3":
		chgAtk('Poison Point','Rivalry',11,'Black Sludge',7,8,384,180,210,273,206,188,'Sludge Bomb',90,7,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Ice Beam',95,5,2);
		break;
	case "nidoqueen4":
		chgAtk('Poison Point','Rivalry',2,'Razor Claw',7,8,384,289,210,167,206,188,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Superpower',120,6,1,'Crunch',80,15,1);
		break;
	case "ninetales1":
		chgAtk('Flash Fire','nil',21,'Brightpowder',1,17,287,169,186,261,236,328,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Attract',0,0,3,'Sunny Day',0,1,3);
		break;
	case "ninetales2":
		chgAtk('Flash Fire','nil',21,'White Herb',1,17,287,169,186,261,236,328,'Overheat',140,1,2,'Dark Pulse',80,15,2,'Nasty Plot',0,15,3,'Confuse Ray',0,13,3);
		break;
	case "ninetales3":
		chgAtk('Flash Fire','nil',21,'Wide Lens',1,17,287,169,186,198,299,328,'Heat Wave',100,1,2,'Ominous Wind',60,13,2,'Dream Eater',100,10,2,'Hypnosis',0,10,3);
		break;
	case "ninetales4":
		chgAtk('Flash Fire','nil',11,2,1,17,287,169,186,287,236,299,'Flamethrower',95,1,2,'Extrasensory',80,10,2,'Energy Ball',80,4,2,'Calm Mind',0,10,3);
		break;
	case "pinsir1":
		chgAtk('Hyper Cutter','Mold Breaker',2,9,11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Swords Dance',0,0,3);
		break;
	case "pinsir2":
		chgAtk('Hyper Cutter','Mold Breaker',2,'Salac Berry',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Revenge',60,6,1,'Flail',0,0,1,'Endure',0,0,3);
		break;
	case "pinsir3":
		chgAtk('Hyper Cutter','Mold Breaker',2,'Lax Incense',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Superpower',120,6,1,'Stone Edge',100,12,1,'Giga Impact',150,0,1);
		break;
	case "pinsir4":
		chgAtk('Hyper Cutter','Mold Breaker',2,'Scope Lens',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Close Combat',120,6,1,'Guillotine',0,0,3);
		break;
	case "politoed1":
		chgAtk('Water Absorb','Damp',16,'Lax Incense',2,17,321,167,186,279,328,176,'Surf',95,2,2,'Hyper Voice',90,0,2,'Mud Bomb',65,8,2,'Swagger',0,0,3);
		break;
	case "politoed2":
		chgAtk('Water Absorb','Damp',7,'Chesto Berry',2,17,384,249,204,194,236,176,'Dive',80,2,1,'Brick Break',75,6,1,'Hypnosis',0,10,3,'Perish Song',0,0,3);
		break;
	case "politoed3":
		chgAtk('Water Absorb','Damp',18,'Chesto Berry',2,17,321,249,186,194,328,176,'Waterfall',80,2,1,'Earthquake',100,6,1,'Belly Drum',0,0,3,'Rest',0,10,3);
		break;
	case "politoed4":
		chgAtk('Water Absorb','Damp',11,3,2,17,321,167,186,306,299,176,'Hydro Pump',120,2,2,'Ice Beam',95,5,2,'Psychic',90,10,2,'Hypnosis',0,10,3);
		break;
	case "poliwrath1":
		chgAtk('Water Absorb','Damp',11,4,2,6,384,185,226,262,216,176,'Surf',95,2,2,'Vacuum Wave',40,6,2,'Psychic',90,10,2,'Double Team',0,0,3);
		break;
	case "poliwrath2":
		chgAtk('Water Absorb','Damp',2,'Lax Incense',2,6,384,295,226,158,216,176,'Waterfall',80,2,1,'DynamicPunch',100,6,1,'Poison Jab',80,7,1,'Bulk Up',0,6,3);
		break;
	case "poliwrath3":
		chgAtk('Water Absorb','Damp',11,'Wide Lens',2,6,384,185,226,262,216,176,'Hydro Pump',120,2,2,'Focus Blast',120,6,2,'Blizzard',120,5,2,'Mud Bomb',65,8,2);
		break;
	case "poliwrath4":
		chgAtk('Water Absorb','Damp',2,'Expert Belt',2,6,384,295,226,158,216,176,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Earthquake',100,8,1,'Hypnosis',0,10,3);
		break;
	case "porygon21":
		chgAtk('Trace','Download',11,'Cheri Berry',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Charge Beam',50,3,2,'Thunder Wave',0,3,3,'Recycle',0,0,3);
		break;
	case "porygon22":
		chgAtk('Trace','Download',14,'Iron Ball',0,17,374,196,216,339,226,140,'Tri Attack',80,0,2,'Thunderbolt',95,3,2,'Recover',0,0,3,'Trick Room',0,10,3);
		break;
	case "porygon23":
		chgAtk('Trace','Download',11,'Wise Glasses',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Thunderbolt',95,3,2,'Psychic',90,10,2,'Ice Beam',95,5,2);
		break;
	case "porygon24":
		chgAtk('Trace','Download',11,'Lum Berry',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Signal Beam',75,11,2,'Shadow Ball',80,13,2,'Ice Beam',95,5,2);
		break;
	case "porygonz1":
		chgAtk('Adaptability','Download',11,'Sitrus Berry',0,17,374,176,176,405,186,216,'Tri Attack',80,0,2,'Shadow Ball',80,13,2,'Recycle',0,0,3,'Conversion 2',0,0,3);
		break;
	case "porygonz2":
		chgAtk('Adaptability','Download',21,'Choice Scarf',0,17,311,176,176,369,186,306,'Tri Attack',80,0,2,'Thunder Wave',0,3,3,'Recover',0,0,3,'Trick',0,10,3);
		break;
	case "porygonz3":
		chgAtk('Adaptability','Download',11,'Wise Glasses',0,17,374,176,176,405,186,216,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Charge Beam',50,3,2);
		break;
	case "porygonz4":
		chgAtk('Adaptability','Download',11,'Expert Belt',0,17,311,176,176,405,186,279,'Tri Attack',80,0,2,'Shadow Ball',80,13,2,'Thunderbolt',95,3,2,'Recover',0,0,3);
		break;
	case "probopass1":
		chgAtk('Sturdy','Magnet Pull',4,'Cheri Berry',12,16,261,229,326,249,336,104,'AncientPower',60,12,2,'Magnet Bomb',60,16,1,'Thunder Wave',0,3,3,'Protect',0,0,3);
		break;
	case "probopass2":
		chgAtk('Sturdy','Magnet Pull',2,6,12,16,261,229,326,167,399,116,'Iron Head',80,16,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "probopass3":
		chgAtk('Sturdy','Magnet Pull',2,'Scope Lens',12,16,261,229,389,167,336,116,'Stone Edge',100,12,1,'Iron Head',80,16,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "probopass4":
		chgAtk('Sturdy','Magnet Pull',11,'Life Orb',12,16,261,131,326,273,399,116,'Flash Cannon',80,16,2,'Power Gem',70,12,2,'Earth Power',90,8,2,'Thunderbolt',95,3,2);
		break;
	case "quagsire1":
		chgAtk('Damp','Water Absorb',2,4,2,8,394,295,206,149,166,106,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Brick Break',75,6,1,'Counter',0,6,1);
		break;
	case "quagsire2":
		chgAtk('Damp','Water Absorb',18,'Leftovers',2,8,373,206,248,149,228,106,'Dive',80,2,1,'Yawn',0,0,3,'Curse',0,0,3,'Amnesia',0,10,3);
		break;
	case "quagsire3":
		chgAtk('Damp','Water Absorb',11,'Quick Claw',2,8,394,185,206,251,166,106,'Surf',95,2,2,'Earth Power',90,8,2,'Focus Blast',120,6,2,'Sludge Bomb',90,7,2);
		break;
	case "quagsire4":
		chgAtk('Damp','Water Absorb',2,'Muscle Band',2,8,394,295,206,149,166,106,'Earthquake',100,8,1,'Waterfall',80,2,1,'Stone Edge',100,12,1,'Ice Punch',75,5,1);
		break;
	case "raichu1":
		chgAtk('Static','nil',2,'Wide Lens',3,17,261,306,146,194,196,299,'ThunderPunch',75,3,1,'Iron Tail',100,16,1,'Slam',80,0,1,'Quick Attack',40,0,1);
		break;
	case "raichu2":
		chgAtk('Static','nil',23,'Focus Band',3,17,261,279,146,194,196,328,'ThunderPunch',75,3,1,'Focus Punch',150,6,1,'Sweet Kiss',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "raichu3":
		chgAtk('Static','nil',21,'Petaya Berry',3,17,261,194,146,279,196,328,'Thunderbolt',95,3,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2,'Nasty Plot',0,15,3);
		break;
	case "raichu4":
		chgAtk('Static','nil',2,'Brightpowder',3,17,261,306,146,194,196,299,'Volt Tackle',120,3,1,'Return',102,0,1,'Brick Break',75,6,1,'Thunder Wave',0,3,3);
		break;
	case "raikou1":
		chgAtk('Pressure','nil',21,'Lum Berry',3,17,321,185,186,329,236,361,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2,'Thunder Wave',0,3,3,'Light Screen',0,10,3);
		break;
	case "raikou2":
		chgAtk('Pressure','nil',23,'Kings Rock',3,17,321,269,186,239,236,361,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Iron Head',80,16,1,'Return',102,0,1);
		break;
	case "raikou3":
		chgAtk('Pressure','nil',11,'Wise Glasses',3,17,321,185,186,361,236,329,'Thunder',120,3,2,'Extrasensory',80,10,2,'Signal Beam',75,11,2,'Rain Dance',0,2,3);
		break;
	case "raikou4":
		chgAtk('Pressure','nil',11,8,3,17,321,185,186,361,236,329,'Thunderbolt',95,3,2,'Extrasensory',80,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "rampardos1":
		chgAtk('Mold Breaker','nil',2,'Toxic Orb',12,17,398,471,156,149,136,152,'Rock Slide',75,12,1,'Facade',70,0,1,'Crunch',80,15,1,'Screech',0,0,3);
		break;
	case "rampardos2":
		chgAtk('Mold Breaker','nil',4,'Iron Ball',12,17,398,471,156,166,136,136,'Stone Edge',100,12,1,'Payback',60,15,1,'Avalanche',60,5,1,'Fling',130,15,1);
		break;
	case "rampardos3":
		chgAtk('Mold Breaker','nil',2,'Life Orb',12,17,398,471,156,149,136,152,'Head Smash',150,12,1,'Zen Headbutt',80,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1);
		break;
	case "rampardos4":
		chgAtk('Mold Breaker','nil',23,'Choice Scarf',12,17,335,429,156,149,136,236,'Head Smash',150,12,1,'Earthquake',100,8,1,'Giga Impact',150,0,1,'Superpower',120,6,1);
		break;
	case "rapidash1":
		chgAtk('Run Away','Flash Fire',11,'Chesto Berry',1,17,271,212,176,284,196,309,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3,'Rest',0,10,3);
		break;
	case "rapidash2":
		chgAtk('Run Away','Flash Fire',11,'White Herb',1,17,271,212,176,284,196,309,'Overheat',140,1,2,'SolarBeam',120,4,2,'Swift',60,0,2,'Sunny Day',0,1,3);
		break;
	case "rapidash3":
		chgAtk('Run Away','Flash Fire',2,'Brightpowder',1,17,271,328,176,176,196,309,'Flare Blitz',120,1,1,'Poison Jab',80,7,1,'Iron Tail',80,16,1,'Horn Drill',0,0,3);
		break;
	case "rapidash4":
		chgAtk('Run Away','Flash Fire',23,'Chesto Berry',1,17,271,299,176,176,196,339,'Flare Blitz',120,1,1,'Megahorn',120,7,1,'Double-Edge',120,0,1,'Hypnosis',0,10,3);
		break;
	case "regice1":
		chgAtk('Clear Body','nil',11,'Lum Berry',5,17,301,122,236,328,499,136,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Charge Beam',50,3,2,'Amnesia',0,10,3);
		break;
	case "regice2":
		chgAtk('Clear Body','nil',7,'Leftovers',5,17,364,136,328,212,436,136,'Avalanche',60,5,1,'Hammer Arm',100,6,1,'Double Team',0,0,3,'Curse',0,0,3);
		break;
	case "regice3":
		chgAtk('Clear Body','nil',6,'Chesto Berry',5,17,301,122,328,299,436,136,'Ice Beam',95,5,2,'Flash Cannon',80,16,2,'AncientPower',60,12,2,'Rest',0,10,3);
		break;
	case "regice4":
		chgAtk('Clear Body','nil',11,'Shell Bell',5,17,364,122,236,328,436,136,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Hyper Beam',150,0,2,'Focus Blast',120,6,2);
		break;
	case "regigigas1":
		chgAtk('Slow Start','nil',7,'Lax Incense',0,17,403,356,327,176,298,236,'Return',102,0,1,'Aerial Ace',60,9,1,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "regigigas2":
		chgAtk('Slow Start','nil',18,'Leftovers',0,17,403,356,298,176,327,236,'Facade',70,0,1,'Zen Headbutt',80,10,1,'Double Team',0,0,3,'Substitute',0,0,3);
		break;
	case "regigigas3":
		chgAtk('Slow Start','nil',11,'Wise Glasses',0,17,424,320,256,284,256,236,'Earth Power',90,8,2,'Focus Blast',120,6,2,'Thunderbolt',95,3,2,'AncientPower',60,12,2);
		break;
	case "regigigas4":
		chgAtk('Slow Start','nil',2,'Brightpowder',0,17,424,460,256,176,256,236,'Crush Grip',120,0,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Drain Punch',60,6,1);
		break;
	case "regirock1":
		chgAtk('Clear Body','nil',7,'Leftovers',12,17,301,299,548,122,236,136,'Rock Slide',75,12,1,'Earthquake',100,8,1,'Brick Break',75,6,1,'Sandstorm',0,12,3);
		break;
	case "regirock2":
		chgAtk('Clear Body','nil',2,'Razor Claw',12,17,364,328,436,122,236,136,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Drain Punch',60,6,1);
		break;
	case "regirock3":
		chgAtk('Clear Body','nil',18,'Chesto Berry',12,17,364,236,436,122,328,136,'Stone Edge',100,12,1,'Hammer Arm',100,6,1,'Rest',0,10,3,'Curse',0,0,3);
		break;
	case "regirock4":
		chgAtk('Clear Body','nil',18,'Quick Claw',12,17,301,299,436,122,328,136,'Stone Edge',100,12,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Explosion',250,0,1);
		break;
	case "registeel1":
		chgAtk('Clear Body','nil',11,'Lum Berry',16,17,364,167,336,273,336,136,'Flash Cannon',80,16,2,'Thunderbolt',95,3,2,'Thunder Wave',0,3,3,'Amnesia',0,10,3);
		break;
	case "registeel2":
		chgAtk('Clear Body','nil',2,'Leftovers',16,17,343,204,378,167,378,136,'Iron Head',80,16,1,'Toxic',0,7,3,'Double Team',0,0,3,'Iron Defense',0,16,3);
		break;
	case "registeel3":
		chgAtk('Clear Body','nil',2,'Razor Claw',16,17,364,273,336,167,336,136,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "registeel4":
		chgAtk('Clear Body','nil',2,'Shell Bell',16,17,343,204,378,167,378,136,'Iron Head',80,16,1,'Hammer Arm',100,6,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "rhydon1":
		chgAtk('Lightningrod','Rock Head',2,2,8,12,351,394,339,113,126,116,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Crunch',80,15,1,'Scary Face',0,0,3);
		break;
	case "rhydon2":
		chgAtk('Lightningrod','Rock Head',2,'Focus Sash',8,12,351,394,339,113,126,116,'Earthquake',100,8,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "rhydon3":
		chgAtk('Lightningrod','Rock Head',4,'Persim Berry',8,12,414,394,276,126,126,104,'Outrage',120,14,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1,'Avalanche',60,5,1);
		break;
	case "rhydon4":
		chgAtk('Lightningrod','Rock Head',2,'Quick Claw',8,12,414,394,276,113,126,116,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Megahorn',120,11,1,'Horn Drill',0,0,3);
		break;
	case "rhyperior1":
		chgAtk('Lightningrod','Solid Rock',2,'Focus Band',8,12,371,416,359,131,146,116,'Rock Wrecker',150,12,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Roar',0,0,3);
		break;
	case "rhyperior2":
		chgAtk('Lightningrod','Solid Rock',2,'Expert Belt',8,12,371,416,359,131,146,116,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aqua Tail',90,2,1);
		break;
	case "rhyperior3":
		chgAtk('Lightningrod','Solid Rock',7,'Focus Sash',8,12,414,316,394,131,146,116,'Horn Drill',0,0,3,'Avalanche',60,5,1,'Payback',60,15,1,'Counter',0,6,1);
		break;
	case "rhyperior4":
		chgAtk('Lightningrod','Solid Rock',2,'Choice Band',8,12,414,416,296,131,146,116,'Rock Wrecker',150,12,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Megahorn',120,11,1);
		break;
	case "roserade1":
		chgAtk('Natural Cure','Poison Point',16,9,4,7,261,158,146,349,339,216,'Sludge Bomb',90,7,2,'Magical Leaf',60,4,2,'Stun Spore',0,4,3,'Mud-Slap',20,8,2);
		break;
	case "roserade2":
		chgAtk('Natural Cure','Poison Point',16,'Big Root',4,7,261,158,146,349,339,216,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Ingrain',0,4,3,'Synthesis',0,4,3);
		break;
	case "roserade3":
		chgAtk('Natural Cure','Poison Point',11,'White Herb',4,7,261,158,146,383,246,279,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Hyper Beam',150,0,2,'GrassWhistle',0,4,3);
		break;
	case "roserade4":
		chgAtk('Natural Cure','Poison Point',11,'White Herb',4,7,261,158,146,383,246,279,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Shadow Ball',80,13,2,'Weather Ball',50,0,2);
		break;
	case "salamence1":
		chgAtk('Intimidate','nil',2,'Cheri Berry',14,9,331,405,196,230,196,299,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,'Aqua Tail',90,2,1,'Scary Face',0,0,3);
		break;
	case "salamence2":
		chgAtk('Intimidate','nil',23,'Razor Fang',14,9,331,369,196,230,196,328,'Dragon Claw',80,14,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Dragon Dance',0,14,3);
		break;
	case "salamence3":
		chgAtk('Intimidate','nil',11,'Wise Glasses',14,9,331,275,196,350,196,299,'Draco Meteor',140,14,2,'Hydro Pump',120,2,2,'Flamethrower',95,1,2,'Ominous Wind',60,13,2);
		break;
	case "salamence4":
		chgAtk('Intimidate','nil',2,'Lum Berry',14,9,331,405,196,230,196,299,'Outrage',120,14,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Zen Headbutt',80,10,1);
		break;
	case "sceptile1":
		chgAtk('Overgrow','nil',23,'Liechi Berry',4,17,281,269,166,221,206,372,'Leaf Blade',90,4,1,'Crunch',80,15,1,'Quick Attack',40,0,1,'Screech',0,0,3);
		break;
	case "sceptile2":
		chgAtk('Overgrow','nil',21,'Leftovers',4,17,281,185,166,309,206,372,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "sceptile3":
		chgAtk('Overgrow','nil',2,'Scope Lens',4,17,281,295,166,221,206,339,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Night Slash',70,15,1,'Aerial Ace',60,9,1);
		break;
	case "sceptile4":
		chgAtk('Overgrow','nil',21,1,4,17,281,185,166,309,206,372,'Leaf Storm',140,4,2,'Dragon Pulse',90,14,2,'Focus Blast',120,6,2,'Hyper Beam',150,0,2);
		break;
	case "scizor1":
		chgAtk('Swarm','Technician',7,'Brightpowder',11,16,281,359,328,131,196,166,'X-Scissor',80,11,1,'Bullet Punch',40,16,1,'Swords Dance',0,0,3,'Baton Pass',0,0,3);
		break;
	case "scizor2":
		chgAtk('Swarm','Technician',18,'Sitrus Berry',11,16,281,359,236,131,284,166,'Metal Claw',50,16,1,'Night Slash',70,15,1,'Iron Defense',0,16,3,'Roost',0,9,3);
		break;
	case "scizor3":
		chgAtk('Swarm','Technician',23,'Salac Berry',11,16,281,359,236,131,196,251,'X-Scissor',80,11,1,'Quick Attack',40,0,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "scizor4":
		chgAtk('Swarm','Technician',2,1,11,16,281,394,299,131,196,166,'X-Scissor',80,11,1,'Iron Head',80,16,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1);
		break;
	case "shiftry1":
		chgAtk('Chlorophyll','Early Bird',23,'Persim Berry',4,15,321,299,156,194,156,284,'Seed Bomb',80,4,1,'Faint Attack',60,15,1,'X-Scissor',80,11,1,'Fake Out',40,0,1);
		break;
	case "shiftry2":
		chgAtk('Chlorophyll','Early Bird',16,'Leftovers',4,15,363,212,198,216,217,196,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Double Team',0,0,3,'Synthesis',0,4,3);
		break;
	case "shiftry3":
		chgAtk('Chlorophyll','Early Bird',11,'White Herb',4,15,384,212,156,306,156,196,'Leaf Storm',140,4,2,'Dark Pulse',80,15,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2);
		break;
	case "shiftry4":
		chgAtk('Chlorophyll','Early Bird',2,'Cheri Berry',4,15,384,328,156,194,156,196,'Seed Bomb',80,4,1,'Sucker Punch',80,15,1,'Aerial Ace',60,9,1,'Explosion',250,0,1);
		break;
	case "shuckle1":
		chgAtk('Sturdy','Gluttony',7,'Lax Incense',11,12,223,56,591,50,538,46,'Stone Edge',100,12,1,'Bug Bite',60,11,1,'Swagger',0,0,3,'Power Trick',0,10,3);
		break;
	case "shuckle2":
		chgAtk('Sturdy','Gluttony',18,'Grip Claw',11,12,223,56,538,50,591,46,'Wrap',15,0,1,'Swagger',0,0,3,'Attract',0,0,3,'Toxic',0,7,3);
		break;
	case "shuckle3":
		chgAtk('Sturdy','Gluttony',7,'Lax Incense',11,12,223,56,591,50,538,46,'Gyro Ball',0,16,1,'Substitute',0,0,3,'Double Team',0,0,3,'Power Trick',0,10,3);
		break;
	case "shuckle4":
		chgAtk('Sturdy','Gluttony',16,'Leftovers',11,12,223,50,538,56,591,46,'Toxic',0,7,3,'Substitute',0,0,3,'Double Team',0,0,3,'Sandstorm',0,12,3);
		break;
	case "skarmory1":
		chgAtk('Keen Eye','Sturdy',7,1,16,9,271,259,416,104,176,176,'Drill Peck',80,9,1,'Steel Wing',70,16,1,'Spikes',0,8,3,'Roar',0,0,3);
		break;
	case "skarmory2":
		chgAtk('Keen Eye','Sturdy',18,'Leftovers',16,9,313,196,358,104,239,176,'Fly',90,9,1,'Toxic',0,7,3,'Double Team',0,0,3,'Roost',0,9,3);
		break;
	case "skarmory3":
		chgAtk('Keen Eye','Sturdy',7,'Razor Claw',16,9,271,259,416,104,176,176,'Drill Peck',80,9,1,'Slash',70,0,1,'Payback',60,15,1,'Night Slash',70,15,1);
		break;
	case "skarmory4":
		chgAtk('Keen Eye','Sturdy',2,'Life Orb',16,9,271,284,379,104,176,176,'Brave Bird',120,9,1,'Steel Wing',70,16,1,'X-Scissor',80,11,1,'Rock Slide',75,12,1);
		break;
	case "skuntank1":
		chgAtk('Stench','Aftermath',2,'Razor Claw',7,15,410,313,170,160,158,204,'Sucker Punch',80,15,1,'Poison Jab',80,7,1,'Slash',70,0,1,'Screech',0,0,3);
		break;
	case "skuntank2":
		chgAtk('Stench','Aftermath',23,'Chesto Berry',7,15,410,222,170,160,158,293,'Crunch',80,15,1,'Toxic',0,7,3,'Swagger',0,0,3,'Double Team',0,0,3);
		break;
	case "skuntank3":
		chgAtk('Stench','Aftermath',21,8,7,15,347,199,170,241,158,293,'Sludge Bomb',90,7,2,'Dark Pulse',80,15,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2);
		break;
	case "skuntank4":
		chgAtk('Stench','Aftermath',23,'Muscle Band',7,15,347,285,170,160,158,293,'Poison Jab',80,7,1,'Night Slash',70,15,1,'Crunch',80,15,1,'Explosion',250,0,1);
		break;
	case "slaking1":
		chgAtk('Truant','nil',7,'Lax Incense',0,17,504,356,328,203,166,236,'Facade',70,0,1,'Shadow Claw',70,13,1,'Slack Off',0,0,3,'Yawn',0,0,3);
		break;
	case "slaking2":
		chgAtk('Truant','nil',2,'Lum Berry',0,17,441,460,299,203,166,236,'Crush Claw',75,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "slaking3":
		chgAtk('Truant','nil',23,'Life Orb',0,17,441,419,236,203,166,328,'Return',102,0,1,'Night Slash',70,15,1,'Gunk Shot',120,7,1,'Aerial Ace',60,9,1);
		break;
	case "slaking4":
		chgAtk('Truant','nil',2,'Muscle Band',0,17,504,460,236,203,166,236,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1);
		break;
	case "slowbro1":
		chgAtk('Oblivious','Own Tempo',6,'Chesto Berry',2,10,331,167,350,299,196,96,'Psychic',90,10,2,'Surf',95,2,2,'Calm Mind',0,10,3,'Yawn',0,0,3);
		break;
	case "slowbro2":
		chgAtk('Oblivious','Own Tempo',2,'Expert Belt',2,10,394,273,256,212,196,96,'Zen Headbutt',80,10,1,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Avalanche',60,5,1);
		break;
	case "slowbro3":
		chgAtk('Oblivious','Own Tempo',11,'Choice Specs',2,10,394,167,256,328,196,96,'Psychic',90,10,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "slowbro4":
		chgAtk('Oblivious','Own Tempo',14,'Leftovers',2,10,394,186,256,328,196,86,'Psychic',90,10,2,'Surf',95,2,2,'Ice Beam',95,5,2,'Trick Room',0,10,3);
		break;
	case "slowking1":
		chgAtk('Oblivious','Own Tempo',14,'Shell Bell',2,10,373,186,238,259,298,86,'Psychic',90,10,2,'Brine',60,2,2,'Yawn',0,0,3,'Trick Room',0,10,3);
		break;
	case "slowking2":
		chgAtk('Oblivious','Own Tempo',2,'Quick Claw',2,10,394,273,196,212,256,96,'Zen Headbutt',80,10,1,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "slowking3":
		chgAtk('Oblivious','Own Tempo',11,'Lum Berry',2,10,331,167,196,328,319,96,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Focus Blast',120,6,2);
		break;
	case "slowking4":
		chgAtk('Oblivious','Own Tempo',11,'Wise Glasses',2,10,394,167,196,328,256,96,'Psychic',90,10,2,'Surf',95,2,2,'Ice Beam',95,5,2,'Flamethrower',95,1,2);
		break;
	case "snorlax1":
		chgAtk('Immunity','Thick Fat',2,'Leftovers',0,17,524,350,166,149,256,96,'Return',102,0,1,'Rock Slide',75,12,1,'Curse',0,0,3,'Yawn',0,0,3);
		break;
	case "snorlax2":
		chgAtk('Immunity','Thick Fat',2,'Chesto Berry',0,17,461,350,166,149,319,96,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Rest',0,10,3);
		break;
	case "snorlax3":
		chgAtk('Immunity','Thick Fat',2,'White Herb',0,17,461,350,166,149,319,96,'Outrage',120,14,1,'Superpower',120,6,1,'Gunk Shot',120,7,1,'Seed Bomb',80,4,1);
		break;
	case "snorlax4":
		chgAtk('Immunity','Thick Fat',2,'Life Orb',0,17,524,350,166,149,256,96,'Double-Edge',120,0,1,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Crunch',80,15,1);
		break;
	case "staraptor1":
		chgAtk('Intimidate','nil',23,'Kings Rock',0,9,311,339,176,122,136,328,'Return',102,0,1,'Aerial Ace',60,9,1,'Double Team',0,0,3,'Roost',0,9,3);
		break;
	case "staraptor2":
		chgAtk('Intimidate','nil',23,'Kings Rock',0,9,311,339,176,122,136,328,'Endeavor',0,0,3,'Aerial Ace',60,9,1,'Endure',0,0,3,'Quick Attack',40,0,1);
		break;
	case "staraptor3":
		chgAtk('Intimidate','nil',2,'Muscle Band',0,9,311,372,176,122,136,299,'Brave Bird',120,9,1,'Return',102,0,1,'Steel Wing',70,16,1,'Pursuit',40,15,1);
		break;
	case "staraptor4":
		chgAtk('Intimidate','nil',2,'Choice Band',0,9,311,372,176,122,136,299,'Brave Bird',120,9,1,'Giga Impact',150,0,1,'Close Combat',120,6,1,'U-turn',70,11,1);
		break;
	case "starmie1":
		chgAtk('Illuminate','Natural Cure',21,'Lum Berry',2,10,261,167,206,299,206,361,'Surf',95,2,2,'Psychic',90,10,2,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3);
		break;
	case "starmie2":
		chgAtk('Illuminate','Natural Cure',21,'Wide Lens',2,10,261,167,206,299,206,361,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Thunder',120,3,2,'Recover',0,0,3);
		break;
	case "starmie3":
		chgAtk('Illuminate','Natural Cure',11,'Wise Glasses',2,10,261,167,206,328,206,329,'Surf',95,2,2,'Psychic',90,10,2,'Power Gem',70,12,2,'Signal Beam',75,11,2);
		break;
	case "starmie4":
		chgAtk('Illuminate','Natural Cure',11,'Expert Belt',2,10,261,167,206,328,206,329,'Surf',95,2,2,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2);
		break;
	case "steelix1":
		chgAtk('Rock Head','Sturdy',7,2,16,8,291,269,548,131,166,96,'Earthquake',100,8,1,'Iron Head',80,16,1,'Crunch',80,15,1,'Sandstorm',0,12,3);
		break;
	case "steelix2":
		chgAtk('Rock Head','Sturdy',2,8,16,8,291,295,499,131,166,96,'Earthquake',100,8,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "steelix3":
		chgAtk('Rock Head','Sturdy',9,'Iron Ball',16,8,291,269,548,146,166,86,'Gyro Ball',0,16,1,'Payback',60,15,1,'Swagger',0,0,3,'Curse',0,0,3);
		break;
	case "steelix4":
		chgAtk('Rock Head','Sturdy',4,'Quick Claw',16,8,291,295,499,146,166,86,'Gyro Ball',0,16,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Explosion',250,0,1);
		break;
	case "suicune1":
		chgAtk('Pressure','nil',16,'Focus Sash',2,17,341,167,266,279,361,206,'Surf',95,2,2,'Icy Wind',55,5,2,'Ominous Wind',60,13,2,'Mirror Coat',0,10,3);
		break;
	case "suicune2":
		chgAtk('Pressure','nil',23,'Kings Rock',2,17,341,249,266,194,266,295,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Iron Head',80,16,1,'Bite',60,15,1);
		break;
	case "suicune3":
		chgAtk('Pressure','nil',6,'Lum Berry',2,17,341,167,361,279,266,206,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Hail',0,5,3);
		break;
	case "suicune4":
		chgAtk('Pressure','nil',11,3,2,17,404,167,266,306,266,206,'Surf',95,2,2,'Ice Beam',95,5,2,'Extrasensory',80,10,2,'Calm Mind',0,10,3);
		break;
	case "swampert1":
		chgAtk('Torrent','nil',2,'Shell Bell',2,8,404,350,216,185,216,156,'Waterfall',80,2,1,'Earthquake',100,8,1,'Ice Punch',75,5,1,'Protect',0,0,3);
		break;
	case "swampert2":
		chgAtk('Torrent','nil',2,'Lum Berry',2,8,404,350,216,185,216,156,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Curse',0,0,3);
		break;
	case "swampert3":
		chgAtk('Torrent','nil',11,'Expert Belt',2,8,404,230,216,295,216,156,'Muddy Water',95,2,2,'Earth Power',90,8,2,'Ice Beam',95,5,2,'Counter',0,6,1);
		break;
	case "swampert4":
		chgAtk('Torrent','nil',2,4,2,8,404,350,216,185,216,156,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Avalanche',60,5,1,'Mirror Coat',0,10,3);
		break;
	case "tangrowth1":
		chgAtk('Chlorophyll','Leaf Guard',11,9,4,17,341,212,349,350,136,136,'Energy Ball',80,4,2,'Sludge Bomb',90,7,2,'Focus Blast',120,6,2,'Sleep Powder',0,4,3);
		break;
	case "tangrowth2":
		chgAtk('Chlorophyll','Leaf Guard',6,'Big Root',4,17,383,212,360,298,136,136,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "tangrowth3":
		chgAtk('Chlorophyll','Leaf Guard',11,'Heat Rock',4,17,341,212,349,350,136,136,'SolarBeam',120,4,2,'Wring Out',120,0,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "tangrowth4":
		chgAtk('Chlorophyll','Leaf Guard',2,'Lax Incense',4,17,341,328,349,230,136,136,'Power Whip',120,4,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'Brick Break',75,6,1);
		break;
	case "tauros1":
		chgAtk('Intimidate','Anger Point',23,'Persim Berry',0,17,291,299,226,104,176,350,'Thrash',90,0,1,'Zen Headbutt',80,10,1,'Pursuit',40,15,1,'Scary Face',0,0,3);
		break;
	case "tauros2":
		chgAtk('Intimidate','Anger Point',2,'Life Orb',0,17,291,328,226,104,176,319,'Facade',70,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Payback',60,15,1);
		break;
	case "tauros3":
		chgAtk('Intimidate','Anger Point',23,'Lum Berry',0,17,291,299,226,104,176,350,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Outrage',120,14,1,'Iron Tail',100,16,1);
		break;
	case "tauros4":
		chgAtk('Intimidate','Anger Point',2,'Choice Band',0,17,291,328,226,104,176,319,'Return',102,0,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Zen Headbutt',80,10,1);
		break;
	case "tentacruel1":
		chgAtk('Clear Body','Liquid Ooze',21,3,2,7,301,158,166,259,276,328,'Surf',95,2,2,'Sludge Bomb',90,7,2,'Icy Wind',55,5,2,'Barrier',0,10,3);
		break;
	case "tentacruel2":
		chgAtk('Clear Body','Liquid Ooze',16,'Black Sludge',2,7,364,158,166,196,372,236,'Toxic',0,7,3,'Giga Drain',60,4,2,'Attract',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "tentacruel3":
		chgAtk('Clear Body','Liquid Ooze',11,'Focus Sash',2,7,301,158,166,284,339,236,'Surf',95,2,2,'Sludge Bomb',90,7,2,'Giga Drain',60,4,2,'Mirror Coat',0,10,2);
		break;
	case "tentacruel4":
		chgAtk('Clear Body','Liquid Ooze',21,'Scope Lens',2,7,301,158,166,259,276,328,'Hydro Pump',120,2,2,'Sludge Bomb',90,7,2,'Ice Beam',95,5,2,'Wring Out',120,0,2);
		break;
	case "togekiss1":
		chgAtk('Hustle','Serene Grace',2,'Power Herb',0,9,311,218,226,248,329,196,'Sky Attack',140,9,1,'ExtremeSpeed',80,0,1,'Drain Punch',60,6,1,'Roost',0,9,3);
		break;
	case "togekiss2":
		chgAtk('Hustle','Serene Grace',11,'Scope Lens',0,9,374,122,226,372,266,196,'Air Slash',75,9,2,'Ominous Wind',60,13,2,'Silver Wind',60,11,2,'AncientPower',60,12,2);
		break;
	case "togekiss3":
		chgAtk('Hustle','Serene Grace',11,'Wise Glasses',0,9,311,122,226,372,266,259,'Air Slash',75,9,2,'Heat Wave',100,1,2,'Signal Beam',75,11,2,'Magical Leaf',60,4,2);
		break;
	case "togekiss4":
		chgAtk('Hustle','Serene Grace',11,'Expert Belt',0,9,311,122,226,372,266,259,'Hyper Beam',150,0,2,'Air Slash',75,9,2,'Aura Sphere',80,6,2,'Psychic',90,10,2);
		break;
	case "torterra1":
		chgAtk('Overgrow','nil',2,5,4,8,394,348,246,167,206,148,'Earthquake',100,8,1,'Grass Knot',60,4,2,'Rock Slide',75,12,1,'Curse',0,0,3);
		break;
	case "torterra2":
		chgAtk('Overgrow','nil',19,'Leftovers',4,8,373,254,288,186,272,133,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Synthesis',0,4,3,'Amnesia',0,10,3);
		break;
	case "torterra3":
		chgAtk('Overgrow','nil',11,'Lax Incense',4,8,331,228,309,273,206,148,'Frenzy Plant',150,4,2,'Earth Power',90,8,2,'Hyper Beam',150,0,2,'Leech Seed',0,4,3);
		break;
	case "torterra4":
		chgAtk('Overgrow','nil',2,'Quick Claw',4,8,394,348,246,167,206,148,'Wood Hammer',120,4,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1);
		break;
	case "toxicroak1":
		chgAtk('Anticipation','Dry Skin',2,'Black Sludge',7,6,307,342,166,187,166,269,'Poison Jab',80,7,1,'Brick Break',75,6,1,'X-Scissor',80,11,1,'Knock Off',20,15,1);
		break;
	case "toxicroak2":
		chgAtk('Anticipation','Dry Skin',2,'Wide Lens',7,6,307,342,166,187,166,269,'DynamicPunch',100,6,1,'Poison Jab',80,7,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "toxicroak3":
		chgAtk('Anticipation','Dry Skin',11,'Wise Glasses',7,6,307,223,166,298,166,269,'Sludge Bomb',90,7,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2,'Dark Pulse',80,15,2);
		break;
	case "toxicroak4":
		chgAtk('Anticipation','Dry Skin',2,'Razor Claw',7,6,307,342,166,187,166,269,'Gunk Shot',120,7,1,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1);
		break;
	case "typhlosion1":
		chgAtk('Blaze','nil',2,'Scope Lens',1,17,297,293,192,228,206,299,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Shadow Claw',70,13,1,'Quick Attack',40,0,1);
		break;
	case "typhlosion2":
		chgAtk('Blaze','nil',20,'Salac Berry',1,17,297,267,192,317,206,236,'Blast Burn',150,1,2,'Earthquake',100,8,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "typhlosion3":
		chgAtk('Blaze','nil',2,8,1,17,297,293,192,228,206,299,'Flare Blitz',120,1,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1);
		break;
	case "typhlosion4":
		chgAtk('Blaze','nil',11,'White Herb',1,17,297,183,192,348,206,299,'Overheat',140,1,2,'SolarBeam',120,4,2,'Focus Blast',120,6,2,'Sunny Day',0,1,3);
		break;
	case "tyranitar1":
		chgAtk('Sand Stream','nil',4,'Focus Band',12,15,341,403,256,226,299,142,'Rock Slide',75,12,1,'Payback',60,15,1,'Avalanche',60,5,1,'Curse',0,0,3);
		break;
	case "tyranitar2":
		chgAtk('Sand Stream','nil',23,'Choice Scarf',12,15,341,367,256,203,236,243,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1);
		break;
	case "tyranitar3":
		chgAtk('Sand Stream','nil',2,'White Herb',12,15,341,403,319,203,236,158,'Superpower',120,6,1,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1,'Aqua Tail',90,2,1);
		break;
	case "tyranitar4":
		chgAtk('Sand Stream','nil',2,6,12,15,404,403,256,203,236,158,'Stone Edge',100,12,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "umbreon1":
		chgAtk('Synchronize','nil',18,'Leftovers',15,17,331,166,319,140,394,166,'Payback',60,15,1,'Confuse Ray',0,13,3,'Curse',0,0,3,'Baton Pass',0,0,3);
		break;
	case "umbreon2":
		chgAtk('Synchronize','nil',7,'Leftovers',15,17,331,166,350,140,359,166,'Toxic',0,7,3,'Mean Look',0,0,3,'Double Team',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "umbreon3":
		chgAtk('Synchronize','nil',7,'Lax Incense',15,17,394,166,350,140,296,166,'Faint Attack',60,15,1,'Swagger',0,0,3,'Psych Up',0,10,3,'Screech',0,0,3);
		break;
	case "umbreon4":
		chgAtk('Synchronize','nil',7,'Brightpowder',15,17,331,166,350,140,359,166,'Payback',60,15,1,'Trump Card',40,0,1,'Curse',0,0,3,'Moonlight',0,0,3);
		break;
	case "ursaring1":
		chgAtk('Guts','Quick Feet',4,'Focus Sash',0,17,384,394,186,186,186,131,'Slash',70,0,1,'Payback',60,15,1,'Avalanche',60,5,1,'Counter',0,6,1);
		break;
	case "ursaring2":
		chgAtk('Guts','Quick Feet',2,'Life Orb',0,17,384,394,186,167,186,146,'Hammer Arm',100,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "ursaring3":
		chgAtk('Guts','Quick Feet',2,'Toxic Orb',0,17,384,394,186,167,186,146,'Facade',70,0,1,'Superpower',120,6,1,'Crunch',80,15,1,'Protect',0,0,3);
		break;
	case "ursaring4":
		chgAtk('Guts','Quick Feet',2,'Quick Claw',0,17,384,394,186,167,186,146,'Return',102,0,1,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "vaporeon1":
		chgAtk('Water Absorb',11,'Brightpowder',2,17,464,149,156,350,226,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Acid Armor',0,7,3,'Baton Pass',0,0,3);
		break;
	case "vaporeon2":
		chgAtk('Water Absorb',11,'Damp Rock',2,17,464,149,156,350,226,166,'Hydro Pump',120,2,2,'Ice Beam',95,5,2,'Acid Armor',0,7,3,'Rain Dance',0,2,3);
		break;
	case "vaporeon3":
		chgAtk('Water Absorb',11,'Leftovers',2,17,464,149,156,350,226,166,'Muddy Water',95,2,2,'Blizzard',120,5,2,'Aqua Ring',0,2,3,'Yawn',0,0,3);
		break;
	case "vaporeon4":
		chgAtk('Water Absorb',11,'Expert Belt',2,17,464,149,156,350,226,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "venusaur1":
		chgAtk('Overgrow','nil',11,'White Herb',4,7,301,180,202,328,299,196,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Amnesia',0,10,3,'Sleep Powder',0,4,3);
		break;
	case "venusaur2":
		chgAtk('Overgrow','nil',6,'Big Root',4,7,343,180,268,236,278,196,'Giga Drain',60,4,2,'Ingrain',0,4,3,'Leech Seed',0,4,3,'Sleep Powder',0,4,3);
		break;
	case "venusaur3":
		chgAtk('Overgrow','nil',2,'Black Sludge',4,7,301,289,202,212,299,196,'Seed Bomb',80,4,1,'Earthquake',100,8,1,'Outrage',120,14,1,'Curse',0,0,3);
		break;
	case "venusaur4":
		chgAtk('Overgrow','nil',11,'Wise Glasses',4,7,364,180,202,328,236,196,'Frenzy Plant',150,4,2,'Sludge Bomb',90,7,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "vespiquen1":
		chgAtk('Pressure','nil',11,'Scope Lens',11,9,281,176,303,215,303,116,'Silver Wind',60,11,2,'Air Cutter',55,9,2,'Ominous Wind',60,13,2,'Swagger',0,0,3);
		break;
	case "vespiquen2":
		chgAtk('Pressure','nil',18,'Persim Berry',11,9,323,196,282,176,310,116,'X-Scissor',80,11,1,'Toxic',0,7,3,'Heal Order',0,11,3,'Destiny Bond',0,13,3);
		break;
	case "vespiquen3":
		chgAtk('Pressure','nil',2,'Muscle Band',11,9,344,284,240,176,240,116,'X-Scissor',80,11,1,'Aerial Ace',60,9,1,'Pursuit',40,15,1,'U-turn',70,11,1);
		break;
	case "vespiquen4":
		chgAtk('Pressure','nil',2,'Shell Bell',11,9,344,284,240,176,240,116,'Attack Order',90,11,1,'Defend Order',0,11,3,'Heal Order',0,11,3,'Confuse Ray',0,13,3);
		break;
	case "victreebel1":
		chgAtk('Chlorophyll','nil',11,10,4,7,364,221,166,328,156,176,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Sleep Powder',0,4,3,'Gastro Acid',0,7,3);
		break;
	case "victreebel2":
		chgAtk('Chlorophyll','nil',2,'Black Sludge',4,7,364,339,166,212,156,176,'Seed Bomb',80,4,1,'Spit Up',100,0,2,'Swallow',0,0,3,'Stockpile',0,0,3);
		break;
	case "victreebel3":
		chgAtk('Chlorophyll','nil',11,'Power Herb',4,7,364,221,166,328,156,176,'Sludge Bomb',90,7,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "victreebel4":
		chgAtk('Chlorophyll','nil',11,'Focus Band',4,7,364,221,166,328,156,176,'SolarBeam',120,4,2,'Sludge Bomb',90,7,2,'Wring Out',120,0,2,'Sunny Day',0,1,3);
		break;
	case "vileplume1":
		chgAtk('Chlorophyll','nil',11,'Big Root',4,7,291,176,269,328,216,136,'Giga Drain',60,4,2,'Sludge Bomb',90,7,2,'Sleep Powder',0,4,3,'Ingrain',0,4,3);
		break;
	case "vileplume2":
		chgAtk('Chlorophyll','nil',6,'Black Sludge',4,7,333,176,272,236,258,136,'Toxic',0,7,3,'Grass Knot',60,4,2,'Double Team',0,0,3,'Attract',0,0,3);
		break;
	case "vileplume3":
		chgAtk('Chlorophyll','nil',2,'Lum Berry',4,7,291,284,206,212,279,136,'Seed Bomb',80,4,1,'Drain Punch',60,6,1,'Frustration',102,0,1,'Swords Dance',0,0,3);
		break;
	case "vileplume4":
		chgAtk('Chlorophyll','nil',11,'Wise Glasses',4,7,354,176,206,328,216,136,'Sludge Bomb',90,7,2,'Energy Ball',80,4,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "wailord1":
		chgAtk('Water Veil','Oblivious',11,'Sitrus Berry',2,17,544,194,126,306,126,156,'Surf',95,2,2,'Ice Beam',95,5,2,'Attract',0,0,3,'Double Team',0,0,3);
		break;
	case "wailord2":
		chgAtk('Water Veil','Oblivious',7,'Chesto Berry',2,17,523,216,184,194,168,156,'Whirlpool',15,2,2,'Toxic',0,7,3,'Amnesia',0,10,3,'Rest',0,10,3);
		break;
	case "wailord3":
		chgAtk('Water Veil','Oblivious',2,'Leftovers',2,17,544,306,126,194,126,156,'Waterfall',80,2,1,'Avalanche',60,5,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "wailord4":
		chgAtk('Water Veil','Oblivious',11,'Quick Claw',2,17,544,194,126,306,126,156,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Hyper Beam',150,0,2,'Fissure',0,8,3);
		break;
	case "walrein1":
		chgAtk('Thick Fat','Ice Body',2,6,5,2,424,284,216,203,216,166,'Ice Fang',65,5,1,'Aqua Tail',90,2,1,'Swagger',0,0,3,'Encore',0,0,3);
		break;
	case "walrein2":
		chgAtk('Thick Fat','Ice Body',4,'Life Orb',5,2,424,284,216,226,216,149,'Avalanche',60,5,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Curse',0,0,3);
		break;
	case "walrein3":
		chgAtk('Thick Fat','Ice Body',6,'Lax Incense',5,2,361,176,306,226,279,166,'Sheer Cold',0,5,3,'Fissure',0,8,3,'Rest',0,10,3,'Sleep Talk',0,0,3);
		break;
	case "walrein4":
		chgAtk('Thick Fat','Ice Body',11,'Leftovers',5,2,424,176,216,317,216,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Hail',0,5,3);
		break;
	case "weavile1":
		chgAtk('Pressure','nil',2,6,15,5,281,372,166,113,206,349,'Night Slash',70,15,1,'Ice Punch',75,5,1,'Screech',0,0,3,'Fake Out',40,0,1);
		break;
	case "weavile2":
		chgAtk('Pressure','nil',23,'Brightpowder',15,5,281,339,166,113,206,383,'Night Slash',70,15,1,'Attract',0,0,3,'Double Team',0,0,3,'Hail',0,5,3);
		break;
	case "weavile3":
		chgAtk('Pressure','nil',2,'Focus Sash',15,5,281,372,166,113,206,349,'Night Slash',70,15,1,'X-Scissor',80,11,1,'Metal Claw',50,16,1,'Counter',0,6,1);
		break;
	case "weavile4":
		chgAtk('Pressure','nil',23,'Razor Claw',15,5,281,339,166,113,206,383,'Night Slash',70,15,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1,'Brick Break',75,6,1);
		break;
	case "weezing1":
		chgAtk('Levitate','nil',6,10,7,17,271,194,372,269,176,156,'Sludge Bomb',90,7,2,'Dark Pulse',80,15,2,'Shock Wave',60,3,2,'Grudge',0,13,3);
		break;
	case "weezing2":
		chgAtk('Levitate','nil',2,'Sitrus Berry',7,17,271,306,339,185,176,156,'Double Hit',35,0,1,'Payback',60,15,1,'Toxic',0,7,3,'Swagger',0,0,3);
		break;
	case "weezing3":
		chgAtk('Levitate','nil',19,'Lax Incense',7,17,271,216,276,269,262,140,'Sludge Bomb',90,7,2,'Thunderbolt',95,3,2,'Dark Pulse',80,15,2,'Explosion',250,0,1);
		break;
	case "weezing4":
		chgAtk('Levitate','nil',11,'Quick Claw',7,17,271,194,339,295,176,156,'Sludge Bomb',90,7,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Destiny Bond',0,13,3);
		break;
	case "whiscash1":
		chgAtk('Oblivious','Anticipation',11,'Shell Bell',2,8,424,172,182,276,178,156,'Surf',95,2,2,'Earth Power',90,8,2,'Icy Wind',55,5,2,'Amnesia',0,10,3);
		break;
	case "whiscash2":
		chgAtk('Oblivious','Anticipation',2,'Persim Berry',2,8,424,280,182,169,178,156,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Thrash',90,0,1);
		break;
	case "whiscash3":
		chgAtk('Oblivious','Anticipation',11,'Zoom Lens',2,8,424,172,182,276,178,156,'Hydro Pump',120,2,2,'Earth Power',90,8,2,'Blizzard',120,5,2,'Fissure',0,8,3);
		break;
	case "whiscash4":
		chgAtk('Oblivious','Anticipation',2,'Muscle Band',2,8,424,280,182,169,178,156,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Zen Headbutt',80,10,1,'Stone Edge',100,12,1);
		break;
	case "yanmega1":
		chgAtk('Speed Boost','Tinted Lens',21,9,11,9,313,169,208,331,148,317,'Signal Beam',75,11,2,'Air Cutter',55,9,2,'Detect',0,0,3,'Double Team',0,0,3);
		break;
	case "yanmega2":
		chgAtk('Speed Boost','Tinted Lens',2,'Muscle Band',11,9,313,276,208,241,148,289,'Aerial Ace',60,9,1,'U-turn',70,11,1,'Night Slash',70,15,1,'Steel Wing',70,16,1);
		break;
	case "yanmega3":
		chgAtk('Speed Boost','Tinted Lens',11,'Lum Berry',11,9,313,169,208,364,148,289,'Silver Wind',60,11,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2,'Giga Drain',60,4,2);
		break;
	case "yanmega4":
		chgAtk('Speed Boost','Tinted Lens',11,'Wise Glasses',11,9,313,169,208,364,148,289,'Bug Buzz',90,11,2,'Air Slash',75,9,2,'Psychic',90,10,2,'Shadow Ball',80,13,2);
		break;
	case "zapdos1":
		chgAtk('Pressure','nil',20,5,3,9,321,279,206,286,216,299,'Thunder',120,3,2,'Drill Peck',80,9,1,'Thunder Wave',0,3,3,'Rain Dance',0,2,3);
		break;
	case "zapdos2":
		chgAtk('Pressure','nil',21,'Focus Band',3,9,321,194,206,349,216,328,'Thunderbolt',95,3,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2,'Light Screen',0,10,3);
		break;
	case "zapdos3":
		chgAtk('Pressure','nil',23,'Kings Rock',3,9,321,279,206,257,216,328,'Drill Peck',80,9,1,'Twister',40,14,1,'Steel Wing',70,16,1,'U-turn',70,11,1);
		break;
	case "zapdos4":
		chgAtk('Pressure','nil',11,'Brightpowder',3,9,321,194,206,383,216,299,'Thunderbolt',95,3,2,'Air Cutter',55,9,2,'Heat Wave',100,1,2,'Signal Beam',75,11,2);
		break;
	}
}

function chgAtk(abil1,abil2,nature,item,type1,type2,hp,atk,def,spa,spd,spe,move1,bp1,mt1,ps1,move2,bp2,mt2,ps2,move3,bp3,mt3,ps3,move4,bp4,mt4,ps4){
	
	document.dc.ability1.options.length = 0;
	if(abil2=="nil"){
		document.dc.ability1.options.length = 1;
		document.dc.ability1.options[0] = new Option(abil1,abil1);
	}
	else{
		document.dc.ability1.options.length = 2;
		document.dc.ability1.options[0] = new Option(abil1,abil1);
		document.dc.ability1.options[1] = new Option(abil2,abil2);
	}
	
	document.getElementById("nature1").value=nature;
	document.getElementById("item1").value=item;
	document.getElementById("type11").value=type1;
	document.getElementById("type21").value=type2;	
	document.dc.hp1.value=(hp-waveadjust);
	document.dc.atk1.value=(atk-waveadjust);
	document.dc.def1.value=(def-waveadjust);
	document.dc.spa1.value=(spa-waveadjust);
	document.dc.spd1.value=(spd-waveadjust);
	document.dc.spe1.value=(spe-waveadjust);
	document.dc.move11.value=move1;
	document.dc.bp11.value=bp1;
	document.getElementById("mt11").value=mt1;
	document.getElementById("ps11").value=ps1;
	document.dc.move21.value=move2;
	document.dc.bp21.value=bp2;
	document.getElementById("mt21").value=mt2;
	document.getElementById("ps21").value=ps2;
	document.dc.move31.value=move3;
	document.dc.bp31.value=bp3;
	document.getElementById("mt31").value=mt3;
	document.getElementById("ps31").value=ps3;
	document.dc.move41.value=move4;
	document.dc.bp41.value=bp4;
	document.getElementById("mt41").value=mt4;
	document.getElementById("ps41").value=ps4;
	
	document.dc.atks1.value=0;
	document.dc.defs1.value=0;
	document.dc.spas1.value=0;
	document.dc.spds1.value=0;
	document.dc.spes1.value=0;
	
	manageAddedLines();
	
	if((document.getElementById("attacker").value!="")&&(document.getElementById("defender").value!="")){
		damageCalc();
	}
}

function selDef(id){
	switch(id){
	case "abomasnow1":
		chgDef('Snow Warning','nil',16,'Lum Berry',4,5,384,198,186,283,226,156,'Giga Drain',60,4,2,'Ice Beam',95,5,2,'Water Pulse',60,2,2,'GrassWhistle',0,4,3);
		break;
	case "abomasnow2":
		chgDef('Snow Warning','nil',6,'Big Root',4,5,363,198,250,220,248,156,'Giga Drain',60,4,2,'Sheer Cold',0,5,3,'Ingrain',0,4,3,'Leech Seed',0,4,3);
		break;
	case "abomasnow3":
		chgDef('Snow Warning','nil',14,1,4,5,384,220,186,311,206,140,'Energy Ball',80,4,2,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "abomasnow4":
		chgDef('Snow Warning','nil',4,'Shell Bell',4,5,384,311,186,220,206,140,'Wood Hammer',120,4,1,'Avalanche',60,5,1,'Earthquake',100,8,1,'Rock Slide',75,12,1);
		break;
	case "absol1":
		chgDef('Pressure','Super Luck',23,6,15,17,271,359,156,167,156,273,'Sucker Punch',80,15,1,'Facade',70,0,1,'Double Team',0,0,3,'Taunt',0,15,3);
		break;
	case "absol2":
		chgDef('Pressure','Super Luck',2,'Quick Claw',15,17,334,394,156,167,156,186,'Punishment',60,15,1,'Swagger',0,0,3,'Attract',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "absol3":
		chgDef('Pressure','Super Luck',23,'Razor Claw',15,17,271,359,156,167,156,273,'Night Slash',70,15,1,'Psycho Cut',70,10,1,'X-Scissor',80,11,1,'Aerial Ace',60,9,1);
		break;
	case "absol4":
		chgDef('Pressure','Super Luck',2,'Choice Band',15,17,271,394,156,167,156,249,'Night Slash',70,15,1,'Superpower',120,6,1,'Giga Impact',150,0,1,'Zen Headbutt',80,10,1);
		break;
	case "aerodactyl1":
		chgDef('Rock Head','Pressure',23,'Kings Rock',12,9,301,309,166,140,186,394,'Rock Slide',75,12,1,'Aerial Ace',60,9,1,'Torment',0,15,3,'Taunt',0,15,3);
		break;
	case "aerodactyl2":
		chgDef('Rock Head','Pressure',23,'Razor Fang',12,9,301,309,166,140,186,394,'Bite',60,15,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "aerodactyl3":
		chgDef('Rock Head','Pressure',2,5,12,9,301,339,166,140,186,359,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Crunch',80,15,1);
		break;
	case "aerodactyl4":
		chgDef('Rock Head','Pressure',2,'Choice Band',12,9,301,339,166,140,186,359,'Stone Edge',100,12,1,'Aerial Ace',60,9,1,'Earthquake',100,8,1,'Dragon Claw',80,14,1);
		break;
	case "aggron1":
		chgDef('Sturdy','Rock Head',2,'Quick Claw',16,12,281,350,459,140,156,136,'Iron Head',80,16,1,'Rock Slide',75,12,1,'Sandstorm',0,12,3,'Screech',0,0,3);
		break;
	case "aggron2":
		chgDef('Sturdy','Rock Head',2,'Quick Claw',16,12,281,350,459,140,156,136,'Metal Claw',50,16,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "aggron3":
		chgDef('Sturdy','Rock Head',2,'Muscle Band',16,12,281,350,459,140,156,136,'Iron Tail',100,16,1,'Dragon Rush',100,14,1,'Avalanche',60,5,1,'Aerial Ace',60,9,1);
		break;
	case "aggron4":
		chgDef('Sturdy','Rock Head',2,'Focus Sash',16,12,281,350,459,140,156,136,'Metal Burst',0,16,1,'Stone Edge',100,12,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1);
		break;
	case "alakazam1":
		chgDef('Synchronize','Inner Focus',21,'Brightpowder',10,17,251,122,126,369,206,372,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3,'Future Sight',80,10,2);
		break;
	case "alakazam2":
		chgDef('Synchronize','Inner Focus',11,15,10,17,251,122,126,405,206,339,'Psychic',90,10,2,'Focus Blast',120,6,2,'Charge Beam',50,3,2,'Recover',0,0,3);
		break;
	case "alakazam3":
		chgDef('Synchronize','Inner Focus',21,'Wise Glasses',10,17,251,122,126,369,206,372,'Psychic',90,10,2,'Charge Beam',50,3,2,'Signal Beam',75,11,2,'Grass Knot',60,4,2);
		break;
	case "alakazam4":
		chgDef('Synchronize','Inner Focus',11,'Expert Belt',10,17,251,122,126,405,206,339,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2);
		break;
	case "altaria1":
		chgDef('Natural Cure','nil',18,'Chesto Berry',14,9,291,239,216,158,339,196,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,"Dragon Dance",0,14,3,'Rest',0,10,3);
		break;
	case "altaria2":
		chgDef('Natural Cure','nil',11,'Shell Bell',14,9,291,158,216,262,309,196,'Dragon Pulse',90,14,2,'Ominous Wind',60,13,2,'Sing',0,0,3,'Perish Song',0,0,3);
		break;
	case "altaria3":
		chgDef('Natural Cure','nil',2,'Brightpowder',14,9,291,262,216,158,309,196,'Dragon Rush',100,14,1,'Sky Attack',140,9,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "altaria4":
		chgDef('Natural Cure','nil',11,'White Herb',14,9,291,158,216,262,309,196,'Draco Meteor',140,14,2,'Air Cutter',55,9,2,'Flamethrower',95,1,2,'Ice Beam',95,5,2);
		break;
	case "ambipom1":
		chgDef('Technician','Pickup',23,'Muscle Band',0,17,291,299,168,140,168,361,'Double Hit',35,0,1,'Shadow Claw',70,13,1,'Brick Break',75,6,1,'Knock Off',20,15,1);
		break;
	case "ambipom2":
		chgDef('Technician','Pickup',23,'Metronome',0,17,291,299,168,140,168,361,'Last Resort',130,0,1,'Thunder Wave',0,3,3,'Protect',0,0,3,'Fake Out',40,0,1);
		break;
	case "ambipom3":
		chgDef('Technician','Pickup',2,'Life Orb',0,17,291,328,168,140,168,329,'Double Hit',35,0,1,'Gunk Shot',120,7,1,'Seed Bomb',80,4,1,'Aerial Ace',60,9,1);
		break;
	case "ambipom4":
		chgDef('Technician','Pickup',2,'Life Orb',0,17,291,328,168,140,168,329,'Double Hit',35,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "ampharos1":
		chgDef('Static','nil',11,8,3,17,321,167,186,361,279,146,'Thunderbolt',95,3,2,'Power Gem',70,12,2,'Light Screen',0,10,3,'Thunder Wave',0,3,3);
		break;
	case "ampharos2":
		chgDef('Static','nil',18,'Cheri Berry',3,17,321,249,186,239,306,146,'ThunderPunch',75,3,1,'Fire Punch',75,1,1,'Focus Punch',150,6,1,'Thunder Wave',0,3,3);
		break;
	case "ampharos3":
		chgDef('Static','nil',11,'Chesto Berry',3,17,384,167,186,361,216,146,'Charge Beam',50,3,2,'Hyper Beam',150,0,1,'Thunder Wave',0,3,3,'Rest',0,10,3);
		break;
	case "ampharos4":
		chgDef('Static','nil',14,'Zoom Lens',3,17,384,186,186,361,216,131,'Thunder',120,3,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2,'Power Gem',70,12,2);
		break;
	case "arcanine1":
		chgDef('Intimidate','Flash Fire',23,'Lum Berry',1,17,321,319,196,212,196,317,'Fire Fang',65,1,1,'ExtremeSpeed',80,0,1,'Crunch',80,15,1,'Will-O-Wisp',0,1,3);
		break;
	case "arcanine2":
		chgDef('Intimidate','Flash Fire',23,'Salac Berry',1,17,321,319,196,212,196,317,'Flare Blitz',120,1,1,'Thunder Fang',65,3,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "arcanine3":
		chgDef('Intimidate','Flash Fire',11,'White Herb',1,17,321,230,196,328,196,289,'Overheat',140,1,2,'SolarBeam',120,4,2,'Dragon Pulse',90,14,2,'Sunny Day',0,1,3);
		break;
	case "arcanine4":
		chgDef('Intimidate','Flash Fire',2,'Focus Band',1,17,321,350,196,212,196,289,'Flare Blitz',120,1,1,'ExtremeSpeed',80,0,1,'Crunch',80,15,1,'Thunder Fang',65,3,1);
		break;
	case "armaldo1":
		chgDef('Battle Armor','nil',2,'Razor Claw',12,11,291,383,236,158,259,126,'X-Scissor',80,11,1,'Rock Slide',75,12,1,'Earthquake',100,8,1,'Iron Defense',0,16,3);
		break;
	case "armaldo2":
		chgDef('Battle Armor','nil',2,'Scope Lens',12,11,291,383,236,158,259,126,'Crush Claw',75,0,1,'Aqua Tail',90,2,1,'Aerial Ace',60,9,1,'Swagger',0,0,3);
		break;
	case "armaldo3":
		chgDef('Battle Armor','nil',2,'Choice Band',12,11,291,383,299,158,196,126,'Stone Edge',100,12,1,'Superpower',120,6,1,'Earthquake',100,8,1,'Giga Impact',150,0,1);
		break;
	case "armaldo4":
		chgDef('Battle Armor','nil',2,'Life Orb',12,11,291,383,299,158,196,126,'Stone Edge',100,12,1,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Cross Poison',70,7,1);
		break;
	case "articuno1":
		chgDef('Pressure','nil',5,'Icy Rock',5,9,321,269,236,317,286,206,'Blizzard',120,5,2,'Fly',90,9,1,'Roost',0,9,3,'Hail',0,5,3);
		break;
	case "articuno2":
		chgDef('Pressure','nil',4,3,5,9,321,295,299,226,286,185,'Avalanche',60,5,1,'Aerial Ace',60,9,1,'Facade',70,0,1,'Reflect',0,10,3);
		break;
	case "articuno3":
		chgDef('Pressure','nil',11,'Wise Glasses',5,9,321,185,299,317,286,206,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Ominous Wind',60,13,2,'Water Pulse',60,2,2);
		break;
	case "articuno4":
		chgDef('Pressure','nil',11,12,5,9,321,185,236,317,349,206,'Ice Beam',95,5,2,'Air Cutter',55,9,2,'AncientPower',60,12,2,'Sheer Cold',0,5,3);
		break;
	case "bastiodon1":
		chgDef('Sturdy','nil',7,'Focus Band',12,16,261,140,478,117,375,96,'Iron Head',80,16,1,'Stone Edge',100,12,1,'Swagger',0,0,3,'Taunt',0,15,3);
		break;
	case "bastiodon2":
		chgDef('Sturdy','nil',11,'Persim Berry',12,16,324,126,372,212,312,96,'AncientPower',60,12,2,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2);
		break;
	case "bastiodon3":
		chgDef('Sturdy','nil',18,'Leftovers',12,16,324,140,372,117,412,96,'Iron Head',80,16,1,'Fissure',0,8,3,'Double Team',0,0,3,'Iron Defense',0,16,3);
		break;
	case "bastiodon4":
		chgDef('Sturdy','nil',2,'Focus Sash',12,16,324,223,372,117,312,96,'Metal Burst',0,16,1,'Stone Edge',100,12,1,'Avalanche',60,5,1,'Curse',0,0,3);
		break;
	case "blastoise1":
		chgDef('Torrent','nil',11,'Mystic Water',2,17,299,181,278,272,288,192,'Hydro Pump',120,2,2,'Signal Beam',75,11,2,'Icy Wind',55,5,2,'Mirror Coat',0,10,2);
		break;
	case "blastoise2":
		chgDef('Torrent','nil',2,'Shell Bell',2,17,362,291,236,185,246,192,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Double Team',0,0,3,'Aqua Ring',0,2,3);
		break;
	case "blastoise3":
		chgDef('Torrent','nil',2,'Life Orb',2,17,362,291,236,185,246,192,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Avalanche',60,5,1,'Zen Headbutt',80,10,1);
		break;
	case "blastoise4":
		chgDef('Torrent','nil',11,'Shell Bell',2,17,362,181,236,295,246,192,'Hydro Cannon',150,2,2,'Ice Beam',95,5,2,'Hyper Beam',150,0,2,'Focus Blast',120,6,2);
		break;
	case "blaziken1":
		chgDef('Blaze','nil',2,'Salac Berry',1,6,301,372,176,230,176,259,'Blaze Kick',85,1,1,'Reversal',0,6,1,'Aerial Ace',60,9,1,'Endure',0,0,3);
		break;
	case "blaziken2":
		chgDef('Blaze','nil',21,'Brightpowder',1,6,301,248,176,319,176,284,'Blast Burn',150,1,2,'Focus Blast',120,6,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "blaziken3":
		chgDef('Blaze','nil',2,2,1,6,301,372,176,230,176,259,'Blaze Kick',85,1,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1,'Stone Edge',100,12,1);
		break;
	case "blaziken4":
		chgDef('Blaze','nil',2,'White Herb',1,6,301,372,176,230,176,259,'Flare Blitz',120,1,1,'Superpower',120,6,1,'ThunderPunch',75,3,1,'Night Slash',70,15,1);
		break;
	case "blissey1":
		chgDef('Natural Cure','Serene Grace',11,6,0,17,714,50,56,273,306,146,'Hyper Beam',150,0,2,'Shadow Ball',80,13,2,'Water Pulse',60,2,2,'Sing',0,0,3);
		break;
	case "blissey2":
		chgDef('Natural Cure','Serene Grace',16,'Chesto Berry',0,17,714,50,56,186,405,146,'Toxic',0,7,3,'Double Team',0,0,3,'Softboiled',0,0,3,'Counter',0,6,1);
		break;
	case "blissey3":
		chgDef('Natural Cure','Serene Grace',11,'Brightpowder',0,17,714,50,56,273,306,146,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Calm Mind',0,10,3);
		break;
	case "blissey4":
		chgDef('Natural Cure','Serene Grace',16,'Leftovers',0,17,714,50,56,186,405,146,'Dream Eater',100,10,2,'Sing',0,0,3,'Softboiled',0,0,3,'Counter',0,6,1);
		break;
	case "breloom1":
		chgDef('Effect Spore','Poison Heal',7,'Focus Sash',4,6,261,359,284,140,156,176,'Seed Bomb',80,4,1,'Sky Uppercut',85,6,1,'Rock Slide',75,12,1,'Counter',0,6,1);
		break;
	case "breloom2":
		chgDef('Effect Spore','Poison Heal',4,'Big Root',4,6,261,394,196,219,156,158,'Drain Punch',60,6,1,'Giga Drain',60,4,2,'Synthesis',0,4,3,'Leech Seed',0,4,3);
		break;
	case "breloom3":
		chgDef('Effect Spore','Poison Heal',2,'Toxic Orb',4,6,261,394,259,140,156,176,'DynamicPunch',100,6,1,'ThunderPunch',75,3,1,'Stone Edge',100,12,1,'Facade',70,0,1);
		break;
	case "breloom4":
		chgDef('Effect Spore','Poison Heal',2,'Shell Bell',4,6,261,394,259,140,156,176,'Focus Punch',150,6,1,'Seed Bomb',80,4,1,'Giga Impact',150,0,1,'Spore',0,4,3);
		break;
	case "bronzong1":
		chgDef('Levitate','Heatproof',7,'Kings Rock',16,10,275,214,364,174,331,102,'Extrasensory',80,10,2,'Iron Head',80,16,1,'Rock Slide',75,12,1,'Trick Room',0,10,3);
		break;
	case "bronzong2":
		chgDef('Levitate','Heatproof',16,'Lum Berry',16,10,275,192,331,194,364,102,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Signal Beam',75,11,2,'Trick Room',0,10,3);
		break;
	case "bronzong3":
		chgDef('Levitate','Heatproof',11,'Leftovers',16,10,338,192,268,282,268,102,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Charge Beam',50,3,2,'Signal Beam',75,11,2);
		break;
	case "bronzong4":
		chgDef('Levitate','Heatproof',2,'Quick Claw',16,10,338,304,268,174,268,102,'Zen Headbutt',80,10,1,'Iron Head',80,16,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "charizard1":
		chgDef('Blaze','nil',11,'Petaya Berry',1,9,297,183,192,348,206,299,'Flamethrower',95,1,2,'Air Slash',75,9,2,'Smokescreen',0,0,3,'Scary Face',0,0,3);
		break;
	case "charizard2":
		chgDef('Blaze','nil',11,'White Herb',1,9,297,183,192,348,206,299,'Overheat',140,1,2,'SolarBeam',120,4,2,'Will-O-Wisp',0,1,3,'Sunny Day',0,1,3);
		break;
	case "charizard3":
		chgDef('Blaze','nil',2,'Scope Lens',1,9,297,293,192,228,206,299,'Flare Blitz',120,1,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Dragon Claw',80,14,1);
		break;
	case "charizard4":
		chgDef('Blaze','nil',21,'Brightpowder',1,9,297,183,192,317,206,328,'Blast Burn',150,1,2,'Air Slash',75,9,2,'Focus Blast',120,6,2,'AncientPower',60,12,2);
		break;
	case "claydol1":
		chgDef('Levitate','nil',4,13,8,10,261,193,309,176,339,167,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Grass Knot',60,4,2,'Trick Room',0,10,3);
		break;
	case "claydol2":
		chgDef('Levitate','nil',11,4,8,10,261,158,309,262,276,186,'Earth Power',90,8,2,'AncientPower',60,12,2,'Signal Beam',75,11,2,'Shadow Ball',80,13,2);
		break;
	case "claydol3":
		chgDef('Levitate','nil',11,'Wise Glasses',8,10,261,158,246,262,339,186,'Earth Power',90,8,2,'Psychic',90,10,2,'Charge Beam',50,3,2,'Ice Beam',95,5,2);
		break;
	case "claydol4":
		chgDef('Levitate','nil',2,'Lax Incense',8,10,261,262,246,158,339,186,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Rock Slide',75,12,1,'Explosion',250,0,1);
		break;
	case "cradily1":
		chgDef('Suction Cups','nil',7,'Razor Claw',12,4,355,198,299,178,292,122,'AncientPower',60,12,2,'Energy Ball',80,4,2,'Confuse Ray',0,13,3,'Sandstorm',0,12,3);
		break;
	case "cradily2":
		chgDef('Suction Cups','nil',7,'Leftovers',12,4,355,198,299,178,292,122,'Toxic',0,7,3,'Stockpile',0,0,3,'Double Team',0,0,3,'Ingrain',0,4,3);
		break;
	case "cradily3":
		chgDef('Suction Cups','nil',16,'Big Root',12,4,355,178,272,198,321,122,'Giga Drain',60,4,2,'Sludge Bomb',90,7,2,'Recover',0,0,3,'Ingrain',0,4,3);
		break;
	case "cradily4":
		chgDef('Suction Cups','nil',16,'Leftovers',12,4,355,178,272,198,321,122,'Stone Edge',100,12,1,'Seed Bomb',80,4,1,'Earthquake',100,8,1,'Mirror Coat',0,10,3);
		break;
	case "cresselia1":
		chgDef('Levitate','nil',6,'Heat Rock',10,17,381,158,372,186,359,206,'Psychic',90,10,2,'SolarBeam',120,4,2,'Moonlight',0,0,3,'Sunny Day',0,1,3);
		break;
	case "cresselia2":
		chgDef('Levitate','nil',6,'Lum Berry',10,17,423,158,349,186,338,206,'Psychic',90,10,2,'Toxic',0,7,3,'Double Team',0,0,3,'Moonlight',0,0,3);
		break;
	case "cresselia3":
		chgDef('Levitate','nil',11,'Wise Glasses',10,17,444,158,276,273,296,206,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Charge Beam',50,3,2);
		break;
	case "cresselia4":
		chgDef('Levitate','nil',11,'Leftovers',10,17,423,158,318,204,338,206,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Moonlight',0,0,3);
		break;
	case "crobat1":
		chgDef('Inner Focus','nil',23,10,7,9,311,279,196,158,196,394,'Cross Poison',70,7,1,'Aerial Ace',60,9,1,'Roost',0,9,3,'Hypnosis',0,10,3);
		break;
	case "crobat2":
		chgDef('Inner Focus','nil',0,'Razor Fang',7,9,311,279,196,176,196,359,'Air Slash',75,9,2,'Zen Headbutt',80,10,1,'Bite',60,15,1,'Twister',40,14,2);
		break;
	case "crobat3":
		chgDef('Inner Focus','nil',11,'Kings Rock',7,9,311,194,196,262,196,359,'Air Slash',75,9,2,'Sludge Bomb',90,7,2,'Heat Wave',100,1,2,'Dark Pulse',80,15,2);
		break;
	case "crobat4":
		chgDef('Inner Focus','nil',2,'Razor Claw',7,9,311,306,196,158,196,359,'Cross Poison',70,7,1,'Brave Bird',120,9,1,'X-Scissor',80,11,1,'Zen Headbutt',80,10,1);
		break;
	case "dewgong1":
		chgDef('Thick Fat','Hydration',18,'Razor Fang',2,5,321,239,196,158,317,176,'Waterfall',80,2,1,'Avalanche',60,5,1,'Headbutt',70,0,1,'Fake Out',40,0,1);
		break;
	case "dewgong2":
		chgDef('Thick Fat','Hydration',16,3,2,5,321,158,196,239,317,176,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Encore',0,0,3,'Disable',0,0,3);
		break;
	case "dewgong3":
		chgDef('Thick Fat','Hydration',16,'Salac Berry',2,5,321,158,238,176,294,176,'Sheer Cold',0,5,3,'Horn Drill',0,0,3,'Rest',0,10,3,'Sleep Talk',0,0,3);
		break;
	case "dewgong4":
		chgDef('Thick Fat','Hydration',16,'Chesto Berry',2,5,321,158,196,239,317,176,'Surf',95,2,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Rest',0,10,3);
		break;
	case "donphan1":
		chgDef('Sturdy','nil',7,'Razor Claw',8,17,321,339,372,140,156,136,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Poison Jab',80,7,1,'Sandstorm',0,12,3);
		break;
	case "donphan2":
		chgDef('Sturdy','nil',2,'White Herb',8,17,321,372,339,140,156,136,'Earthquake',100,8,1,'Superpower',120,6,1,'Gunk Shot',120,7,1,'Counter',0,6,1);
		break;
	case "donphan3":
		chgDef('Sturdy','nil',4,'Lax Incense',8,17,321,372,339,156,156,122,'Earthquake',100,8,1,'Gyro Ball',0,16,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1);
		break;
	case "donphan4":
		chgDef('Sturdy','nil',2,'Quick Claw',8,17,321,372,339,140,156,136,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Seed Bomb',80,4,1,'Fissure',0,8,3);
		break;
	case "dragonite1":
		chgDef('Inner Focus','nil',2,'Lum Berry',14,9,323,403,226,212,299,196,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,'Thunder Wave',0,3,3,'Dragon Dance',0,14,3);
		break;
	case "dragonite2":
		chgDef('Inner Focus','nil',2,'Razor Claw',14,9,323,403,289,212,236,196,'Dragon Rush',100,14,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "dragonite3":
		chgDef('Inner Focus','nil',11,'Expert Belt',14,9,323,273,289,328,236,196,'Draco Meteor',140,14,2,'Flamethrower',95,1,2,'Thunderbolt',95,3,2,'Surf',95,2,2);
		break;
	case "dragonite4":
		chgDef('Inner Focus','nil',2,'Choice Band',14,9,323,403,226,212,299,196,'Outrage',120,14,1,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Superpower',120,6,1);
		break;
	case "drapion1":
		chgDef('Battle Armor','Sniper',2,'Lum Berry',7,15,281,306,319,140,186,226,'Poison Jab',80,7,1,'Crunch',80,15,1,'Aqua Tail',90,2,1,'Acupressure',0,0,3);
		break;
	case "drapion2":
		chgDef('Battle Armor','Sniper',2,'Iron Ball',7,15,281,306,319,140,186,226,'Payback',60,15,1,'Poison Jab',80,7,1,'Fling',130,15,1,'Knock Off',20,15,1);
		break;
	case "drapion3":
		chgDef('Battle Armor','Sniper',23,'Scope Lens',7,15,281,279,256,140,186,317,'Cross Poison',70,7,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "drapion4":
		chgDef('Battle Armor','Sniper',2,'Razor Claw',7,15,281,306,256,140,186,289,'Cross Poison',70,7,1,'Night Slash',70,15,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "drifblim1":
		chgDef('Aftermath','Unburden',11,'Salac Berry',13,9,504,176,124,306,144,196,'Ominous Wind',60,13,2,'Air Cutter',55,9,2,'Baton Pass',0,0,3,'Endure',0,0,3);
		break;
	case "drifblim2":
		chgDef('Aftermath','Unburden',2,'Black Sludge',13,9,504,284,124,194,144,196,'Payback',60,15,1,'Facade',70,0,1,'Will-O-Wisp',0,1,3,'Trick',0,10,3);
		break;
	case "drifblim3":
		chgDef('Aftermath','Unburden',11,'Wise Glasses',13,9,504,176,124,306,144,196,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Icy Wind',55,5,2,'Destiny Bond',0,13,3);
		break;
	case "drifblim4":
		chgDef('Aftermath','Unburden',5,'Lax Incense',13,9,504,259,124,216,144,196,'Shadow Ball',80,13,2,'Air Cutter',55,9,2,'Silver Wind',60,11,2,'Explosion',250,0,1);
		break;
	case "dugtrio1":
		chgDef('Sand Veil','Arena Trap',23,'Grip Claw',8,17,211,259,136,122,176,372,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Astonish',30,13,1,'Sand Tomb',15,8,1);
		break;
	case "dugtrio2":
		chgDef('Sand Veil','Arena Trap',11,'Lax Incense',8,17,211,176,136,218,176,339,'Earth Power',90,8,2,'Sludge Bomb',90,7,2,'Tri Attack',80,0,2,'Sandstorm',0,12,3);
		break;
	case "dugtrio3":
		chgDef('Sand Veil','Arena Trap',23,'Razor Claw',8,17,211,259,136,122,176,372,'Fissure',0,8,3,'Giga Impact',150,0,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1);
		break;
	case "dugtrio4":
		chgDef('Sand Veil','Arena Trap',2,'Muscle Band',8,17,211,284,136,122,176,339,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Slash',70,0,1,'Shadow Claw',70,13,1);
		break;
	case "dusknoir1":
		chgDef('Pressure','nil',4,'Iron Ball',13,17,231,328,369,166,306,113,'Shadow Punch',60,13,1,'Fling',130,15,1,'Will-O-Wisp',0,1,3,'Trick Room',0,10,3);
		break;
	case "dusknoir2":
		chgDef('Pressure','nil',18,'Leftovers',13,17,231,236,369,149,405,126,'Curse',0,13,3,'Pain Split',0,0,3,'Confuse Ray',0,13,3,'Attract',0,0,3);
		break;
	case "dusknoir3":
		chgDef('Pressure','nil',2,'Scope Lens',13,17,231,328,306,149,369,126,'Shadow Punch',60,13,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "dusknoir4":
		chgDef('Pressure','nil',2,'Muscle Band',13,17,231,259,369,149,369,126,'Shadow Punch',60,13,1,'Earthquake',100,8,1,'Brick Break',75,6,1,'Rock Slide',75,12,1);
		break;
	case "electivire1":
		chgDef('Motor Drive','nil',23,'Scope Lens',3,17,291,345,170,203,206,317,'ThunderPunch',75,3,1,'Cross Chop',100,6,1,'Thunder Wave',0,3,3,'Screech',0,0,3);
		break;
	case "electivire2":
		chgDef('Motor Drive','nil',15,'Wide Lens',3,17,291,345,170,289,206,226,'Thunder',120,3,2,'DynamicPunch',100,6,1,'Rock Slide',75,12,1,'Iron Tail',100,16,1);
		break;
	case "electivire3":
		chgDef('Motor Drive','nil',11,'Wise Glasses',3,17,291,253,170,317,206,289,'Thunderbolt',95,3,2,'Psychic',90,10,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2);
		break;
	case "electivire4":
		chgDef('Motor Drive','nil',2,8,3,17,291,379,170,203,206,289,'ThunderPunch',75,3,1,'Fire Punch',75,1,1,'Ice Punch',75,5,1,'Earthquake',100,8,1);
		break;
	case "electrode1":
		chgDef('Soundproof','Static',11,'Chesto Berry',3,17,261,122,176,284,196,379,'Thunderbolt',95,3,2,'Swift',60,0,2,'Thunder Wave',0,3,3,'Light Screen',0,10,3);
		break;
	case "electrode2":
		chgDef('Soundproof','Static',21,'Brightpowder',3,17,261,122,176,259,196,416,'Charge Beam',50,3,2,'Thunder Wave',0,3,3,'Flash',0,0,3,'Swagger',0,0,3);
		break;
	case "electrode3":
		chgDef('Soundproof','Static',21,'Damp Rock',3,17,261,122,176,259,196,416,'Thunder',120,3,2,'Hyper Beam',150,0,2,'Magnet Rise',0,3,3,'Rain Dance',0,2,3);
		break;
	case "electrode4":
		chgDef('Soundproof','Static',15,'Focus Sash',3,17,261,136,176,259,196,379,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Explosion',250,0,1,'Mirror Coat',0,10,3);
		break;
	case "empoleon1":
		chgDef('Torrent','nil',2,'Razor Claw',2,16,309,298,212,232,301,156,'Waterfall',80,2,1,'Metal Claw',50,16,1,'Brick Break',75,6,1,'Knock Off',20,15,1);
		break;
	case "empoleon2":
		chgDef('Torrent','nil',2,'Razor Claw',2,16,309,298,212,232,301,156,'Drill Peck',80,9,1,'Aqua Jet',40,2,1,'Shadow Claw',70,13,1,'Rock Slide',75,12,1);
		break;
	case "empoleon3":
		chgDef('Torrent','nil',4,'Quick Claw',2,16,309,298,212,321,238,140,'Surf',95,2,2,'Earthquake',100,8,1,'Blizzard',120,5,2,'Signal Beam',75,11,2);
		break;
	case "empoleon4":
		chgDef('Torrent','nil',4,'Quick Claw',2,16,309,298,212,321,238,140,'Hydro Cannon',150,2,2,'Flash Cannon',80,16,2,'Drill Peck',80,9,1,'Earthquake',100,8,1);
		break;
	case "entei1":
		chgDef('Pressure','nil',23,8,1,17,371,329,206,194,186,328,'Fire Fang',65,1,1,'Return',102,0,1,'Roar',0,0,3,'Reflect',0,10,3);
		break;
	case "entei2":
		chgDef('Pressure','nil',23,'Kings Rock',1,17,371,329,206,194,186,328,'Fire Fang',65,1,1,'Bite',60,15,1,'Iron Head',80,16,1,'Stone Edge',100,12,1);
		break;
	case "entei3":
		chgDef('Pressure','nil',11,8,1,17,371,239,206,306,186,299,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Sunny Day',0,1,3);
		break;
	case "entei4":
		chgDef('Pressure','nil',11,8,1,17,371,239,206,306,186,299,'Overheat',140,1,2,'Extrasensory',80,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "espeon1":
		chgDef('Synchronize','nil',21,'Lum Berry',10,17,271,149,156,359,226,350,'Psychic',90,10,2,'Reflect',0,10,3,'Calm Mind',0,10,3,'Baton Pass',0,0,3);
		break;
	case "espeon2":
		chgDef('Synchronize','nil',21,'Brightpowder',10,17,271,149,156,359,226,350,'Psychic',90,10,2,'Swift',60,0,2,'Charm',0,0,3,'Attract',0,0,3);
		break;
	case "espeon3":
		chgDef('Synchronize','nil',11,'Lum Berry',10,17,271,149,156,394,226,319,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Hyper Beam',150,0,2,'Grass Knot',60,4,2);
		break;
	case "espeon4":
		chgDef('Synchronize','nil',11,'Wise Glasses',10,17,271,149,156,394,226,319,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Morning Sun',0,0,3);
		break;
	case "exeggutor1":
		chgDef('Chlorophyll','nil',11,'Brightpowder',4,10,394,203,206,383,166,146,'SolarBeam',120,4,2,'Psychic',90,10,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "exeggutor2":
		chgDef('Chlorophyll','nil',11,'Lum Berry',4,10,394,203,206,383,166,146,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Leech Seed',0,4,3,'Ingrain',0,4,3);
		break;
	case "exeggutor3":
		chgDef('Chlorophyll','nil',4,'Focus Sash',4,10,394,317,206,286,166,131,'Wood Hammer',120,4,1,'Zen Headbutt',80,10,1,'Trick Room',0,10,3,'Explosion',250,0,1);
		break;
	case "exeggutor4":
		chgDef('Chlorophyll','nil',11,'Expert Belt',4,10,394,203,206,383,166,146,'Leaf Storm',140,4,2,'Psychic',90,10,2,'Sludge Bomb',90,7,2,'AncientPower',60,12,2);
		break;
	case "exploud1":
		chgDef('Soundproof','nil',11,6,0,17,412,196,162,309,162,172,'Hyper Voice',90,0,2,'Extrasensory',80,10,2,'Water Pulse',60,2,2,'Torment',0,15,3);
		break;
	case "exploud2":
		chgDef('Soundproof','nil',2,'Life Orb',0,17,412,309,162,196,162,172,'Facade',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "exploud3":
		chgDef('Soundproof','nil',2,'Life Orb',0,17,412,309,162,196,162,172,'Facade',70,0,1,'Earthquake',100,8,1,'Avalanche',60,5,1,'Crunch',80,15,1);
		break;
	case "exploud4":
		chgDef('Soundproof','nil',11,'White Herb',0,17,412,196,162,309,162,172,'Hyper Voice',90,0,2,'Overheat',140,1,2,'Surf',95,2,2,'Ice Beam',95,5,2);
		break;
	case "feraligatr1":
		chgDef('Torrent','nil',2,'Kings Rock',2,17,331,339,299,174,202,192,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Rock Slide',75,12,1,'Scary Face',0,0,3);
		break;
	case "feraligatr2":
		chgDef('Torrent','nil',2,'White Herb',2,17,331,339,299,174,202,192,'Aqua Tail',90,2,1,'Superpower',120,6,1,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1);
		break;
	case "feraligatr3":
		chgDef('Torrent','nil',11,'Wise Glasses',2,17,331,221,299,282,202,192,'Hydro Cannon',150,2,2,'Ice Beam',95,5,2,'Focus Blast',120,6,2,'AncientPower',60,12,2);
		break;
	case "feraligatr4":
		chgDef('Torrent','nil',2,'Lum Berry',2,17,331,339,299,174,202,192,'Waterfall',80,2,1,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Dragon Dance',0,14,3);
		break;
	case "flareon1":
		chgDef('Flash Fire','nil',2,'Quick Claw',1,17,271,394,156,203,319,166,'Fire Fang',65,1,1,'Superpower',120,6,1,'Curse',0,0,3,'Baton Pass',0,0,3);
		break;
	case "flareon2":
		chgDef('Flash Fire','nil',23,'Salac Berry',1,17,271,359,156,203,256,251,'Fire Fang',65,1,1,'Flail',0,0,1,'Endure',0,0,3,'Sand-Attack',0,8,3);
		break;
	case "flareon3":
		chgDef('Flash Fire','nil',11,'White Herb',1,17,271,266,156,317,319,166,'Overheat',140,1,2,'Shadow Ball',80,13,2,'Mud-Slap',20,8,2,'Will-O-Wisp',0,1,3);
		break;
	case "flareon4":
		chgDef('Flash Fire','nil',2,'White Herb',1,17,271,394,156,203,319,166,'Fire Fang',65,1,1,'Giga Impact',150,0,1,'Superpower',120,6,1,'Bite',60,15,1);
		break;
	case "floatzel1":
		chgDef('Swift Swim','nil',23,'Sitrus Berry',2,17,311,309,146,185,136,361,'Waterfall',80,2,1,'Ice Punch',75,5,1,'Quick Attack',40,0,1,'Rain Dance',0,2,3);
		break;
	case "floatzel2":
		chgDef('Swift Swim','nil',23,'Chesto Berry',2,17,311,309,146,185,136,361,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Double Team',0,0,3,'Attract',0,0,3);
		break;
	case "floatzel3":
		chgDef('Swift Swim','nil',11,'Wave Incense',2,17,311,221,146,295,136,329,'Surf',95,2,2,'Ice Beam',95,5,2,'Focus Blast',120,6,2,'Rain Dance',0,2,3);
		break;
	case "floatzel4":
		chgDef('Swift Swim','nil',2,'Razor Fang',2,17,311,339,146,185,136,329,'Aqua Tail',90,2,1,'Ice Fang',65,5,1,'Crunch',80,15,1,'Brick Break',75,6,1);
		break;
	case "flygon1":
		chgDef('Levitate','nil',2,5,8,14,301,328,196,176,196,299,'Earthquake',100,8,1,'Dragon Claw',80,14,1,'Roost',0,9,3,'Sandstorm',0,12,3);
		break;
	case "flygon2":
		chgDef('Levitate','nil',23,'Razor Fang',8,14,301,299,196,176,196,328,'Fissure',0,8,3,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Aerial Ace',60,9,1);
		break;
	case "flygon3":
		chgDef('Levitate','nil',21,'White Herb',8,14,301,212,196,259,196,328,'Draco Meteor',140,14,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Giga Drain',60,4,2);
		break;
	case "flygon4":
		chgDef('Levitate','nil',2,'Lum Berry',8,14,301,328,196,176,196,299,'Earthquake',100,8,1,'Outrage',120,14,1,'Crunch',80,15,1,'Stone Edge',100,12,1);
		break;
	case "forretress1":
		chgDef('Sturdy','nil',4,1,11,16,291,306,379,156,156,104,'Gyro Ball',0,16,1,'Bug Bite',60,11,1,'Revenge',60,6,1,'Counter',0,6,1);
		break;
	case "forretress2":
		chgDef('Sturdy','nil',4,'Sitrus Berry',11,16,291,306,379,156,156,104,'Payback',60,15,1,'Stealth Rock',0,12,3,'Toxic Spikes',0,7,3,'Spikes',0,8,3);
		break;
	case "forretress3":
		chgDef('Sturdy','nil',2,'Leftovers',11,16,291,306,379,140,156,116,'Dig',80,8,1,'Swagger',0,0,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "forretress4":
		chgDef('Sturdy','nil',2,'Lax Incense',11,16,291,306,379,140,156,116,'Explosion',250,0,1,'Double-Edge',120,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1);
		break;
	case "froslass1":
		chgDef('Snow Cloak','nil',21,'Cheri Berry',5,13,281,176,176,259,176,350,'Ice Beam',95,5,2,'Ominous Wind',60,13,2,'Confuse Ray',0,13,3,'Attract',0,0,3);
		break;
	case "froslass2":
		chgDef('Snow Cloak','nil',2,'Focus Band',5,13,281,284,176,176,176,319,'Ice Punch',75,5,1,'Sucker Punch',80,15,1,'Swagger',0,0,3,'Psych Up',0,0,3);
		break;
	case "froslass3":
		chgDef('Snow Cloak','nil',11,'Expert Belt',5,13,281,176,176,284,176,319,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Destiny Bond',0,13,3);
		break;
	case "froslass4":
		chgDef('Snow Cloak','nil',11,'Lax Incense',5,13,281,176,176,284,176,319,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Psychic',90,10,2,'Hail',0,5,3);
		break;
	case "gallade1":
		chgDef('Steadfast','nil',18,13,10,6,277,349,166,149,361,196,'Zen Headbutt',80,10,1,'Brick Break',75,6,1,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "gallade2":
		chgDef('Steadfast','nil',23,'Brightpowder',10,6,277,349,166,149,266,284,'Drain Punch',60,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "gallade3":
		chgDef('Steadfast','nil',2,'Scope Lens',10,6,277,383,166,149,329,196,'Psycho Cut',70,10,1,'Stone Edge',100,12,1,'Aerial Ace',60,9,1,'X-Scissor',80,11,1);
		break;
	case "gallade4":
		chgDef('Steadfast','nil',2,'Scope Lens',10,6,277,383,166,149,329,196,'Psycho Cut',70,10,1,'Close Combat',120,6,1,'Leaf Blade',90,4,1,'Night Slash',70,15,1);
		break;
	case "garchomp1":
		chgDef('Sand Veil','nil',23,'Brightpowder',14,8,357,359,226,176,206,333,'Dragon Claw',80,14,1,'Earthquake',100,8,1,'Double Team',0,0,3,'Sandstorm',0,12,3);
		break;
	case "garchomp2":
		chgDef('Sand Veil','nil',11,'White Herb',14,8,357,266,226,284,206,303,'Draco Meteor',140,14,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Surf',95,2,2);
		break;
	case "garchomp3":
		chgDef('Sand Veil','nil',2,'Focus Sash',14,8,357,394,226,176,206,303,'Dragon Rush',100,14,1,'Stone Edge',100,12,1,'Aqua Tail',90,2,1,'Aerial Ace',60,9,1);
		break;
	case "garchomp4":
		chgDef('Sand Veil','nil',2,'Persim Berry',14,8,357,394,226,176,206,303,'Outrage',120,14,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Fire Fang',65,1,1);
		break;
	case "gardevoir1":
		chgDef('Synchronize','Trace',16,'Lum Berry',10,17,277,149,166,349,361,196,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "gardevoir2":
		chgDef('Synchronize','Trace',11,'Chesto Berry',10,17,277,149,166,383,329,196,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Calm Mind',0,10,3,'Rest',0,10,3);
		break;
	case "gardevoir3":
		chgDef('Synchronize','Trace',11,'Brightpowder',10,17,277,149,166,383,329,196,'Psychic',90,10,2,'Charge Beam',50,3,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2);
		break;
	case "gardevoir4":
		chgDef('Synchronize','Trace',21,'Wise Glasses',10,17,277,149,166,329,266,284,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2,'Destiny Bond',0,13,3);
		break;
	case "gastrodon1":
		chgDef('Sticky Hold','Storm Drain',18,'Focus Sash',2,8,426,202,172,198,289,114,'Waterfall',80,2,1,'Earthquake',100,8,1,'Recover',0,0,3,'Mirror Coat',0,10,3);
		break;
	case "gastrodon2":
		chgDef('Sticky Hold','Storm Drain',19,'Zoom Lens',2,8,363,202,172,283,289,102,'Muddy Water',95,2,2,'Mud Bomb',65,8,2,'Recover',0,0,3,'Yawn',0,0,3);
		break;
	case "gastrodon3":
		chgDef('Sticky Hold','Storm Drain',2,'Shell Bell',2,8,426,291,172,198,200,114,'Waterfall',80,2,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Fissure',0,8,3);
		break;
	case "gastrodon4":
		chgDef('Sticky Hold','Storm Drain',11,'Wise Glasses',2,8,426,181,172,311,200,114,'Surf',95,2,2,'Earth Power',90,8,2,'Ice Beam',95,5,2,'Sludge Bomb',90,7,2);
		break;
	case "gengar1":
		chgDef('Levitate','nil',21,10,13,7,261,149,156,359,186,350,'Shadow Ball',80,13,2,'Sludge Bomb',90,7,2,'Spite',0,13,3,'Confuse Ray',0,13,3);
		break;
	case "gengar2":
		chgDef('Levitate','nil',11,'Life Orb',13,7,261,149,156,394,186,319,'Shadow Ball',80,13,2,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Substitute',0,0,3);
		break;
	case "gengar3":
		chgDef('Levitate','nil',11,'Scope Lens',13,7,261,149,156,394,186,319,'Psychic',90,10,2,'Energy Ball',80,4,2,'Focus Blast',120,6,2,'Confuse Ray',0,13,3);
		break;
	case "gengar4":
		chgDef('Levitate','nil',11,'Lum Berry',13,7,261,149,156,394,186,319,'Shadow Ball',80,13,2,'Sludge Bomb',90,7,2,'Thunderbolt',95,3,2,'Destiny Bond',0,13,3);
		break;
	case "glaceon1":
		chgDef('Snow Cloak','nil',16,'Lax Incense',5,17,271,140,256,359,317,166,'Ice Beam',95,5,2,'Water Pulse',60,2,2,'Double Team',0,3,3,'Baton Pass',0,3,3);
		break;
	case "glaceon2":
		chgDef('Snow Cloak','nil',16,'Leftovers',5,17,271,140,256,359,317,166,'Ice Beam',95,5,2,'Double Team',0,3,3,'Yawn',0,3,3,'Hail',0,5,3);
		break;
	case "glaceon3":
		chgDef('Snow Cloak','nil',11,'Focus Sash',5,17,271,140,319,394,226,166,'Blizzard',120,5,2,'Hyper Beam',150,0,2,'Hail',0,5,3,'Mirror Coat',0,10,3);
		break;
	case "glaceon4":
		chgDef('Snow Cloak','nil',11,'Wise Glasses',5,17,271,140,319,394,226,166,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Water Pulse',60,2,2);
		break;
	case "glalie1":
		chgDef('Inner Focus','Ice Body',4,'Iron Ball',5,17,343,215,238,196,238,176,'Avalanche',60,5,1,'Payback',60,15,1,'Gyro Ball',0,16,1,'Ice Shard',40,5,1);
		break;
	case "glalie2":
		chgDef('Inner Focus','Ice Body',2,'Lum Berry',5,17,364,284,196,176,196,196,'Ice Fang',65,5,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "glalie3":
		chgDef('Inner Focus','Ice Body',11,'Scope Lens',5,17,364,176,196,284,196,196,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Water Pulse',60,2,2);
		break;
	case "glalie4":
		chgDef('Inner Focus','Ice Body',11,'Lax Incense',5,17,364,176,196,284,196,196,'Blizzard',120,5,2,'Dark Pulse',80,15,2,'Sheer Cold',0,5,3,'Hail',0,5,3);
		break;
	case "gliscor1":
		chgDef('Hyper Cutter','Sand Veil',2,5,8,9,291,317,349,113,186,226,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'Swords Dance',0,0,3,'Baton Pass',0,0,3);
		break;
	case "gliscor2":
		chgDef('Hyper Cutter','Sand Veil',23,'Razor Fang',8,9,291,289,286,113,186,317,'Earthquake',100,8,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "gliscor3":
		chgDef('Hyper Cutter','Sand Veil',23,'Focus Sash',8,9,354,226,286,113,186,317,'Guillotine',0,0,3,'Earthquake',100,8,1,'U-turn',70,11,1,'Counter',0,6,1);
		break;
	case "gliscor4":
		chgDef('Hyper Cutter','Sand Veil',2,'Expert Belt',8,9,291,317,349,113,186,226,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'X-Scissor',80,11,1,'Stone Edge',100,12,1);
		break;
	case "golduck1":
		chgDef('Damp','Cloud Nine',11,4,2,17,364,180,192,317,196,206,'Surf',95,2,2,'Psychic',90,10,2,'Confuse Ray',0,13,3,'Calm Mind',0,10,3);
		break;
	case "golduck2":
		chgDef('Damp','Cloud Nine',2,'Shell Bell',2,17,301,289,192,203,196,269,'Waterfall',80,2,1,'Mud Bomb',65,8,2,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1);
		break;
	case "golduck3":
		chgDef('Damp','Cloud Nine',2,'Scope Lens',2,17,364,289,192,203,196,206,'Aqua Tail',90,2,1,'Cross Chop',100,6,1,'Ice Punch',75,5,1,'Zen Headbutt',80,10,1);
		break;
	case "golduck4":
		chgDef('Damp','Cloud Nine',11,3,2,17,364,180,192,317,196,206,'Hydro Pump',120,2,2,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2);
		break;
	case "golem1":
		chgDef('Rock Head','Sturdy',7,'Focus Band',12,8,301,319,394,131,166,126,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Sucker Punch',80,15,1,'Sandstorm',0,8,1);
		break;
	case "golem2":
		chgDef('Rock Head','Sturdy',2,'White Herb',12,8,301,350,359,131,166,126,'Earthquake',100,8,1,'Superpower',120,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1);
		break;
	case "golem3":
		chgDef('Rock Head','Sturdy',4,'Iron Ball',12,8,301,350,359,146,166,113,'Gyro Ball',0,16,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Fling',130,15,1);
		break;
	case "golem4":
		chgDef('Rock Head','Sturdy',4,'Quick Claw',12,8,301,350,359,146,166,113,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Gyro Ball',0,16,1,'Explosion',250,0,1);
		break;
	case "granbull1":
		chgDef('Intimidate','Quick Feet',2,'Razor Claw',0,17,384,372,186,140,156,126,'Return',102,0,1,'Rock Slide',75,12,1,'Crunch',80,15,1,'Thunder Wave',0,3,3);
		break;
	case "granbull2":
		chgDef('Intimidate','Quick Feet',2,'Quick Claw',0,17,384,372,186,140,156,126,'Facade',70,0,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "granbull3":
		chgDef('Intimidate','Quick Feet',2,'Muscle Band',0,17,384,372,186,140,156,126,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Payback',60,15,1);
		break;
	case "granbull4":
		chgDef('Intimidate','Quick Feet',2,'Life Orb',0,17,384,372,186,140,156,126,'Giga Impact',150,0,1,'Close Combat',120,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1);
		break;
	case "gyarados1":
		chgDef('Intimidate','nil',18,'Razor Fang',2,9,331,349,194,140,328,198,'Aqua Tail',90,2,1,'Ice Fang',65,5,1,'Bite',60,15,1,'Rain Dance',0,2,3);
		break;
	case "gyarados2":
		chgDef('Intimidate','nil',23,'Lum Berry',2,9,331,349,194,140,236,287,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Iron Head',80,16,1,'Dragon Dance',0,14,3);
		break;
	case "gyarados3":
		chgDef('Intimidate','nil',2,'Persim Berry',2,9,331,383,194,140,299,198,'Outrage',120,14,1,'Waterfall',80,2,1,'Stone Edge',100,12,1,'Giga Impact',150,0,1);
		break;
	case "gyarados4":
		chgDef('Intimidate','nil',2,'Chesto Berry',2,9,331,383,194,140,236,261,'Waterfall',80,2,1,'Earthquake',100,8,1,'Rest',0,10,3,'Dragon Dance',0,14,3);
		break;
	case "hariyama1":
		chgDef('Thick Fat','Guts',2,'Persim Berry',6,17,492,372,156,104,156,136,'Arm Thrust',0,6,3,'Earthquake',100,8,1,'Facade',70,0,1,'Fake Out',40,0,1);
		break;
	case "hariyama2":
		chgDef('Thick Fat','Guts',2,'Iron Ball',6,17,492,372,156,104,156,136,'Revenge',60,6,1,'Payback',60,15,1,'Fling',130,15,1,'Fake Out',40,0,1);
		break;
	case "hariyama3":
		chgDef('Thick Fat','Guts',2,'Life Orb',6,17,492,372,156,104,156,136,'DynamicPunch',100,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "hariyama4":
		chgDef('Thick Fat','Guts',2,'Scope Lens',6,17,492,372,156,104,156,136,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Poison Jab',80,7,1);
		break;
	case "heatran1":
		chgDef('Flash Fire','nil',11,8,1,16,323,194,248,394,311,190,'Heat Wave',100,1,2,'Flash Cannon',80,16,2,'AncientPower',60,12,2,'Scary Face',0,0,3);
		break;
	case "heatran2":
		chgDef('Flash Fire','nil',2,'Quick Claw',1,16,386,306,248,266,248,190,'Iron Head',80,16,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1);
		break;
	case "heatran3":
		chgDef('Flash Fire','nil',11,'Brightpowder',1,16,386,194,248,394,248,190,'Flamethrower',95,1,2,'Earth Power',90,8,2,'Dragon Pulse',90,14,2,'Dark Pulse',80,15,2);
		break;
	case "heatran4":
		chgDef('Flash Fire','nil',14,'Focus Sash',1,16,323,279,248,394,248,171,'Magma Storm',120,1,2,'Flash Cannon',80,16,2,'Earth Power',90,8,2,'Explosion',250,0,1);
		break;
	case "heracross1":
		chgDef('Swarm','Guts',23,'Focus Band',11,6,301,349,186,104,226,295,'Megahorn',120,11,1,'Focus Punch',150,6,1,'Swagger',0,0,3,'Attract',0,0,3);
		break;
	case "heracross2":
		chgDef('Swarm','Guts',2,'Scope Lens',11,6,301,383,186,104,289,206,'Close Combat',120,6,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1,'Bulk Up',0,6,3);
		break;
	case "heracross3":
		chgDef('Swarm','Guts',2,9,11,6,301,383,186,104,226,269,'Megahorn',120,11,1,'Stone Edge',100,12,1,'Facade',70,0,1,'Shadow Claw',70,13,1);
		break;
	case "heracross4":
		chgDef('Swarm','Guts',23,'Salac Berry',11,6,301,349,186,104,226,295,'Megahorn',120,11,1,'Earthquake',100,8,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "hippowdon1":
		chgDef('Sand Stream','nil',7,'Persim Berry',8,17,357,323,368,154,180,130,'Earthquake',100,8,1,'Crunch',80,15,1,'Slack Off',0,0,3,'Curse',0,0,3);
		break;
	case "hippowdon2":
		chgDef('Sand Stream','nil',7,'Sitrus Berry',8,17,357,323,368,154,180,130,'Earthquake',100,8,1,'Swagger',0,0,3,'Sand Tomb',15,8,1,'Yawn',0,0,3);
		break;
	case "hippowdon3":
		chgDef('Sand Stream','nil',2,'White Herb',8,17,420,355,272,154,180,130,'Superpower',120,6,1,'Fire Fang',65,1,1,'Ice Fang',65,5,1,'Fissure',0,8,3);
		break;
	case "hippowdon4":
		chgDef('Sand Stream','nil',2,'Quick Claw',8,17,420,355,272,154,180,130,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1,'Thunder Fang',65,3,1);
		break;
	case "honchkrow1":
		chgDef('Insomnia','Super Luck',2,3,15,9,404,383,140,221,140,178,'Night Slash',70,15,1,'Aerial Ace',60,9,1,'Torment',0,15,3,'Taunt',0,15,3);
		break;
	case "honchkrow2":
		chgDef('Insomnia','Super Luck',2,'White Herb',15,9,404,383,140,221,140,178,'Superpower',120,6,1,'Pluck',60,9,1,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3);
		break;
	case "honchkrow3":
		chgDef('Insomnia','Super Luck',11,'Life Orb',15,9,404,257,140,339,140,178,'Dark Pulse',80,15,2,'Air Cutter',55,9,2,'Psychic',90,10,2,'Shadow Ball',80,13,2);
		break;
	case "honchkrow4":
		chgDef('Insomnia','Super Luck',2,'Scope Lens',15,9,404,383,140,221,140,178,'Night Slash',70,15,1,'Drill Peck',80,9,1,'Sucker Punch',80,15,1,'Steel Wing',70,16,1);
		break;
	case "houndoom1":
		chgDef('Early Bird','Flash Fire',23,'Focus Sash',15,1,291,279,136,230,196,317,'Fire Fang',65,1,1,'Crunch',80,15,1,'Roar',0,0,3,'Counter',0,6,3);
		break;
	case "houndoom2":
		chgDef('Early Bird','Flash Fire',23,'Focus Sash',15,1,291,279,136,230,196,317,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "houndoom3":
		chgDef('Early Bird','Flash Fire',11,2,15,1,291,194,136,350,196,317,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Sludge Bomb',80,7,2,'Will-O-Wisp',0,1,3);
		break;
	case "houndoom4":
		chgDef('Early Bird','Flash Fire',21,'White Herb',15,1,291,194,136,319,196,317,'Overheat',140,1,2,'Dark Pulse',80,15,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "hypno1":
		chgDef('Insomnia','Forewarn',4,'Iron Ball',10,17,311,269,176,182,329,153,'Psycho Cut',70,10,1,'Fling',130,15,1,'Hypnosis',0,10,3,'Trick Room',0,10,3);
		break;
	case "hypno2":
		chgDef('Insomnia','Forewarn',15,'Persim Berry',10,17,311,182,176,245,329,170,'Dream Eater',100,10,2,'Nightmare',0,13,3,'Drain Punch',60,6,1,'Hypnosis',0,10,3);
		break;
	case "hypno3":
		chgDef('Insomnia','Forewarn',2,'Sitrus Berry',10,17,311,269,176,163,329,170,'Zen Headbutt',80,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "hypno4":
		chgDef('Insomnia','Forewarn',11,'Choice Specs',10,17,311,163,176,269,329,170,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Focus Blast',120,6,2);
		break;
	case "infernape1":
		chgDef('Blaze','nil',23,9,1,6,293,307,178,219,178,346,'Close Combat',120,6,1,'Fire Punch',75,1,1,'U-turn',70,11,1,'Fake Out',40,0,1);
		break;
	case "infernape2":
		chgDef('Blaze','nil',2,'Muscle Band',1,6,293,337,178,219,178,315,'Blaze Kick',85,1,1,'Shadow Claw',70,13,1,'ThunderPunch',75,3,1,'Gunk Shot',120,7,1);
		break;
	case "infernape3":
		chgDef('Blaze','nil',11,'Brightpowder',1,6,293,219,178,337,178,315,'Flamethrower',95,1,2,'Focus Blast',120,6,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3);
		break;
	case "infernape4":
		chgDef('Blaze','nil',23,'Kings Rock',1,6,293,307,178,219,178,346,'Flare Blitz',120,1,1,'Close Combat',120,6,1,'Earthquake',100,8,1,'ThunderPunch',75,3,1);
		break;
	case "jolteon1":
		chgDef('Volt Absorb','nil',21,'Focus Sash',3,17,271,149,156,319,226,394,'Thunderbolt',95,3,2,'Thunder Wave',0,3,3,'Agility',0,10,3,'Baton Pass',0,0,3);
		break;
	case "jolteon2":
		chgDef('Volt Absorb','nil',0,'Razor Claw',3,17,271,229,156,319,226,296,'Discharge',80,3,2,'Double Kick',30,6,1,'Dig',80,8,1,'Thunder Wave',0,3,3);
		break;
	case "jolteon3":
		chgDef('Volt Absorb','nil',21,'Lax Incense',3,17,271,149,156,319,226,394,'Thunder',120,3,2,'Shadow Ball',80,13,2,'Rain Dance',0,1,3,'Yawn',0,0,3);
		break;
	case "jolteon4":
		chgDef('Volt Absorb','nil',11,'Razor Fang',3,17,271,149,156,350,226,359,'Thunderbolt',95,3,2,'Hyper Beam',150,0,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "jynx1":
		chgDef('Oblivious','Forewarn',16,'Chesto Berry',5,10,271,122,106,329,317,226,'Psychic',90,10,2,'Ice Beam',95,5,2,'Lovely Kiss',0,0,3,'Fake Tears',0,15,3);
		break;
	case "jynx2":
		chgDef('Oblivious','Forewarn',16,'Lax Incense',5,10,271,122,106,329,317,226,'Dream Eater',100,10,2,'Lovely Kiss',0,0,3,'Perish Song',0,0,3,'Mean Look',0,0,3);
		break;
	case "jynx3":
		chgDef('Oblivious','Forewarn',11,'Expert Belt',5,10,271,122,106,361,226,289,'Blizzard',120,5,2,'Energy Ball',80,4,2,'Signal Beam',75,11,2,'Wring Out',120,0,2);
		break;
	case "jynx4":
		chgDef('Oblivious','Forewarn',11,'Choice Specs',5,10,271,122,106,361,226,289,'Ice Beam',95,5,2,'Psychic',90,10,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2);
		break;
	case "kangaskhan1":
		chgDef('Early Bird','Scrappy',23,'Salac Berry',0,17,351,289,196,104,196,306,'Double-Edge',120,0,1,'Crunch',80,15,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "kangaskhan2":
		chgDef('Early Bird','Scrappy',2,'Razor Claw',0,17,414,317,196,104,196,216,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "kangaskhan3":
		chgDef('Early Bird','Scrappy',23,'Life Orb',0,17,351,289,196,104,196,306,'Double Hit',35,0,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1,'Rock Slide',75,12,1);
		break;
	case "kangaskhan4":
		chgDef('Early Bird','Scrappy',2,'Muscle Band',0,17,414,317,196,104,196,216,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Outrage',120,14,1);
		break;
	case "kingdra1":
		chgDef('Swift Swim','Sniper',21,'Razor Fang',2,14,291,203,226,289,226,295,'Surf',95,2,2,'Dragon Pulse',90,14,2,'SmokeScreen',0,0,3,'Rain Dance',0,1,3);
		break;
	case "kingdra2":
		chgDef('Swift Swim','Sniper',21,'Shell Bell',2,14,291,203,226,289,226,295,'Brine',65,2,2,'Ice Beam',95,5,2,'Twister',40,14,2,'Yawn',0,0,3);
		break;
	case "kingdra3":
		chgDef('Swift Swim','Sniper',2,'Lum Berry',2,14,354,317,226,203,226,206,'Waterfall',80,2,1,'Outrage',120,14,1,'Iron Head',80,16,1,'Dragon Dance',0,14,3);
		break;
	case "kingdra4":
		chgDef('Swift Swim','Sniper',11,'Wide Lens',2,14,354,203,226,317,226,206,'Hydro Pump',120,2,2,'Draco Meteor',140,14,2,'Blizzard',120,5,2,'Signal Beam',75,11,2);
		break;
	case "lanturn1":
		chgDef('Volt Absorb','Illuminate',11,4,2,3,454,136,152,276,188,170,'Surf',95,2,2,'Discharge',80,3,2,'Thunder Wave',0,3,3,'Aqua Ring',0,2,3);
		break;
	case "lanturn2":
		chgDef('Volt Absorb','Illuminate',16,'Lum Berry',2,3,454,136,152,188,276,170,'Dive',80,2,1,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3,'Attract',0,0,3);
		break;
	case "lanturn3":
		chgDef('Volt Absorb','Illuminate',11,'Sitrus Berry',2,3,454,136,152,276,188,170,'Hydro Pump',120,2,2,'Thunder',120,3,2,'Blizzard',120,5,2,'Rain Dance',0,2,3);
		break;
	case "lanturn4":
		chgDef('Volt Absorb','Illuminate',11,'Expert Belt',2,3,454,136,152,276,188,170,'Surf',95,2,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2);
		break;
	case "lapras1":
		chgDef('Water Absorb','Shell Armor',2,'Leftovers',2,5,464,295,196,185,226,156,'Aqua Tail',90,2,1,'Avalanche',60,5,1,'Ice Shard',40,5,1,'Curse',0,0,3);
		break;
	case "lapras2":
		chgDef('Water Absorb','Shell Armor',7,'Quick Claw',2,5,401,206,284,185,289,156,'Sheer Cold',0,5,3,'Perish Song',0,0,3,'Sing',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "lapras3":
		chgDef('Water Absorb','Shell Armor',2,'Lum Berry',2,5,464,295,196,185,226,156,'Waterfall',80,2,1,'Outrage',120,14,1,'Zen Headbutt',80,10,1,'Dragon Dance',0,14,3);
		break;
	case "lapras4":
		chgDef('Water Absorb','Shell Armor',11,'Brightpowder',2,5,464,185,196,295,226,156,'Surf',95,2,2,'Ice Beam',95,5,2,'Psychic',90,10,2,'Thunderbolt',95,3,2);
		break;
	case "latias1":
		chgDef('Levitate','nil',16,'Lum Berry',14,10,301,176,216,319,394,319,'Psychic',90,10,2,'Dragon Pulse',90,14,2,'Attract',0,0,3,'Calm Mind',0,10,3);
		break;
	case "latias2":
		chgDef('Levitate','nil',2,'Expert Belt',14,10,301,284,216,230,296,319,'Dragon Claw',80,14,1,'Zen Headbutt',80,10,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "latias3":
		chgDef('Levitate','nil',21,'Brightpowder',14,10,301,176,216,319,296,350,'Psychic',90,10,2,'Ice Beam',95,5,2,'Energy Ball',80,4,2,'Shadow Ball',80,13,2);
		break;
	case "latias4":
		chgDef('Levitate','nil',11,'White Herb',14,10,301,176,216,350,296,319,'Mist Ball',70,10,2,'Draco Meteor',140,14,2,'Thunderbolt',95,3,2,'Surf',95,2,2);
		break;
	case "latios1":
		chgDef('Levitate','nil',16,'Focus Band',14,10,301,194,196,359,350,256,'Psychic',90,10,2,'Dragon Pulse',90,14,2,'Thunder Wave',0,3,3,'Calm Mind',0,10,3);
		break;
	case "latios2":
		chgDef('Levitate','nil',2,'Lum Berry',14,10,301,306,196,266,256,319,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "latios3":
		chgDef('Levitate','nil',21,'Brightpowder',14,10,301,194,196,359,256,350,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2,'Energy Ball',80,4,2);
		break;
	case "latios4":
		chgDef('Levitate','nil',11,'White Herb',14,10,301,194,196,394,256,319,'Luster Purge',70,10,2,'Draco Meteor',140,14,2,'Hyper Beam',150,0,2,'Surf',95,2,2);
		break;
	case "leafeon1":
		chgDef('Leaf Guard','nil',23,'Scope Lens',4,17,271,319,296,140,166,317,'Leaf Blade',90,4,1,'Aerial Ace',60,9,1,'Double Team',0,0,3,'Baton Pass',0,0,3);
		break;
	case "leafeon2":
		chgDef('Leaf Guard','nil',23,'Brightpowder',4,17,271,319,296,140,166,317,'Leaf Blade',90,4,1,'Last Resort',140,0,1,'Curse',0,0,3,'GrassWhistle',0,4,3);
		break;
	case "leafeon3":
		chgDef('Leaf Guard','nil',2,'Heat Rock',4,17,271,350,359,140,166,226,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "leafeon4":
		chgDef('Leaf Guard','nil',2,'Quick Claw',4,17,271,350,359,140,166,226,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Aerial Ace',60,9,1,'Bite',60,15,1);
		break;
	case "lickilicky1":
		chgDef('Own Tempo','Oblivious',18,'Chesto Berry',0,17,424,269,226,176,248,136,'Return',102,0,1,'Earthquake',100,8,1,'Belly Drum',0,0,3,'Rest',0,10,3);
		break;
	case "lickilicky2":
		chgDef('Own Tempo','Oblivious',11,'Expert Belt',0,17,424,185,226,284,226,136,'Surf',95,2,2,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2);
		break;
	case "lickilicky3":
		chgDef('Own Tempo','Oblivious',4,'Lum Berry',0,17,424,295,226,196,226,122,'Return',102,0,1,'Gyro Ball',0,16,1,'Curse',0,0,3,'Rest',0,10,3);
		break;
	case "lickilicky4":
		chgDef('Own Tempo','Oblivious',2,'Lax Incense',0,17,424,295,226,176,226,136,'Body Slam',85,0,1,'Power Whip',120,4,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "lopunny1":
		chgDef('Cute Charm','Klutz',23,'Focus Band',0,17,271,251,204,129,228,339,'Return',102,0,1,'Drain Punch',60,6,1,'Charm',0,0,3,'Mirror Coat',0,10,2);
		break;
	case "lopunny2":
		chgDef('Cute Charm','Klutz',23,'Brightpowder',0,17,334,188,204,129,228,339,'Focus Punch',150,6,1,'Sweet Kiss',0,0,3,'Attract',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "lopunny3":
		chgDef('Cute Charm','Klutz',11,'Wise Glasses',0,17,271,169,204,227,228,309,'Charge Beam',50,3,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "lopunny4":
		chgDef('Cute Charm','Klutz',23,'Muscle Band',0,17,271,251,204,129,228,339,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "lucario1":
		chgDef('Steadfast','Inner Focus',11,'Brightpowder',6,16,281,230,176,361,176,279,'Aura Sphere',90,6,2,'Flash Cannon',80,16,2,'Water Pulse',60,2,2,'Roar',0,0,3);
		break;
	case "lucario2":
		chgDef('Steadfast','Inner Focus',2,'Scope Lens',6,16,281,350,176,239,176,279,'Cross Chop',100,6,1,'Stone Edge',100,12,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "lucario3":
		chgDef('Steadfast','Inner Focus',2,'Muscle Band',6,16,281,350,176,239,176,279,'Close Combat',120,6,1,'Earthquake',100,8,1,'Blaze Kick',85,1,1,'Shadow Claw',70,13,1);
		break;
	case "lucario4":
		chgDef('Steadfast','Inner Focus',11,'Expert Belt',6,16,281,230,176,361,176,279,'Aura Sphere',90,6,2,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Dragon Pulse',90,14,2);
		break;
	case "ludicolo1":
		chgDef('Swift Swim','Rain Dish',2,'Muscle Band',2,4,301,262,176,194,299,176,'Waterfall',80,2,1,'Razor Leaf',55,4,1,'Drain Punch',60,6,1,'Swords Dance',0,0,3);
		break;
	case "ludicolo2":
		chgDef('Swift Swim','Rain Dish',7,'Leftovers',2,4,343,176,239,194,278,176,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3,'Rain Dance',0,2,3);
		break;
	case "ludicolo3":
		chgDef('Swift Swim','Rain Dish',11,'Wide Lens',2,4,364,158,176,306,236,176,'Hydro Pump',120,2,2,'Grass Knot',60,4,2,'Blizzard',120,5,2,'Focus Blast',120,6,2);
		break;
	case "ludicolo4":
		chgDef('Swift Swim','Rain Dish',11,'Lum Berry',2,4,301,158,176,306,299,176,'Surf',95,2,2,'Giga Drain',60,4,2,'Ice Beam',95,5,2,'Rain Dance',0,2,3);
		break;
	case "luxray1":
		chgDef('Rivalry','Intimidate',2,'Razor Claw',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Howl',0,0,3,'Charge',0,3,3);
		break;
	case "luxray2":
		chgDef('Rivalry','Intimidate',11,'Wise Glasses',3,17,364,248,194,317,194,176,'Thunderbolt',95,3,2,'Signal Beam',75,11,2,'Thunder Wave',0,3,3,'Magnet Rise',0,3,3);
		break;
	case "luxray3":
		chgDef('Rivalry','Intimidate',2,'White Herb',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Ice Fang',65,5,1,'Superpower',120,6,1,'Thunder Wave',0,3,3);
		break;
	case "luxray4":
		chgDef('Rivalry','Intimidate',2,'Muscle Band',3,17,364,372,194,203,194,176,'Thunder Fang',65,3,1,'Ice Fang',65,5,1,'Crunch',80,15,1,'Thunder Wave',0,3,3);
		break;
	case "machamp1":
		chgDef('Guts','No Guard',2,'Scope Lens',6,17,384,394,196,149,206,146,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Bullet Punch',40,16,1,'Foresight',0,0,3);
		break;
	case "machamp2":
		chgDef('Guts','No Guard',2,'Focus Sash',6,17,321,325,259,149,269,146,'Revenge',60,6,1,'Earthquake',100,8,1,'Payback',60,15,1,'Counter',0,6,1);
		break;
	case "machamp3":
		chgDef('Guts','No Guard',2,'Quick Claw',6,17,384,394,196,149,206,146,'DynamicPunch',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Ice Punch',75,5,1);
		break;
	case "machamp4":
		chgDef('Guts','No Guard',2,'Quick Claw',6,17,384,394,196,149,206,146,'Cross Chop',100,6,1,'Earthquake',100,8,1,'ThunderPunch',75,3,1,'Fire Punch',75,1,1);
		break;
	case "magmortar1":
		chgDef('Flame Body','nil',11,'Heat Rock',1,17,291,203,170,383,226,265,'Fire Blast',120,1,2,'Focus Blast',120,6,2,'Will-O-Wisp',0,1,3,'Sunny Day',0,1,3);
		break;
	case "magmortar2":
		chgDef('Flame Body','nil',2,8,1,17,291,317,170,257,226,265,'Fire Punch',75,1,1,'Focus Punch',150,6,1,'Confuse Ray',0,13,3,'SmokeScreen',0,0,3);
		break;
	case "magmortar3":
		chgDef('Flame Body','nil',2,2,1,17,291,317,170,257,226,265,'Flare Blitz',120,1,1,'ThunderPunch',75,1,1,'Earthquake',100,8,1,'Brick Break',75,6,1);
		break;
	case "magmortar4":
		chgDef('Flame Body','nil',11,'White Herb',1,17,291,203,170,383,226,265,'Overheat',140,1,1,'Psychic',90,10,2,'Focus Blast',120,6,2,'Confuse Ray',0,13,3);
		break;
	case "magnezone1":
		chgDef('Magnet Pull','Sturdy',6,'Light Clay',3,16,281,158,361,359,216,156,'Thunderbolt',95,3,2,'Mirror Shot',65,16,2,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "magnezone2":
		chgDef('Magnet Pull','Sturdy',7,'Lum Berry',3,16,281,239,361,266,216,156,'Iron Head',80,16,1,'Explosion',250,0,1,'Swagger',0,0,3,'Psych Up',0,0,3);
		break;
	case "magnezone3":
		chgDef('Magnet Pull','Sturdy',11,'Chesto Berry',3,16,281,158,329,394,216,156,'Charge Beam',50,3,2,'Flash Cannon',80,16,2,'Magnet Rise',0,3,3,'Thunder Wave',0,3,3);
		break;
	case "magnezone4":
		chgDef('Magnet Pull','Sturdy',11,'Brightpowder',3,16,281,158,329,394,216,156,'Thunderbolt',95,3,2,'Flash Cannon',80,16,2,'Tri Attack',80,0,2,'Signal Beam',75,11,2);
		break;
	case "mamoswine1":
		chgDef('Oblivious','Snow Cloak',2,'Icy Rock',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Peck',35,6,1,'Hail',0,5,3);
		break;
	case "mamoswine2":
		chgDef('Oblivious','Snow Cloak',2,'Sitrus Berry',8,5,424,394,196,158,156,196,'Avalanche',60,5,1,'Earthquake',100,8,1,'Iron Head',80,16,1,'Curse',0,0,3);
		break;
	case "mamoswine3":
		chgDef('Oblivious','Snow Cloak',2,'Lax Incense',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Superpower',120,6,1,'Fissure',0,8,3,'Hail',0,5,3);
		break;
	case "mamoswine4":
		chgDef('Oblivious','Snow Cloak',2,'Life Orb',8,5,424,394,196,158,156,196,'Earthquake',100,8,1,'Ice Fang',65,5,1,'Stone Edge',100,12,1,'Double-Edge',120,0,1);
		break;
	case "manectric1":
		chgDef('Static','Lightningrod',2,8,3,17,281,273,156,221,156,309,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Roar',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "manectric2":
		chgDef('Static','Lightningrod',11,'Damp Rock',3,17,281,167,156,339,156,309,'Thunder',120,3,2,'Hyper Beam',150,0,2,'Thunder Wave',0,3,3,'Rain Dance',0,1,3);
		break;
	case "manectric3":
		chgDef('Static','Lightningrod',2,'Quick Claw',3,17,281,273,156,221,156,309,'Thunder Fang',65,3,1,'Fire Fang',65,1,1,'Ice Fang',65,5,1,'Bite',60,15,1);
		break;
	case "manectric4":
		chgDef('Static','Lightningrod',21,'Brightpowder',3,17,281,167,156,309,156,339,'Thunderbolt',95,3,2,'Flamethrower',95,1,2,'Signal Beam',75,11,2,'Swift',60,0,2);
		break;
	case "marowak1":
		chgDef('Rock Head','Lightningrod',2,'Razor Claw',8,17,261,284,319,122,196,126,'Bone Rush',25,8,1,'Brick Break',75,6,1,'Iron Tail',100,16,1,'Sandstorm',0,8,3);
		break;
	case "marowak2":
		chgDef('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Bone Rush',25,8,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Rock Slide',75,12,1);
		break;
	case "marowak3":
		chgDef('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Earthquake',100,8,1,'Giga Impact',150,0,1,'Outrage',120,14,1,'Fire Punch',75,1,1);
		break;
	case "marowak4":
		chgDef('Rock Head','Lightningrod',2,'Thick Club',8,17,261,284,319,122,196,126,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Iron Head',80,16,1,'ThunderPunch',75,3,1);
		break;
	case "medicham1":
		chgDef('Pure Power','nil',23,'Salac Berry',6,10,261,219,186,140,186,284,'Zen Headbutt',80,10,1,'Reversal',0,6,1,'Endure',0,0,3,'Fake Out',40,0,1);
		break;
	case "medicham2":
		chgDef('Pure Power','nil',23,'Cheri Berry',6,10,261,219,186,140,186,284,'Drain Punch',60,6,1,'Poison Jab',80,7,1,'Detect',0,0,3,'Recover',0,0,3);
		break;
	case "medicham3":
		chgDef('Pure Power','nil',11,'Wise Glasses',6,10,261,140,186,240,186,259,'Psychic',90,10,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "medicham4":
		chgDef('Pure Power','nil',2,'Scope Lens',6,10,261,240,186,140,186,259,'Psycho Cut',70,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "meganium1":
		chgDef('Overgrow','nil',11,'Heat Rock',4,17,301,180,299,222,299,196,'SolarBeam',120,4,2,'AncientPower',60,12,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "meganium2":
		chgDef('Overgrow','nil',16,'Big Root',4,17,343,180,278,202,305,196,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Substitute',0,0,3);
		break;
	case "meganium3":
		chgDef('Overgrow','nil',6,'Light Clay',4,17,364,180,259,265,236,196,'Leaf Storm',140,4,2,'Wring Out',120,0,2,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "meganium4":
		chgDef('Overgrow','nil',11,'Lax Incense',4,17,364,180,236,291,236,196,'Frenzy Plant',150,4,2,'AncientPower',60,12,2,'Hyper Beam',150,0,2,'Light Screen',0,10,3);
		break;
	case "metagross1":
		chgDef('Clear Body','nil',2,'Brightpowder',16,10,301,405,359,203,216,176,'Zen Headbutt',80,10,1,'Bullet Punch',40,16,1,'Facade',70,0,1,'Light Screen',0,10,3);
		break;
	case "metagross2":
		chgDef('Clear Body','nil',11,'Wise Glasses',16,10,301,275,359,317,216,176,'Psychic',90,10,2,'Flash Cannon',80,16,2,'Shadow Ball',80,13,2,'Sludge Bomb',70,7,2);
		break;
	case "metagross3":
		chgDef('Clear Body','nil',2,1,16,10,301,405,359,203,216,176,'Hammer Arm',100,6,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1);
		break;
	case "metagross4":
		chgDef('Clear Body','nil',2,'Quick Claw',16,10,364,405,296,203,216,176,'Meteor Mash',100,16,1,'Zen Headbutt',80,10,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "milotic1":
		chgDef('Marvel Scale','nil',11,'Shell Bell',2,17,394,140,194,328,286,198,'Surf',95,2,2,'Ice Beam',95,5,2,'Attract',0,0,3,'Hypnosis',0,10,3);
		break;
	case "milotic2":
		chgDef('Marvel Scale','nil',7,'Leftovers',2,17,394,156,282,212,286,198,'Toxic',0,7,3,'Confuse Ray',0,13,3,'Double Team',0,0,3,'Aqua Ring',0,2,3);
		break;
	case "milotic3":
		chgDef('Marvel Scale','nil',16,'Wide Lens',2,17,331,140,194,299,383,198,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Mirror Coat',0,10,2,'Recover',0,0,3);
		break;
	case "milotic4":
		chgDef('Marvel Scale','nil',11,'Lum Berry',2,17,394,140,194,328,286,198,'Surf',95,2,2,'Ice Beam',95,5,2,'Dragon Pulse',90,14,2,'Recover',0,0,3);
		break;
	case "miltank1":
		chgDef('Thick Fat','Scrappy',7,'Cheri Berry',0,17,331,259,339,104,176,236,'Return',102,0,1,'Iron Head',80,16,1,'Thunder Wave',0,3,3,'Milk Drink',0,0,3);
		break;
	case "miltank2":
		chgDef('Thick Fat','Scrappy',2,'Salac Berry',0,17,331,284,246,104,176,299,'Facade',70,0,1,'Zen Headbutt',80,10,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "miltank3":
		chgDef('Thick Fat','Scrappy',2,'Scope Lens',0,17,331,284,309,104,176,236,'Dizzy Punch',70,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "miltank4":
		chgDef('Thick Fat','Scrappy',2,'Muscle Band',0,17,331,284,246,104,176,299,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Zen Headbutt',80,10,1);
		break;
	case "mismagius1":
		chgDef('Levitate','nil',11,13,13,17,261,140,156,339,246,309,'Shadow Ball',80,13,2,'Power Gem',70,12,2,'Magical Leaf',60,4,2,'Memento',0,15,3);
		break;
	case "mismagius2":
		chgDef('Levitate','nil',11,'Lum Berry',13,17,261,140,156,339,309,246,'Shadow Ball',80,13,2,'Confuse Ray',0,13,3,'Perish Song',0,0,3,'Mean Look',0,0,3);
		break;
	case "mismagius3":
		chgDef('Levitate','nil',21,'Wise Glasses',13,17,261,140,156,309,246,339,'Shadow Ball',80,13,2,'Energy Ball',80,4,2,'Icy Wind',55,5,2,'Destiny Bond',0,13,3);
		break;
	case "mismagius4":
		chgDef('Levitate','nil',21,'Focus Sash',13,17,261,140,156,309,246,339,'Shadow Ball',80,13,2,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Destiny Bond',0,13,3);
		break;
	case "moltres1":
		chgDef('Pressure','nil',21,2,1,9,321,212,216,349,206,306,'Flamethrower',95,1,2,'Air Slash',75,9,2,'AncientPower',60,12,2,'Roost',0,9,3);
		break;
	case "moltres2":
		chgDef('Pressure','nil',21,'Heat Rock',1,9,384,212,216,349,206,237,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Sunny Day',0,1,3);
		break;
	case "moltres3":
		chgDef('Pressure','nil',2,'Power Herb',1,9,321,328,216,257,206,279,'Sky Attack',140,9,1,'Return',102,0,1,'Steel Wing',70,16,1,'U-turn',70,11,1);
		break;
	case "moltres4":
		chgDef('Pressure','nil',11,'White Herb',1,9,321,212,216,383,206,279,'Overheat',140,1,2,'Air Slash',75,9,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2);
		break;
	case "mrmime1":
		chgDef('Soundproof','Filter',16,'Cheri Berry',10,17,221,113,166,299,372,216,'Psychic',90,10,2,'Signal Beam',75,11,2,'Copycat',0,0,3,'Mimic',0,0,3);
		break;
	case "mrmime2":
		chgDef('Soundproof','Filter',16,'Light Clay',10,17,221,113,166,299,372,216,'Dream Eater',100,10,2,'Hypnosis',0,10,3,'Light Screen',0,10,3,'Reflect',0,10,3);
		break;
	case "mrmime3":
		chgDef('Soundproof','Filter',11,13,10,17,221,113,166,328,339,216,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Energy Ball',80,4,2,'Hyper Beam',150,0,2);
		break;
	case "mrmime4":
		chgDef('Soundproof','Filter',11,'Choice Specs',10,17,221,113,166,328,339,216,'Psychic',90,10,2,'Charge Beam',50,3,2,'Shadow Ball',80,13,2,'Focus Blast',120,6,2);
		break;
	case "muk1":
		chgDef('Stench','Sticky Hold',2,'Black Sludge',7,17,414,339,186,149,236,136,'Poison Jab',80,7,1,'Shadow Sneak',40,13,1,'Minimize',0,0,3,'Acid Armor',0,7,3);
		break;
	case "muk2":
		chgDef('Stench','Sticky Hold',2,'Expert Belt',7,17,414,339,186,149,236,136,'Poison Jab',80,7,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "muk3":
		chgDef('Stench','Sticky Hold',4,'Zoom Lens',7,17,414,339,186,166,236,122,'Gunk Shot',120,7,1,'Payback',60,15,1,'Shadow Sneak',40,13,1,'Curse',0,0,3);
		break;
	case "muk4":
		chgDef('Stench','Sticky Hold',2,'Quick Claw',7,17,414,339,186,149,236,136,'Gunk Shot',120,7,1,'Shadow Sneak',40,13,1,'Brick Break',75,6,1,'Explosion',250,0,1);
		break;
	case "nidoking1":
		chgDef('Poison Point','Rivalry',7,'Focus Band',7,8,366,283,209,185,186,206,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Double Kick',30,6,1,'Counter',0,6,1);
		break;
	case "nidoking2":
		chgDef('Poison Point','Rivalry',18,'Brightpowder',7,8,345,220,232,185,250,206,'Focus Punch',150,6,1,'Dragon Pulse',90,14,2,'Horn Drill',0,0,3,'Substitute',0,0,3);
		break;
	case "nidoking3":
		chgDef('Poison Point','Rivalry',11,'Expert Belt',7,8,303,198,190,295,186,269,'Earth Power',90,8,2,'Sludge Bomb',90,7,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2);
		break;
	case "nidoking4":
		chgDef('Poison Point','Rivalry',2,'Muscle Band',7,8,303,311,190,185,186,269,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Megahorn',120,11,1,'Outrage',120,14,1);
		break;
	case "nidoqueen1":
		chgDef('Poison Point','Rivalry',2,10,7,8,384,289,210,167,206,188,'Earthquake',100,8,1,'Poison Fang',50,7,1,'Aerial Ace',60,9,1,'Charm',0,0,3);
		break;
	case "nidoqueen2":
		chgDef('Poison Point','Rivalry',2,'Scope Lens',7,8,384,289,210,167,206,188,'Poison Jab',80,7,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "nidoqueen3":
		chgDef('Poison Point','Rivalry',11,'Black Sludge',7,8,384,180,210,273,206,188,'Sludge Bomb',90,7,2,'Earth Power',90,8,2,'Flamethrower',95,1,2,'Ice Beam',95,5,2);
		break;
	case "nidoqueen4":
		chgDef('Poison Point','Rivalry',2,'Razor Claw',7,8,384,289,210,167,206,188,'Earthquake',100,8,1,'Poison Jab',80,7,1,'Superpower',120,6,1,'Crunch',80,15,1);
		break;
	case "ninetales1":
		chgDef('Flash Fire','nil',21,'Brightpowder',1,17,287,169,186,261,236,328,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Attract',0,0,3,'Sunny Day',0,1,3);
		break;
	case "ninetales2":
		chgDef('Flash Fire','nil',21,'White Herb',1,17,287,169,186,261,236,328,'Overheat',140,1,2,'Dark Pulse',80,15,2,'Nasty Plot',0,15,3,'Confuse Ray',0,13,3);
		break;
	case "ninetales3":
		chgDef('Flash Fire','nil',21,'Wide Lens',1,17,287,169,186,198,299,328,'Heat Wave',100,1,2,'Ominous Wind',60,13,2,'Dream Eater',100,10,2,'Hypnosis',0,10,3);
		break;
	case "ninetales4":
		chgDef('Flash Fire','nil',11,2,1,17,287,169,186,287,236,299,'Flamethrower',95,1,2,'Extrasensory',80,10,2,'Energy Ball',80,4,2,'Calm Mind',0,10,3);
		break;
	case "pinsir1":
		chgDef('Hyper Cutter','Mold Breaker',2,9,11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Swords Dance',0,0,3);
		break;
	case "pinsir2":
		chgDef('Hyper Cutter','Mold Breaker',2,'Salac Berry',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Revenge',60,6,1,'Flail',0,0,1,'Endure',0,0,3);
		break;
	case "pinsir3":
		chgDef('Hyper Cutter','Mold Breaker',2,'Lax Incense',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Superpower',120,6,1,'Stone Edge',100,12,1,'Giga Impact',150,0,1);
		break;
	case "pinsir4":
		chgDef('Hyper Cutter','Mold Breaker',2,'Scope Lens',11,17,271,383,299,131,176,206,'X-Scissor',80,11,1,'Earthquake',100,8,1,'Close Combat',120,6,1,'Guillotine',0,0,3);
		break;
	case "politoed1":
		chgDef('Water Absorb','Damp',16,'Lax Incense',2,17,321,167,186,279,328,176,'Surf',95,2,2,'Hyper Voice',90,0,2,'Mud Bomb',65,8,2,'Swagger',0,0,3);
		break;
	case "politoed2":
		chgDef('Water Absorb','Damp',7,'Chesto Berry',2,17,384,249,204,194,236,176,'Dive',80,2,1,'Brick Break',75,6,1,'Hypnosis',0,10,3,'Perish Song',0,0,3);
		break;
	case "politoed3":
		chgDef('Water Absorb','Damp',18,'Chesto Berry',2,17,321,249,186,194,328,176,'Waterfall',80,2,1,'Earthquake',100,6,1,'Belly Drum',0,0,3,'Rest',0,10,3);
		break;
	case "politoed4":
		chgDef('Water Absorb','Damp',11,3,2,17,321,167,186,306,299,176,'Hydro Pump',120,2,2,'Ice Beam',95,5,2,'Psychic',90,10,2,'Hypnosis',0,10,3);
		break;
	case "poliwrath1":
		chgDef('Water Absorb','Damp',11,4,2,6,384,185,226,262,216,176,'Surf',95,2,2,'Vacuum Wave',40,6,2,'Psychic',90,10,2,'Double Team',0,0,3);
		break;
	case "poliwrath2":
		chgDef('Water Absorb','Damp',2,'Lax Incense',2,6,384,295,226,158,216,176,'Waterfall',80,2,1,'DynamicPunch',100,6,1,'Poison Jab',80,7,1,'Bulk Up',0,6,3);
		break;
	case "poliwrath3":
		chgDef('Water Absorb','Damp',11,'Wide Lens',2,6,384,185,226,262,216,176,'Hydro Pump',120,2,2,'Focus Blast',120,6,2,'Blizzard',120,5,2,'Mud Bomb',65,8,2);
		break;
	case "poliwrath4":
		chgDef('Water Absorb','Damp',2,'Expert Belt',2,6,384,295,226,158,216,176,'Waterfall',80,2,1,'Focus Punch',150,6,1,'Earthquake',100,8,1,'Hypnosis',0,10,3);
		break;
	case "porygon21":
		chgDef('Trace','Download',11,'Cheri Berry',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Charge Beam',50,3,2,'Thunder Wave',0,3,3,'Recycle',0,0,3);
		break;
	case "porygon22":
		chgDef('Trace','Download',14,'Iron Ball',0,17,374,196,216,339,226,140,'Tri Attack',80,0,2,'Thunderbolt',95,3,2,'Recover',0,0,3,'Trick Room',0,10,3);
		break;
	case "porygon23":
		chgDef('Trace','Download',11,'Wise Glasses',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Thunderbolt',95,3,2,'Psychic',90,10,2,'Ice Beam',95,5,2);
		break;
	case "porygon24":
		chgDef('Trace','Download',11,'Lum Berry',0,17,374,176,216,339,226,156,'Tri Attack',80,0,2,'Signal Beam',75,11,2,'Shadow Ball',80,13,2,'Ice Beam',95,5,2);
		break;
	case "porygonz1":
		chgDef('Adaptability','Download',11,'Sitrus Berry',0,17,374,176,176,405,186,216,'Tri Attack',80,0,2,'Shadow Ball',80,13,2,'Recycle',0,0,3,'Conversion 2',0,0,3);
		break;
	case "porygonz2":
		chgDef('Adaptability','Download',21,'Choice Scarf',0,17,311,176,176,369,186,306,'Tri Attack',80,0,2,'Thunder Wave',0,3,3,'Recover',0,0,3,'Trick',0,10,3);
		break;
	case "porygonz3":
		chgDef('Adaptability','Download',11,'Wise Glasses',0,17,374,176,176,405,186,216,'Psychic',90,10,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Charge Beam',50,3,2);
		break;
	case "porygonz4":
		chgDef('Adaptability','Download',11,'Expert Belt',0,17,311,176,176,405,186,279,'Tri Attack',80,0,2,'Shadow Ball',80,13,2,'Thunderbolt',95,3,2,'Recover',0,0,3);
		break;
	case "probopass1":
		chgDef('Sturdy','Magnet Pull',4,'Cheri Berry',12,16,261,229,326,249,336,104,'AncientPower',60,12,2,'Magnet Bomb',60,16,1,'Thunder Wave',0,3,3,'Protect',0,0,3);
		break;
	case "probopass2":
		chgDef('Sturdy','Magnet Pull',2,6,12,16,261,229,326,167,399,116,'Iron Head',80,16,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "probopass3":
		chgDef('Sturdy','Magnet Pull',2,'Scope Lens',12,16,261,229,389,167,336,116,'Stone Edge',100,12,1,'Iron Head',80,16,1,'Earthquake',100,8,1,'Explosion',250,0,1);
		break;
	case "probopass4":
		chgDef('Sturdy','Magnet Pull',11,'Life Orb',12,16,261,131,326,273,399,116,'Flash Cannon',80,16,2,'Power Gem',70,12,2,'Earth Power',90,8,2,'Thunderbolt',95,3,2);
		break;
	case "quagsire1":
		chgDef('Damp','Water Absorb',2,4,2,8,394,295,206,149,166,106,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Brick Break',75,6,1,'Counter',0,6,1);
		break;
	case "quagsire2":
		chgDef('Damp','Water Absorb',18,'Leftovers',2,8,373,206,248,149,228,106,'Dive',80,2,1,'Yawn',0,0,3,'Curse',0,0,3,'Amnesia',0,10,3);
		break;
	case "quagsire3":
		chgDef('Damp','Water Absorb',11,'Quick Claw',2,8,394,185,206,251,166,106,'Surf',95,2,2,'Earth Power',90,8,2,'Focus Blast',120,6,2,'Sludge Bomb',90,7,2);
		break;
	case "quagsire4":
		chgDef('Damp','Water Absorb',2,'Muscle Band',2,8,394,295,206,149,166,106,'Earthquake',100,8,1,'Waterfall',80,2,1,'Stone Edge',100,12,1,'Ice Punch',75,5,1);
		break;
	case "raichu1":
		chgDef('Static','nil',2,'Wide Lens',3,17,261,306,146,194,196,299,'ThunderPunch',75,3,1,'Iron Tail',100,16,1,'Slam',80,0,1,'Quick Attack',40,0,1);
		break;
	case "raichu2":
		chgDef('Static','nil',23,'Focus Band',3,17,261,279,146,194,196,328,'ThunderPunch',75,3,1,'Focus Punch',150,6,1,'Sweet Kiss',0,0,3,'Thunder Wave',0,3,3);
		break;
	case "raichu3":
		chgDef('Static','nil',21,'Petaya Berry',3,17,261,194,146,279,196,328,'Thunderbolt',95,3,2,'Focus Blast',120,6,2,'Signal Beam',75,11,2,'Nasty Plot',0,15,3);
		break;
	case "raichu4":
		chgDef('Static','nil',2,'Brightpowder',3,17,261,306,146,194,196,299,'Volt Tackle',120,3,1,'Return',102,0,1,'Brick Break',75,6,1,'Thunder Wave',0,3,3);
		break;
	case "raikou1":
		chgDef('Pressure','nil',21,'Lum Berry',3,17,321,185,186,329,236,361,'Thunderbolt',95,3,2,'Shadow Ball',80,13,2,'Thunder Wave',0,3,3,'Light Screen',0,10,3);
		break;
	case "raikou2":
		chgDef('Pressure','nil',23,'Kings Rock',3,17,321,269,186,239,236,361,'Thunder Fang',65,3,1,'Crunch',80,15,1,'Iron Head',80,16,1,'Return',102,0,1);
		break;
	case "raikou3":
		chgDef('Pressure','nil',11,'Wise Glasses',3,17,321,185,186,361,236,329,'Thunder',120,3,2,'Extrasensory',80,10,2,'Signal Beam',75,11,2,'Rain Dance',0,2,3);
		break;
	case "raikou4":
		chgDef('Pressure','nil',11,8,3,17,321,185,186,361,236,329,'Thunderbolt',95,3,2,'Extrasensory',80,10,2,'Shadow Ball',80,13,2,'Calm Mind',0,10,3);
		break;
	case "rampardos1":
		chgDef('Mold Breaker','nil',2,'Toxic Orb',12,17,398,471,156,149,136,152,'Rock Slide',75,12,1,'Facade',70,0,1,'Crunch',80,15,1,'Screech',0,0,3);
		break;
	case "rampardos2":
		chgDef('Mold Breaker','nil',4,'Iron Ball',12,17,398,471,156,166,136,136,'Stone Edge',100,12,1,'Payback',60,15,1,'Avalanche',60,5,1,'Fling',130,15,1);
		break;
	case "rampardos3":
		chgDef('Mold Breaker','nil',2,'Life Orb',12,17,398,471,156,149,136,152,'Head Smash',150,12,1,'Zen Headbutt',80,10,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1);
		break;
	case "rampardos4":
		chgDef('Mold Breaker','nil',23,'Choice Scarf',12,17,335,429,156,149,136,236,'Head Smash',150,12,1,'Earthquake',100,8,1,'Giga Impact',150,0,1,'Superpower',120,6,1);
		break;
	case "rapidash1":
		chgDef('Run Away','Flash Fire',11,'Chesto Berry',1,17,271,212,176,284,196,309,'Fire Blast',120,1,2,'SolarBeam',120,4,2,'Sunny Day',0,1,3,'Rest',0,10,3);
		break;
	case "rapidash2":
		chgDef('Run Away','Flash Fire',11,'White Herb',1,17,271,212,176,284,196,309,'Overheat',140,1,2,'SolarBeam',120,4,2,'Swift',60,0,2,'Sunny Day',0,1,3);
		break;
	case "rapidash3":
		chgDef('Run Away','Flash Fire',2,'Brightpowder',1,17,271,328,176,176,196,309,'Flare Blitz',120,1,1,'Poison Jab',80,7,1,'Iron Tail',80,16,1,'Horn Drill',0,0,3);
		break;
	case "rapidash4":
		chgDef('Run Away','Flash Fire',23,'Chesto Berry',1,17,271,299,176,176,196,339,'Flare Blitz',120,1,1,'Megahorn',120,7,1,'Double-Edge',120,0,1,'Hypnosis',0,10,3);
		break;
	case "regice1":
		chgDef('Clear Body','nil',11,'Lum Berry',5,17,301,122,236,328,499,136,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Charge Beam',50,3,2,'Amnesia',0,10,3);
		break;
	case "regice2":
		chgDef('Clear Body','nil',7,'Leftovers',5,17,364,136,328,212,436,136,'Avalanche',60,5,1,'Hammer Arm',100,6,1,'Double Team',0,0,3,'Curse',0,0,3);
		break;
	case "regice3":
		chgDef('Clear Body','nil',6,'Chesto Berry',5,17,301,122,328,299,436,136,'Ice Beam',95,5,2,'Flash Cannon',80,16,2,'AncientPower',60,12,2,'Rest',0,10,3);
		break;
	case "regice4":
		chgDef('Clear Body','nil',11,'Shell Bell',5,17,364,122,236,328,436,136,'Ice Beam',95,5,2,'Thunderbolt',95,3,2,'Hyper Beam',150,0,2,'Focus Blast',120,6,2);
		break;
	case "regigigas1":
		chgDef('Slow Start','nil',7,'Lax Incense',0,17,403,356,327,176,298,236,'Return',102,0,1,'Aerial Ace',60,9,1,'Thunder Wave',0,3,3,'Confuse Ray',0,13,3);
		break;
	case "regigigas2":
		chgDef('Slow Start','nil',18,'Leftovers',0,17,403,356,298,176,327,236,'Facade',70,0,1,'Zen Headbutt',80,10,1,'Double Team',0,0,3,'Substitute',0,0,3);
		break;
	case "regigigas3":
		chgDef('Slow Start','nil',11,'Wise Glasses',0,17,424,320,256,284,256,236,'Earth Power',90,8,2,'Focus Blast',120,6,2,'Thunderbolt',95,3,2,'AncientPower',60,12,2);
		break;
	case "regigigas4":
		chgDef('Slow Start','nil',2,'Brightpowder',0,17,424,460,256,176,256,236,'Crush Grip',120,0,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Drain Punch',60,6,1);
		break;
	case "regirock1":
		chgDef('Clear Body','nil',7,'Leftovers',12,17,301,299,548,122,236,136,'Rock Slide',75,12,1,'Earthquake',100,8,1,'Brick Break',75,6,1,'Sandstorm',0,12,3);
		break;
	case "regirock2":
		chgDef('Clear Body','nil',2,'Razor Claw',12,17,364,328,436,122,236,136,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Drain Punch',60,6,1);
		break;
	case "regirock3":
		chgDef('Clear Body','nil',18,'Chesto Berry',12,17,364,236,436,122,328,136,'Stone Edge',100,12,1,'Hammer Arm',100,6,1,'Rest',0,10,3,'Curse',0,0,3);
		break;
	case "regirock4":
		chgDef('Clear Body','nil',18,'Quick Claw',12,17,301,299,436,122,328,136,'Stone Edge',100,12,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Explosion',250,0,1);
		break;
	case "registeel1":
		chgDef('Clear Body','nil',11,'Lum Berry',16,17,364,167,336,273,336,136,'Flash Cannon',80,16,2,'Thunderbolt',95,3,2,'Thunder Wave',0,3,3,'Amnesia',0,10,3);
		break;
	case "registeel2":
		chgDef('Clear Body','nil',2,'Leftovers',16,17,343,204,378,167,378,136,'Iron Head',80,16,1,'Toxic',0,7,3,'Double Team',0,0,3,'Iron Defense',0,16,3);
		break;
	case "registeel3":
		chgDef('Clear Body','nil',2,'Razor Claw',16,17,364,273,336,167,336,136,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "registeel4":
		chgDef('Clear Body','nil',2,'Shell Bell',16,17,343,204,378,167,378,136,'Iron Head',80,16,1,'Hammer Arm',100,6,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "rhydon1":
		chgDef('Lightningrod','Rock Head',2,2,8,12,351,394,339,113,126,116,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Crunch',80,15,1,'Scary Face',0,0,3);
		break;
	case "rhydon2":
		chgDef('Lightningrod','Rock Head',2,'Focus Sash',8,12,351,394,339,113,126,116,'Earthquake',100,8,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "rhydon3":
		chgDef('Lightningrod','Rock Head',4,'Persim Berry',8,12,414,394,276,126,126,104,'Outrage',120,14,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1,'Avalanche',60,5,1);
		break;
	case "rhydon4":
		chgDef('Lightningrod','Rock Head',2,'Quick Claw',8,12,414,394,276,113,126,116,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Megahorn',120,11,1,'Horn Drill',0,0,3);
		break;
	case "rhyperior1":
		chgDef('Lightningrod','Solid Rock',2,'Focus Band',8,12,371,416,359,131,146,116,'Rock Wrecker',150,12,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Roar',0,0,3);
		break;
	case "rhyperior2":
		chgDef('Lightningrod','Solid Rock',2,'Expert Belt',8,12,371,416,359,131,146,116,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aqua Tail',90,2,1);
		break;
	case "rhyperior3":
		chgDef('Lightningrod','Solid Rock',7,'Focus Sash',8,12,414,316,394,131,146,116,'Horn Drill',0,0,3,'Avalanche',60,5,1,'Payback',60,15,1,'Counter',0,6,1);
		break;
	case "rhyperior4":
		chgDef('Lightningrod','Solid Rock',2,'Choice Band',8,12,414,416,296,131,146,116,'Rock Wrecker',150,12,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Megahorn',120,11,1);
		break;
	case "roserade1":
		chgDef('Natural Cure','Poison Point',16,9,4,7,261,158,146,349,339,216,'Sludge Bomb',90,7,2,'Magical Leaf',60,4,2,'Stun Spore',0,4,3,'Mud-Slap',20,8,2);
		break;
	case "roserade2":
		chgDef('Natural Cure','Poison Point',16,'Big Root',4,7,261,158,146,349,339,216,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Ingrain',0,4,3,'Synthesis',0,4,3);
		break;
	case "roserade3":
		chgDef('Natural Cure','Poison Point',11,'White Herb',4,7,261,158,146,383,246,279,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Hyper Beam',150,0,2,'GrassWhistle',0,4,3);
		break;
	case "roserade4":
		chgDef('Natural Cure','Poison Point',11,'White Herb',4,7,261,158,146,383,246,279,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Shadow Ball',80,13,2,'Weather Ball',50,0,2);
		break;
	case "salamence1":
		chgDef('Intimidate','nil',2,'Cheri Berry',14,9,331,405,196,230,196,299,'Dragon Claw',80,14,1,'Aerial Ace',60,9,1,'Aqua Tail',90,2,1,'Scary Face',0,0,3);
		break;
	case "salamence2":
		chgDef('Intimidate','nil',23,'Razor Fang',14,9,331,369,196,230,196,328,'Dragon Claw',80,14,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Dragon Dance',0,14,3);
		break;
	case "salamence3":
		chgDef('Intimidate','nil',11,'Wise Glasses',14,9,331,275,196,350,196,299,'Draco Meteor',140,14,2,'Hydro Pump',120,2,2,'Flamethrower',95,1,2,'Ominous Wind',60,13,2);
		break;
	case "salamence4":
		chgDef('Intimidate','nil',2,'Lum Berry',14,9,331,405,196,230,196,299,'Outrage',120,14,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Zen Headbutt',80,10,1);
		break;
	case "sceptile1":
		chgDef('Overgrow','nil',23,'Liechi Berry',4,17,281,269,166,221,206,372,'Leaf Blade',90,4,1,'Crunch',80,15,1,'Quick Attack',40,0,1,'Screech',0,0,3);
		break;
	case "sceptile2":
		chgDef('Overgrow','nil',21,'Leftovers',4,17,281,185,166,309,206,372,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "sceptile3":
		chgDef('Overgrow','nil',2,'Scope Lens',4,17,281,295,166,221,206,339,'Leaf Blade',90,4,1,'X-Scissor',80,11,1,'Night Slash',70,15,1,'Aerial Ace',60,9,1);
		break;
	case "sceptile4":
		chgDef('Overgrow','nil',21,1,4,17,281,185,166,309,206,372,'Leaf Storm',140,4,2,'Dragon Pulse',90,14,2,'Focus Blast',120,6,2,'Hyper Beam',150,0,2);
		break;
	case "scizor1":
		chgDef('Swarm','Technician',7,'Brightpowder',11,16,281,359,328,131,196,166,'X-Scissor',80,11,1,'Bullet Punch',40,16,1,'Swords Dance',0,0,3,'Baton Pass',0,0,3);
		break;
	case "scizor2":
		chgDef('Swarm','Technician',18,'Sitrus Berry',11,16,281,359,236,131,284,166,'Metal Claw',50,16,1,'Night Slash',70,15,1,'Iron Defense',0,16,3,'Roost',0,9,3);
		break;
	case "scizor3":
		chgDef('Swarm','Technician',23,'Salac Berry',11,16,281,359,236,131,196,251,'X-Scissor',80,11,1,'Quick Attack',40,0,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "scizor4":
		chgDef('Swarm','Technician',2,1,11,16,281,394,299,131,196,166,'X-Scissor',80,11,1,'Iron Head',80,16,1,'Aerial Ace',60,9,1,'Night Slash',70,15,1);
		break;
	case "shiftry1":
		chgDef('Chlorophyll','Early Bird',23,'Persim Berry',4,15,321,299,156,194,156,284,'Seed Bomb',80,4,1,'Faint Attack',60,15,1,'X-Scissor',80,11,1,'Fake Out',40,0,1);
		break;
	case "shiftry2":
		chgDef('Chlorophyll','Early Bird',16,'Leftovers',4,15,363,212,198,216,217,196,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Double Team',0,0,3,'Synthesis',0,4,3);
		break;
	case "shiftry3":
		chgDef('Chlorophyll','Early Bird',11,'White Herb',4,15,384,212,156,306,156,196,'Leaf Storm',140,4,2,'Dark Pulse',80,15,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2);
		break;
	case "shiftry4":
		chgDef('Chlorophyll','Early Bird',2,'Cheri Berry',4,15,384,328,156,194,156,196,'Seed Bomb',80,4,1,'Sucker Punch',80,15,1,'Aerial Ace',60,9,1,'Explosion',250,0,1);
		break;
	case "shuckle1":
		chgDef('Sturdy','Gluttony',7,'Lax Incense',11,12,223,56,591,50,538,46,'Stone Edge',100,12,1,'Bug Bite',60,11,1,'Swagger',0,0,3,'Power Trick',0,10,3);
		break;
	case "shuckle2":
		chgDef('Sturdy','Gluttony',18,'Grip Claw',11,12,223,56,538,50,591,46,'Wrap',15,0,1,'Swagger',0,0,3,'Attract',0,0,3,'Toxic',0,7,3);
		break;
	case "shuckle3":
		chgDef('Sturdy','Gluttony',7,'Lax Incense',11,12,223,56,591,50,538,46,'Gyro Ball',0,16,1,'Substitute',0,0,3,'Double Team',0,0,3,'Power Trick',0,10,3);
		break;
	case "shuckle4":
		chgDef('Sturdy','Gluttony',16,'Leftovers',11,12,223,50,538,56,591,46,'Toxic',0,7,3,'Substitute',0,0,3,'Double Team',0,0,3,'Sandstorm',0,12,3);
		break;
	case "skarmory1":
		chgDef('Keen Eye','Sturdy',7,1,16,9,271,259,416,104,176,176,'Drill Peck',80,9,1,'Steel Wing',70,16,1,'Spikes',0,8,3,'Roar',0,0,3);
		break;
	case "skarmory2":
		chgDef('Keen Eye','Sturdy',18,'Leftovers',16,9,313,196,358,104,239,176,'Fly',90,9,1,'Toxic',0,7,3,'Double Team',0,0,3,'Roost',0,9,3);
		break;
	case "skarmory3":
		chgDef('Keen Eye','Sturdy',7,'Razor Claw',16,9,271,259,416,104,176,176,'Drill Peck',80,9,1,'Slash',70,0,1,'Payback',60,15,1,'Night Slash',70,15,1);
		break;
	case "skarmory4":
		chgDef('Keen Eye','Sturdy',2,'Life Orb',16,9,271,284,379,104,176,176,'Brave Bird',120,9,1,'Steel Wing',70,16,1,'X-Scissor',80,11,1,'Rock Slide',75,12,1);
		break;
	case "skuntank1":
		chgDef('Stench','Aftermath',2,'Razor Claw',7,15,410,313,170,160,158,204,'Sucker Punch',80,15,1,'Poison Jab',80,7,1,'Slash',70,0,1,'Screech',0,0,3);
		break;
	case "skuntank2":
		chgDef('Stench','Aftermath',23,'Chesto Berry',7,15,410,222,170,160,158,293,'Crunch',80,15,1,'Toxic',0,7,3,'Swagger',0,0,3,'Double Team',0,0,3);
		break;
	case "skuntank3":
		chgDef('Stench','Aftermath',21,8,7,15,347,199,170,241,158,293,'Sludge Bomb',90,7,2,'Dark Pulse',80,15,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2);
		break;
	case "skuntank4":
		chgDef('Stench','Aftermath',23,'Muscle Band',7,15,347,285,170,160,158,293,'Poison Jab',80,7,1,'Night Slash',70,15,1,'Crunch',80,15,1,'Explosion',250,0,1);
		break;
	case "slaking1":
		chgDef('Truant','nil',7,'Lax Incense',0,17,504,356,328,203,166,236,'Facade',70,0,1,'Shadow Claw',70,13,1,'Slack Off',0,0,3,'Yawn',0,0,3);
		break;
	case "slaking2":
		chgDef('Truant','nil',2,'Lum Berry',0,17,441,460,299,203,166,236,'Crush Claw',75,0,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "slaking3":
		chgDef('Truant','nil',23,'Life Orb',0,17,441,419,236,203,166,328,'Return',102,0,1,'Night Slash',70,15,1,'Gunk Shot',120,7,1,'Aerial Ace',60,9,1);
		break;
	case "slaking4":
		chgDef('Truant','nil',2,'Muscle Band',0,17,504,460,236,203,166,236,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Shadow Claw',70,13,1);
		break;
	case "slowbro1":
		chgDef('Oblivious','Own Tempo',6,'Chesto Berry',2,10,331,167,350,299,196,96,'Psychic',90,10,2,'Surf',95,2,2,'Calm Mind',0,10,3,'Yawn',0,0,3);
		break;
	case "slowbro2":
		chgDef('Oblivious','Own Tempo',2,'Expert Belt',2,10,394,273,256,212,196,96,'Zen Headbutt',80,10,1,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Avalanche',60,5,1);
		break;
	case "slowbro3":
		chgDef('Oblivious','Own Tempo',11,'Choice Specs',2,10,394,167,256,328,196,96,'Psychic',90,10,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "slowbro4":
		chgDef('Oblivious','Own Tempo',14,'Leftovers',2,10,394,186,256,328,196,86,'Psychic',90,10,2,'Surf',95,2,2,'Ice Beam',95,5,2,'Trick Room',0,10,3);
		break;
	case "slowking1":
		chgDef('Oblivious','Own Tempo',14,'Shell Bell',2,10,373,186,238,259,298,86,'Psychic',90,10,2,'Brine',60,2,2,'Yawn',0,0,3,'Trick Room',0,10,3);
		break;
	case "slowking2":
		chgDef('Oblivious','Own Tempo',2,'Quick Claw',2,10,394,273,196,212,256,96,'Zen Headbutt',80,10,1,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "slowking3":
		chgDef('Oblivious','Own Tempo',11,'Lum Berry',2,10,331,167,196,328,319,96,'Psychic',90,10,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2,'Focus Blast',120,6,2);
		break;
	case "slowking4":
		chgDef('Oblivious','Own Tempo',11,'Wise Glasses',2,10,394,167,196,328,256,96,'Psychic',90,10,2,'Surf',95,2,2,'Ice Beam',95,5,2,'Flamethrower',95,1,2);
		break;
	case "snorlax1":
		chgDef('Immunity','Thick Fat',2,'Leftovers',0,17,524,350,166,149,256,96,'Return',102,0,1,'Rock Slide',75,12,1,'Curse',0,0,3,'Yawn',0,0,3);
		break;
	case "snorlax2":
		chgDef('Immunity','Thick Fat',2,'Chesto Berry',0,17,461,350,166,149,319,96,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Rest',0,10,3);
		break;
	case "snorlax3":
		chgDef('Immunity','Thick Fat',2,'White Herb',0,17,461,350,166,149,319,96,'Outrage',120,14,1,'Superpower',120,6,1,'Gunk Shot',120,7,1,'Seed Bomb',80,4,1);
		break;
	case "snorlax4":
		chgDef('Immunity','Thick Fat',2,'Life Orb',0,17,524,350,166,149,256,96,'Double-Edge',120,0,1,'Earthquake',100,8,1,'Zen Headbutt',80,10,1,'Crunch',80,15,1);
		break;
	case "staraptor1":
		chgDef('Intimidate','nil',23,'Kings Rock',0,9,311,339,176,122,136,328,'Return',102,0,1,'Aerial Ace',60,9,1,'Double Team',0,0,3,'Roost',0,9,3);
		break;
	case "staraptor2":
		chgDef('Intimidate','nil',23,'Kings Rock',0,9,311,339,176,122,136,328,'Endeavor',0,0,3,'Aerial Ace',60,9,1,'Endure',0,0,3,'Quick Attack',40,0,1);
		break;
	case "staraptor3":
		chgDef('Intimidate','nil',2,'Muscle Band',0,9,311,372,176,122,136,299,'Brave Bird',120,9,1,'Return',102,0,1,'Steel Wing',70,16,1,'Pursuit',40,15,1);
		break;
	case "staraptor4":
		chgDef('Intimidate','nil',2,'Choice Band',0,9,311,372,176,122,136,299,'Brave Bird',120,9,1,'Giga Impact',150,0,1,'Close Combat',120,6,1,'U-turn',70,11,1);
		break;
	case "starmie1":
		chgDef('Illuminate','Natural Cure',21,'Lum Berry',2,10,261,167,206,299,206,361,'Surf',95,2,2,'Psychic',90,10,2,'Confuse Ray',0,13,3,'Thunder Wave',0,3,3);
		break;
	case "starmie2":
		chgDef('Illuminate','Natural Cure',21,'Wide Lens',2,10,261,167,206,299,206,361,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Thunder',120,3,2,'Recover',0,0,3);
		break;
	case "starmie3":
		chgDef('Illuminate','Natural Cure',11,'Wise Glasses',2,10,261,167,206,328,206,329,'Surf',95,2,2,'Psychic',90,10,2,'Power Gem',70,12,2,'Signal Beam',75,11,2);
		break;
	case "starmie4":
		chgDef('Illuminate','Natural Cure',11,'Expert Belt',2,10,261,167,206,328,206,329,'Surf',95,2,2,'Psychic',90,10,2,'Thunderbolt',95,3,2,'Ice Beam',95,5,2);
		break;
	case "steelix1":
		chgDef('Rock Head','Sturdy',7,2,16,8,291,269,548,131,166,96,'Earthquake',100,8,1,'Iron Head',80,16,1,'Crunch',80,15,1,'Sandstorm',0,12,3);
		break;
	case "steelix2":
		chgDef('Rock Head','Sturdy',2,8,16,8,291,295,499,131,166,96,'Earthquake',100,8,1,'Fire Fang',65,1,1,'Thunder Fang',65,3,1,'Ice Fang',65,5,1);
		break;
	case "steelix3":
		chgDef('Rock Head','Sturdy',9,'Iron Ball',16,8,291,269,548,146,166,86,'Gyro Ball',0,16,1,'Payback',60,15,1,'Swagger',0,0,3,'Curse',0,0,3);
		break;
	case "steelix4":
		chgDef('Rock Head','Sturdy',4,'Quick Claw',16,8,291,295,499,146,166,86,'Gyro Ball',0,16,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Explosion',250,0,1);
		break;
	case "suicune1":
		chgDef('Pressure','nil',16,'Focus Sash',2,17,341,167,266,279,361,206,'Surf',95,2,2,'Icy Wind',55,5,2,'Ominous Wind',60,13,2,'Mirror Coat',0,10,3);
		break;
	case "suicune2":
		chgDef('Pressure','nil',23,'Kings Rock',2,17,341,249,266,194,266,295,'Waterfall',80,2,1,'Ice Fang',65,5,1,'Iron Head',80,16,1,'Bite',60,15,1);
		break;
	case "suicune3":
		chgDef('Pressure','nil',6,'Lum Berry',2,17,341,167,361,279,266,206,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Shadow Ball',80,13,2,'Hail',0,5,3);
		break;
	case "suicune4":
		chgDef('Pressure','nil',11,3,2,17,404,167,266,306,266,206,'Surf',95,2,2,'Ice Beam',95,5,2,'Extrasensory',80,10,2,'Calm Mind',0,10,3);
		break;
	case "swampert1":
		chgDef('Torrent','nil',2,'Shell Bell',2,8,404,350,216,185,216,156,'Waterfall',80,2,1,'Earthquake',100,8,1,'Ice Punch',75,5,1,'Protect',0,0,3);
		break;
	case "swampert2":
		chgDef('Torrent','nil',2,'Lum Berry',2,8,404,350,216,185,216,156,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Hammer Arm',100,6,1,'Curse',0,0,3);
		break;
	case "swampert3":
		chgDef('Torrent','nil',11,'Expert Belt',2,8,404,230,216,295,216,156,'Muddy Water',95,2,2,'Earth Power',90,8,2,'Ice Beam',95,5,2,'Counter',0,6,1);
		break;
	case "swampert4":
		chgDef('Torrent','nil',2,4,2,8,404,350,216,185,216,156,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Avalanche',60,5,1,'Mirror Coat',0,10,3);
		break;
	case "tangrowth1":
		chgDef('Chlorophyll','Leaf Guard',11,9,4,17,341,212,349,350,136,136,'Energy Ball',80,4,2,'Sludge Bomb',90,7,2,'Focus Blast',120,6,2,'Sleep Powder',0,4,3);
		break;
	case "tangrowth2":
		chgDef('Chlorophyll','Leaf Guard',6,'Big Root',4,17,383,212,360,298,136,136,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Toxic',0,7,3,'Double Team',0,0,3);
		break;
	case "tangrowth3":
		chgDef('Chlorophyll','Leaf Guard',11,'Heat Rock',4,17,341,212,349,350,136,136,'SolarBeam',120,4,2,'Wring Out',120,0,2,'Synthesis',0,4,3,'Sunny Day',0,1,3);
		break;
	case "tangrowth4":
		chgDef('Chlorophyll','Leaf Guard',2,'Lax Incense',4,17,341,328,349,230,136,136,'Power Whip',120,4,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1,'Brick Break',75,6,1);
		break;
	case "tauros1":
		chgDef('Intimidate','Anger Point',23,'Persim Berry',0,17,291,299,226,104,176,350,'Thrash',90,0,1,'Zen Headbutt',80,10,1,'Pursuit',40,15,1,'Scary Face',0,0,3);
		break;
	case "tauros2":
		chgDef('Intimidate','Anger Point',2,'Life Orb',0,17,291,328,226,104,176,319,'Facade',70,0,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Payback',60,15,1);
		break;
	case "tauros3":
		chgDef('Intimidate','Anger Point',23,'Lum Berry',0,17,291,299,226,104,176,350,'Giga Impact',150,0,1,'Earthquake',100,8,1,'Outrage',120,14,1,'Iron Tail',100,16,1);
		break;
	case "tauros4":
		chgDef('Intimidate','Anger Point',2,'Choice Band',0,17,291,328,226,104,176,319,'Return',102,0,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Zen Headbutt',80,10,1);
		break;
	case "tentacruel1":
		chgDef('Clear Body','Liquid Ooze',21,3,2,7,301,158,166,259,276,328,'Surf',95,2,2,'Sludge Bomb',90,7,2,'Icy Wind',55,5,2,'Barrier',0,10,3);
		break;
	case "tentacruel2":
		chgDef('Clear Body','Liquid Ooze',16,'Black Sludge',2,7,364,158,166,196,372,236,'Toxic',0,7,3,'Giga Drain',60,4,2,'Attract',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "tentacruel3":
		chgDef('Clear Body','Liquid Ooze',11,'Focus Sash',2,7,301,158,166,284,339,236,'Surf',95,2,2,'Sludge Bomb',90,7,2,'Giga Drain',60,4,2,'Mirror Coat',0,10,2);
		break;
	case "tentacruel4":
		chgDef('Clear Body','Liquid Ooze',21,'Scope Lens',2,7,301,158,166,259,276,328,'Hydro Pump',120,2,2,'Sludge Bomb',90,7,2,'Ice Beam',95,5,2,'Wring Out',120,0,2);
		break;
	case "togekiss1":
		chgDef('Hustle','Serene Grace',2,'Power Herb',0,9,311,218,226,248,329,196,'Sky Attack',140,9,1,'ExtremeSpeed',80,0,1,'Drain Punch',60,6,1,'Roost',0,9,3);
		break;
	case "togekiss2":
		chgDef('Hustle','Serene Grace',11,'Scope Lens',0,9,374,122,226,372,266,196,'Air Slash',75,9,2,'Ominous Wind',60,13,2,'Silver Wind',60,11,2,'AncientPower',60,12,2);
		break;
	case "togekiss3":
		chgDef('Hustle','Serene Grace',11,'Wise Glasses',0,9,311,122,226,372,266,259,'Air Slash',75,9,2,'Heat Wave',100,1,2,'Signal Beam',75,11,2,'Magical Leaf',60,4,2);
		break;
	case "togekiss4":
		chgDef('Hustle','Serene Grace',11,'Expert Belt',0,9,311,122,226,372,266,259,'Hyper Beam',150,0,2,'Air Slash',75,9,2,'Aura Sphere',80,6,2,'Psychic',90,10,2);
		break;
	case "torterra1":
		chgDef('Overgrow','nil',2,5,4,8,394,348,246,167,206,148,'Earthquake',100,8,1,'Grass Knot',60,4,2,'Rock Slide',75,12,1,'Curse',0,0,3);
		break;
	case "torterra2":
		chgDef('Overgrow','nil',19,'Leftovers',4,8,373,254,288,186,272,133,'Giga Drain',60,4,2,'Leech Seed',0,4,3,'Synthesis',0,4,3,'Amnesia',0,10,3);
		break;
	case "torterra3":
		chgDef('Overgrow','nil',11,'Lax Incense',4,8,331,228,309,273,206,148,'Frenzy Plant',150,4,2,'Earth Power',90,8,2,'Hyper Beam',150,0,2,'Leech Seed',0,4,3);
		break;
	case "torterra4":
		chgDef('Overgrow','nil',2,'Quick Claw',4,8,394,348,246,167,206,148,'Wood Hammer',120,4,1,'Earthquake',100,8,1,'Stone Edge',100,12,1,'Crunch',80,15,1);
		break;
	case "toxicroak1":
		chgDef('Anticipation','Dry Skin',2,'Black Sludge',7,6,307,342,166,187,166,269,'Poison Jab',80,7,1,'Brick Break',75,6,1,'X-Scissor',80,11,1,'Knock Off',20,15,1);
		break;
	case "toxicroak2":
		chgDef('Anticipation','Dry Skin',2,'Wide Lens',7,6,307,342,166,187,166,269,'DynamicPunch',100,6,1,'Poison Jab',80,7,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "toxicroak3":
		chgDef('Anticipation','Dry Skin',11,'Wise Glasses',7,6,307,223,166,298,166,269,'Sludge Bomb',90,7,2,'Focus Blast',120,6,2,'Shadow Ball',80,13,2,'Dark Pulse',80,15,2);
		break;
	case "toxicroak4":
		chgDef('Anticipation','Dry Skin',2,'Razor Claw',7,6,307,342,166,187,166,269,'Gunk Shot',120,7,1,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Stone Edge',100,12,1);
		break;
	case "typhlosion1":
		chgDef('Blaze','nil',2,'Scope Lens',1,17,297,293,192,228,206,299,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Shadow Claw',70,13,1,'Quick Attack',40,0,1);
		break;
	case "typhlosion2":
		chgDef('Blaze','nil',20,'Salac Berry',1,17,297,267,192,317,206,236,'Blast Burn',150,1,2,'Earthquake',100,8,1,'Reversal',0,6,1,'Endure',0,0,3);
		break;
	case "typhlosion3":
		chgDef('Blaze','nil',2,8,1,17,297,293,192,228,206,299,'Flare Blitz',120,1,1,'Earthquake',100,8,1,'Shadow Claw',70,13,1,'Aerial Ace',60,9,1);
		break;
	case "typhlosion4":
		chgDef('Blaze','nil',11,'White Herb',1,17,297,183,192,348,206,299,'Overheat',140,1,2,'SolarBeam',120,4,2,'Focus Blast',120,6,2,'Sunny Day',0,1,3);
		break;
	case "tyranitar1":
		chgDef('Sand Stream','nil',4,'Focus Band',12,15,341,403,256,226,299,142,'Rock Slide',75,12,1,'Payback',60,15,1,'Avalanche',60,5,1,'Curse',0,0,3);
		break;
	case "tyranitar2":
		chgDef('Sand Stream','nil',23,'Choice Scarf',12,15,341,367,256,203,236,243,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1);
		break;
	case "tyranitar3":
		chgDef('Sand Stream','nil',2,'White Herb',12,15,341,403,319,203,236,158,'Superpower',120,6,1,'Dragon Claw',80,14,1,'Shadow Claw',70,13,1,'Aqua Tail',90,2,1);
		break;
	case "tyranitar4":
		chgDef('Sand Stream','nil',2,6,12,15,404,403,256,203,236,158,'Stone Edge',100,12,1,'Crunch',80,15,1,'Earthquake',100,8,1,'Dragon Dance',0,14,3);
		break;
	case "umbreon1":
		chgDef('Synchronize','nil',18,'Leftovers',15,17,331,166,319,140,394,166,'Payback',60,15,1,'Confuse Ray',0,13,3,'Curse',0,0,3,'Baton Pass',0,0,3);
		break;
	case "umbreon2":
		chgDef('Synchronize','nil',7,'Leftovers',15,17,331,166,350,140,359,166,'Toxic',0,7,3,'Mean Look',0,0,3,'Double Team',0,0,3,'Confuse Ray',0,13,3);
		break;
	case "umbreon3":
		chgDef('Synchronize','nil',7,'Lax Incense',15,17,394,166,350,140,296,166,'Faint Attack',60,15,1,'Swagger',0,0,3,'Psych Up',0,10,3,'Screech',0,0,3);
		break;
	case "umbreon4":
		chgDef('Synchronize','nil',7,'Brightpowder',15,17,331,166,350,140,359,166,'Payback',60,15,1,'Trump Card',40,0,1,'Curse',0,0,3,'Moonlight',0,0,3);
		break;
	case "ursaring1":
		chgDef('Guts','Quick Feet',4,'Focus Sash',0,17,384,394,186,186,186,131,'Slash',70,0,1,'Payback',60,15,1,'Avalanche',60,5,1,'Counter',0,6,1);
		break;
	case "ursaring2":
		chgDef('Guts','Quick Feet',2,'Life Orb',0,17,384,394,186,167,186,146,'Hammer Arm',100,6,1,'Fire Punch',75,1,1,'ThunderPunch',75,3,1,'Ice Punch',75,5,1);
		break;
	case "ursaring3":
		chgDef('Guts','Quick Feet',2,'Toxic Orb',0,17,384,394,186,167,186,146,'Facade',70,0,1,'Superpower',120,6,1,'Crunch',80,15,1,'Protect',0,0,3);
		break;
	case "ursaring4":
		chgDef('Guts','Quick Feet',2,'Quick Claw',0,17,384,394,186,167,186,146,'Return',102,0,1,'Cross Chop',100,6,1,'Earthquake',100,8,1,'Aerial Ace',60,9,1);
		break;
	case "vaporeon1":
		chgDef('Water Absorb',11,'Brightpowder',2,17,464,149,156,350,226,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Acid Armor',0,7,3,'Baton Pass',0,0,3);
		break;
	case "vaporeon2":
		chgDef('Water Absorb',11,'Damp Rock',2,17,464,149,156,350,226,166,'Hydro Pump',120,2,2,'Ice Beam',95,5,2,'Acid Armor',0,7,3,'Rain Dance',0,2,3);
		break;
	case "vaporeon3":
		chgDef('Water Absorb',11,'Leftovers',2,17,464,149,156,350,226,166,'Muddy Water',95,2,2,'Blizzard',120,5,2,'Aqua Ring',0,2,3,'Yawn',0,0,3);
		break;
	case "vaporeon4":
		chgDef('Water Absorb',11,'Expert Belt',2,17,464,149,156,350,226,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Shadow Ball',80,13,2,'Signal Beam',75,11,2);
		break;
	case "venusaur1":
		chgDef('Overgrow','nil',11,'White Herb',4,7,301,180,202,328,299,196,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Amnesia',0,10,3,'Sleep Powder',0,4,3);
		break;
	case "venusaur2":
		chgDef('Overgrow','nil',6,'Big Root',4,7,343,180,268,236,278,196,'Giga Drain',60,4,2,'Ingrain',0,4,3,'Leech Seed',0,4,3,'Sleep Powder',0,4,3);
		break;
	case "venusaur3":
		chgDef('Overgrow','nil',2,'Black Sludge',4,7,301,289,202,212,299,196,'Seed Bomb',80,4,1,'Earthquake',100,8,1,'Outrage',120,14,1,'Curse',0,0,3);
		break;
	case "venusaur4":
		chgDef('Overgrow','nil',11,'Wise Glasses',4,7,364,180,202,328,236,196,'Frenzy Plant',150,4,2,'Sludge Bomb',90,7,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "vespiquen1":
		chgDef('Pressure','nil',11,'Scope Lens',11,9,281,176,303,215,303,116,'Silver Wind',60,11,2,'Air Cutter',55,9,2,'Ominous Wind',60,13,2,'Swagger',0,0,3);
		break;
	case "vespiquen2":
		chgDef('Pressure','nil',18,'Persim Berry',11,9,323,196,282,176,310,116,'X-Scissor',80,11,1,'Toxic',0,7,3,'Heal Order',0,11,3,'Destiny Bond',0,13,3);
		break;
	case "vespiquen3":
		chgDef('Pressure','nil',2,'Muscle Band',11,9,344,284,240,176,240,116,'X-Scissor',80,11,1,'Aerial Ace',60,9,1,'Pursuit',40,15,1,'U-turn',70,11,1);
		break;
	case "vespiquen4":
		chgDef('Pressure','nil',2,'Shell Bell',11,9,344,284,240,176,240,116,'Attack Order',90,11,1,'Defend Order',0,11,3,'Heal Order',0,11,3,'Confuse Ray',0,13,3);
		break;
	case "victreebel1":
		chgDef('Chlorophyll','nil',11,10,4,7,364,221,166,328,156,176,'Leaf Storm',140,4,2,'Sludge Bomb',90,7,2,'Sleep Powder',0,4,3,'Gastro Acid',0,7,3);
		break;
	case "victreebel2":
		chgDef('Chlorophyll','nil',2,'Black Sludge',4,7,364,339,166,212,156,176,'Seed Bomb',80,4,1,'Spit Up',100,0,2,'Swallow',0,0,3,'Stockpile',0,0,3);
		break;
	case "victreebel3":
		chgDef('Chlorophyll','nil',11,'Power Herb',4,7,364,221,166,328,156,176,'Sludge Bomb',90,7,2,'SolarBeam',120,4,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "victreebel4":
		chgDef('Chlorophyll','nil',11,'Focus Band',4,7,364,221,166,328,156,176,'SolarBeam',120,4,2,'Sludge Bomb',90,7,2,'Wring Out',120,0,2,'Sunny Day',0,1,3);
		break;
	case "vileplume1":
		chgDef('Chlorophyll','nil',11,'Big Root',4,7,291,176,269,328,216,136,'Giga Drain',60,4,2,'Sludge Bomb',90,7,2,'Sleep Powder',0,4,3,'Ingrain',0,4,3);
		break;
	case "vileplume2":
		chgDef('Chlorophyll','nil',6,'Black Sludge',4,7,333,176,272,236,258,136,'Toxic',0,7,3,'Grass Knot',60,4,2,'Double Team',0,0,3,'Attract',0,0,3);
		break;
	case "vileplume3":
		chgDef('Chlorophyll','nil',2,'Lum Berry',4,7,291,284,206,212,279,136,'Seed Bomb',80,4,1,'Drain Punch',60,6,1,'Frustration',102,0,1,'Swords Dance',0,0,3);
		break;
	case "vileplume4":
		chgDef('Chlorophyll','nil',11,'Wise Glasses',4,7,354,176,206,328,216,136,'Sludge Bomb',90,7,2,'Energy Ball',80,4,2,'Hyper Beam',150,0,2,'Synthesis',0,4,3);
		break;
	case "wailord1":
		chgDef('Water Veil','Oblivious',11,'Sitrus Berry',2,17,544,194,126,306,126,156,'Surf',95,2,2,'Ice Beam',95,5,2,'Attract',0,0,3,'Double Team',0,0,3);
		break;
	case "wailord2":
		chgDef('Water Veil','Oblivious',7,'Chesto Berry',2,17,523,216,184,194,168,156,'Whirlpool',15,2,2,'Toxic',0,7,3,'Amnesia',0,10,3,'Rest',0,10,3);
		break;
	case "wailord3":
		chgDef('Water Veil','Oblivious',2,'Leftovers',2,17,544,306,126,194,126,156,'Waterfall',80,2,1,'Avalanche',60,5,1,'Earthquake',100,8,1,'Curse',0,0,3);
		break;
	case "wailord4":
		chgDef('Water Veil','Oblivious',11,'Quick Claw',2,17,544,194,126,306,126,156,'Hydro Pump',120,2,2,'Blizzard',120,5,2,'Hyper Beam',150,0,2,'Fissure',0,8,3);
		break;
	case "walrein1":
		chgDef('Thick Fat','Ice Body',2,6,5,2,424,284,216,203,216,166,'Ice Fang',65,5,1,'Aqua Tail',90,2,1,'Swagger',0,0,3,'Encore',0,0,3);
		break;
	case "walrein2":
		chgDef('Thick Fat','Ice Body',4,'Life Orb',5,2,424,284,216,226,216,149,'Avalanche',60,5,1,'Earthquake',100,8,1,'Crunch',80,15,1,'Curse',0,0,3);
		break;
	case "walrein3":
		chgDef('Thick Fat','Ice Body',6,'Lax Incense',5,2,361,176,306,226,279,166,'Sheer Cold',0,5,3,'Fissure',0,8,3,'Rest',0,10,3,'Sleep Talk',0,0,3);
		break;
	case "walrein4":
		chgDef('Thick Fat','Ice Body',11,'Leftovers',5,2,424,176,216,317,216,166,'Surf',95,2,2,'Ice Beam',95,5,2,'Signal Beam',75,11,2,'Hail',0,5,3);
		break;
	case "weavile1":
		chgDef('Pressure','nil',2,6,15,5,281,372,166,113,206,349,'Night Slash',70,15,1,'Ice Punch',75,5,1,'Screech',0,0,3,'Fake Out',40,0,1);
		break;
	case "weavile2":
		chgDef('Pressure','nil',23,'Brightpowder',15,5,281,339,166,113,206,383,'Night Slash',70,15,1,'Attract',0,0,3,'Double Team',0,0,3,'Hail',0,5,3);
		break;
	case "weavile3":
		chgDef('Pressure','nil',2,'Focus Sash',15,5,281,372,166,113,206,349,'Night Slash',70,15,1,'X-Scissor',80,11,1,'Metal Claw',50,16,1,'Counter',0,6,1);
		break;
	case "weavile4":
		chgDef('Pressure','nil',23,'Razor Claw',15,5,281,339,166,113,206,383,'Night Slash',70,15,1,'Ice Punch',75,5,1,'Aerial Ace',60,9,1,'Brick Break',75,6,1);
		break;
	case "weezing1":
		chgDef('Levitate','nil',6,10,7,17,271,194,372,269,176,156,'Sludge Bomb',90,7,2,'Dark Pulse',80,15,2,'Shock Wave',60,3,2,'Grudge',0,13,3);
		break;
	case "weezing2":
		chgDef('Levitate','nil',2,'Sitrus Berry',7,17,271,306,339,185,176,156,'Double Hit',35,0,1,'Payback',60,15,1,'Toxic',0,7,3,'Swagger',0,0,3);
		break;
	case "weezing3":
		chgDef('Levitate','nil',19,'Lax Incense',7,17,271,216,276,269,262,140,'Sludge Bomb',90,7,2,'Thunderbolt',95,3,2,'Dark Pulse',80,15,2,'Explosion',250,0,1);
		break;
	case "weezing4":
		chgDef('Levitate','nil',11,'Quick Claw',7,17,271,194,339,295,176,156,'Sludge Bomb',90,7,2,'Flamethrower',95,1,2,'Shadow Ball',80,13,2,'Destiny Bond',0,13,3);
		break;
	case "whiscash1":
		chgDef('Oblivious','Anticipation',11,'Shell Bell',2,8,424,172,182,276,178,156,'Surf',95,2,2,'Earth Power',90,8,2,'Icy Wind',55,5,2,'Amnesia',0,10,3);
		break;
	case "whiscash2":
		chgDef('Oblivious','Anticipation',2,'Persim Berry',2,8,424,280,182,169,178,156,'Aqua Tail',90,2,1,'Earthquake',100,8,1,'Rock Slide',75,12,1,'Thrash',90,0,1);
		break;
	case "whiscash3":
		chgDef('Oblivious','Anticipation',11,'Zoom Lens',2,8,424,172,182,276,178,156,'Hydro Pump',120,2,2,'Earth Power',90,8,2,'Blizzard',120,5,2,'Fissure',0,8,3);
		break;
	case "whiscash4":
		chgDef('Oblivious','Anticipation',2,'Muscle Band',2,8,424,280,182,169,178,156,'Earthquake',100,8,1,'Aqua Tail',90,2,1,'Zen Headbutt',80,10,1,'Stone Edge',100,12,1);
		break;
	case "yanmega1":
		chgDef('Speed Boost','Tinted Lens',21,9,11,9,313,169,208,331,148,317,'Signal Beam',75,11,2,'Air Cutter',55,9,2,'Detect',0,0,3,'Double Team',0,0,3);
		break;
	case "yanmega2":
		chgDef('Speed Boost','Tinted Lens',2,'Muscle Band',11,9,313,276,208,241,148,289,'Aerial Ace',60,9,1,'U-turn',70,11,1,'Night Slash',70,15,1,'Steel Wing',70,16,1);
		break;
	case "yanmega3":
		chgDef('Speed Boost','Tinted Lens',11,'Lum Berry',11,9,313,169,208,364,148,289,'Silver Wind',60,11,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2,'Giga Drain',60,4,2);
		break;
	case "yanmega4":
		chgDef('Speed Boost','Tinted Lens',11,'Wise Glasses',11,9,313,169,208,364,148,289,'Bug Buzz',90,11,2,'Air Slash',75,9,2,'Psychic',90,10,2,'Shadow Ball',80,13,2);
		break;
	case "zapdos1":
		chgDef('Pressure','nil',20,5,3,9,321,279,206,286,216,299,'Thunder',120,3,2,'Drill Peck',80,9,1,'Thunder Wave',0,3,3,'Rain Dance',0,2,3);
		break;
	case "zapdos2":
		chgDef('Pressure','nil',21,'Focus Band',3,9,321,194,206,349,216,328,'Thunderbolt',95,3,2,'AncientPower',60,12,2,'Ominous Wind',60,13,2,'Light Screen',0,10,3);
		break;
	case "zapdos3":
		chgDef('Pressure','nil',23,'Kings Rock',3,9,321,279,206,257,216,328,'Drill Peck',80,9,1,'Twister',40,14,1,'Steel Wing',70,16,1,'U-turn',70,11,1);
		break;
	case "zapdos4":
		chgDef('Pressure','nil',11,'Brightpowder',3,9,321,194,206,383,216,299,'Thunderbolt',95,3,2,'Air Cutter',55,9,2,'Heat Wave',100,1,2,'Signal Beam',75,11,2);
		break;
	}
}

function chgDef(abil1,abil2,nature,item,type1,type2,hp,atk,def,spa,spd,spe,move1,bp1,mt1,ps1,move2,bp2,mt2,ps2,move3,bp3,mt3,ps3,move4,bp4,mt4,ps4){
	
	gyroball();
	
	document.dc.ability2.options.length = 0;
	if(abil2=="nil"){
		document.dc.ability2.options.length = 1;
		document.dc.ability2.options[0] = new Option(abil1,abil1);
	}
	else{
		document.dc.ability2.options.length = 2;
		document.dc.ability2.options[0] = new Option(abil1,abil1);
		document.dc.ability2.options[1] = new Option(abil2,abil2);
	}
	
	document.getElementById("nature2").value=nature;
	document.getElementById("item2").value=item;
	document.getElementById("type12").value=type1;
	document.getElementById("type22").value=type2;	
	document.dc.hp2.value=(hp-waveadjust);
	document.dc.atk2.value=(atk-waveadjust);
	document.dc.def2.value=(def-waveadjust);
	document.dc.spa2.value=(spa-waveadjust);
	document.dc.spd2.value=(spd-waveadjust);
	document.dc.spe2.value=(spe-waveadjust);
	document.dc.move12.value=move1;
	document.dc.bp12.value=bp1;
	document.getElementById("mt12").value=mt1;
	document.getElementById("ps12").value=ps1;
	document.dc.move22.value=move2;
	document.dc.bp22.value=bp2;
	document.getElementById("mt22").value=mt2;
	document.getElementById("ps22").value=ps2;
	document.dc.move32.value=move3;
	document.dc.bp32.value=bp3;
	document.getElementById("mt32").value=mt3;
	document.getElementById("ps32").value=ps3;
	document.dc.move42.value=move4;
	document.dc.bp42.value=bp4;
	document.getElementById("mt42").value=mt4;
	document.getElementById("ps42").value=ps4;
	
	document.dc.atks2.value=0;
	document.dc.defs2.value=0;
	document.dc.spas2.value=0;
	document.dc.spds2.value=0;
	document.dc.spes2.value=0;
	
	manageAddedLines();
	
	if((document.getElementById("attacker").value!="")&&(document.getElementById("defender").value!="")){
		damageCalc();
	}
}

function manageAddedLines(){
	
	var move11 = document.dc.move11.value;
	var move21 = document.dc.move21.value;
	var move31 = document.dc.move31.value;
	var move41 = document.dc.move41.value;
	var move12 = document.dc.move12.value;
	var move22 = document.dc.move22.value;
	var move32 = document.dc.move32.value;
	var move42 = document.dc.move42.value;
	var addedlinesatk = 0;
	var addedlinesdef = 0;
	
	var abil1 = document.dc.ability1.value;
	var abil2 = document.dc.ability2.value;
	var item1 = document.dc.item1.value;
	var item2 = document.dc.item2.value;
	
	document.getElementById("blaze1").innerHTML = "";
	document.getElementById("blaze2").innerHTML = "";
	
	// Blaze, Torrent, Overgrow, Swarm
	if(abil1=="Blaze"||abil1=="Torrent"||abil1=="Overgrow"||abil1=="Swarm"){
		document.getElementById("blaze1").innerHTML += 'HP less than 1/3? <input type="checkbox" name="hpcheck1" onclick="damageCalc()"> ';
		if(addedlinesatk==0) addedlinesatk++;
	}
	if(abil2=="Blaze"||abil2=="Torrent"||abil2=="Overgrow"||abil2=="Swarm"){
		document.getElementById("blaze2").innerHTML += 'HP less than 1/3? <input type="checkbox" name="hpcheck2" onclick="damageCalc()"> ';
		if(addedlinesdef==0) addedlinesdef++;
	}
	
	// Type-resisting Berries
	if(item1==parseInt(item1,10)){
		document.getElementById("blaze1").innerHTML += ' Ignore effects of TRB? <input type="checkbox" name="ignoreberry1" onclick="damageCalc()"> ';
		if(addedlinesatk==0) addedlinesatk++;
	}
	if(item2==parseInt(item2,10)){
		document.getElementById("blaze2").innerHTML += ' Ignore effects of TRB? <input type="checkbox" name="ignoreberry2" onclick="damageCalc()"> ';
		if(addedlinesdef==0) addedlinesdef++;
	}
	
	// Iron Ball flung yes/no (don't need to care about overflowing into two lines because Iron Ball and TRBs are mutually exclusive)
	if(item1=="Iron Ball"&&(move11=="Fling"||move21=="Fling"||move31=="Fling"||move41=="Fling")){
		document.getElementById("blaze1").innerHTML += ' Has item been Flung? <input type="checkbox" name="fling1" onclick="damageCalc()"> ';
		if(addedlinesatk==0) addedlinesatk++;
	}
	if(item2=="Iron Ball"&&(move12=="Fling"||move22=="Fling"||move32=="Fling"||move42=="Fling")){
		document.getElementById("blaze2").innerHTML += ' Has item been Flung? <input type="checkbox" name="fling2" onclick="damageCalc()"> ';
		if(addedlinesdef==0) addedlinesdef++;
	}
	
	if(addedlinesatk>addedlinesdef) document.getElementById("blaze2").innerHTML += "<br />";
	if(addedlinesdef>addedlinesatk) document.getElementById("blaze1").innerHTML += "<br />";
	
	weatherball(); // doesn't add any functionality except for presentation
}

function damageCalc(){
	if((document.getElementById("attacker").value!="")&&(document.getElementById("defender").value!="")){
		var item1 = document.getElementById("item1").value;
		var item2 = document.getElementById("item2").value;
		var abil1 = document.getElementById("ability1").value;
		var abil2 = document.getElementById("ability2").value;
				
		var atkid = document.getElementById("attacker").value;
		var atkint = atkid.substring(0, atkid.length - 1);
		var atkmon = atkint.charAt(0).toUpperCase() + atkint.slice(1);
		if(atkmon=="Mrmime") atkmon = "Mr. Mime";
		if(atkmon=="Porygonz") atkmon = "Porygon-Z";
		
		var defid = document.getElementById("defender").value;
		var defint = defid.substring(0,defid.length - 1);
		var defmon = defint.charAt(0).toUpperCase() + defint.slice(1);
		if(defmon=="Mrmime") defmon = "Mr. Mime";
		if(defmon=="Porygonz") defmon = "Porygon-Z";
		
		var type11 = document.getElementById("type11").value;
		var type21 = document.getElementById("type21").value;
		var type12 = document.getElementById("type12").value;
		var type22 = document.getElementById("type22").value;
		
		var hp1 = parseInt(document.dc.hp1.value,10);
		var atk1 = parseInt(document.dc.atk1.value,10);
		var def1 = parseInt(document.dc.def1.value,10);
		var spa1 = parseInt(document.dc.spa1.value,10);
		var spd1 = parseInt(document.dc.spd1.value,10);
		var spe1 = parseInt(document.dc.spe1.value,10);
		var hp2 = parseInt(document.dc.hp2.value,10);
		var atk2 = parseInt(document.dc.atk2.value,10);
		var def2 = parseInt(document.dc.def2.value,10);
		var spa2 = parseInt(document.dc.spa2.value,10);
		var spd2 = parseInt(document.dc.spd2.value,10);
		var spe2 = parseInt(document.dc.spe2.value,10);
	
		var move11 = document.dc.move11.value;
		var bp11 = parseInt(document.dc.bp11.value,10);
		var mt11 = parseInt(document.dc.mt11.value,10);
		var ps11 = parseInt(document.dc.ps11.value,10);
		var move21 = document.dc.move21.value;
		var bp21 = parseInt(document.dc.bp21.value,10);
		var mt21 = parseInt(document.dc.mt21.value,10);
		var ps21 = parseInt(document.dc.ps21.value,10);
		var move31 = document.dc.move31.value;
		var bp31 = parseInt(document.dc.bp31.value,10);
		var mt31 = parseInt(document.dc.mt31.value,10);
		var ps31 = parseInt(document.dc.ps31.value,10);
		var move41 = document.dc.move41.value;
		var bp41 = parseInt(document.dc.bp41.value,10);
		var mt41 = parseInt(document.dc.mt41.value,10);
		var ps41 = parseInt(document.dc.ps41.value,10);
		
		var move12 = document.dc.move12.value;
		var bp12 = parseInt(document.dc.bp12.value,10);
		var mt12 = parseInt(document.dc.mt12.value,10);
		var ps12 = parseInt(document.dc.ps12.value,10);
		var move22 = document.dc.move22.value;
		var bp22 = parseInt(document.dc.bp22.value,10);
		var mt22 = parseInt(document.dc.mt22.value,10);
		var ps22 = parseInt(document.dc.ps22.value,10);
		var move32 = document.dc.move32.value;
		var bp32 = parseInt(document.dc.bp32.value,10);
		var mt32 = parseInt(document.dc.mt32.value,10);
		var ps32 = parseInt(document.dc.ps32.value,10);
		var move42 = document.dc.move42.value;
		var bp42 = parseInt(document.dc.bp42.value,10);
		var mt42 = parseInt(document.dc.mt42.value,10);
		var ps42 = parseInt(document.dc.ps42.value,10);
		
		var tr;
		if(document.dc.trickroom.checked==true) tr = 1;
		if(document.dc.trickroom.checked==false) tr = 0;
		
		var berry1 = 1;
		if(item1==parseInt(item1,10)&&document.dc.ignoreberry1.checked==true) berry1 = 0;
		var berry2 = 1;
		if(item2==parseInt(item2,10)&&document.dc.ignoreberry2.checked==true) berry2 = 0;
		
		// Speed modification and speedcheck
		
		var spemod1 = document.dc.spes1.value;
		var spemod2 = document.dc.spes2.value;
		var fling1 = 0;
		if(item1=="Iron Ball"&&(move11=="Fling"||move21=="Fling"||move31=="Fling"||move41=="Fling")){
			if(document.dc.fling1.checked==true) fling1 = 1;
		}
		var fling2 = 0;
		if(item2=="Iron Ball"&&(move12=="Fling"||move22=="Fling"||move32=="Fling"||move42=="Fling")){
			if(document.dc.fling2.checked==true) fling2 = 1;
		}
		if(document.dc.status1.value=="para"&&abil1!="Quick Feet") spe1 = Math.floor(spe1*0.25);
		else if(spemod1=="6p") spe1 = Math.floor(spe1*4);
		else if(spemod1=="5p") spe1 = Math.floor(spe1*3.5);
		else if(spemod1=="4p") spe1 = Math.floor(spe1*3);
		else if(spemod1=="3p") spe1 = Math.floor(spe1*2.5);
		else if(spemod1=="2p") spe1 = Math.floor(spe1*2);
		else if(spemod1=="1p") spe1 = Math.floor(spe1*1.5);
		else if(spemod1=="1n") spe1 = Math.floor(spe1*0.6667);
		else if(spemod1=="2n") spe1 = Math.floor(spe1*0.5);
		else if(spemod1=="3n") spe1 = Math.floor(spe1*0.4);
		else if(spemod1=="4n") spe1 = Math.floor(spe1*0.3333);
		else if(spemod1=="5n") spe1 = Math.floor(spe1*0.2857);
		else if(spemod1=="6n") spe1 = Math.floor(spe1*0.25);
		else spe1 = spe1;
		if(document.dc.status2.value=="para"&&abil2!="Quick Feet") spe2 = Math.floor(spe2*0.25);
		else if(spemod2=="6p") spe2 = Math.floor(spe2*4);
		else if(spemod2=="5p") spe2 = Math.floor(spe2*3.5);
		else if(spemod2=="4p") spe2 = Math.floor(spe2*3);
		else if(spemod2=="3p") spe2 = Math.floor(spe2*2.5);
		else if(spemod2=="2p") spe2 = Math.floor(spe2*2);
		else if(spemod2=="1p") spe2 = Math.floor(spe2*1.5);
		else if(spemod2=="1n") spe2 = Math.floor(spe2*0.6667);
		else if(spemod2=="2n") spe2 = Math.floor(spe2*0.5);
		else if(spemod2=="3n") spe2 = Math.floor(spe2*0.4);
		else if(spemod2=="4n") spe2 = Math.floor(spe2*0.3333);
		else if(spemod2=="5n") spe2 = Math.floor(spe2*0.2857);
		else if(spemod2=="6n") spe2 = Math.floor(spe2*0.25);
		else spe2 = spe2;
		
		if(abil1=="Quick Feet"&&document.dc.status1.value!="none") spe1 = Math.floor(spe1*1.5);
		if(abil2=="Quick Feet"&&document.dc.status2.value!="none") spe2 = Math.floor(spe2*1.5);
		if(item1=="Choice Scarf") spe1 = Math.floor(spe1*1.5);
		if(item2=="Choice Scarf") spe2 = Math.floor(spe2*1.5);
		if(item1=="Iron Ball"&&fling1==0) spe1 = Math.floor(spe1*0.5);
		if(item2=="Iron Ball"&&fling2==0) spe2 = Math.floor(spe2*0.5);
		
		gyroball(spe1,spe2);
		if(move11=="Gyro Ball") bp11 = parseInt(document.dc.bp11.value,10);
		if(move21=="Gyro Ball") bp21 = parseInt(document.dc.bp21.value,10);
		if(move31=="Gyro Ball") bp31 = parseInt(document.dc.bp31.value,10);
		if(move41=="Gyro Ball") bp41 = parseInt(document.dc.bp41.value,10);
		if(move12=="Gyro Ball") bp12 = parseInt(document.dc.bp12.value,10);
		if(move22=="Gyro Ball") bp22 = parseInt(document.dc.bp22.value,10);
		if(move32=="Gyro Ball") bp32 = parseInt(document.dc.bp32.value,10);
		if(move42=="Gyro Ball") bp42 = parseInt(document.dc.bp42.value,10);
		
		weatherball();
		if(move11=="Weather Ball"){
			bp11 = parseInt(document.dc.bp11.value,10);
			mt11 = parseInt(document.dc.mt11.value,10);
		}
		if(move21=="Weather Ball"){
			bp21 = parseInt(document.dc.bp21.value,10);
			mt21 = parseInt(document.dc.mt21.value,10);
		}
		if(move31=="Weather Ball"){
			bp31 = parseInt(document.dc.bp31.value,10);
			mt31 = parseInt(document.dc.mt31.value,10);
		}
		if(move41=="Weather Ball"){
			bp41 = parseInt(document.dc.bp41.value,10);
			mt41 = parseInt(document.dc.mt41.value,10);
		}
		if(move12=="Weather Ball"){
			bp12 = parseInt(document.dc.bp12.value,10);
			mt12 = parseInt(document.dc.mt12.value,10);
		}
		if(move22=="Weather Ball"){
			bp22 = parseInt(document.dc.bp22.value,10);
			mt22 = parseInt(document.dc.mt22.value,10);
		}
		if(move32=="Weather Ball"){
			bp32 = parseInt(document.dc.bp32.value,10);
			mt32 = parseInt(document.dc.mt32.value,10);
		}
		if(move42=="Weather Ball"){
			bp42 = parseInt(document.dc.bp42.value,10);
			mt42 = parseInt(document.dc.mt42.value,10);
		}
		
		if(tr==0){
			if(spe1>spe2){
				document.getElementById("speeddata").innerHTML = atkmon + " outspeeds " + defmon + " :D <br />";
			}
			else if(spe1<spe2){
				document.getElementById("speeddata").innerHTML = defmon + " outspeeds " + atkmon + " D: <br />";
			}
			else{
				document.getElementById("speeddata").innerHTML = "Speed tie! <br />";
			}
		}
		else if(tr==1){
			if(spe1<spe2){
				document.getElementById("speeddata").innerHTML = atkmon + " outspeeds " + defmon + " :D <br />";
			}
			else if(spe1>spe2){
				document.getElementById("speeddata").innerHTML = defmon + " outspeeds " + atkmon + " D: <br />";
			}
			else{
				document.getElementById("speeddata").innerHTML = "Speed tie! <br />";
			}
		}
		
		
		// Damage calculation and output for user's attacks
		
		document.getElementById("atkoutput1").innerHTML = "";
		document.getElementById("atkoutput2").innerHTML = "";
		document.getElementById("atkoutput3").innerHTML = "";
		document.getElementById("atkoutput4").innerHTML = "";
		var atkoutputn = "atkoutput1";
		
		// calculates first move damage
		var dmgmin11;
		var dmgmax11;
		if(ps11==3){ // non-damaging moves
			dmgmin11 = 0;
			dmgmax11 = 0;
		}
		else if(superEffective(mt11,type12)==0 || superEffective(mt11,type22)==0){ // type immunities
			dmgmin11 = 0;
			dmgmax11 = 0;
		}
		else if((mt11==1&&abil2=="Flash Fire")||(mt11==2&&abil2=="Water Absorb")||(mt11==2&&abil2=="Dry Skin")||(mt11==3&&abil2=="Volt Absorb")||(mt11==3&&abil2=="Motor Drive")||(mt11==8&&abil2=="Levitate")){
			dmgmin11 = 0;
			dmgmax11 = 0;
		}
		else if(move11=="Fling"&&item1=="Iron Ball"&&fling1==1){
			dmgmin11 = 0;
			dmgmax11 = 0;
		}
		else{
			dmgmin11 = calculation(move11,bp11,mt11,ps11,type11,type21,type12,type22,0.85,0,berry2);
			dmgmax11 = calculation(move11,bp11,mt11,ps11,type11,type21,type12,type22,1,0,berry2);
		}
		
		// calculates second move damange
		var dmgmin21;
		var dmgmax21;
		if(ps21==3){ // non-damaging moves
			dmgmin21 = 0;
			dmgmax21 = 0;
		}
		else if(superEffective(mt21,type12)==0 || superEffective(mt21,type22)==0){ // type immunities
			dmgmin21 = 0;
			dmgmax21 = 0;
		}
		else if((mt21==1&&abil2=="Flash Fire")||(mt21==2&&abil2=="Water Absorb")||(mt21==2&&abil2=="Dry Skin")||(mt21==3&&abil2=="Volt Absorb")||(mt21==3&&abil2=="Motor Drive")||(mt21==8&&abil2=="Levitate")){
			dmgmin21 = 0;
			dmgmax21 = 0;
		}
		else if(move21=="Fling"&&item1=="Iron Ball"&&fling1==1){
			dmgmin21 = 0;
			dmgmax21 = 0;
		}
		else{
			dmgmin21 = calculation(move21,bp21,mt21,ps21,type11,type21,type12,type22,0.85,0,berry2);	
			dmgmax21 = calculation(move21,bp21,mt21,ps21,type11,type21,type12,type22,1,0,berry2);
		}

		// calculates third move damange
		var dmgmin31;
		var dmgmax31;
		if(ps31==3){ // non-damaging moves
			dmgmin31 = 0;
			dmgmax31 = 0;
		}
		else if(superEffective(mt31,type12)==0 || superEffective(mt31,type22)==0){ // type immunities
			dmgmin31 = 0;
			dmgmax31 = 0;
		}
		else if((mt31==1&&abil2=="Flash Fire")||(mt31==2&&abil2=="Water Absorb")||(mt31==2&&abil2=="Dry Skin")||(mt31==3&&abil2=="Volt Absorb")||(mt31==3&&abil2=="Motor Drive")||(mt31==8&&abil2=="Levitate")){
			dmgmin31 = 0;
			dmgmax31 = 0;
		}
		else if(move31=="Fling"&&item1=="Iron Ball"&&fling1==1){
			dmgmin31 = 0;
			dmgmax31 = 0;
		}
		else{
			dmgmin31 = calculation(move31,bp31,mt31,ps31,type11,type21,type12,type22,0.85,0,berry2);	
			dmgmax31 = calculation(move31,bp31,mt31,ps31,type11,type21,type12,type22,1,0,berry2);
		}

		// calculates fourth move damange
		var dmgmin41;
		var dmgmax41;
		if(ps41==3){ // non-damaging moves
			dmgmin41 = 0;
			dmgmax41 = 0;
		}
		else if(superEffective(mt41,type12)==0 || superEffective(mt41,type22)==0){ // type immunities
			dmgmin41 = 0;
			dmgmax41 = 0;
		}
		else if((mt41==1&&abil2=="Flash Fire")||(mt41==2&&abil2=="Water Absorb")||(mt41==2&&abil2=="Dry Skin")||(mt41==3&&abil2=="Volt Absorb")||(mt41==3&&abil2=="Motor Drive")||(mt41==8&&abil2=="Levitate")){
			dmgmin41 = 0;
			dmgmax41 = 0;
		}
		else if(move41=="Fling"&&item1=="Iron Ball"&&fling1==1){
			dmgmin41 = 0;
			dmgmax41 = 0;
		}
		else{
			dmgmin41 = calculation(move41,bp41,mt41,ps41,type11,type21,type12,type22,0.85,0,berry2);	
			dmgmax41 = calculation(move41,bp41,mt41,ps41,type11,type21,type12,type22,1,0,berry2);
		}
		
		var minkocalcatk = Math.min(koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2));
		if(move11=="Future Sight"||(move11=="Fling"&&koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2)>=2)||(move11=="Fling"&&fling1==1)) minkocalcatk = Math.min(koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2));
		if(move21=="Future Sight"||(move21=="Fling"&&koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2)>=2)||(move21=="Fling"&&fling1==1)) minkocalcatk = Math.min(koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2));
		if(move31=="Future Sight"||(move31=="Fling"&&koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2)>=2)||(move31=="Fling"&&fling1==1)) minkocalcatk = Math.min(koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2));
		if(move41=="Future Sight"||(move41=="Fling"&&koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2)>=2)||(move41=="Fling"&&fling1==1)) minkocalcatk = Math.min(koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2),koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2));
		
		// Output11
		if(bp11!=0){
			document.getElementById(atkoutputn).innerHTML = "Damage dealt by " + move11 + ": " + dmgmin11 + "-" + dmgmax11 + " (" + (Math.round(dmgmin11*10000/hp2)/100) + "%-" + (Math.round(dmgmax11*10000/hp2)/100) + "%)";
			if(move11=="Future Sight") document.getElementById(atkoutputn).innerHTML += " two turns later";
			if(move11!="Future Sight"&&(!(move11=="Fling"&&minkocalcatk>=2))&&minkocalcatk==koCompare(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2)){
				document.getElementById(atkoutputn).innerHTML += koCalc(move11,bp11,mt11,ps11,type11,type21,type12,type22,0,defmon,hp2,berry2);
				if(mt11==item2&&berry2==1) document.getElementById(atkoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(atkoutputn).innerHTML = "<span style='color:#800000'>"+document.getElementById(atkoutputn).innerHTML+"</span>";
			}
			document.getElementById(atkoutputn).innerHTML += "<br />";
			var currentn = atkoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			atkoutputn = "atkoutput" + currentn;
		}
		
		// Output21
		if(bp21!=0){
			document.getElementById(atkoutputn).innerHTML = "Damage dealt by " + move21 + ": " + dmgmin21 + "-" + dmgmax21 + " (" + (Math.round(dmgmin21*10000/hp2)/100) + "%-" + (Math.round(dmgmax21*10000/hp2)/100) + "%)";
			if(move21=="Future Sight") document.getElementById(atkoutputn).innerHTML += " two turns later";
			if(move21!="Future Sight"&&(!(move21=="Fling"&&minkocalcatk>=2))&&minkocalcatk==koCompare(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2)){
				document.getElementById(atkoutputn).innerHTML += koCalc(move21,bp21,mt21,ps21,type11,type21,type12,type22,0,defmon,hp2,berry2);
				if(mt21==item2&&berry2==1) document.getElementById(atkoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(atkoutputn).innerHTML = "<span style='color:#800000'>"+document.getElementById(atkoutputn).innerHTML+"</span>";
			}
			document.getElementById(atkoutputn).innerHTML += "<br />";
			var currentn = atkoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			atkoutputn = "atkoutput" + currentn;
		}
		
		// Output31
		if(bp31!=0){
			document.getElementById(atkoutputn).innerHTML = "Damage dealt by " + move31 + ": " + dmgmin31 + "-" + dmgmax31 + " (" + (Math.round(dmgmin31*10000/hp2)/100) + "%-" + (Math.round(dmgmax31*10000/hp2)/100) + "%)";
			if(move31=="Future Sight") document.getElementById(atkoutputn).innerHTML += " two turns later";
			if(move31!="Future Sight"&&(!(move31=="Fling"&&minkocalcatk>=2))&&minkocalcatk==koCompare(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2)){
				document.getElementById(atkoutputn).innerHTML += koCalc(move31,bp31,mt31,ps31,type11,type21,type12,type22,0,defmon,hp2,berry2);
				if(mt31==item2&&berry2==1) document.getElementById(atkoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(atkoutputn).innerHTML = "<span style='color:#800000'>"+document.getElementById(atkoutputn).innerHTML+"</span>";
			}
			document.getElementById(atkoutputn).innerHTML += "<br />";
			var currentn = atkoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			atkoutputn = "atkoutput" + currentn;
		}
		
		// Output41
		if(bp41!=0){
			document.getElementById(atkoutputn).innerHTML = "Damage dealt by " + move41 + ": " + dmgmin41 + "-" + dmgmax41 + " (" + (Math.round(dmgmin41*10000/hp2)/100) + "%-" + (Math.round(dmgmax41*10000/hp2)/100) + "%)";
			if(move41=="Future Sight") document.getElementById(atkoutputn).innerHTML += " two turns later";
			if(move41!="Future Sight"&&(!(move41=="Fling"&&minkocalcatk>=2))&&minkocalcatk==koCompare(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2)){
				document.getElementById(atkoutputn).innerHTML += koCalc(move41,bp41,mt41,ps41,type11,type21,type12,type22,0,defmon,hp2,berry2);
				if(mt41==item2&&berry2==1) document.getElementById(atkoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(atkoutputn).innerHTML = "<span style='color:#800000'>"+document.getElementById(atkoutputn).innerHTML+"</span>";
			}
			document.getElementById(atkoutputn).innerHTML += "<br />";
			var currentn = atkoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			atkoutputn = "atkoutput" + currentn;
		}

		// Damage calculation and output for foe's attacks
		
		document.getElementById("defoutput1").innerHTML = "";
		document.getElementById("defoutput2").innerHTML = "";
		document.getElementById("defoutput3").innerHTML = "";
		document.getElementById("defoutput4").innerHTML = "";
		var defoutputn = "defoutput1";
		
		// calculates first foe move damage
		var dmgmin12;
		var dmgmax12;
		if(ps12==3){ // non-damaging moves
			dmgmin12 = 0;
			dmgmax12 = 0;
		}
		else if(superEffective(mt12,type11)==0 || superEffective(mt12,type21)==0){ // type immunities
			dmgmin12 = 0;
			dmgmax12 = 0;
		}
		else if((mt12==1&&abil1=="Flash Fire")||(mt12==2&&abil1=="Water Absorb")||(mt12==2&&abil1=="Dry Skin")||(mt12==3&&abil1=="Volt Absorb")||(mt12==3&&abil1=="Motor Drive")||(mt12==8&&abil1=="Levitate")){
			dmgmin12 = 0;
			dmgmax12 = 0;
		}
		else if(move12=="Fling"&&item2=="Iron Ball"&&fling2==1){
			dmgmin12 = 0;
			dmgmax12 = 0;
		}
		else{
			dmgmin12 = calculation(move12,bp12,mt12,ps12,type12,type22,type11,type21,0.85,1,berry1);
			dmgmax12 = calculation(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,1,berry1);
		}
		
		// calculates second foe move damange
		var dmgmin22;
		var dmgmax22;
		if(ps22==3){ // non-damaging moves
			dmgmin22 = 0;
			dmgmax22 = 0;
		}
		else if(superEffective(mt22,type11)==0 || superEffective(mt22,type21)==0){ // type immunities
			dmgmin22 = 0;
			dmgmax22 = 0;
		}
		else if((mt22==1&&abil1=="Flash Fire")||(mt22==2&&abil1=="Water Absorb")||(mt22==2&&abil1=="Dry Skin")||(mt22==3&&abil1=="Volt Absorb")||(mt22==3&&abil1=="Motor Drive")||(mt22==8&&abil1=="Levitate")){
			dmgmin22 = 0;
			dmgmax22 = 0;
		}
		else if(move22=="Fling"&&item2=="Iron Ball"&&fling2==1){
			dmgmin22 = 0;
			dmgmax22 = 0;
		}
		else{
			dmgmin22 = calculation(move22,bp22,mt22,ps22,type12,type22,type11,type21,0.85,1,berry1);	
			dmgmax22 = calculation(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,1,berry1);
		}

		// calculates third foe move damange
		var dmgmin32;
		var dmgmax32;
		if(ps32==3){ // non-damaging moves
			dmgmin32 = 0;
			dmgmax32 = 0;
		}
		else if(superEffective(mt32,type11)==0 || superEffective(mt32,type21)==0){ // type immunities
			dmgmin32 = 0;
			dmgmax32 = 0;
		}
		else if((mt32==1&&abil1=="Flash Fire")||(mt32==2&&abil1=="Water Absorb")||(mt32==2&&abil1=="Dry Skin")||(mt32==3&&abil1=="Volt Absorb")||(mt32==3&&abil1=="Motor Drive")||(mt32==8&&abil1=="Levitate")){
			dmgmin32 = 0;
			dmgmax32 = 0;
		}
		else if(move32=="Fling"&&item2=="Iron Ball"&&fling2==1){
			dmgmin32 = 0;
			dmgmax32 = 0;
		}
		else{
			dmgmin32 = calculation(move32,bp32,mt32,ps32,type12,type22,type11,type21,0.85,1,berry1);	
			dmgmax32 = calculation(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,1,berry1);
		}

		// calculates fourth foe move damange
		var dmgmin42;
		var dmgmax42;
		if(ps42==3){ // non-damaging moves
			dmgmin42 = 0;
			dmgmax42 = 0;
		}
		else if(superEffective(mt42,type11)==0 || superEffective(mt42,type21)==0){ // type immunities
			dmgmin42 = 0;
			dmgmax42 = 0;
		}
		else if((mt42==1&&abil1=="Flash Fire")||(mt42==2&&abil1=="Water Absorb")||(mt42==2&&abil1=="Dry Skin")||(mt42==3&&abil1=="Volt Absorb")||(mt42==3&&abil1=="Motor Drive")||(mt42==8&&abil1=="Levitate")){
			dmgmin42 = 0;
			dmgmax42 = 0;
		}
		else if(move42=="Fling"&&item2=="Iron Ball"&&fling2==1){
			dmgmin42 = 0;
			dmgmax42 = 0;
		}
		else{
			dmgmin42 = calculation(move42,bp42,mt42,ps42,type12,type22,type11,type21,0.85,1,berry1);	
			dmgmax42 = calculation(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,1,berry1);
		}
		
		var minkocalcdef = Math.min(koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1));
		if(move12=="Future Sight"||(move12=="Fling"&&koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1)>=2)||(move12=="Fling"&&fling2==1)) minkocalcdef = Math.min(koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1));
		if(move22=="Future Sight"||(move22=="Fling"&&koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1)>=2)||(move22=="Fling"&&fling2==1)) minkocalcdef = Math.min(koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1));
		if(move32=="Future Sight"||(move32=="Fling"&&koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1)>=2)||(move32=="Fling"&&fling2==1)) minkocalcdef = Math.min(koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1));
		if(move42=="Future Sight"||(move42=="Fling"&&koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1)>=2)||(move42=="Fling"&&fling2==1)) minkocalcdef = Math.min(koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1),koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1));
		
		// Output12
		if(bp12!=0){
			document.getElementById(defoutputn).innerHTML = "Damage dealt by " + move12 + ": " + dmgmin12 + "-" + dmgmax12 + " (" + (Math.round(dmgmin12*10000/hp1)/100) + "%-" + (Math.round(dmgmax12*10000/hp1)/100) + "%)";
			if(move12=="Future Sight") document.getElementById(defoutputn).innerHTML += " two turns later";
			if(move12!="Future Sight"&&(!(move12=="Fling"&&minkocalcdef>=2))&&minkocalcdef==koCompare(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1)){
				document.getElementById(defoutputn).innerHTML += koCalc(move12,bp12,mt12,ps12,type12,type22,type11,type21,1,atkmon,hp1,berry1);
				if(mt12==item1&&berry1==1) document.getElementById(defoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(defoutputn).innerHTML = "<span style='color:#008000'>"+document.getElementById(defoutputn).innerHTML+"</span>";
			}
			document.getElementById(defoutputn).innerHTML += "<br />";
			currentn = defoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			defoutputn = "defoutput" + currentn;
		}
		
		// Output22
		if(bp22!=0){
			document.getElementById(defoutputn).innerHTML = "Damage dealt by " + move22 + ": " + dmgmin22 + "-" + dmgmax22 + " (" + (Math.round(dmgmin22*10000/hp1)/100) + "%-" + (Math.round(dmgmax22*10000/hp1)/100) + "%)";
			if(move22=="Future Sight") document.getElementById(defoutputn).innerHTML += " two turns later";
			if(move22!="Future Sight"&&(!(move22=="Fling"&&minkocalcdef>=2))&&minkocalcdef==koCompare(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1)){
				document.getElementById(defoutputn).innerHTML += koCalc(move22,bp22,mt22,ps22,type12,type22,type11,type21,1,atkmon,hp1,berry1);
				if(mt22==item1&&berry1==1) document.getElementById(defoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(defoutputn).innerHTML = "<span style='color:#008000'>"+document.getElementById(defoutputn).innerHTML+"</span>";
			}
			document.getElementById(defoutputn).innerHTML += "<br />";
			var currentn = defoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			defoutputn = "defoutput" + currentn;
		}
		
		// Output32
		if(bp32!=0){
			document.getElementById(defoutputn).innerHTML = "Damage dealt by " + move32 + ": " + dmgmin32 + "-" + dmgmax32 + " (" + (Math.round(dmgmin32*10000/hp1)/100) + "%-" + (Math.round(dmgmax32*10000/hp1)/100) + "%)";
			if(move32=="Future Sight") document.getElementById(defoutputn).innerHTML += " two turns later";
			if(move32!="Future Sight"&&(!(move32=="Fling"&&minkocalcdef>=2))&&minkocalcdef==koCompare(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1)){
				document.getElementById(defoutputn).innerHTML += koCalc(move32,bp32,mt32,ps32,type12,type22,type11,type21,1,atkmon,hp1,berry1);
				if(mt32==item1&&berry1==1) document.getElementById(defoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(defoutputn).innerHTML = "<span style='color:#008000'>"+document.getElementById(defoutputn).innerHTML+"</span>";
			}
			document.getElementById(defoutputn).innerHTML += "<br />";
			var currentn = defoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			defoutputn = "defoutput" + currentn;
		}
		
		// Output42
		if(bp42!=0){
			document.getElementById(defoutputn).innerHTML = "Damage dealt by " + move42 + ": " + dmgmin42 + "-" + dmgmax42 + " (" + (Math.round(dmgmin42*10000/hp1)/100) + "%-" + (Math.round(dmgmax42*10000/hp1)/100) + "%)";
			if(move42=="Future Sight") document.getElementById(defoutputn).innerHTML += " two turns later";
			if(move42!="Future Sight"&&(!(move42=="Fling"&&minkocalcdef>=2))&&minkocalcdef==koCompare(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1)){
				document.getElementById(defoutputn).innerHTML += koCalc(move42,bp42,mt42,ps42,type12,type22,type11,type21,1,atkmon,hp1,berry1);
				if(mt42==item1&&berry1==1) document.getElementById(defoutputn).innerHTML += " with TR Berry usage";
				document.getElementById(defoutputn).innerHTML = "<span style='color:#008000'>"+document.getElementById(defoutputn).innerHTML+"</span>";
			}
			document.getElementById(defoutputn).innerHTML += "<br />";
			var currentn = defoutputn.substring(9,10);
			currentn = parseInt(currentn,10);
			currentn = currentn + 1;
			defoutputn = "defoutput" + currentn;
		}
		
		
	}
} // puts in work

function koCompare(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,swap,opp,opphp,berry){
	var thetext = koCalc(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,swap,opp,opphp,berry);
	var thesub = thetext.substring(thetext.length-6,thetext.length);
	var ans;	
	if(thesub=="d OHKO") ans = 1;
	else if(thesub=="o OHKO"||thesub=="e OHKO"){
		var blah1 = parseFloat(thetext.substring(2,thetext.length));
		ans = 2 - (0.01*blah1);
	}
	else if(thesub=="d 2HKO") ans = 2;
	else if(thesub=="o 2HKO"||thesub=="e 2HKO"){
		var blah2 = parseFloat(thetext.substring(2,thetext.length));
		ans = 3 - (0.01*blah2);
	}
	else if(thesub=="d 3HKO") ans = 3;
	else if(thesub=="o 3HKO"||thesub=="e 3HKO"){
		var blah3 = parseFloat(thetext.substring(2,thetext.length));
		ans = 4 - (0.01*blah3);
	}
	else if(thesub=="d 4HKO") ans = 4;
	else if(thesub=="o 4HKO"){
		var blah4 = parseFloat(thetext.substring(2,thetext.length));
		ans = 5 - (0.01*blah4);
	}
	else if(thesub=="e 4HKO") ans = 5;
	else ans = 6;
	return ans;
}

function koCalc(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,swap,opp,opphp,berry){
	if(move=="Double Hit"||move=="Double Kick") return multikoCalc(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,swap,opp,opphp,berry);
	else{
		var text = "";
		var dmg0 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.85,swap,berry);
		var dmg1 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.86,swap,berry);
		var dmg2 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.87,swap,berry);
		var dmg3 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.88,swap,berry);
		var dmg4 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.89,swap,berry);
		var dmg5 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.9,swap,berry);
		var dmg6 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.91,swap,berry);
		var dmg7 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.92,swap,berry);
		var dmg8 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.93,swap,berry);
		var dmg9 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.94,swap,berry);
		var dmg10 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.95,swap,berry);
		var dmg11 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.96,swap,berry);
		var dmg12 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.97,swap,berry);
		var dmg13 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.98,swap,berry);
		var dmg14 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.99,swap,berry);
		var dmg15 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,1,swap,berry);
		var damage = [dmg0,dmg1,dmg2,dmg3,dmg4,dmg5,dmg6,dmg7,dmg8,dmg9,dmg10,dmg11,dmg12,dmg13,dmg14,dmg15];
		
		var bldmg0 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.85,swap,0);
		var bldmg1 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.86,swap,0);
		var bldmg2 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.87,swap,0);
		var bldmg3 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.88,swap,0);
		var bldmg4 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.89,swap,0);
		var bldmg5 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.9,swap,0);
		var bldmg6 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.91,swap,0);
		var bldmg7 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.92,swap,0);
		var bldmg8 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.93,swap,0);
		var bldmg9 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.94,swap,0);
		var bldmg10 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.95,swap,0);
		var bldmg11 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.96,swap,0);
		var bldmg12 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.97,swap,0);
		var bldmg13 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.98,swap,0);
		var bldmg14 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.99,swap,0);
		var bldmg15 = calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,1,swap,0);
		var bldamage = [bldmg0,bldmg1,bldmg2,bldmg3,bldmg4,bldmg5,bldmg6,bldmg7,bldmg8,bldmg9,bldmg10,bldmg11,bldmg12,bldmg13,bldmg14,bldmg15];
		
		var ohkocount = 0;
		var ohkochance = 0;
		var twohkocount = 0;
		var twohkochance = 0;
		var threehkocount = 0;
		var threehkochance = 0;
		var fourhkocount = 0;
		var fourhkochance = 0;
	
		if(opphp<=dmg0) text += ": Confirmed OHKO";
		else if(dmg0<opphp&&opphp<=dmg15){
			for(var i=0;i<16;i++){
				if(damage[i]>=opphp) ohkocount++;
			}
			ohkochance = Math.round(ohkocount*10000/16)/100;
			text += ": " + ohkochance + "% chance to OHKO";
		}
		else if(dmg15<opphp&&opphp<=(dmg0+bldmg0)) text += ": Confirmed 2HKO";
		else if((dmg0+bldmg0)<opphp&&opphp<=(dmg15+bldmg15)){
			for(var j=0;j<16;j++){
				for(var k=0;k<16;k++){
					if((damage[j]+bldamage[k])>=opphp) twohkocount++;
				}
			}
			twohkochance = Math.round(twohkocount*10000/256)/100;
			text += ": " + twohkochance + "% chance to 2HKO";
		}
		else if((dmg15+bldmg15)<opphp&&opphp<=(dmg0+(2*bldmg0))) text += ": Confirmed 3HKO";
		else if((dmg0+(2*bldmg0))<opphp&&opphp<=(dmg15+(2*bldmg15))){
			for(var p=0;p<16;p++){
				for(var q=0;q<16;q++){
					for(var r=0;r<16;r++){
						if((damage[p]+bldamage[q]+bldamage[r])>=opphp) threehkocount++;
					}
				}
			}
			threehkochance = Math.round(threehkocount*10000/4096)/100;
			text += ": " + threehkochance + "% chance to 3HKO";
		}
		else if((dmg15+(2*bldmg15))<opphp&&opphp<=(dmg0+(3*bldmg0))) text += ": Confirmed 4HKO";
		else if((dmg0+(3*bldmg0))<opphp&&opphp<=(dmg15+(3*bldmg15))){
			for(var w=0;w<16;w++){
				for(var x=0;x<16;x++){
					for(var y=0;y<16;y++){
						for(var z=0;z<16;z++){
							if((damage[w]+bldamage[x]+bldamage[y]+bldamage[z])>=opphp) fourhkocount++;	
						}
					}
				}
			}
			fourhkochance = Math.round(fourhkocount*10000/65536)/100;
			text += ": " + fourhkochance + "% chance to 4HKO";
		}
		else text = ": 5HKO or more";
		return text;
	}
} // calculates chances of OHKO, 2HKO, etc.

function multikoCalc(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,swap,opp,opphp,berry){
	// bp is already halved, so bp of double kick is 35 not 70, do not halve it again
	var text = "";
	var text = "";
	var dmg0 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.85,swap,berry)/2);
	var dmg1 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.86,swap,berry)/2);
	var dmg2 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.87,swap,berry)/2);
	var dmg3 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.88,swap,berry)/2);
	var dmg4 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.89,swap,berry)/2);
	var dmg5 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.9,swap,berry)/2);
	var dmg6 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.91,swap,berry)/2);
	var dmg7 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.92,swap,berry)/2);
	var dmg8 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.93,swap,berry)/2);
	var dmg9 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.94,swap,berry)/2);
	var dmg10 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.95,swap,berry)/2);
	var dmg11 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.96,swap,berry)/2);
	var dmg12 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.97,swap,berry)/2);
	var dmg13 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.98,swap,berry)/2);
	var dmg14 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,0.99,swap,berry)/2);
	var dmg15 = Math.floor(calculation(move,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,1,swap,berry)/2);
	var damage = [dmg0,dmg1,dmg2,dmg3,dmg4,dmg5,dmg6,dmg7,dmg8,dmg9,dmg10,dmg11,dmg12,dmg13,dmg14,dmg15];
	// indices of damage array is now damage done with one hit (i.e. half of the move)
	var ohkocount = 0;
	var ohkochance = 0;
	var twohkocount = 0;
	var twohkochance = 0;

	if(opphp<=(2*dmg0)) text += ": Confirmed OHKO";
	else if((2*dmg0)<opphp&&opphp<=(2*dmg15)){
		for(var i=0;i<16;i++){
			for(var j=0;j<16;j++){
				if((damage[i]+damage[j])>=opphp) ohkocount++;
			}
		}
		ohkochance = Math.round(ohkocount*10000/256)/100;
		text += ": " + ohkochance + "% chance to OHKO";
	}
	else if((2*dmg15)<opphp&&opphp<=(4*dmg0)) text += ": Confirmed 2HKO";
	//else if((4*dmg0)<opphp&&opphp<=(4*dmg15)) text = text + move + " vs " + opp + ": Possible 2HKO";
	else if((4*dmg0)<opphp&&opphp<=(4*dmg15)){
		for(var w=0;w<16;w++){
			for(var x=0;x<16;x++){
				for(var y=0;y<16;y++){
					for(var z=0;z<16;z++){
						if((damage[w]+damage[x]+damage[y]+damage[z])>=opphp) twohkocount++;
					}
				}
			}
		}
		twohkochance = Math.round(twohkocount*10000/65536)/100;
		text += ": " + twohkochance + "% chance to 2HKO";
	}
	else if((4*dmg15)<opphp&&opphp<=(6*dmg0)) text += ": Confirmed 3HKO";
	else if((6*dmg0)<opphp&&opphp<=(6*dmg15)) text += ": Possible 3HKO";
	else if((6*dmg15)<opphp&&opphp<=(8*dmg0)) text += ": Confirmed 4HKO";
	else if((8*dmg0)<opphp&&opphp<=(8*dmg15)) text += ": Possible 4HKO";
	else text = ": 5HKO or more";
	return text;
}

function calculation(name,bp,mt,ps,youtype1,youtype2,opptype1,opptype2,r,swap,berry){
	
	var dmg;
	var atkstat;
	var defstat;
	var atkmodint;
	var defmodint;
	var atkmod;
	var defmod;
	
	var abil1 = document.getElementById("ability1").value;
	var abil2 = document.getElementById("ability2").value;
	var item1 = document.getElementById("item1").value;
	var item2 = document.getElementById("item2").value;
	var status1 = document.dc.status1.value;
	var status2 = document.dc.status2.value;
	
	if(item2==parseInt(item2)){
		if(document.dc.ignoreberry2.checked==true&&swap==0) berry = 0;
	}
	if(item1==parseInt(item1)){
		if(document.dc.ignoreberry1.checked==true&&swap==1) berry = 0;
	}
	
	var guts1 = 0;
	var guts2 = 0;
	if(abil1=="Guts"&&status1!="none") guts1 = 1;
	if(abil2=="Guts"&&status2!="none") guts2 = 1;
	
	if(swap==0){
		if(ps==1){
			atkstat = parseInt(document.dc.atk1.value,10);
			atkmodint = document.dc.atks1.value;
			defstat = parseInt(document.dc.def2.value,10);
			defmodint = document.dc.defs2.value;
		}
		else if(ps==2){
			atkstat = parseInt(document.dc.spa1.value,10);
			atkmodint = document.dc.spas1.value;
			defstat = parseInt(document.dc.spd2.value,10);
			defmodint = document.dc.spds2.value;
		}
	}
	else if(swap==1){
		if(ps==1){
			atkstat = parseInt(document.dc.atk2.value,10);
			atkmodint = document.dc.atks2.value;
			defstat = parseInt(document.dc.def1.value,10);
			defmodint = document.dc.defs1.value;
		}
		else if(ps==2){
			atkstat = parseInt(document.dc.spa2.value,10);
			atkmodint = document.dc.spas2.value;
			defstat = parseInt(document.dc.spd1.value,10);
			defmodint = document.dc.spds1.value;
		}
	}
	
	var oldbp = bp; // for Technician
	var atkid = document.getElementById("attacker").value;
	var atkint = atkid.substring(0, atkid.length - 1);
	var atkmon = atkint.charAt(0).toUpperCase() + atkint.slice(1);
	var defid = document.getElementById("defender").value;
	var defint = defid.substring(0, defid.length - 1);
	var defmon = defint.charAt(0).toUpperCase() + defint.slice(1);
	
	// moves with variable base power // NEEDS TO BE EXPANDED
	if(swap==0&&name=="Facade"&&(status1=="para"||status1=="burn"||status1=="poison"||status1=="toxic")) bp = bp*2;
	if(swap==1&&name=="Facade"&&(status2=="para"||status2=="burn"||status2=="poison"||status2=="toxic")) bp = bp*2;
	bp = Math.floor(bp);
	if(swap==0&&ps==1&&item1=="Muscle Band") bp = bp*1.1;
	if(swap==0&&ps==2&&item1=="Wise Glasses") bp = bp*1.1;
	if(swap==1&&ps==1&&item2=="Muscle Band") bp = bp*1.1;
	if(swap==1&&ps==2&&item2=="Wise Glasses") bp = bp*1.1;
	// type-boosting items e.g. Mystic Water
	bp = Math.floor(bp);
	// rivalry boost
	if(atkmon=="Charizard"||atkmon=="Typhlosion"||atkmon=="Blaziken"||atkmon=="Infernape"||atkmon=="Venusaur"||atkmon=="Meganium"||atkmon=="Sceptile"||atkmon=="Torterra"||atkmon=="Blastoise"||atkmon=="Feraligatr"||atkmon=="Swampert"||atkmon=="Empoleon"){
		if(swap==0&&mt==1&&abil1=="Blaze"&&document.dc.hpcheck1.checked==true) bp = bp*1.5;
		if(swap==0&&mt==2&&abil1=="Torrent"&&document.dc.hpcheck1.checked==true) bp = bp*1.5;
		if(swap==0&&mt==4&&abil1=="Overgrow"&&document.dc.hpcheck1.checked==true) bp = bp*1.5;
		if(swap==0&&mt==11&&abil1=="Swarm"&&document.dc.hpcheck1.checked==true) bp = bp*1.5;
	}
	if(defmon=="Charizard"||defmon=="Typhlosion"||defmon=="Blaziken"||defmon=="Infernape"||defmon=="Venusaur"||defmon=="Meganium"||defmon=="Sceptile"||defmon=="Torterra"||defmon=="Blastoise"||defmon=="Feraligatr"||defmon=="Swampert"||defmon=="Empoleon"){
		if(swap==1&&mt==1&&abil2=="Blaze"&&document.dc.hpcheck2.checked==true) bp = bp*1.5;
		if(swap==1&&mt==2&&abil2=="Torrent"&&document.dc.hpcheck2.checked==true) bp = bp*1.5;
		if(swap==1&&mt==4&&abil2=="Overgrow"&&document.dc.hpcheck2.checked==true) bp = bp*1.5;
		if(swap==1&&mt==11&&abil2=="Swarm"&&document.dc.hpcheck2.checked==true) bp = bp*1.5;
	}
	if(swap==0&&oldbp<=60&&abil1=="Technician") bp = bp*1.5;
	if(swap==1&&oldbp<=60&&abil2=="Technician") bp = bp*1.5;
	bp = Math.floor(bp);
	if(swap==0&&abil2=="Thick Fat"&&(mt==1||mt==5)) bp = bp*0.5;
	if(swap==1&&abil1=="Thick Fat"&&(mt==1||mt==5)) bp = bp*0.5;
	if(swap==0&&abil2=="Heatproof"&&mt==1) bp = bp*0.5;
	if(swap==1&&abil1=="Heatproof"&&mt==1) bp = bp*0.5;
	if(swap==0&&abil2=="Dry Skin"&&mt==1) bp = bp*1.25;
	if(swap==1&&abil1=="Dry Skin"&&mt==1) bp = bp*1.25;
	bp = Math.floor(bp);
	
	//attack modifier
	if(atkmodint=="6p") atkstat = atkstat*4;
	else if(atkmodint=="5p") atkstat = atkstat*3.5;
	else if(atkmodint=="4p") atkstat = atkstat*3;
	else if(atkmodint=="3p") atkstat = atkstat*2.5;
	else if(atkmodint=="2p") atkstat = atkstat*2;
	else if(atkmodint=="1p") atkstat = atkstat*1.5;
	else if(atkmodint=="1n") atkstat = atkstat*0.6667;
	else if(atkmodint=="2n") atkstat = atkstat*0.5;
	else if(atkmodint=="3n") atkstat = atkstat*0.4;
	else if(atkmodint=="4n") atkstat = atkstat*0.3333;
	else if(atkmodint=="5n") atkstat = atkstat*0.2857;
	else if(atkmodint=="6n") atkstat = atkstat*0.25;
	atkstat = Math.floor(atkstat);
	if(swap==0&&ps==1&&abil1=="Pure Power") atkstat = atkstat*2;
	if(swap==0&&ps==1&&abil1=="Hustle") atkstat = atkstat*1.5;
	if(swap==0&&ps==1&&abil1=="Guts"&&guts1==1) atkstat = atkstat*1.5;
	if(swap==0&&ps==1&&abil1=="Slow Start") atkstat = atkstat*0.5;
	if(swap==1&&ps==1&&abil2=="Pure Power") atkstat = atkstat*2;
	if(swap==1&&ps==1&&abil2=="Hustle") atkstat = atkstat*1.5;
	if(swap==1&&ps==1&&abil2=="Guts"&&guts2==1) atkstat = atkstat*1.5;
	if(swap==1&&ps==1&&abil2=="Slow Start") atkstat = atkstat*0.5;
	atkstat = Math.floor(atkstat);
	if(swap==0&&ps==1&&item1=="Choice Band") atkstat = atkstat*1.5;
	if(swap==0&&ps==2&&item1=="Choice Specs") atkstat = atkstat*1.5;
	if(swap==0&&ps==1&&item1=="Thick Club") atkstat = atkstat*2;
	if(swap==1&&ps==1&&item2=="Choice Band") atkstat = atkstat*1.5;
	if(swap==1&&ps==2&&item2=="Choice Specs") atkstat = atkstat*1.5;
	if(swap==1&&ps==1&&item2=="Thick Club") atkstat = atkstat*2;
	atkstat = Math.floor(atkstat);
	
	//defense modifier
	if(defmodint=="6p") defstat = defstat*4;
	else if(defmodint=="5p") defstat = defstat*3.5;
	else if(defmodint=="4p") defstat = defstat*3;
	else if(defmodint=="3p") defstat = defstat*2.5;
	else if(defmodint=="2p") defstat = defstat*2;
	else if(defmodint=="1p") defstat = defstat*1.5;
	else if(defmodint=="1n") defstat = defstat*0.6667;
	else if(defmodint=="2n") defstat = defstat*0.5;
	else if(defmodint=="3n") defstat = defstat*0.4;
	else if(defmodint=="4n") defstat = defstat*0.3333;
	else if(defmodint=="5n") defstat = defstat*0.2857;
	else if(defmodint=="6n") defstat = defstat*0.25;
	defstat = Math.floor(defstat);
	if(abil2=="Marvel Scale"&&status2!="none"&&swap==0&&ps==1) defstat = defstat*1.5;
	if(abil1=="Marvel Scale"&&status1!="none"&&swap==1&&ps==1) defstat = defstat*1.5;
	if(document.dc.weather.value=="sandstorm"&&ps==2&&(opptype1==12||opptype2==12)) defstat = defstat*1.5;
	defstat = Math.floor(defstat);
	if(name=="Selfdestruct"||name=="Explosion") defstat = defstat*0.5;
	defstat = Math.floor(defstat);
	
	// mod1
	var mod1 = 1;
	if(swap==0&&ps==1&&status1=="burn"&&abil1!="Guts") mod1 = mod1*0.5;
	if(swap==1&&ps==1&&status2=="burn"&&abil2!="Guts") mod1 = mod1*0.5;
	if(swap==0&&ps==1&&document.dc.reflect2.checked==true) mod1 = mod1*0.5;
	if(swap==0&&ps==2&&document.dc.lightscreen2.checked==true) mod1 = mod1*0.5;
	if(swap==1&&ps==1&&document.dc.reflect1.checked==true) mod1 = mod1*0.5;
	if(swap==1&&ps==2&&document.dc.lightscreen1.checked==true) mod1 = mod1*0.5;
	if(mt==1&&document.dc.weather.value=="sun") mod1 = mod1*1.5;
	if(mt==1&&document.dc.weather.value=="rain") mod1 = mod1*0.5;
	if(mt==2&&document.dc.weather.value=="sun") mod1 = mod1*0.5;
	if(mt==2&&document.dc.weather.value=="rain") mod1 = mod1*1.5;
	var flashfire = 0; // Flash Fire modifier - who cares about this crap
	if(flashfire==1) mod1 = mod1*1.5;
	
	// mod2
	var mod2 = 1;
	if(swap==0&&item1=="Life Orb") mod2 = mod2*1.3;
	if(swap==1&&item2=="Life Orb") mod2 = mod2*1.3;
	// Metronome multiplier
	// Me First multiplier (can we just count Me First as 0 damage zzz)
	
	// mod3
	var mod3 = 1;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==0&&(abil2=="Solid Rock"||abil2=="Filter")) mod3 = mod3*0.75;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==1&&(abil1=="Solid Rock"||abil1=="Filter")) mod3 = mod3*0.75;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==0&&item1=="Expert Belt") mod3 = mod3*1.2;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==1&&item2=="Expert Belt") mod3 = mod3*1.2;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)<1)&&swap==0&&abil1=="Tinted Lens") mod3 = mod3*2;
	if((superEffective(mt,opptype1)*superEffective(mt,opptype2)<1)&&swap==1&&abil2=="Tinted Lens") mod3 = mod3*2;
	if(berry==1){
		if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==0&&mt==item2) mod3 = mod3*0.5;
		if((superEffective(mt,opptype1)*superEffective(mt,opptype2)>1)&&swap==1&&mt==item1) mod3 = mod3*0.5;
	}
		
	dmg = Math.floor(42*bp);
	dmg = Math.floor(dmg*atkstat);
	dmg = Math.floor(dmg/50);
	dmg = Math.floor(dmg/defstat);
	dmg = Math.floor(dmg*mod1);
	dmg = dmg + 2;
	// critical hit calculations come in here, if implemented in future
	dmg = Math.floor(dmg*mod2);
	dmg = Math.floor(dmg*r);
	if(mt==youtype1 || mt==youtype2){
		if((abil1=="Adaptability"&&swap==0)||(abil2=="Adaptability"&&swap==1)) dmg = Math.floor(dmg*2); // STAB multiplier with Adaptability
		else dmg = Math.floor(dmg*1.5); // STAB multiplier
	}
	dmg = Math.floor(dmg*superEffective(mt,opptype1)); // SE against type 1
	dmg = Math.floor(dmg*superEffective(mt,opptype2)); // SE against type 2
	dmg = Math.floor(dmg*mod3);
	if(dmg==0) dmg = 1;
	
	// Multi-strike moves (confirmed 2x)
	if(name=="Double Hit"||name=="Double Kick") dmg = dmg + dmg;
	
	if(swap==0&&((mt==1&&abil2=="Flash Fire")||(mt==2&&abil2=="Water Absorb")||(mt==2&&abil2=="Dry Skin")||(mt==3&&abil2=="Volt Absorb")||(mt==3&&abil2=="Motor Drive")||(mt==8&&abil2=="Levitate"))) dmg = 0;
	if(swap==1&&((mt==1&&abil1=="Flash Fire")||(mt==2&&abil1=="Water Absorb")||(mt==2&&abil1=="Dry Skin")||(mt==3&&abil1=="Volt Absorb")||(mt==3&&abil1=="Motor Drive")||(mt==8&&abil1=="Levitate"))) dmg = 0;
	
	return dmg;
} // calculates damage based on parameters given

function superEffective(type1,type2){
	var value = 1;
	if(type1==0){
		if(type2==12||type2==16) value = 0.5;
		else if(type2==13) value = 0;
	}
	else if(type1==1){
		if(type2==1||type2==2||type2==12||type2==14) value = 0.5;
		else if(type2==4||type2==5||type2==11||type2==16) value = 2;
	}
	else if(type1==2){
		if(type2==2||type2==4||type2==14) value = 0.5;
		else if(type2==1||type2==8||type2==12) value = 2;
	}
	else if(type1==3){
		if(type2==3||type2==4||type2==14) value = 0.5;
		else if(type2==2||type2==9) value = 2;
		else if(type2==8) value = 0;
	}
	else if(type1==4){
		if(type2==1||type2==4||type2==7||type2==9||type2==11||type2==14||type2==16) value = 0.5;
		else if(type2==2||type2==8||type2==12) value = 2;
	}
	else if(type1==5){
		if(type2==1||type2==2||type2==5||type2==16) value = 0.5;
		else if(type2==4||type2==8||type2==9||type2==14) value = 2;
	}
	else if(type1==6){
		if(type2==7||type2==9||type2==10||type2==11) value = 0.5;
		else if(type2==0||type2==5||type2==12||type2==15||type2==16) value = 2;
		else if(type2==13) value = 0;
	}
	else if(type1==7){
		if(type2==7||type2==8||type2==12||type2==13) value = 0.5;
		else if(type2==4) value = 2;
		else if(type2==16) value = 0;
	}
	else if(type1==8){
		if(type2==4||type2==11) value = 0.5;
		else if(type2==1||type2==3||type2==7||type2==12||type2==16) value = 2;
		else if(type2==9) value = 0;
	}
	else if(type1==9){
		if(type2==3||type2==12||type2==16) value = 0.5;
		else if(type2==4||type2==6||type2==11) value = 2;
	}
	else if(type1==10){
		if(type2==10||type2==16) value = 0.5;
		else if(type2==6||type2==7) value = 2;
		else if(type2==15) value = 0;
	}
	else if(type1==11){
		if(type2==1||type2==6||type2==7||type2==9||type2==13||type2==16) value = 0.5;
		else if(type2==4||type2==10||type2==15) value = 2;
	}
	else if(type1==12){
		if(type2==6||type2==8||type2==16) value = 0.5;
		else if(type2==1||type2==5||type2==9||type2==11) value = 2;
	}
	else if(type1==13){
		if(type2==15||type2==16) value = 0.5;
		else if(type2==10||type2==13) value = 2;
		else if(type2==0) value = 0;
	}
	else if(type1==14){
		if(type2==16) value = 0.5;
		else if(type2==14) value = 2;
	}
	else if(type1==15){
		if(type2==6||type2==15||type2==16) value = 0.5;
		else if(type2==10||type2==13) value = 2;
	}
	else if(type1==16){
		if(type2==1||type2==2||type2==3||type2==16) value = 0.5;
		else if(type2==5||type2==12) value = 2;
	}
	return value;
} // tests whether type1 is SE/NVE against type2

function gyroball(speed1,speed2){
	if((document.getElementById("attacker").value!="")&&(document.getElementById("defender").value!="")){
		var move11 = document.dc.move11.value;
		var move21 = document.dc.move21.value;
		var move31 = document.dc.move31.value;
		var move41 = document.dc.move41.value;
		var move12 = document.dc.move12.value;
		var move22 = document.dc.move22.value;
		var move32 = document.dc.move32.value;
		var move42 = document.dc.move42.value;
		
		if(move11=="Gyro Ball"||move21=="Gyro Ball"||move31=="Gyro Ball"||move41=="Gyro Ball"||move12=="Gyro Ball"||move22=="Gyro Ball"||move32=="Gyro Ball"||move42=="Gyro Ball"){
			
			var theans = 0;
			
			if(move11=="Gyro Ball"){
				theans = 1 + Math.floor((speed2*25)/speed1);
				if(theans>150) theans = 150;
				document.dc.bp11.value = theans;
			}
			else if(move21=="Gyro Ball"){
				theans = 1 + Math.floor((speed2*25)/speed1);
				if(theans>150) theans = 150;
				document.dc.bp21.value = theans;
			}
			else if(move31=="Gyro Ball"){
				theans = 1 + Math.floor((speed2*25)/speed1);
				if(theans>150) theans = 150;
				document.dc.bp31.value = theans;
			}
			else if(move41=="Gyro Ball"){
				theans = 1 + Math.floor((speed2*25)/speed1);
				if(theans>150) theans = 150;
				document.dc.bp41.value = theans;
			}
			else if(move12=="Gyro Ball"){
				theans = 1 + Math.floor((speed1*25)/speed2);
				if(theans>150) theans = 150;
				document.dc.bp12.value = theans;
			}
			else if(move22=="Gyro Ball"){
				theans = 1 + Math.floor((speed1*25)/speed2);
				if(theans>150) theans = 150;
				document.dc.bp22.value = theans;
			}
			else if(move32=="Gyro Ball"){
				theans = 1 + Math.floor((speed1*25)/speed2);
				if(theans>150) theans = 150;
				document.dc.bp32.value = theans;
			}
			else if(move42=="Gyro Ball"){
				theans = 1 + Math.floor((speed1*25)/speed2);
				if(theans>150) theans = 150;
				document.dc.bp42.value = theans;
			}
		}
	}
} // calculates damage from Gyro Ball when a Pokemon is called

function weatherball(){
	var move11 = document.dc.move11.value;
	var move21 = document.dc.move21.value;
	var move31 = document.dc.move31.value;
	var move41 = document.dc.move41.value;
	var move12 = document.dc.move12.value;
	var move22 = document.dc.move22.value;
	var move32 = document.dc.move32.value;
	var move42 = document.dc.move42.value;
	
	if(move11=="Weather Ball"||move21=="Weather Ball"||move31=="Weather Ball"||move41=="Weather Ball"||move12=="Weather Ball"||move22=="Weather Ball"||move32=="Weather Ball"||move42=="Weather Ball"){
		
		var newpower;
		if(document.dc.weather.value=="none") newpower = 50;
		if(document.dc.weather.value!="none") newpower = 100;
		
		var newtype;
		if(document.dc.weather.value=="none") newtype = 0;
		if(document.dc.weather.value=="sun") newtype = 1;
		if(document.dc.weather.value=="rain") newtype = 2;
		if(document.dc.weather.value=="hail") newtype = 5;
		if(document.dc.weather.value=="sandstorm") newtype = 12;
		
		if(move11=="Weather Ball"){
			document.dc.bp11.value = newpower;
			document.dc.mt11.value = newtype;
		}
		if(move21=="Weather Ball"){
			document.dc.bp21.value = newpower;
			document.dc.mt21.value = newtype;
		}
		if(move31=="Weather Ball"){
			document.dc.bp31.value = newpower;
			document.dc.mt31.value = newtype;
		}
		if(move41=="Weather Ball"){
			document.dc.bp41.value = newpower;
			document.dc.mt41.value = newtype;
		}
		if(move12=="Weather Ball"){
			document.dc.bp12.value = newpower;
			document.dc.mt12.value = newtype;
		}
		if(move22=="Weather Ball"){
			document.dc.bp22.value = newpower;
			document.dc.mt22.value = newtype;
		}
		if(move32=="Weather Ball"){
			document.dc.bp32.value = newpower;
			document.dc.mt32.value = newtype;
		}
		if(move42=="Weather Ball"){
			document.dc.bp42.value = newpower;
			document.dc.mt42.value = newtype;
		}
		
	}
}