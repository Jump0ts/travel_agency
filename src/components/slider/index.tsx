import React from "react";
import Slider from "react-slick";
import ImageWithFallback from "@/components/imageWithFallback";
import { settings } from "./settings";

type CustomSliderProps = {
	images: { label?: string; img: string }[]; // Array of image URLs
};

const CustomSlider = ({ images }: CustomSliderProps) => {
	return (
		<div className="slider-container w-full max-w-screen h-content ">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className="flex justify-center items-center w-1/2 h-content p-4"
					>
						<ImageWithFallback
							src={image.img}
							alt={image.label ? image.label : ""}
							className="w-full h-auto rounded-lg shadow-lg"
							width={500}
							height={600}
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
