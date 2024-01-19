import { ReactEventHandler, useCallback, useState } from "react";

export const useNasaImage = () => {
  const [isHdLoaded, setIsHdLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onImageLoadHandler: ReactEventHandler<HTMLImageElement> =
    useCallback(() => {
      setIsImageLoaded(true);
    }, []);
  const onHdLoadHandler: ReactEventHandler<HTMLImageElement> =
    useCallback(() => {
      setIsHdLoaded(true);
    }, []);

  return {
    isHdLoaded,
    isImageLoaded,
    onImageLoadHandler,
    onHdLoadHandler,
  };
};
