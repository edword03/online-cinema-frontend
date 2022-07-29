import { GetStaticProps, NextPage } from 'next';

import { Collections } from '@/components/screens/collections';
import { CollectionType } from '@/components/screens/collections/collections.interface';

import { genreService } from '@/services/genre/genre.service';

const GenresPage: NextPage<{ collections: CollectionType[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />;
};

export default GenresPage;

export const getStaticProps: GetStaticProps = async () => {
	const { data: collections } = await genreService.getCollections();
	try {
		return {
			props: {
				collections,
			},
			revalidate: 60,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
