import { MovieModel } from '@/models/movie';

export interface CatalogProps {
	title: string;
	description?: string;
	movies: MovieModel[];
}
