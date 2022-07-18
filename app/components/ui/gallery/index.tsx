import { FC } from 'react';

import { GalleryItem } from '@/ui/gallery/GalleryItem';
import { GalleryItemType } from '@/ui/gallery/gallery.interface';

import styles from './Gallery.module.scss';

export const Gallery: FC<{ items: GalleryItemType[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem key={item.link} item={item} variant="vertical" />
			))}
		</div>
	);
};
