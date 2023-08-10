// comment out but save for monster hunters
// seed for monster hunters

export async function seed(knex) {
  await knex('hunters').insert([
    {
      id: 1,
      monster_id: 5,
      name: 'Valeria Steel',
      location: 'Asia',
      kills: '37',
      description:
        'A skilled monster hunter with nerves of steel and a sharp mind.',
      price: '$5000',
    },
    {
      id: 2,
      monster_id: 12,
      name: 'Luther Shadowbane',
      location: 'North America',
      kills: '24',
      description:
        'A mysterious hunter who thrives in the darkness, dealing with supernatural threats.',
      price: '$7000',
    },
    {
      id: 3,
      monster_id: 9,
      name: 'Elena Moonshadow',
      location: 'South America',
      kills: '18',
      description:
        'A swift and agile hunter known for her exceptional archery skills.',
      price: '$5500',
    },
    {
      id: 4,
      monster_id: 18,
      name: 'Gareth Stormrider',
      location: 'Europe',
      kills: '29',
      description:
        'An experienced monster slayer who harnesses the power of storms.',
      price: '$8000',
    },
    {
      id: 5,
      monster_id: 3,
      name: 'Kai Desertwind',
      location: 'Africa',
      kills: '22',
      description:
        'A nomadic hunter skilled in surviving the harsh desert environments.',
      price: '$4500',
    },
    {
      id: 6,
      monster_id: 20,
      name: 'Aria Lightbringer',
      location: 'Australasia',
      kills: '15',
      description:
        'A noble hunter dedicated to preserving the balance between light and darkness.',
      price: '$6000',
    },
    {
      id: 7,
      monster_id: 8,
      name: 'Dorian Stoneheart',
      location: 'Antarctica',
      kills: '12',
      description:
        'A relentless hunter who braves the frozen wastelands to face mighty beasts.',
      price: '$5500',
    },
    {
      id: 8,
      monster_id: 1,
      name: 'Soraya Firestorm',
      location: 'North America',
      kills: '28',
      description:
        'A fiery hunter with a burning determination to protect her homeland.',
      price: '$6000',
    },
    {
      id: 9,
      monster_id: 17,
      name: 'Raven Nightshade',
      location: 'Europe',
      kills: '20',
      description:
        'A shadowy figure known for hunting creatures of the night and unraveling mysteries.',
      price: '$6500',
    },
    {
      id: 10,
      monster_id: 14,
      name: 'Alden Ironclad',
      location: 'South America',
      kills: '14',
      description:
        'A battle-hardened warrior who faces monstrous threats head-on with his trusty axe.',
      price: '$7000',
    },
    {
      id: 11,
      monster_id: 2,
      name: 'Cassandra Swiftstrike',
      location: 'Asia',
      kills: '19',
      description:
        'A swift and nimble hunter known for her lightning-fast strikes.',
      price: '$5200',
    },
    {
      id: 12,
      monster_id: 15,
      name: 'Ezekiel Ironheart',
      location: 'Europe',
      kills: '26',
      description:
        'A fearless warrior who wields a mighty hammer to vanquish monstrous foes.',
      price: '$7500',
    },
    {
      id: 13,
      monster_id: 7,
      name: 'Seraphina Starlight',
      location: 'Australasia',
      kills: '17',
      description:
        'A celestial hunter gifted with the power of the stars, guiding her on her quests.',
      price: '$6200',
    },
    {
      id: 14,
      monster_id: 19,
      name: 'Aldric Thunderstrike',
      location: 'North America',
      kills: '23',
      description:
        'A thunderous hunter with a hammer that can summon lightning to smite his enemies.',
      price: '$6800',
    },
    {
      id: 15,
      monster_id: 6,
      name: 'Luna Nightwalker',
      location: 'Africa',
      kills: '16',
      description:
        'A hunter who thrives under the moonlight, using her ethereal powers to defeat monsters.',
      price: '$5300',
    },
    {
      id: 16,
      monster_id: 10,
      name: 'Kieran Frostbite',
      location: 'Antarctica',
      kills: '13',
      description:
        'A frigid warrior who braves the icy tundras, wielding a frosty blade against beasts.',
      price: '$5800',
    },
    {
      id: 17,
      monster_id: 16,
      name: 'Silvanus Windwhisper',
      location: 'South America',
      kills: '21',
      description:
        'A wind-controlling hunter who commands gales and breezes in battles.',
      price: '$6700',
    },
    {
      id: 18,
      monster_id: 4,
      name: 'Isolde Moonshadow',
      location: 'Australasia',
      kills: '27',
      description:
        'A dual-wielding rogue who strikes swiftly and silently, like the night.',
      price: '$7100',
    },
    {
      id: 19,
      monster_id: 13,
      name: 'Thalia Stormseeker',
      location: 'Europe',
      kills: '14',
      description:
        'A storm-chasing hunter who seeks out powerful creatures during tempestuous weather.',
      price: '$5600',
    },
    {
      id: 20,
      monster_id: 11,
      name: 'Leif Earthshaker',
      location: 'North America',
      kills: '18',
      description:
        'A mighty warrior who uses his earth-shaking hammer to bring down colossal foes.',
      price: '$6400',
    },
    {
      id: 21,
      monster_id: 8,
      name: 'Lyra Starcaller',
      location: 'Australasia',
      kills: '20',
      description:
        'A celestial mage who commands the powers of stars to combat monstrous foes.',
      price: '$6700',
    },
    {
      id: 22,
      monster_id: 16,
      name: 'Rowan Windrider',
      location: 'North America',
      kills: '25',
      description:
        'A skybound hunter who rides the winds, using his aerial advantage to fight creatures.',
      price: '$7200',
    },
    {
      id: 23,
      monster_id: 10,
      name: 'Freya Frostglade',
      location: 'Europe',
      kills: '19',
      description:
        'A frosty huntress who wields ice magic to freeze and defeat her adversaries.',
      price: '$6200',
    },
    {
      id: 24,
      monster_id: 4,
      name: 'Haldor Stoneshield',
      location: 'Africa',
      kills: '15',
      description:
        'A durable defender who shields his companions while engaging monstrous threats.',
      price: '$5800',
    },
    {
      id: 25,
      monster_id: 18,
      name: 'Ivy Thornheart',
      location: 'South America',
      kills: '22',
      description:
        'A nature-loving hunter who uses her connection with flora to outwit and overpower foes.',
      price: '$6500',
    },
    {
      id: 26,
      monster_id: 1,
      name: 'Soren Firebrand',
      location: 'Asia',
      kills: '30',
      description:
        'A fiery champion who harnesses the inferno to defeat creatures with burning might.',
      price: '$7800',
    },
    {
      id: 27,
      monster_id: 13,
      name: 'Selene Moonshadow',
      location: 'Antarctica',
      kills: '16',
      description:
        'A moonlit huntress who strikes monsters with precision under the shimmering night sky.',
      price: '$5900',
    },
    {
      id: 28,
      monster_id: 7,
      name: 'Kael Stormbringer',
      location: 'Australasia',
      kills: '23',
      description:
        'A tempestuous warrior who commands the elements to unleash powerful storms.',
      price: '$6900',
    },
    {
      id: 29,
      monster_id: 5,
      name: 'Darius Flameheart',
      location: 'North America',
      kills: '27',
      description:
        'A valiant knight who wields a blazing sword, burning monsters to ashes.',
      price: '$7500',
    },
    {
      id: 30,
      monster_id: 11,
      name: 'Astrid Earthshaker',
      location: 'Europe',
      kills: '21',
      description:
        'An earth-shattering huntress who uses seismic forces to crush her monstrous foes.',
      price: '$6800',
    },
    {
      id: 31,
      monster_id: 14,
      name: 'Eira Snowblade',
      location: 'Antarctica',
      kills: '17',
      description:
        'A frigid warrior who wields a frosty blade against monstrous threats in the icy wastelands.',
      price: '$6200',
    },
    {
      id: 32,
      monster_id: 3,
      name: 'Nyx Nightshroud',
      location: 'African',
      kills: '14',
      description:
        'A shadowy enigma who prowls the night, vanquishing monsters with stealth and precision.',
      price: '$5500',
    },
    {
      id: 33,
      monster_id: 17,
      name: 'Astraea Voidbringer',
      location: 'Asia',
      kills: '20',
      description:
        'A master of dark magic who manipulates the void to battle creatures of the unknown.',
      price: '$6700',
    },
    {
      id: 34,
      monster_id: 2,
      name: 'Leona Sunfire',
      location: 'South America',
      kills: '25',
      description:
        'A radiant warrior who channels the power of the sun to defeat her monstrous adversaries.',
      price: '$7200',
    },
    {
      id: 35,
      monster_id: 9,
      name: 'Thorne Thornwhisper',
      location: 'Europe',
      kills: '18',
      description:
        'A nature-bound hunter who communicates with plants and animals to protect the world.',
      price: '$6300',
    },
    {
      id: 36,
      monster_id: 20,
      name: 'Cassian Skybreaker',
      location: 'Australasia',
      kills: '23',
      description:
        'A storm-chasing aviator who soars through the skies to battle monstrous forces.',
      price: '$6800',
    },
    {
      id: 37,
      monster_id: 6,
      name: 'Eldric Thornheart',
      location: 'North America',
      kills: '16',
      description:
        "A protector of the wilds who wields nature's forces to defeat unnatural creatures.",
      price: '$5900',
    },
    {
      id: 38,
      monster_id: 11,
      name: 'Kara Earthshaker',
      location: 'Europe',
      kills: '22',
      description:
        'An earth-moving warrior who shapes the terrain to outmaneuver and conquer monsters.',
      price: '$6500',
    },
    {
      id: 39,
      monster_id: 1,
      name: 'Lorelei Fireheart',
      location: 'Asia',
      kills: '28',
      description:
        'A fiery sorceress who commands flames to defeat the forces of darkness.',
      price: '$7500',
    },
    {
      id: 40,
      monster_id: 15,
      name: 'Alden Nightfall',
      location: 'North America',
      kills: '21',
      description:
        'A shadow-wielding hunter who thrives in the cover of night to battle evil creatures.',
      price: '$6800',
    },
  ])
}
