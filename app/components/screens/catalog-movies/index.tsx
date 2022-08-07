import { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { CatalogProps } from '@/components/screens/catalog-movies/Catalog.interface';

import { Description } from '@/ui/Heading/Description';
import { Heading } from '@/ui/Heading/Heading';
import { GalleryItem } from '@/ui/gallery/GalleryItem';

import styles from './Catalog.module.scss';
import { getStaticContentUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';

export const Catalog: FC<CatalogProps> = ({ title, movies, description }) => {
	return (
		<>
			<Meta title={title} />
			<Heading title={title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<section className={styles.section}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							photo: getStaticContentUrl(movie.poster),
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>
		</>
	);
};
