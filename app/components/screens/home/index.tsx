import { FC } from 'react';

import { Meta } from '@/components/SEO/Meta';
import { Slider } from '@/components/slider';
import { Heading } from '@/components/ui/Heading/Heading';

import { HomeProps } from './home.interface';

export const Home: FC<HomeProps> = ({ slides }) => {
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
		</>
	);
};
