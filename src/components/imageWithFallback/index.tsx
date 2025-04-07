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
	width = 500,
	height = 600,
	...props
}: ImageWithFallbackProps) => {
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<Image
			alt={alt}
			onError={() => setImgSrc(fallback)}
			src={imgSrc}
			width={width}
			height={height}
			{...props}
		/>
	);
};

export default ImageWithFallback;
