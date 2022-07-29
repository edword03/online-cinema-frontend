import { useQuery } from 'react-query';

import { userService } from '@/services/user/user.service';

export const useFavorites = () => {
	const {
		isLoading,
		data: favorites,
		refetch,
	} = useQuery(['favorite movies'], () => userService.getFavoriteMovies(), {
		select: ({ data }) => data,
	});

	return { isLoading, favorites, refetch };
};
