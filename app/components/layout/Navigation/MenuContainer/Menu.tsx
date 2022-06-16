import { FC } from 'react';

import { MenuType } from '@/types/menu';

import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';

export const Menu: FC<{ menu: MenuType }> = ({ menu: { menuList, title } }) => {
	return (
		<div className={styles.menu}>
			<h2 className={styles.title}>{title}</h2>
			<ul>
				{menuList && menuList.length ? (
					menuList.map((item) => <MenuItem key={item.link} {...item} />)
				) : (
					<p>Something went wrong</p>
				)}
			</ul>
		</div>
	);
};
