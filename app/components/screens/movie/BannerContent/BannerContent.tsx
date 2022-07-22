import { FC } from 'react';

import { ContentItem } from '@/components/screens/movie/BannerContent/ContentItem';

import { MaterialIcon } from '@/ui/MaterialIcon';

import styles from './BannerContent.module.scss';
import { getActorUrl, getGenreUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

export const BannerContent: FC<{ movie: MovieModel }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie?.parameters?.year} · </span>
				<span>{movie?.parameters?.country} · </span>
				<span>{movie?.parameters?.duration} min.</span>
			</div>
			<ContentItem
				name="Genres"
				links={movie.genres.map((genre) => ({
					link: getGenreUrl(genre.slug),
					title: genre.name,
					_id: genre._id,
				}))}
			/>
			<ContentItem
				name="Actors"
				links={movie.actors.map((actor) => ({
					link: getActorUrl(actor.slug),
					title: actor.name,
					_id: actor._id,
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon title="MdStarRate" />
				<span>{movie.rating?.toFixed(1)}</span>
			</div>
		</div>
	);
};
