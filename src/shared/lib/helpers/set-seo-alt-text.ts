import { getDayName } from './get-day-name';
import { nthNumber } from './nth-number';

interface SetSeoAltText {
  title?: string;
  date?: string | Date;
}

export const setSeoAltText = <TParams extends SetSeoAltText>({
  title,
  date,
}: TParams) => {
  if (date) {
    const { month, day, year } = getDayName(date);
    const fullText = `${title} ${day}${nthNumber(day)} ${month} ${year}`;
    return fullText;
  }
  return title ?? '';
};
