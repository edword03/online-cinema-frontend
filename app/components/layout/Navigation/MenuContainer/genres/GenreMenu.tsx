import { Menu } from '../Menu';

import { usePopularGenres } from './usePopularGenres';

export const Genres = () => {
	const { isLoading, data, error } = usePopularGenres();

	if (isLoading) return <h2>Loading...</h2>;

	if (error) return <h2>Error network</h2>;

	return <Menu menu={{ title: 'Popular genres', menuList: data || [] }} />;
};
