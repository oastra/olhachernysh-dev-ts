/**
 * Rhythmic gallery layout:
 *   - repeating groups of 3 render as [half, half, wide]
 *   - a trailing single item becomes wide
 *   - a trailing pair becomes [half, half]
 */
export function autoSpan(index: number, total: number): 'wide' | 'half' {
  const groupsOfThree = Math.floor(total / 3);
  const lastGroupStart = groupsOfThree * 3;
  const remainder = total % 3;

  if (index >= lastGroupStart) {
    return remainder === 1 ? 'wide' : 'half';
  }
  return index % 3 === 2 ? 'wide' : 'half';
}
