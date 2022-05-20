import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { MaterialIcon } from '@/components/ui/MaterialIcon';

import { MenuItemType } from '@/types/menu';

import styles from './Menu.module.scss';

export const MenuItem = ({ link, title, icon }: MenuItemType) => {
	const { asPath } = useRouter();

	return (
		<li
			className={cn({
				[styles.active]: asPath === link,
			})}
		>
			<Link href={link}>
				<a>
					<MaterialIcon title={icon} />
					<span>{title}</span>
				</a>
			</Link>
		</li>
	);
};
