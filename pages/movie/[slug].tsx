import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Movie } from '@/components/screens/movie';

import { GalleryItemType } from '@/ui/gallery/gallery.interface';

import { movieService } from '@/services/movie/movie.service';

import Error404 from '../404';

import { getStaticContentUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

interface MoviePageProps {
	movie?: MovieModel;
	similarMovies: GalleryItemType[];
}

const MoviePage: NextPage<MoviePageProps> = ({ movie, similarMovies }) => {
	return movie ? (
		<Movie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data } = await movieService.getAllMovies();

		const paths = data.map((movie) => ({
			params: { slug: movie.slug },
		}));

		return { paths, fallback: 'blocking' };
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await movieService.getBySlug(String(params?.slug));

		const { data: similarMoviesResponse } = await movieService.getByGenres(
			movie.genres.map((movie) => movie._id)
		);

		const similarMovies: GalleryItemType[] = similarMoviesResponse
			.filter((similar) => similar._id !== movie._id)
			.map((movie) => ({
				name: movie.title,
				link: getMovieUrl(movie.slug),
				photo: getStaticContentUrl(movie.poster),
			}));

		return {
			props: {
				movie,
				similarMovies,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default MoviePage;
