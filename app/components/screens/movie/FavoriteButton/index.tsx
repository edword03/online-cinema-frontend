import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { useFavorites } from '@/components/screens/favorites/useFavorites';

import { useAuth } from '@/hooks/useAuth';

import { userService } from '@/services/user/user.service';

import { toastError } from '@/utils/error/toast-error';

import styles from './FavoriteButton.module.scss';
import { getMovieUrl } from '@/config/url.config';

interface FavoriteButtonProps {
	movieId: string;
	slug: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId, slug }) => {
	const [isClicked, setIsClicked] = useState(false);
	const { push } = useRouter();
	const { favorites, refetch } = useFavorites();
	const { user } = useAuth();

	useEffect(() => {
		if (!favorites) return;

		const isFavorite = favorites.some((favorite) => favorite._id === movieId);
		if (isClicked !== isFavorite) setIsClicked(isFavorite);
	}, [favorites, isClicked, movieId, push, user]);

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
		if (!user) push(`/auth?redirect=${getMovieUrl(slug)}`);
		else mutateAsync();
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
