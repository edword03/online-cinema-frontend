import Link from 'next/link';
import { FC } from 'react';

import { MovieItem } from './MovieItem';
import styles from './MovieList.module.scss';
import { MovieModel } from '@/models/movie';

interface MovieListProps {
	link: string;
	movies: MovieModel[];
	title: string;
	emptyTitle?: string;
}

export const MovieList: FC<MovieListProps> = ({
	link,
	movies,
	title,
	emptyTitle,
}) => {
	return (
		<section className={styles.list}>
			<h2 className={styles.title}>{title}</h2>
			{movies.length ? (
				movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
			) : (
				<div className="text-lg text-white text-opacity-50">{emptyTitle}</div>
			)}
			{movies.length > 0 && (
				<Link href={link}>
					<a className={styles.button}>See more</a>
				</Link>
			)}
		</section>
	);
};
