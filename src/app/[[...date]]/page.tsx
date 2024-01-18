import { redirect, notFound } from "next/navigation";
import { NasaImage } from "@widgets/NasaImage/NasaImage";
import { getImages } from "@features/images/getImages";
import { validateDate } from "@features/validateDate/validateDate";
import { ImageType } from "@entities/types/image.type";

type Props = {
  params: { date?: string[] };
  searchParams: Record<string, string>;
};

const Page = async ({ params: { date } }: Props) => {
  const API_KEY = process.env.NASA_API_KEY as string;
  const validDate = validateDate(date?.[0]);
  if (date?.[0] !== validDate) {
    redirect(`/${validDate}`);
  }
  try {
    const image = await getImages({ key: API_KEY, date: date?.[0] });
    return (
      <NasaImage
        src={(image as ImageType).hdurl || (image as ImageType).url}
        alt={(image as ImageType).title}
      />
    );
  } catch (error) {
    notFound();
  }
};
export default Page;
