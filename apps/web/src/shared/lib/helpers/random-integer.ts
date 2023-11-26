export function randomInteger(min: number, max: number) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}
