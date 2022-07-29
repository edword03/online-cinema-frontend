import { FC } from 'react';

import { useFavorites } from '@/components/screens/favorites/useFavorites';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { useAuth } from '@/hooks/useAuth';

import { MovieList } from '../MovieList';

import { NonAuthFavorites } from './NonAuthFavorites';

const FavoriteMovies: FC = () => {
	const { favorites, isLoading } = useFavorites();
	const { user } = useAuth();

	if (!user) return <NonAuthFavorites />;
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : favorites?.length ? (
		<MovieList
			link="/favorites"
			movies={favorites?.slice(0, 3)}
			title="Favorites"
		/>
	) : (
		<MovieList
			link="/favorites"
			movies={[]}
			title="Favorites"
			emptyTitle="You haven't added favorites yet"
		/>
	);
};

export default FavoriteMovies;
