import { useQuery } from 'react-query';

import { genreService } from '@/services/genre/genre.service';

export const useCollections = () => {
	const {} = useQuery('collections', () => genreService.getCollections());
};
