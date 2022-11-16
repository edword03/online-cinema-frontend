import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { FavoriteButton } from '@/components/screens/movie/FavoriteButton';

import styles from './FavoriteMovies.module.scss';
import { getStaticContentUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

export const FavoriteItem: FC<{ movie: MovieModel }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} slug={movie.slug} />
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						src={getStaticContentUrl(movie.bigPoster)}
						alt={movie.title}
						layout="fill"
						draggable={false}
						priority
					/>
					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	);
};
