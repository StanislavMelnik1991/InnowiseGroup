import { redirect, notFound } from "next/navigation";
import { ErrorWidget } from "@widgets/Error/Error";
import { NasaImage } from "@widgets/NasaImage/NasaImage";
import { PageWrapper } from "@widgets/PageWrapper/PageWrapper";
import { getImages } from "@features/images/getImages";
import { validateDate } from "@features/validateDate/validateDate";
import { ApiError } from "@shared/utils/error";

type Props = {
  params: { date?: string[] };
  searchParams: Record<string, string>;
};

const Page = async ({ params: { date } }: Props) => {
  const { current, next, prev } = validateDate(date?.[0]);
  if (date?.[0] !== current) {
    redirect(`/${current}`);
  }
  try {
    const image = await getImages({ date: date?.[0] });
    return (
      <PageWrapper title={image.title}>
        <NasaImage
          src={image.url}
          alt={image.title}
          hdImage={image.hd}
          next={next}
          prev={prev}
        />
      </PageWrapper>
    );
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.code === 404) {
        return notFound();
      }
      return (
        <PageWrapper title={`Error code: ${error.code}`}>
          <ErrorWidget
            code={error.code}
            message={error.message}
            title={error.title}
          />
        </PageWrapper>
      );
    }
    notFound();
  }
};
export default Page;
