import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "next/image";
import { assetSrc } from "@/config/assets";

type ImageWithFallbackProps = {
  fallback?: string;
} & ImageProps;

const ImageWithFallback = ({
  fallback = assetSrc("images/fallbackIMG.png"),
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(assetSrc(`images/${src}`));

  return (
    <Image
      alt={alt}
      onError={() => setImgSrc(fallback)}
      src={imgSrc}
      loading="lazy"
      {...props}
    />
  );
};

export default ImageWithFallback;
