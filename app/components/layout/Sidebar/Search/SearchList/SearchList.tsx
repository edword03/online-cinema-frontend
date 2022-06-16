import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './SearchList.module.scss';
import { getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

type SearchListProps = { movies: MovieModel[] };

export const SearchList: FC<SearchListProps> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map(({ slug, title, poster, _id }) => (
					<Link href={getMovieUrl(slug)} key={_id}>
						<a>
							<Image
								src={`/${poster}`}
								alt={title}
								width={50}
								height={50}
								draggable={false}
								objectFit="cover"
								objectPosition="top"
							/>
							<span>{title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movie not found</div>
			)}
		</div>
	);
};
