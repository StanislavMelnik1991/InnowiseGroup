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
        width={0}
        height={0}
        sizes="100%"
        className={styles.image}
        src={src}
        alt={alt}
      />
    </div>
  );
};
