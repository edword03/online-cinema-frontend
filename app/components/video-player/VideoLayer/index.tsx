import Link from 'next/link';
import { FC } from 'react';

import styles from './VideoLayer.module.scss';
import { getMovieUrl } from '@/config/url.config';

export const VideoLayer: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<p>You must be logged in to start watching</p>
				<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
					<a className={styles.btn}>Sign in</a>
				</Link>
			</div>
		</div>
	);
};
