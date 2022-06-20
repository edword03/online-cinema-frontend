import { topMenu } from '@/constants/menu';

import { Menu } from './Menu';
import { Genres } from './genres/GenreMenu';

export const MenuContainer = () => {
	return (
		<>
			<Menu menu={topMenu} />
			<Genres />
			<Menu menu={{ title: 'General', menuList: [] }} />
		</>
	);
};
