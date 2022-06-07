import { SkeletonLoader } from '@/components/ui/SkeletonLoader';

import { Menu } from '../Menu';

import { usePopularGenres } from './usePopularGenres';

export const Genres = () => {
	const { isLoading, data, error } = usePopularGenres();

	if (isLoading)
		return (
			<div className="mx-11 mb-6">
				<SkeletonLoader count={5} className="h-7 mt-6" />
			</div>
		);

	if (error) return <h2>Error network</h2>;

	return <Menu menu={{ title: 'Popular genres', menuList: data || [] }} />;
};
