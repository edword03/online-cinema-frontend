import dynamic from 'next/dynamic';
import { FC } from 'react';

import { MenuType } from '@/types/menu';

import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';

const AuthItems = dynamic(() => import('./auth'), {
	ssr: false,
});

export const Menu: FC<{ menu: MenuType }> = ({ menu: { menuList, title } }) => {
	return (
		<div className={styles.menu}>
			<h2 className={styles.title}>{title}</h2>
			<ul>
				{menuList &&
					menuList.map((item) => <MenuItem key={item.link} {...item} />)}

				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};
