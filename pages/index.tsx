import type { GetStaticProps, NextPage } from 'next';

import { Home } from '@/components/screens/home';
import { HomeProps } from '@/components/screens/home/home.interface';
import { Slide } from '@/components/slider/slider.interface';

import { GalleryItemType } from '@/ui/gallery/gallery.interface';

import { actorsService } from '@/services/actors/actors.service';
import { movieService } from '@/services/movie/movie.service';

import { getGenresList } from '@/utils/movie/getGenreString';

import { getStaticContentUrl } from '@/config/api.config';
import { getActorUrl, getMovieUrl } from '@/config/url.config';

const HomePage: NextPage<HomeProps> = ({ slides, actors, trendingMovies }) => {
	return (
		<>
			<Home slides={slides} trendingMovies={trendingMovies} actors={actors} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await movieService.getAllMovies();
		const { data: actorsData } = await actorsService.getAllActors();
		const moviesData = await movieService.getMostPopularMovies();

		const slides: Slide[] = data.slice(0, 3).map((movie) => ({
			_id: movie._id,
			title: movie.title,
			bigPoster: movie.bigPoster,
			link: getMovieUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
		}));

		const actors: GalleryItemType[] = actorsData.slice(0, 7).map((actor) => ({
			name: actor.name,
			photo: getStaticContentUrl(actor.photo),
			link: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subtitle: `+${actor.countMovies} movies`,
			},
		}));

		const trendingMovies: GalleryItemType[] = moviesData
			.slice(0, 7)
			.map((movie) => ({
				name: movie.title,
				photo: getStaticContentUrl(movie.poster),
				link: getMovieUrl(movie.slug),
			}));

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			},
		};
	} catch (e) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		};
	}
};

export default HomePage;
