const {sequelize} = require('./database')
const {Legends} = require('../models/legends')
const {Weapons} = require('../models/weapons')
const {Maps} = require('../models/maps')


const legendDetails = [
    {
        name: 'Bloodhound',
        class_name: 'Recon',
        imgURL: 'https://preview.redd.it/6ebpqhr2l0i91.png?auto=webp&s=8b9342d01c0cd2c9360e7c022158043f4f3c37df',
        passive_name: 'Tracker, Recon',
        passive_description: "Tracker: Foes leave behind clues for you to find. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Eye Of the Allfather',
        tactical_description: 'Briefly reveal enemies, traps, and clues through all structures in front of you.',
        ultimate_name: 'Beast Of The Hunt',
        ultimate_description: 'Tranform into the ultimat hunter. Enhancces your sense, allowing you to see cold tracks and move faster. Knockdowns extend duration.',
    },
    {
        name: 'Gibraltar',
        class_name: 'Defender',
        imgURL: 'https://i.pinimg.com/originals/44/5b/24/445b24f1a5e88aa8934ce88031907307.jpg',
        passive_name: 'Gun Shield, Fortified',
        passive_description: 'Gun Shield: Aiming down sights deploys a gun shield that blocks incoming fire. Fortified: Incoming damage reduced by 15%. Not slowed by bullets.',
        tactical_name: 'Dome Of Protection',
        tactical_description: 'Blocks incoming and outgoing attacks.',
        ultimate_name: 'Defensive Bombardment',
        ultimate_description: 'Call in a concetrated mortar strike on a position you mark with smoke.',
    },
    {
        name: 'Lifeline',
        class_name: 'Support',
        imgURL: 'https://e0.pxfuel.com/wallpapers/479/888/desktop-wallpaper-lifeline-apex-legends.jpg',
        passive_name: 'Combat Revive',
        passive_description: 'Deploy D.O.C. to revive teammates, leaving lifeline free to defend.',
        tactical_name: 'D.O.C. Heal Drone',
        tactical_description: 'The Drone Of Compassion (D.O.C.) automatically heals those near it over time.',
        ultimate_name: 'Care Package',
        ultimate_description: 'Call in a drop-pod full of smartloot for your squad.',
    },
    {
        name: 'Pathfinder',
        class_name: 'Recon',
        imgURL: 'http://insight.randomhouse.com/fullpage.do?pContentType=JPG&pName=fullpage&pISBN=9781506719900&pPageID=8',
        passive_name: 'Insider Knowledge, Recon',
        passive_description: "Insider Knowledge: Scan a survey beacon to reduce the cooldown of Zipline Gun. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Grappling Hook',
        tactical_description: 'Grapple to get to out-of-reach places quickly.',
        ultimate_name: 'Zipline Gun',
        ultimate_description: 'Creates a zipline for anyone to use.',
    },
    {
        name: 'Wraith',
        class_name: 'Assault',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxn_0tCwaXxUUcUb-rOGks3nnUdxYmuSWzPA&usqp=CAU',
        passive_name: 'Voices From The Void',
        passive_description: 'You hear a voice when danger approaches. As far as you can tell, it is on your side.',
        tactical_name: 'Into The Void',
        tactical_description: 'Reposition quickly through the safety of the "void" space, avoiding all damage.',
        ultimate_name: 'Dimensional Rift',
        ultimate_description: 'Link 2 locations with portals for 60 seconds',
    },
    {
        name: 'Bangalore',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/originals/d2/32/3b/d2323b5cb4d36b6bd6efcd44110966e6.jpg',
        passive_name: 'Double Time',
        passive_description: 'Being under fire while sprinting makes you move faster for a brief time.',
        tactical_name: 'Smoke Launcher',
        tactical_description: 'Fire a high velocity smoke canister that explodes into a smoke wall on impact.',
        ultimate_name: 'Rolling Thunder',
        ultimate_description: 'Call in an artillery strike that slowly creeps across the landscape.',
    },
    {
        name: 'Caustic',
        class_name: 'Defender',
        imgURL: 'https://www.pngfind.com/pngs/m/428-4280466_caustic-caustic-apex-legends-hd-png-download.png',
        passive_name: 'Nox Vision, Fortified',
        passive_description: 'Nox Vision: You gait threat vision on enemies moving through you gas and immunity to enemy gas. Fortified: Incoming damage reduced by 15%. Not slowed by bullets.',
        tactical_name: 'Nox Gas Trap',
        tactical_description: 'Place up to 6 canisters that release deadly Nox gas when shot or triggered by enemies.',
        ultimate_name: 'Nox Gas Grenade',
        ultimate_description: 'Blanket a large area in Nox gas.',
    },
    {
        name: 'Mirage',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/originals/4d/38/7a/4d387ab9651b85784265daf2ce8da680.jpg',
        passive_name: 'Now You See Me...',
        passive_description: 'Automatically cloak when using Respawn Beacons and reviving teammates.',
        tactical_name: 'Psyche Out',
        tactical_description: "Send out a holographic decoy to confuse the enemy. Can be controlled to match mirage's actions",
        ultimate_name: 'Life Of The Party',
        ultimate_description: 'Mirage deploys a team of controllable decoys to distract enemies.',
    },
    {
        name: 'Octane',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/736x/08/fb/1e/08fb1e4050ceba402564216b0d5e66fe.jpg',
        passive_name: 'Swift Mend',
        passive_description: 'While not taking damage, Octane restores health over time.',
        tactical_name: 'Stim',
        tactical_description: 'Increase walk speed by 30% and sprint speed by 40% for 6 seconds. Costs Heath to use. Reduction to slow effects while active.',
        ultimate_name: 'Lauch Pad',
        ultimate_description: 'Deployable jump pad that catapaults users through the air. User can make a second jump while midair from a jump pad',
    },
    {
        name: 'Wattson',
        class_name: 'Defender',
        imgURL: 'https://i.pinimg.com/originals/49/df/e0/49dfe0aee330f9a3d0272dd211a6a260.jpg',
        passive_name: 'Spark Of Genius',
        passive_description: "Ultimate Accelerants fully charge Wattson's ultimate and she can carry a second Ultimate Accelerant per stack. Wattson slowly restores her shields over time",
        tactical_name: 'Perimeter Security',
        tactical_description: 'Create electrified fenses by connecting nodes. Fences damage and slow enemies.',
        ultimate_name: 'Interception Pylon',
        ultimate_description: "Place an electrified pylon that destroys incoming ordnance and repairs damaged shields. Standing near Pylons boosts Wattson's tactical recharge rate. (Max 1)",
    },
    {
        name: 'Crypto',
        class_name: 'Recon',
        imgURL: 'https://i.pinimg.com/736x/b2/f4/b9/b2f4b97450cbf88c5e121fcb860107d9.jpg',
        passive_name: 'NeuroLink, Recon',
        passive_description: "Neurolink : Crypto and his teammates see what his Surveillance Drone detects up to a 30m distance. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Surveillance Drone',
        tactical_description: 'Deploy an aerial camera drone that can remotely interact with Survey Beacons, Respawn Beacons, and ally Banner cards.',
        ultimate_name: 'Drone EMP',
        ultimate_description: 'Charge up an EMP from your drone. The blast deals 50 shield damage, slows players, and destroys traps.',
    },
    {
        name: 'Revenant',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/originals/2c/a1/35/2ca13587331cc9fee62c1d85ecce87e9.jpg',
        passive_name: 'Stalker',
        passive_description: 'You crouch walk faster and can climb higher on walls.',
        tactical_name: 'Silence',
        tactical_description: 'Throw a device that deals damage and disables enemy abilities for a time.',
        ultimate_name: 'Death Totem',
        ultimate_description: 'Drop a totem that protectrs users from death. Instead of getting killed or downed, you will return to the totem. Armor is deactivated during Death Protection',
    },
    {
        name: 'Loba',
        class_name: 'Support',
        imgURL: 'https://i.pinimg.com/736x/fd/3f/d8/fd3fd8072d287bb55837e0f360db02b1.jpg',
        passive_name: 'Eye For Quality',
        passive_description: 'Nearby epic and legendary loot can be seen through walls. The range is the same as Black Market Boutique',
        tactical_name: "Burglar's Best Friend",
        tactical_description: 'Teleport to hard-to-reach places or escape trouble quickly by throwing your jump drive bracelet',
        ultimate_name: 'Black Market Boutique',
        ultimate_description: 'Place a portable device that allows you to teleport nearby loot to your inventory. Each friendly or enemy Legend can take up to two items.',
    },
    {
        name: 'Rampart',
        class_name: 'Defender',
        imgURL: 'https://i.pinimg.com/564x/0b/07/f2/0b07f29a485cdd7ada677175fbc48180.jpg',
        passive_name: 'Modded Loader',
        passive_description: 'Increased magazine capacity and faster reloads when using LMGs and the Minigun.',
        tactical_name: 'Amped Cover',
        tactical_description: 'Build a crouch-cover wall, which deploys a full-cover amped wall that blocks incoming shots and amps outgoing shots. (Max: 5)',
        ultimate_name: 'Mobile Minigun "Sheila"',
        ultimate_description: 'Weild a mobile minigun with a single high capacity magazine. Place it down for anyone to use as a stationary and reloadable turret. (Max: 3)',
    },
    {
        name: 'Horizon',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/236x/cd/08/63/cd08634790c667ee89cdf18d9d113cd8.jpg',
        passive_name: 'Spacewalk',
        passive_description: "Increase air control and reduce fall impacts with Horizon's custom spacesuit.",
        tactical_name: 'Gravity Lift',
        tactical_description: 'Reverses the flow of gravity, lifting players upwards and boosting them outwards when they exit.',
        ultimate_name: 'Black Hole',
        ultimate_description: 'Deploy NEWT to create a micro black hole that pulls players towards it.',
    },
    {
        name: 'Fuse',
        class_name: 'Assault',
        imgURL: 'https://i.pinimg.com/564x/fe/97/1b/fe971bc7eb06cfb326f7554cfd14c058.jpg',
        passive_name: 'Grenadier',
        passive_description: 'Stack an extra grenade per inventory slot. Fire grenades father, fasterm and more accurately.',
        tactical_name: 'Knuckle Cluster',
        tactical_description: 'Launch a cluster bomb that continuously expels airburst explosives on impact.',
        ultimate_name: 'The Motherlode',
        ultimate_description: 'Launch a bombardment that encircles a target area in a wall of flame.',
    },
    {
        name: 'Valkyrie',
        class_name: 'Recon',
        imgURL: 'https://i.pinimg.com/736x/72/63/8e/72638edeff1c1d867973dd4232072e1a.jpg',
        passive_name: 'VTOL Jets, Recon',
        passive_description: "VTOL Jets: Jump while in the air to engage jetpack. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Missle Swarm',
        tactical_description: 'Fire a swarm of mini-rockets which damage and disorient the enemy.',
        ultimate_name: 'Skyward Dive',
        ultimate_description: 'Press once to prepare for launch. Teammates can interact with Valkyrie to join the launch. Press again to launch into the  air and skydive.',
    },
    {
        name: 'Seer',
        class_name: 'Recon',
        imgURL: 'https://i.pinimg.com/736x/53/2f/d6/532fd6ed48356335761d0336dc0d7965.jpg',
        passive_name: 'Heart Seeker, Recon',
        passive_description: "Heart Seeker: Hear and visualize the heartbeats of enemies within 75m when aiming down sights. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Focus Of Attention',
        tactical_description: 'Summon micro-drones to emit a delayed blast that goes through walls interrupting and revealing enemies.',
        ultimate_name: 'Exhibit',
        ultimate_description: 'Create a sphere of micro-drones that reveal the location of ewnemies moving quickly or firing their weapons within.',
    },
    {
        name: 'Ash',
        class_name: 'Assault',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnt4kgyMM-UhbbPyR4dVg0VO2hDRae0_z0A&usqp=CAU',
        passive_name: "Marked For Death",
        passive_description: "Ash's map shows the location of recent deathboxes. Ash can interact with deathboxes to mark surviving attackers. (once per box)",
        tactical_name: 'Arc Snare',
        tactical_description: 'Throw a spinning snare that damages and tethers the first enemy that gets too close.',
        ultimate_name: 'Phase Breach',
        ultimate_description: 'Tear open a one-way portal to a targeted location.',
    },
    {
        name: 'Mad Maggie',
        class_name: 'Assault',
        imgURL: 'https://rare-gallery.com/mocahbig/1380401-Mad-Maggie-Apex-Legends-Video-Game.jpg',
        passive_name: "Warlord's Ire",
        passive_description: "Temporarily highlight enemies you've damaged.",
        tactical_name: 'Riot Drill',
        tactical_description: 'Fire a drill that attaches to an obstacle and burns enemies on the other side.',
        ultimate_name: 'Wrecking Ball',
        ultimate_description: 'Throw a ball that releases speed-boosting pads and detonates near enemies.',
    },
    {
        name: 'Newcastle',
        class_name: 'Defender',
        imgURL: 'https://www.gamespot.com/a/uploads/original/679/6794662/3975075-newcastle.jpg',
        passive_name: 'Retrieve The Wounded, Fortified',
        passive_description: 'Retrieve The Wounded: Drag downed allies as you revive and protect them with your Revive Shield. Fortified: Incoming damage reduced by 15%. Not slowed by bullets.',
        tactical_name: 'Mobile Shield',
        tactical_description: 'Throw out a drone that projecs a movable energy shield.',
        ultimate_name: 'Castle Wall',
        ultimate_description: 'Leap to an ally or target area and slam down, creating a fortified stronghold.',
    },
    {
        name: 'Vantage',
        class_name: 'Recon',
        imgURL: 'https://d2ofqe7l47306o.cloudfront.net/games/mobile/apex-legends-vantage.jpg',
        passive_name: "Spotter's Lens, Recon",
        passive_description: "Spotter's Lens: Aim down sights to scout with your eyepiece (unarmed or with mid- to long-range scopes) and use a bullet drop indicator to see where your shots will land. Recon: Scanning Survey Beacons reveals the next circle's location",
        tactical_name: 'Echo Relocation',
        tactical_description: 'Position your winged companion Echo and then Launch towards him. Must have line of sight to Echo for launch.',
        ultimate_name: "Sniper's Mark",
        ultimate_description: 'Use your custom sniper rifle to mark enemy targets which applies a damage bonus for you and your team.',
    },
    {
        name: 'Catalyst',
        class_name: 'Defender',
        imgURL: 'https://i.pinimg.com/236x/57/f0/58/57f058cc907f3c44fa915c28c6fd167c.jpg',
        passive_name: 'Barricade',
        passive_description: 'Reinforce doors, strengthening them and locking them to enemies. Spaces where doors have been destroyed can also be reinforced. (Max: 2)',
        tactical_name: 'Piercing Spikes',
        tactical_description: 'Throw out a patch of ferrofluid which turns into spikes when enemies are near. Catalyst remains immune to enemy spikes. (Max: 3)',
        ultimate_name: 'Dark Veil',
        ultimate_description: 'Raise a permeable wall of ferrofluid. Enemies who walk through it will be slowed and partially blinded for a brief time.',
    },
]

const weapons = [
    {
        name: 'Havoc',
        ammoType: 'Energy',
        imgURL: 'https://cdn.realsport101.com/images/ncavvykf/gfinityesports/0b3381fe14e52d631eb1d881b095a065d48697d8-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2',
    },
    {
        name: 'Flatline',
        ammoType: 'Heavy',
        imgURL: 'https://preview.redd.it/om2bevyd7rz71.png?auto=webp&s=7222e01b6b2cd62928cd6c2ee0b546a64c1e071e',
    },
    {
        name: 'Hemlock',
        ammoType: 'Heavy',
        imgURL: 'https://i.redd.it/amnugfd2oad41.jpg',
    },
    {
        name: 'R-301',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/bcptqgccc7u21.jpg?auto=webp&s=976179103e74463c40e7de953387ecf02b25e6d0',
    },
    {
        name: 'Alternator',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/not-everyone-might-agree-but-the-alternator-is-the-best-smg-v0-l56y9thae2e81.jpg?auto=webp&s=d9e6b16fc73023a5192053aa9bd0b3c97b3a6698',
    },
    {
        name: 'Prowler',
        ammoType: 'Heavy',
        imgURL: 'https://preview.redd.it/3jwn64n6p7u71.jpg?auto=webp&s=86c63f4e8c480344b90255dfcd89b57d8d965ebc',
    },
    {
        name: 'R-99',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/jjz55kmzo8x71.png?auto=webp&s=baf3616ee67bec3ca4bdfc638c2b560d41851913',
    },
    {
        name: 'Volt',
        ammoType: 'Energy',
        imgURL: 'https://www.gamersdecide.com/sites/default/files/authors/u154199/top_10_apex_legends_best_volt_skins-10_2.jpg',
    },
    {
        name: 'CAR',
        ammoType: 'Light, Heavy',
        imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1400,h_787,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/dbltap_en_international_web/01g4je9n9jrnhx5whjmd.jpg',
    },
    {
        name: 'Devotion',
        ammoType: 'Energy',
        imgURL: 'https://preview.redd.it/nhy967zqxuz31.jpg?auto=webp&s=5a0730fa862cf5dcfc0fbb6040d3cbd581009b3a',
    },
    {
        name: 'L-Star',
        ammoType: 'Energy',
        imgURL: 'https://cdn1.dotesports.com/wp-content/uploads/2021/07/26140644/lstar.png',
    },
    {
        name: 'Spitfire',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/ehd88xl5jmp81.jpg?auto=webp&s=b70106d4074d73129962965719a13c97fb703b59',
    },
    {
        name: 'Rampage',
        ammoType: 'Heavy, Carepackage',
        imgURL: 'https://i.redd.it/p93e63a27pf71.png',
    },
    {
        name: 'G7 Scout',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/j3z2y05qnu961.png?auto=webp&s=a28e5db52d5a2f07533a760dbd506e16847e4426',
    },
    {
        name: 'Triple Take',
        ammoType: 'Energy',
        imgURL: 'https://cdnb.artstation.com/p/assets/images/images/033/839/833/large/dallas-doan-tripletake-03-edited.jpg?1610698987',
    },
    {
        name: '30-30',
        ammoType: 'Heavy',
        imgURL: 'https://i.redd.it/j6v095cib9f61.jpg',
    },
    {
        name: 'Bocek',
        ammoType: 'Arrows, Carepackage',
        imgURL: 'https://cdn.realsport101.com/images/ncavvykf/gfinityesports/b84f3b6179d4ed17559313cf5842fa0e75af332b-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2',
    },
    {
        name: 'Charge-Rifle',
        ammoType: 'Sniper',
        imgURL: 'https://preview.redd.it/pycd9c3hc1251.jpg?auto=webp&s=2664422aea285e6fc3f9ccb52982b0b7bdeb3d09',
    },
    {
        name: 'Longbow',
        ammoType: 'Sniper',
        imgURL: 'https://cdn.realsport101.com/images/ncavvykf/gfinityesports/49a5b556bd5421785496afc8fc3c4d4cdbce9070-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2',
    },
    {
        name: 'Kraber',
        ammoType: 'Carepackage',
        imgURL: 'https://preview.redd.it/h2tgyunht1m61.png?width=640&crop=smart&auto=webp&s=06a53f7025b4629aac7a9b0ecfe1b0a7fc4ad876',
    },
    {
        name: 'Sentinel',
        ammoType: 'Sniper',
        imgURL: 'https://i.redd.it/pwzeccns7mo71.jpg',
    },
    {
        name: 'EVA-8',
        ammoType: 'Shotgun',
        imgURL: 'https://preview.redd.it/yag6wvt0eir51.png?auto=webp&s=8811c96bb1f6257ba6b35f9277ca5ac39cee8809',
    },
    {
        name: 'Mastiff',
        ammoType: 'Shotgun',
        imgURL: 'https://i.redd.it/ai7dnhm259161.jpg',
    },
    {
        name: 'Mozambique',
        ammoType: 'Shotgun',
        imgURL: 'https://i.redd.it/910obzy7dkf21.jpg',
    },
    {
        name: 'Peacekeeper',
        ammoType: 'Shotgun',
        imgURL: 'https://preview.redd.it/8iyxbekshij41.jpg?auto=webp&s=79111c19a05c85ba55847eba640a638912882163',
    },
    {
        name: 'RE-45',
        ammoType: 'Light, Carepackage',
        imgURL: 'https://preview.redd.it/wzo7qxj0v7x71.jpg?auto=webp&s=6b59648775dcc9965030afbfa5c7ffe6a6a53cc4',
    },
    {
        name: 'P2020',
        ammoType: 'Light',
        imgURL: 'https://preview.redd.it/w4s3v77uqfs31.png?auto=webp&s=44d2767ff68cdf6006cf9424378afc3b3b8e9b93',
    },
    {
        name: 'Wingman',
        ammoType: 'Sniper',
        imgURL: 'https://preview.redd.it/1luag6aaqjh51.png?width=777&format=png&auto=webp&s=cc5baf4a86a5cfbe0f6c062a7a2d19ec5c050e6c',
    },
]

const maps = [
    {
        name: "King's Canyon",
        imgURL: 'https://apex-legendsmobile.com/wp-content/uploads/2021/03/Apex-Legends-kings-canyon.jpg.webp'
    },
    {
        name: "World's Edge",
        imgURL: 'https://cdn1.dotesports.com/wp-content/uploads/2022/06/01113105/Worlds-Edge-Big-Maude-map.jpeg'
    },
    {
        name: "Olympus",
        imgURL: 'https://cdn1.dotesports.com/wp-content/uploads/2022/04/23145936/Olympus-season-13.jpeg'
    },
    {
        name: "Stormpoint",
        imgURL: 'https://cdn1.dotesports.com/wp-content/uploads/2022/06/23125216/Apex-Legends_20220623103645.jpg'
    },
    {
        name: "Broken Moon",
        imgURL: 'https://preview.redd.it/clear-broken-moon-map-v0-9d0l5rbc3rx91.png?auto=webp&s=c4297a3f2d75f27fb0987266839403213523b65e'
    },
]


const seedDatabase = async () => {
    await Legends.bulkCreate(legendDetails), Weapons.bulkCreate(weapons), Maps.bulkCreate(maps)

}

module.exports = {
    seedDatabase
}