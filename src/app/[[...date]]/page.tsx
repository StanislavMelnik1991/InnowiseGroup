import { redirect, notFound } from "next/navigation";
import { NasaImage } from "@widgets/NasaImage/NasaImage";
import { PageWrapper } from "@widgets/PageWrapper/PageWrapper";
import { getImages } from "@features/images/getImages";
import { validateDate } from "@features/validateDate/validateDate";

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
      <PageWrapper title={image.title}>
        <NasaImage src={image.url} alt={image.title} hdImage={image.hd} />
      </PageWrapper>
    );
  } catch (error) {
    notFound();
  }
};
export default Page;
