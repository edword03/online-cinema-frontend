import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/screens/catalog-movies';

import { movieService } from '@/services/movie/movie.service';

import { MovieModel } from '@/models/movie';

const TrendingPage: NextPage<{ movies: MovieModel[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Trending movies"
			movies={movies}
			description="Most popular movies and series in excellent quality"
		/>
	);
};

export default TrendingPage;

export const getStaticProps: GetStaticProps = async () => {
	const movies = await movieService.getMostPopularMovies();

	try {
		return {
			props: {
				movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
