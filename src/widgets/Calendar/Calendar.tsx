"use client";
import { format } from "date-fns";
import Link from "next/link";
import { useCalendarImages } from "@features/hooks/calendarImages/calendarImages";
import { getCalendarData } from "@features/images/getCalendarImages";
import styles from "./Calendar.module.scss";

export const CalendarWidget = () => {
  const { calendarData, monthName } = useCalendarImages({
    getCalendarData,
  });
  return (
    <div className={styles.wrapper}>
      <h2>{monthName}</h2>
      <div className={styles.calendar}>
        {calendarData.map((val) => {
          return (
            <Link
              href={`/${format(val.date, "yyyy-MM-dd")}`}
              className={styles.day}
              key={val.date.toLocaleString()}
            >
              <p>{val.date.getDate()}</p>
              <p>{val.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
