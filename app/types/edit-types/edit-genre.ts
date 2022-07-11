import { GenreModel } from '@/models/genre';

export interface EditGenreInput extends Omit<GenreModel, '_id'> {}
