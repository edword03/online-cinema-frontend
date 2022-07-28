import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { useUpdateCountViews } from '@/components/screens/movie/useUpdateCountViews';

import { SubHeading } from '@/ui/Subheading';
import Banner from '@/ui/banner';
import { Gallery } from '@/ui/gallery';
import { GalleryItemType } from '@/ui/gallery/gallery.interface';

import { BannerContent } from './BannerContent/BannerContent';
import { MovieModel } from '@/models/movie';

interface MovieProps {
	movie: MovieModel;
	similarMovies: GalleryItemType[];
}

const VideoPlayer = dynamic(() => import('../../video-player'), {
	ssr: false,
});

const RatingMovie = dynamic(() => import('./RateMovie'), {
	ssr: false,
});

export const Movie: FC<MovieProps> = ({ movie, similarMovies }) => {
	useUpdateCountViews(movie.slug);

	return (
		<>
			<Meta title={movie.title} />
			<Banner imageSrc={movie.bigPoster}>
				<BannerContent movie={movie} />
			</Banner>

			<div>
				<VideoPlayer videoSrc={`/${movie.videoUrl}`} slug={movie.slug} />
			</div>

			<div className="mt-12">
				<SubHeading title="Similar movies" />
				<Gallery items={similarMovies} />
			</div>

			<RatingMovie slug={movie.slug} id={movie._id} />
		</>
	);
};
