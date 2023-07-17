export function formatDate(
  value?: string | Date | undefined,
  locale = 'ru-RU'
) {
  if (value !== undefined) return new Date(value).toLocaleDateString(locale);
  return undefined;
}
