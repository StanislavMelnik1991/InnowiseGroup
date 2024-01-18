import { format, isFuture, isValid, parse } from "date-fns";

export const validateDate = (date?: string) => {
  if (!date) {
    return format(new Date(), "yyyy-MM-dd");
  }
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  if (isValid(parsedDate) && !isFuture(parsedDate)) {
    return date;
  } else {
    return format(new Date(), "yyyy-MM-dd");
  }
};
