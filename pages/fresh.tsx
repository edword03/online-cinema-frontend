import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/screens/catalog-movies';

import { movieService } from '@/services/movie/movie.service';

import { MovieModel } from '@/models/movie';

const FreshPage: NextPage<{ movies: MovieModel[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Fresh movies"
			movies={movies}
			description="New movies and series in excellent quality"
		/>
	);
};

export default FreshPage;

export const getStaticProps: GetStaticProps = async () => {
	const { data: movies } = await movieService.getAllMovies();

	try {
		return {
			props: {
				movies,
			},
			revalidate: 60,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
