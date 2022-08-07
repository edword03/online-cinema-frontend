import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { getGenresList } from '@/utils/movie/getGenreString';

import styles from '../Modal.module.scss';

import { getStaticContentUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

interface VideoInfoProps {
	videoInfo: Pick<
		MovieModel,
		| 'title'
		| 'rating'
		| 'parameters'
		| 'genres'
		| 'countViews'
		| 'poster'
		| 'slug'
	>;
}

export const VideoInfo: FC<VideoInfoProps> = ({ videoInfo }) => {
	console.log(videoInfo.genres);
	return (
		<div className={styles.videoInfo}>
			<div className={styles.poster}>
				<Link href={getMovieUrl(videoInfo.slug)}>
					<a>
						<Image
							src={getStaticContentUrl(videoInfo.poster)}
							alt={videoInfo.title}
							layout="fill"
						/>
					</a>
				</Link>
			</div>
			<div className={styles.videoInfoContent}>
				<Link href={getMovieUrl(videoInfo.slug)}>
					<a>
						<h3 className={styles.title}>{videoInfo.title}</h3>
					</a>
				</Link>
				<p className={styles.year}>{videoInfo.parameters?.year}</p>
				<p className={styles.metaInfo}>
					<span className={styles.country}>
						{videoInfo.parameters?.country}
					</span>
					{getGenresList(videoInfo.genres)}
				</p>
				<div>
					{videoInfo.rating && (
						<span
							className={cn(styles.rating, {
								[styles.goodRating]: videoInfo.rating >= 7,
								[styles.mediumRating]:
									videoInfo.rating < 7 && videoInfo.rating > 5,
								[styles.badRating]: videoInfo.rating < 5,
							})}
						>
							{videoInfo.rating?.toFixed(1)}
						</span>
					)}
					<span className={styles.count}>{videoInfo.countViews}</span>
				</div>
			</div>
		</div>
	);
};
