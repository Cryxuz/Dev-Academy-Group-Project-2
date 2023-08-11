// seed with monster data
export async function seed(knex) {
  await knex('monsters').insert([
    {
      id: 1,
      name: 'Firebeast',
      location: 'north-america',
      type: 'Fire',
      description:
        'A fierce creature with blazing red scales and the ability to breathe fire.',
    },
    {
      id: 2,
      name: 'Frostwing',
      location: 'antarctica',
      type: 'Ice',
      description:
        'A majestic ice dragon that rules the frozen lands with its icy breath.',
    },
    {
      id: 3,
      name: 'Jungleclaw',
      location: 'south-america',
      type: 'Beast',
      description:
        'A stealthy predator with sharp claws, lurking in the dense jungles.',
    },
    {
      id: 4,
      name: 'Stormrider',
      location: 'europe',
      type: 'Air',
      description:
        'A mystical being that rides the stormy winds and commands lightning.',
    },
    {
      id: 5,
      name: 'Sandsnake',
      location: 'africa',
      type: 'Earth',
      description:
        'A massive serpent that burrows beneath the desert sands, striking with deadly force.',
    },
    {
      id: 6,
      name: 'Mistwalker',
      location: 'asia',
      type: 'Water',
      description:
        'An elusive spirit that dwells within misty lakes and grants blessings to those who find it.',
    },
    {
      id: 7,
      name: 'Thunderhoof',
      location: 'north-america',
      type: 'Electric',
      description:
        'A wild and powerful creature with electrified horns that can create thunderstorms.',
    },
    {
      id: 8,
      name: 'Rockslide',
      location: 'oceania',
      type: 'Earth',
      description:
        'A mountain-dwelling giant known for causing avalanches and shaping the landscape.',
    },
    {
      id: 9,
      name: 'Shadowclaw',
      location: 'europe',
      type: 'Dark',
      description:
        'A mysterious entity that lurks in the shadows, with eyes that can pierce through the night.',
    },
    {
      id: 10,
      name: 'Celestial',
      location: 'antarctica',
      type: 'Light',
      description:
        'An ethereal being that emanates radiant light and brings hope to the coldest of places.',
    },
    {
      id: 11,
      name: 'Volcanic-Golem',
      location: 'asia',
      type: 'Fire',
      description:
        'A massive creature made of molten rock, emerging from the heart of a volcano.',
    },
    {
      id: 12,
      name: 'Windsong-Sylph',
      location: 'oceania',
      type: 'Air',
      description:
        'A graceful being with wings of air, capable of creating soothing melodies with every flutter.',
    },
    {
      id: 13,
      name: 'Lurking-Kraken',
      location: 'south-america',
      type: 'Water',
      description:
        'A legendary sea monster with tentacles that emerge from the depths to snatch ships.',
    },
    {
      id: 14,
      name: 'Thorned-Behemoth',
      location: 'africa',
      type: 'Earth',
      description:
        'A colossal creature covered in thick, spiked armor, trampling through dense forests.',
    },
    {
      id: 15,
      name: 'Ethereal-Specter',
      location: 'europe',
      type: 'Ghost',
      description:
        'A ghostly entity that haunts ancient castles and crypts, with a chilling touch.',
    },
    {
      id: 16,
      name: 'Solar-Serpent',
      location: 'north-america',
      type: 'Light',
      description:
        'A radiant snake that harnesses the power of the sun, illuminating the darkest corners.',
    },
    {
      id: 17,
      name: 'Darkling-Harbinger',
      location: 'antarctica',
      type: 'Dark',
      description:
        'A foreboding figure that heralds impending doom, casting an aura of darkness.',
    },
    {
      id: 18,
      name: 'Aqua-Hydra',
      location: 'oceania',
      type: 'Water',
      description:
        'A multi-headed sea serpent that guards hidden treasures beneath the ocean waves.',
    },
    {
      id: 19,
      name: 'Ember-Phoenix',
      location: 'asia',
      type: 'Fire',
      description:
        'A legendary bird that rises from the ashes with flames that can incinerate anything.',
    },
    {
      id: 20,
      name: 'Gale-Griffin',
      location: 'europe',
      type: 'Air',
      description:
        'A majestic creature with the body of a lion and the wings of an eagle, soaring through the skies.',
    },
  ])
}
