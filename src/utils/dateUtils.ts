export const formatDateToLongMonth = (date: Date): string => {
  return date.toLocaleDateString('en-us', {
    month: 'long',
  });
};

export const formatDateToYear = (date: Date): string => {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
  });
};

export const getMonthDifference = (date1: Date, date2: Date): number => {
  let months;
  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();
  return months <= 0 ? 0 : months;
};

export const getPreviousMonthDate = (date: Date): Date => {
  const previousMonthDate = new Date(date);
  previousMonthDate.setMonth(date.getMonth() - 1);
  return previousMonthDate;
};

export const getNextMonthDate = (date: Date): Date => {
  const nextMonthDate = new Date(date);
  nextMonthDate.setMonth(date.getMonth() + 1);
  return nextMonthDate;
};

export const isNotFutureDate = (date: Date): boolean => {
  return (
    date.getMonth() <= new Date().getMonth() &&
    date.getFullYear() <= new Date().getFullYear()
  );
};
