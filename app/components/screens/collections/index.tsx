import { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { CollectionsItem } from '@/components/screens/collections/CollectionsItem';
import { CollectionType } from '@/components/screens/collections/collections.interface';

import { Description } from '@/ui/Heading/Description';
import { Heading } from '@/ui/Heading/Heading';

import styles from './Collections.module.scss';

export const Collections: FC<{ collections: CollectionType[] }> = ({
	collections,
}) => {
	return (
		<>
			<Meta
				title="Discovery"
				description="In this section you will find all genres"
				isPublic
			/>
			<Heading title="Discovery" />
			<Description text="In this section you will find all genres" />
			<section className={styles.collections}>
				{collections.map((genre) => (
					<CollectionsItem key={genre._id} collection={genre} />
				))}
			</section>
		</>
	);
};
