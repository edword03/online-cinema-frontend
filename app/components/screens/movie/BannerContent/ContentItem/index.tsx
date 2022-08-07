import Link from 'next/link';
import { FC, Fragment } from 'react';

import styles from './ContentItem.module.scss';

interface Link {
	_id: string;
	link: string;
	title: string;
}

interface ContentItemProps {
	name: string;
	text?: string;
	links?: Link[];
}

export const ContentItem: FC<ContentItemProps> = ({ links, name, text }) => {
	return (
		<div className={styles.item}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links &&
					links.slice(0, 3).map(({ link, _id, title }, index) => (
						<Fragment key={_id}>
							<Link href={link}>
								<a>{title}</a>
							</Link>
							{index + 1 !== links.length ? ', ' : ''}
						</Fragment>
					))}
				{text && text}
			</div>
		</div>
	);
};
