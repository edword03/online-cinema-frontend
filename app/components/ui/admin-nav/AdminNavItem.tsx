import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import styles from './AdminNav.module.scss';
import { NavItem } from './admin-nav.data';

export const AdminNavItem: FC<NavItem> = ({ link, title }) => {
	const { asPath } = useRouter();

	return (
		<li>
			<Link href={link}>
				<a
					className={cn({
						[styles.active]: asPath === link,
					})}
				>
					{title}
				</a>
			</Link>
		</li>
	);
};
