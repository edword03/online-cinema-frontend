import { useQuery } from 'react-query';

import { genreService } from '@/services/genre/genre.service';

import { MenuItemType } from '@/types/menu';

import { getGenreUrl } from '@/config/url.config';

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular-genre-menu',
		() => genreService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((item) => item.slug)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as MenuItemType)
					)
					.splice(0, 4),
		}
	);
	console.log(queryData);
	return queryData;
};
