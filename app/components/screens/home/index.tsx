import { Meta } from '@/components/SEO/Meta';
import { Heading } from '@/components/ui/Heading/Heading';

export const Home = () => {
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
		</>
	);
};
