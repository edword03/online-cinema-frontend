import Image from 'next/image';
import { FC, ReactNode } from 'react';

import styles from './Banner.module.scss';

interface BannerProps {
	imageSrc: string;
	children?: ReactNode;
}

const Banner: FC<BannerProps> = ({ imageSrc, children }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={`/${imageSrc}`}
				alt="Movie banner"
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{children && children}
		</div>
	);
};

export default Banner;
