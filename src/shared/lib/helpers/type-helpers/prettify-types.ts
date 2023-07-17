export type PrettifyTypes<T> = {
  [K in keyof T]: T[K];
} & unknown;
