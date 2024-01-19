import {
  VideoType,
  type ImageErrorType,
  type ImageType,
} from "@entities/types/image.type";
import { youtubeLinkParser } from "@shared/utils/linkParser";

type Props = {
  key: string;
  date?: string;
};

type ResultType = {
  title: string;
  url: string;
  hd?: string;
};

type GetImagesType = (props: Props) => Promise<ResultType>;

export const getImages: GetImagesType = async ({ key, date }) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`,
  );
  const result = await (res.json() as Promise<
    ImageType | VideoType | ImageErrorType
  >);
  if ((result as ImageErrorType).error) {
    throw new Error((result as ImageErrorType).error.message);
  }
  if ((result as VideoType).media_type === "video") {
    const id = youtubeLinkParser((result as VideoType).url);
    const url = `https://img.youtube.com/vi/${id}/0.jpg`;
    return {
      title: (result as VideoType).title,
      url,
    };
  }
  if ((result as ImageType).media_type === "image") {
    return {
      title: (result as ImageType).title,
      url: (result as ImageType).url,
      hd: (result as ImageType).hdurl,
    };
  }
  throw new Error("unexpected");
};
