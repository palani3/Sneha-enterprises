export const FOUNDING_YEAR = 1996;

export function getYearsExp(): number {
  return new Date().getFullYear() - FOUNDING_YEAR;
}
