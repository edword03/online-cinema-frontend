import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { movieService } from '@/services/movie/movie.service';

export const useUpdateCountViews = (slug: string) => {
	const { mutateAsync } = useMutation('update count views', () =>
		movieService.updateCountViews(slug)
	);

	useEffect(() => {
		mutateAsync();
	}, []);
};
