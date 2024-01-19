"use client";
import { useCalendarImages } from "@features/hooks/calendarImages/calendarImages";
import { getCalendarData } from "@features/images/getCalendarImages";
import { CalendarDay } from "@entities/CalendarDay/CalendarDay";
import styles from "./Calendar.module.scss";
import { CalendarHeader } from "./CalendarHeader/CalendarHeader";

export const CalendarWidget = () => {
  const { calendarData, monthName, isLoading, nextMonth, prevMonth } =
    useCalendarImages({
      getCalendarData,
    });
  return (
    <div className={`${styles.wrapper} ${isLoading ? "" : styles.loader}`}>
      <CalendarHeader next={nextMonth} prev={prevMonth} title={monthName} />
      <div className={styles.calendar}>
        {calendarData.map(({ date, image, title }) => {
          return (
            <CalendarDay
              date={date}
              image={image}
              title={title}
              className={styles.day}
              key={date.toLocaleString()}
            />
          );
        })}
      </div>
    </div>
  );
};
