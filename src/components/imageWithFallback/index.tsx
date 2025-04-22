import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "next/image";

type ImageWithFallbackProps = {
	fallback?: string;
} & ImageProps;

const ImageWithFallback = ({
	fallback = "fallbackIMG.png",
	alt,
	src,
	...props
}: ImageWithFallbackProps) => {
	const [imgSrc, setImgSrc] = useState(
		`${process.env.NEXT_PUBLIC_RSRC_REDESTINEA_ULR}images/${src}`
	);
	console.log(`src: ${process.env.RSRC_REDESTINEA_URL}`);

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
