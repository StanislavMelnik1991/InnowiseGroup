import { format, isFuture, isValid, parse } from "date-fns";

type ValidateDateType = (date?: string) => {
  prev?: string | false;
  current: string;
  next?: string | false;
};

export const validateDate: ValidateDateType = (date) => {
  if (!date) {
    const current = new Date();
    const prev = generateDate(current, -1);
    return {
      prev: !!prev && format(prev, "yyyy-MM-dd"),
      current: format(current, "yyyy-MM-dd"),
    };
  }
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  if (isValid(parsedDate) && !isFuture(parsedDate)) {
    const next = generateDate(parsedDate, 1);
    const prev = generateDate(parsedDate, -1);
    return {
      prev: !!prev && format(prev, "yyyy-MM-dd"),
      current: date,
      next: !!next && format(next, "yyyy-MM-dd"),
    };
  } else {
    const current = new Date();
    const prev = generateDate(current, -1);
    return {
      prev: !!prev && format(prev, "yyyy-MM-dd"),
      current: format(current, "yyyy-MM-dd"),
    };
  }
};

const generateDate = (date: Date, offset: -1 | 0 | 1) => {
  const currentDay = new Date(date);
  currentDay.setDate(currentDay.getDate() + offset);
  return isFuture(currentDay) ? undefined : currentDay;
};
