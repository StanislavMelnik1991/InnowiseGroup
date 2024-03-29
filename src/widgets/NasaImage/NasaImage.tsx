"use client";
import Image from "next/image";
import { useNasaImage } from "@features/hooks/nasaImage/nasaImage";
import styles from "./NasaImage.module.scss";
import { NavigationControls } from "./NavigationControls/NavigationControls";

type Props = {
  src: string;
  hdImage?: string;
  alt: string;
  next?: string | false;
  prev?: string | false;
};

export const NasaImage = ({ alt, src, hdImage, next, prev }: Props) => {
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
      {isImageLoaded && (
        <div className={styles.controls}>
          <NavigationControls next={next} prev={prev} />
        </div>
      )}
    </div>
  );
};
