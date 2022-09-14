import { useQuery } from 'react-query';

import { useAuth } from '@/hooks/useAuth';

import { userService } from '@/services/user/user.service';

export const useFavorites = () => {
	const { user } = useAuth();
	const {
		isLoading,
		data: favorites,
		refetch,
	} = useQuery(['favorite movies'], () => userService.getFavoriteMovies(), {
		select: ({ data }) => data,
		enabled: !!user,
	});

	return { isLoading, favorites, refetch };
};
