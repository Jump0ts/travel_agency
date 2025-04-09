export const getImages = (images: string[]) => {
	return images.map((image) => {
		return {
			img: image,
		};
	});
};
