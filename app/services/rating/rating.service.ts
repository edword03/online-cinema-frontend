import axios from '@/api/interceptors';
import { getRatingUrl } from '@/config/api.config';

export const ratingService = {
	async setUserRating(movieId: string, value: number) {
		return await axios.post<string>(getRatingUrl('set-rating'), {
			movieId,
			value,
		});
	},

	async getUserRating(movieId: string) {
		return await axios.get<number>(getRatingUrl(movieId));
	},
};
