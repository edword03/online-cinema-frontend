import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { useFavorites } from '@/components/screens/favorites/useFavorites';

import { userService } from '@/services/user/user.service';

import { toastError } from '@/utils/error/toast-error';

import styles from './FavoriteButton.module.scss';

export const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isClicked, setIsClicked] = useState(false);
	const { favorites, refetch } = useFavorites();

	useEffect(() => {
		if (!favorites) return;

		const isFavorite = favorites.some((favorite) => favorite._id === movieId);
		if (isClicked !== isFavorite) setIsClicked(isFavorite);
	}, [favorites, isClicked, movieId]);

	const { mutateAsync } = useMutation(
		'update favorite',
		() => userService.toggleFavorite(movieId),
		{
			onSuccess: () => {
				setIsClicked(true);
				refetch();
			},
			onError: (error) => toastError(error),
		}
	);

	const onToggle = () => {
		mutateAsync();
	};

	return (
		<button
			onClick={onToggle}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
			className={cn(styles.button, {
				[styles.animate]: isClicked,
			})}
		></button>
	);
};
