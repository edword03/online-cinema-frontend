import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Slide } from '@/components/slider/slider.interface';

import styles from './Slider.module.scss';
import { getStaticContentUrl } from '@/config/api.config';

interface SlideItemProps {
	slide: Slide;
	buttonTitle?: string;
}

export const SlideItem: FC<SlideItemProps> = ({
	slide,
	buttonTitle = 'Watch',
}) => {
	const { push } = useRouter();

	return (
		<div className={styles.slide}>
			<Image
				layout="fill"
				src={getStaticContentUrl(slide.bigPoster)}
				alt={slide.title}
				className={styles.image}
				draggable={false}
				priority
				unoptimized
			/>
			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};
