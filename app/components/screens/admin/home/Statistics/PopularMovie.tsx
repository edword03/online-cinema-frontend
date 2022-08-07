import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { SubHeading } from '@/components/ui/Subheading';

import { movieService } from '@/services/movie/movie.service';

import styles from '../Admin.module.scss';

import { getStaticContentUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

export const PopularMovie = () => {
	const { data: movie, isLoading } = useQuery(
		'most-popular-movie',
		() => movieService.getMostPopularMovies(),
		{
			select: (data): MovieModel => data[0],
		}
	);

	return (
		<div className={cn(styles.popular, styles.block)}>
			<SubHeading title={`Most popular`} />
			{isLoading && <SkeletonLoader className="h-48" />}
			{movie && !isLoading && (
				<>
					<h3>Opened {movie?.countViews} times</h3>
					<Link href={getMovieUrl(movie?.slug)}>
						<a>
							<Image
								width={285}
								height={176}
								src={getStaticContentUrl(movie.bigPoster)}
								alt={movie?.title}
								className={styles.image}
								unoptimized
							/>
						</a>
					</Link>
				</>
			)}
		</div>
	);
};
