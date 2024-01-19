import { ArrowIcon } from "@shared/uiComponents/icons/Arrow/Arrow";
import styles from "./CalendarHeader.module.scss";

type Props = {
  title: string;
  next: () => void;
  prev: () => void;
};

export const CalendarHeader = ({ next, prev, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={prev}>
        <ArrowIcon className={styles.icon} rotate={90} size={24} />
      </button>
      <h2>{title}</h2>
      <button className={styles.button} onClick={next}>
        <ArrowIcon className={styles.icon} rotate={-90} size={24} />
      </button>
    </div>
  );
};
