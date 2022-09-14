import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { useAuth } from '@/hooks/useAuth';

import { ratingService } from '@/services/rating/rating.service';

import { toastError } from '@/utils/error/toast-error';

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState<number>(0);
	const [isSent, setIsSent] = useState<boolean>(false);
	const { user } = useAuth();

	const { refetch } = useQuery(
		['user rating movie', movieId],
		() => ratingService.getUserRating(movieId),
		{
			onSuccess({ data }) {
				setRating(data);
			},
			enabled: !!movieId && !!user,
		}
	);

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) =>
			ratingService.setUserRating(movieId, value),
		{
			onError(error) {
				toastError(error, 'Rate movie');
			},
			onSuccess() {
				setIsSent(true);
				refetch();

				setTimeout(() => {
					setIsSent(false);
				}, 2400);
			},
		}
	);

	const handleRating = async (nextValue: number) => {
		setRating(nextValue);
		await rateMovie({ value: nextValue });
	};

	return { isSent, rating, handleRating };
};
