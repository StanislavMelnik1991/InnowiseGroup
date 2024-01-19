import styles from "./Error.module.scss";

type Props = {
  title?: string;
  code?: number;
  message?: string;
};

export const ErrorWidget = ({ message, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
