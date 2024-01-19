import Link from "next/link";
import { ArrowIcon } from "@shared/uiComponents/icons/Arrow/Arrow";
import styles from "./NavigationControls.module.scss";

type Props = {
  next?: string | false;
  prev?: string | false;
};

export const NavigationControls = ({ next, prev }: Props) => {
  return (
    <>
      <Link
        href={`${prev ? `/${prev}` : ""}`}
        className={`${styles.button} ${prev ? "" : styles.hide}`}
      >
        <ArrowIcon className={styles.icon} rotate={90} size={200} />
      </Link>
      <Link
        href={`${next ? `/${next}` : ""}`}
        className={`${styles.button} ${next ? "" : styles.hide}`}
      >
        <ArrowIcon className={styles.icon} rotate={-90} size={200} />
      </Link>
    </>
  );
};
