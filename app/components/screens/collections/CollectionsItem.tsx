import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { CollectionType } from '@/components/screens/collections/collections.interface';

import styles from './Collections.module.scss';
import { CollectionsImage } from './CollectionsImage';
import { getGenreUrl } from '@/config/url.config';

export const CollectionsItem: FC<{ collection: CollectionType }> = ({
	collection,
}) => {
	return (
		<Link href={getGenreUrl(collection.slug)}>
			<a className={styles.collection}>
				{collection.image && (
					<CollectionsImage image={collection.image} title={collection.title} />
				)}

				<div className={styles.content}>
					<h3 className={styles.title}>{collection.title}</h3>
				</div>

				<div className={cn(styles.behind, styles.second)}>
					{collection.image && (
						<CollectionsImage
							image={collection.image}
							title={collection.title}
						/>
					)}
				</div>

				<div className={cn(styles.behind, styles.third)}>
					{collection.image && (
						<CollectionsImage
							image={collection.image}
							title={collection.title}
						/>
					)}
				</div>
			</a>
		</Link>
	);
};
