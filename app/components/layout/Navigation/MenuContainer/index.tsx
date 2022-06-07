import { topMenu } from '@/constants/menu';
import { Genres } from './genres/GenreMenu';

import { Menu } from './Menu';

export const MenuContainer = () => {
	return (
		<>
			<Menu menu={topMenu} />
			<Genres />
		</>
	);
};
