import { topMenu } from '@/constants/menu';

import { Menu } from './Menu';

export const MenuContainer = () => {
	return (
		<>
			<Menu menu={topMenu} />
			{/* <Menu menu={topMenu} />
			<Menu menu={topMenu} /> */}
		</>
	);
};
