import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/screens/catalog-movies';

import { genreService } from '@/services/genre/genre.service';
import { movieService } from '@/services/movie/movie.service';

import { GenreModel } from '@/models/genre';
import { MovieModel } from '@/models/movie';

interface GenrePage {
	movies: MovieModel[];
	genre: GenreModel;
}

const GenrePage: NextPage<GenrePage> = ({ movies, genre }) => {
	return (
		<Catalog
			title={genre.name}
			movies={movies}
			description={genre.description}
		/>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data } = await genreService.getAll();

		const paths = data.map((genre) => ({
			params: { slug: genre.slug },
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
		const { data: genre } = await genreService.getBySlug(String(params?.slug));
		const { data: movies } = await movieService.getByGenres([genre._id]);

		return {
			props: {
				movies,
				genre,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
