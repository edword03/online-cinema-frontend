import React, { FC } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';
import { Button } from '@/ui/form-field/Button';

import { FavoriteButton } from '../FavoriteButton';

import styles from './BannerContent.module.scss';
import { ContentItem } from './ContentItem';
import { getActorUrl, getGenreUrl } from '@/config/url.config';
import { MovieModel } from '@/models/movie';

interface BannerContentProps {
	movie: MovieModel;
	onOpenModal: () => void;
}

export const BannerContent: FC<BannerContentProps> = ({
	movie,
	onOpenModal,
}) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<FavoriteButton movieId={movie._id} slug={movie.slug} />
			<div className={styles.details}>
				<span>{movie?.parameters?.year} · </span>
				<span>{movie?.parameters?.country} · </span>
				<span>{movie?.parameters?.duration} min</span>
			</div>
			<ContentItem name="Tagline" text={movie.tagline} />
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
			<Button className="mt-10" onClick={onOpenModal}>
				Watch Trailer
			</Button>

			<div className={styles.rating}>
				<MaterialIcon title="MdStarRate" />
				<span>{movie.rating?.toFixed(1)}</span>
			</div>
		</div>
	);
};
