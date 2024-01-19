import { format, isFuture } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import styles from "./CalendarDay.module.scss";

type Props = {
  image?: string;
  title?: string;
  date: Date;
  className?: string;
};

export const CalendarDay = ({ date, image, title, className }: Props) => {
  if (isFuture(date) || !image) {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <p className={styles.date}>{date.getDate()}</p>
      </div>
    );
  } else {
    return (
      <Link
        href={`/${format(date, "yyyy-MM-dd")}`}
        className={`${styles.wrapper} ${className}`}
      >
        <p className={styles.date}>{date.getDate()}</p>
        <Image
          className={styles.image}
          width={0}
          height={0}
          sizes="100%"
          fill
          src={image}
          alt={title || "image"}
        />
        <h3 className={styles.title}>{title}</h3>
      </Link>
    );
  }
};
