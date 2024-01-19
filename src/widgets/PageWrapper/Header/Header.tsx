import styles from "./Header.module.scss";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.wrapper}>
      <h1>{title}</h1>
    </header>
  );
};
