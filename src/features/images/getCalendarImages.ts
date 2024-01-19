"use server";

import { ImageType, VideoType } from "@entities/types/image.type";

export const getCalendarData = async (formData: FormData) => {
  const API_KEY = process.env.NASA_API_KEY as string;
  const start_date = formData.get("start_date");
  const end_date = formData.get("end_date");
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start_date}&end_date=${end_date}`,
  );
  const result = await (res.json() as Promise<Array<ImageType | VideoType>>);
  return {
    result,
  };
};
