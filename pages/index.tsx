import type { GetStaticProps, NextPage } from 'next';

import { Home } from '@/components/screens/home';
import { HomeProps } from '@/components/screens/home/home.interface';
import { Slide } from '@/components/slider/slider.interface';

import { movieService } from '@/services/movie/movie.service';

import { getGenresList } from '@/utils/movie/getGenreString';

import { getMovieUrl } from '@/config/url.config';

const HomePage: NextPage<HomeProps> = ({ slides }) => {
	return (
		<>
			<Home slides={slides} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await movieService.getAllMovies();

		const slides: Slide[] = data.slice(0, 3).map((movie) => ({
			_id: movie._id,
			title: movie.title,
			bigPoster: movie.bigPoster,
			link: getMovieUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
		}));

		return {
			props: {
				slides,
			},
		};
	} catch (e) {
		return {
			props: {
				slides: [],
			},
		};
	}
};

export default HomePage;
