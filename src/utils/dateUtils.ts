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
