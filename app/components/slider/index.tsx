import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SlideArrow } from '@/components/slider/SlideArrow/SlideArrow';
import { SlideItem } from '@/components/slider/SlideItem';
import { Slide } from '@/components/slider/slider.interface';
import { useSlider } from '@/components/slider/useSlider';

import styles from './Slider.module.scss';

interface SliderProps {
	buttonTitle?: string;
	slides: Slide[];
}

export const Slider: FC<SliderProps> = ({ slides, buttonTitle }) => {
	const { handleArrowClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	);

	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow
					variant="left"
					clickHandler={() => handleArrowClick('prev')}
				/>
			)}
			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			{isNext && (
				<SlideArrow
					variant="right"
					clickHandler={() => handleArrowClick('next')}
				/>
			)}
		</div>
	);
};
