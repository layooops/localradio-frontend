export enum NumberSuffix {
  FIRST = 'st',
  SECOND = 'nd',
  THIRD = 'rd',
  OTHER = 'th',
}

export const nthNumber = (number: number) => {
  if (number > 3 && number < 21) {
    return NumberSuffix.OTHER;
  }

  const lastDigit = number % 10;

  switch (lastDigit) {
    case 1:
      return NumberSuffix.FIRST;
    case 2:
      return NumberSuffix.SECOND;
    case 3:
      return NumberSuffix.THIRD;
    default:
      return NumberSuffix.OTHER;
  }
};
