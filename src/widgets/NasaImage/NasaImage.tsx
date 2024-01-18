import Image from "next/image";
import styles from "./NasaImage.module.scss";

type Props = {
  src: string;
  alt: string;
};

export const NasaImage = ({ alt, src }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        width={1920}
        height={1920}
        className={styles.image}
        src={src}
        alt={alt}
        priority
      />
    </div>
  );
};
