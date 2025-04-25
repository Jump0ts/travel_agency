import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "next/image";

type ImageWithFallbackProps = {
	fallback?: string;
} & ImageProps;

const ImageWithFallback = ({
	fallback = "https://rsrc.redestinea.com/fallbackIMG.png",
	alt,
	src,
	...props
}: ImageWithFallbackProps) => {
	const [imgSrc, setImgSrc] = useState(src);

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
