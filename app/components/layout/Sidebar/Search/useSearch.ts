import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { genreService } from '@/services/genre/genre.service';
import { movieService } from '@/services/movie/movie.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, isLoading, data } = useQuery(
		['search-movie', debouncedSearch],
		() => movieService.getAllMovies(debouncedSearch),
		{
			select: (data) => data.data,
			enabled: !!debouncedSearch,
		}
	);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return { onChange, isSuccess, isLoading, data, searchTerm };
};
