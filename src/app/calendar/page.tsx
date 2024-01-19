import { CalendarWidget } from "@widgets/Calendar/Calendar";
import { PageWrapper } from "@widgets/PageWrapper/PageWrapper";

const Page = async () => {
  /* const API_KEY = process.env.NASA_API_KEY as string;
  const start_date = "2024-01-01";
  const end_date = "2024-01-19";
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start_date}&end_date=${end_date}`,
  );
  const result = await res.json(); */
  return (
    <PageWrapper title={"Calendar"}>
      <CalendarWidget />
    </PageWrapper>
  );
};

export default Page;
