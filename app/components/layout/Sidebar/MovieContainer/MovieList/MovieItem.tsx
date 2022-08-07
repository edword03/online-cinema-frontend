import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';

import { getGenreString } from '@/utils/movie/getGenreString';

import styles from './MovieList.module.scss';
import { getStaticContentUrl } from '@/config/api.config';
import { getGenreUrl, getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

type MovieItemProps = { movie: MovieModel };

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						src={getStaticContentUrl(movie.poster)}
						width={65}
						height={97}
						alt={movie.title}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<h3 className={styles.title}>{movie.title}</h3>
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>{getGenreString(index, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon title="MdStarRate" />
					<span>{movie.rating?.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};
