import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/screens/catalog-movies';

import { actorsService } from '@/services/actors/actors.service';
import { movieService } from '@/services/movie/movie.service';

import Error404 from '../404';

import { ActorModel } from '@/models/actor';
import { MovieModel } from '@/models/movie';

interface GenrePage {
	movies: MovieModel[];
	actor?: ActorModel;
}

const ActorPage: NextPage<GenrePage> = ({ movies, actor }) => {
	return actor ? <Catalog title={actor.name} movies={movies} /> : <Error404 />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data } = await actorsService.getAllActors();

		const paths = data.map((actor) => ({
			params: { slug: actor.slug },
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
		const { data: actor } = await actorsService.getBySlug(String(params?.slug));
		const { data: movies } = await movieService.getByActor(actor._id);

		return {
			props: {
				movies,
				actor,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			notFound: true,
		};
	}
};

export default ActorPage;
