import { Header } from "./Header/Header";
import styles from "./PageWrapper.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const PageWrapper = ({ children, title }: Props) => {
  return (
    <main className={styles.wrapper}>
      <Header title={title} />
      <div className={styles.scrolling}>{children}</div>
    </main>
  );
};
