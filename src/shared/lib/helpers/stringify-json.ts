export const stringifyJson = <T>(json: any): T =>
  JSON.parse(JSON.stringify(json));
