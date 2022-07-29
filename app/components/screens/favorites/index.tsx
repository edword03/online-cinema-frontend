import { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { FavoriteItem } from '@/components/screens/favorites/FavoriteItem';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';

import styles from './FavoriteMovies.module.scss';
import { useFavorites } from './useFavorites';

interface FavoriteMovies {}

export const FavoriteMovies: FC<FavoriteMovies> = () => {
	const { favorites, isLoading } = useFavorites();

	return (
		<>
			<Meta title="Favorites" />
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favorites?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</>
	);
};
