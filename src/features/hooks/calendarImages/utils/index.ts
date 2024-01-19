import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isFuture,
} from "date-fns";

export function getDaysOfCurrentAndAdjacentMonths(date: Date): Date[] {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));
  return eachDayOfInterval({ start, end });
}
export const generateDate = (date: Date, offset: -1 | 0 | 1) => {
  const currentDay = new Date(date);
  currentDay.setDate(currentDay.getDate() + offset);
  return isFuture(currentDay) ? undefined : currentDay;
};
