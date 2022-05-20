import { FC } from 'react';

import { MenuType } from '@/types/menu';

import { MenuItem } from '../MenuItem';
import styles from '../Menu.module.scss'

export const Menu: FC<{ menu: MenuType }> = ({ menu: { menuList, title } }) => {
	return (
		<div className={styles.menu}>
			<h2 className={styles.title}>{title}</h2>
			<ul>
				{menuList.length &&
					menuList.map((item) => <MenuItem key={item.link} {...item} />)}
			</ul>
		</div>
	);
};
