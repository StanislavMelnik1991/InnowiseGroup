import {
  type ImageErrorType,
  type ImageType,
} from "@entities/types/image.type";

type Props = {
  key: string;
  date?: string;
};

export const getImages = async ({ key, date }: Props) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`,
    );
    const image = await (res.json() as Promise<ImageType | ImageErrorType>);
    return image;
  } catch (error) {
    return null;
  }
};
