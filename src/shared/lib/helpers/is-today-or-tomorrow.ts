export type TodayOrTomorrow = 'today' | 'tomorrow' | null;

export const isToday = (date: Date) => {
  const currentDate = new Date();
  return currentDate.toDateString() === date.toDateString();
};

export const isTomorrow = (date: Date) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  if (currentDate.toDateString() === date.toDateString()) {
    return true;
  }
  return false;
};

export const isTodayOrTomorrow = (date: Date) => {
  if (isToday(date)) {
    return 'today';
  }
  if (isTomorrow(date)) {
    return 'tomorrow';
  }
  return null;
};
