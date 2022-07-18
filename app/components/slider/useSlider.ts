import { useState } from 'react';

export const useSlider = (lenght: number) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slideIn, setSlideIn] = useState(true);

	const isExistsNext = currentIndex + 1 < lenght;
	const isExistsPrev = currentIndex ? currentIndex - 1 < lenght : false;

	const handleArrowClick = (directions: 'next' | 'prev') => {
		const newIndex =
			directions === 'next' ? currentIndex + 1 : currentIndex - 1;

		setSlideIn(false);

		setTimeout(() => {
			setCurrentIndex(newIndex);
			setSlideIn(true);
		}, 300);
	};

	return {
		slideIn,
		index: currentIndex,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleArrowClick,
	};
};
