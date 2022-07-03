import React from 'react';

import styles from './AdminNav.module.scss';
import { AdminNavItem } from './AdminNavItem';
import { navItems } from './admin-nav.data';

export const AdminNav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((nav) => (
					<AdminNavItem key={nav.link} link={nav.link} title={nav.title} />
				))}
			</ul>
		</nav>
	);
};
