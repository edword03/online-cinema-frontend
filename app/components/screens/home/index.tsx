import { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { Slider } from '@/components/slider';
import { Heading } from '@/components/ui/Heading/Heading';

import { SubHeading } from '@/ui/Subheading';
import { Gallery } from '@/ui/gallery';

import { HomeProps } from './home.interface';

export const Home: FC<HomeProps> = ({ slides, trendingMovies, actors }) => {
	return (
		<>
			<Meta
				title="Watch movies online"
				description="Watch movies and TV shows online"
				isPublic
			/>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides?.length > 0 && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Trending now" />
				<Gallery items={trendingMovies} />
			</div>

			<div className="my-10">
				<SubHeading title="Best actors" />
				<Gallery items={actors} />
			</div>
		</>
	);
};
