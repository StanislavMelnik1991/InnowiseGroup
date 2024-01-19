import Image from "next/image";
import { NavigationElement } from "@entities/NavigationElement/NavigationElement";
import { CalendarIcon } from "@shared/uiComponents/icons/Calendar/Calendar";
import styles from "./Header.module.scss";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.wrapper}>
      <NavigationElement href={"/"}>
        <Image src={"/nasa.svg"} width={50} height={50} alt="logo" />
      </NavigationElement>
      <h1>{title}</h1>
      <NavigationElement href={"/calendar"}>
        <CalendarIcon />
      </NavigationElement>
    </header>
  );
};
