import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "next/image";

type ImageWithFallbackProps = {
	fallback?: string;
} & ImageProps;

const ImageWithFallback = ({
	fallback = "/fallbackIMG.png",
	alt,
	src,
	...props
}: ImageWithFallbackProps) => {
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<img
			alt={alt}
			onError={() => setImgSrc(fallback)}
			src={imgSrc}
			{...props}
		/>
	);
};

export default ImageWithFallback;
