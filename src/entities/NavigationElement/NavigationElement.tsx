import Link from "next/link";
import styles from "./NavigationElement.module.scss";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const NavigationElement = ({ children, href }: Props) => {
  return (
    <Link href={href} className={styles.wrapper}>
      {children}
    </Link>
  );
};
