import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.wrapper}>
      <Link href={"/"}>
        <Image src={"/nasa.svg"} width={50} height={50} alt="logo" />
      </Link>
      <h1>{title}</h1>
      <Navigation />
    </header>
  );
};
