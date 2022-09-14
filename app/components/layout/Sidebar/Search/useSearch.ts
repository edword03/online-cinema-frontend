import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { movieService } from '@/services/movie/movie.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [isVisible, setIsVisible] = useState(false);
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, isLoading, data } = useQuery(
		['search-movie', debouncedSearch],
		() => movieService.getAllMovies(debouncedSearch),
		{
			select: (data) => data.data,
			enabled: !!debouncedSearch,
			onSuccess() {
				setIsVisible(true);
			},
		}
	);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const onClose = () => {
		setIsVisible(false);
	};

	return { onChange, data, searchTerm, isVisible, onClose };
};
