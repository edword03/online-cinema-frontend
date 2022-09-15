import Link from 'next/link';
import { FC } from 'react';
import StarRating from 'react-star-rating-component';

import { Button } from '@/ui/form-field/Button';

import { useAuth } from '@/hooks/useAuth';

import styles from './RateMovie.module.scss';
import { useRateMovie } from './useRateMovie';
import { getMovieUrl } from '@/config/url.config';

interface RateMovieProps {
	id: string;
	slug: string;
}

const RateMovie: FC<RateMovieProps> = ({ id, slug }) => {
	const { user } = useAuth();
	const { rating, handleRating, isSent } = useRateMovie(id);

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie</h3>
			<p>Rating improve recommendations</p>
			{user ? (
				<>
					{isSent ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRating
							starCount={10}
							name="star rating"
							value={rating}
							onStarClick={handleRating}
							emptyStarColor="#4f4f4f4"
						/>
					)}
				</>
			) : (
				<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
					<a>
						<Button>Sign In</Button>
					</a>
				</Link>
			)}
		</div>
	);
};

export default RateMovie;
