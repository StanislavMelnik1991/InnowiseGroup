"use client";
import Image from "next/image";
import { useNasaImage } from "@features/hooks/nasaImage/nasaImage";
import styles from "./NasaImage.module.scss";

type Props = {
  src: string;
  hdImage?: string;
  alt: string;
};

export const NasaImage = ({ alt, src, hdImage }: Props) => {
  const { isHdLoaded, isImageLoaded, onHdLoadHandler, onImageLoadHandler } =
    useNasaImage();
  return (
    <div className={`${styles.wrapper} ${isImageLoaded ? "" : styles.loader}`}>
      {!isHdLoaded && (
        <Image
          width={0}
          height={0}
          sizes="100%"
          className={styles.image}
          src={src}
          alt={alt}
          priority
          onLoad={onImageLoadHandler}
        />
      )}
      {!!hdImage && isImageLoaded && (
        <Image
          width={0}
          height={0}
          sizes="100%"
          className={`${styles.image} ${isHdLoaded ? "" : styles.hidden}`}
          src={hdImage}
          alt={alt}
          priority={isImageLoaded}
          onLoad={onHdLoadHandler}
        />
      )}
    </div>
  );
};
