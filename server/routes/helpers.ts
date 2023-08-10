export const mainContinents = [
  'asia',
  'europe',
  'north america',
  'oceania',
  'south america',
  'africa',
  'antartica',
]
// add continents

/**
 * Takes a string and capitalises the first letter.
 *
 * e.g. capitalise('tangle stage') => returns 'Tangle stage'
 * @param {string} name
 * @returns string
 */
export function capitalise(name: string) {
  return name[0].toUpperCase() + name.substring(1)
}

/**
 * Ensures that @param continent is a string and is a valid Event day
 * The default valid event days are: friday, saturday, and sunday
 *
 * If the input day is not valid, use the first valid day instead
 * @param {string} continent
 * @param {string[]} continents
 * @returns string
 */
export function validateContinent(
  continent: string | undefined,
  continents: string[] = mainContinents
) {
  // Use the first day as the default value if the day argument isn't valid
  if (typeof continent !== 'string') return continents[0]
  if (!continents.includes(continent)) return continents[0]
  return continent
}
