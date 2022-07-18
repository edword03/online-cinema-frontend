import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { GalleryItemProps } from '@/ui/gallery/gallery.interface';

import styles from './Gallery.module.scss';

export const GalleryItem: FC<GalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<a
				className={cn(styles.item, {
					[styles.contentGradient]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<Image
					src={item.photo}
					alt={item.name}
					layout="fill"
					draggable={false}
					priority
				/>
				{item.content && (
					<div className={styles.content}>
						<p className={styles.title}>{item.content.title}</p>
						{item.content.subtitle && (
							<span className={styles.subTitle}>{item.content.subtitle}</span>
						)}
					</div>
				)}
			</a>
		</Link>
	);
};
