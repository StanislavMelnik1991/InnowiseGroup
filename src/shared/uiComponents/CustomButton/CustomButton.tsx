import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./CustomButton.module.scss";

export const CustomButton = ({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <button className={`${styles.wrapper} ${className}`} {...props} />;
};
