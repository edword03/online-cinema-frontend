import { MovieModel } from '@/models/movie';

export interface Slide extends Pick<MovieModel, '_id' | 'bigPoster' | 'title'> {
	subTitle: string;
	link: string;
}
