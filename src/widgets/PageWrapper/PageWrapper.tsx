import { Header } from "./Header/Header";
import styles from "./PageWrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  return (
    <main className={styles.wrapper}>
      <Header />
      <div className={styles.scrolling}>{children}</div>
    </main>
  );
};
