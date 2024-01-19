import { isFuture } from "date-fns";
import { format } from "date-fns/format";
import { enGB } from "date-fns/locale";
import { useCallback, useEffect, useState } from "react";
import { type ImageType, type VideoType } from "@entities/types/image.type";
import { youtubeLinkParser } from "@shared/utils/linkParser";
import { generateDate, getDaysOfCurrentAndAdjacentMonths } from "./utils";

type Props = {
  getCalendarData: (formData: FormData) => Promise<{
    result: (ImageType | VideoType)[];
  }>;
};

type ICalendarData = {
  date: Date;
  image?: string;
  title?: string;
};

export const useCalendarImages = ({ getCalendarData }: Props) => {
  const [calendarData, setCalendarData] = useState<Array<ICalendarData>>([]);
  const [monthName, setMonthName] = useState(
    format(new Date(), "MMMM", { locale: enGB }),
  );

  const uploadData = useCallback(
    async (dates: Array<ICalendarData>) => {
      const data = new FormData();
      const start_date = dates[0].date;
      const end_date = dates[dates.length - 1].date;
      data.append(
        "start_date",
        format(isFuture(start_date) ? new Date() : start_date, "yyyy-MM-dd"),
      );
      data.append(
        "end_date",
        format(isFuture(end_date) ? new Date() : end_date, "yyyy-MM-dd"),
      );
      const { result } = await getCalendarData(data);
      const newDates = dates.map((val) => {
        const severValue = result.find(
          (data) => data.date === format(val.date, "yyyy-MM-dd"),
        );
        if (severValue) {
          const id = youtubeLinkParser(severValue.url);
          const videoUrlurl = `https://img.youtube.com/vi/${id}/0.jpg`;
          return {
            ...val,
            title: severValue.title,
            image:
              severValue.media_type === "video" ? videoUrlurl : severValue.url,
          };
        } else {
          return val;
        }
      });
      setCalendarData(newDates);
    },
    [getCalendarData],
  );

  const getCalendarDates = useCallback(
    (date: Date) => {
      const dates = getDaysOfCurrentAndAdjacentMonths(date).map((date) => {
        return { date };
      });
      setMonthName(format(dates[15].date, "MMMM", { locale: enGB }));
      uploadData(dates);
    },
    [uploadData],
  );

  const nextMonth = useCallback(() => {
    const nextDate = generateDate(
      calendarData[calendarData.length - 1].date,
      1,
    );
    getCalendarDates(nextDate);
  }, [calendarData, getCalendarDates]);
  const prevMonth = useCallback(() => {
    const nextDate = generateDate(calendarData[0].date, -1);
    getCalendarDates(nextDate);
  }, [calendarData, getCalendarDates]);

  useEffect(() => {
    getCalendarDates(new Date());
  }, [getCalendarDates]);

  return {
    calendarData,
    monthName,
    nextMonth,
    prevMonth,
  };
};
