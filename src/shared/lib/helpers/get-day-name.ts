export function getDayName(
  value: string | Date,
  locale = 'en-EN'
): { day: number; month: string; year: string } {
  const date = new Date(value);

  return {
    day: date.getDate(),
    month: date.toLocaleDateString(locale, { month: 'long' }),
    year: date.toLocaleDateString(locale, { year: 'numeric' }),
  };
}
