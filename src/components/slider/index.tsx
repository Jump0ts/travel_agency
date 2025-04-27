import React from "react";
import Slider from "react-slick";
import ImageWithFallback from "@/components/imageWithFallback";
import { settings } from "./settings";

type CustomSliderProps = {
	images: { label?: string; alt?: string; img?: string; src?: string }[]; // Array of image URLs
	width?: number; // Optional width for the images
	height?: number; // Optional height for the images
};

const CustomSlider = ({
	images,
	width = 500,
	height = 600,
}: CustomSliderProps) => {
	return (
		<div className="slider-container w-full max-w-[1000px] p-4">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className="flex justify-center items-center h-content p-4 object-cover object-center"
						style={{ width: `${width}px`, height: `${height}px` }}
					>
						<ImageWithFallback
							src={image.img || image.src || ""}
							alt={image.label || image.alt || ""}
							className="w-full h-auto rounded-lg shadow-lg"
							loading="lazy"
							width={width}
							height={height}
						/>
						{image.label && (
							<p className="text-center text-gray-500 mt-2">{image.label}</p>
						)}
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CustomSlider;
