import Link from 'next/link';
import { FC } from 'react';

import { MovieItem } from './MovieItem';
import styles from './MovieList.module.scss';
import { MovieModel } from '@/models/movie';

interface MovieListProps {
	link: string;
	movies: MovieModel[];
	title: string;
}

export const MovieList: FC<MovieListProps> = ({ link, movies, title }) => {
	return (
		<section className={styles.list}>
			<h2 className={styles.title}>{title}</h2>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>See more</a>
			</Link>
		</section>
	);
};
