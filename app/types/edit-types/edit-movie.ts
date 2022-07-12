import { MovieModel } from '@/models/movie';

export interface MovieEditInput extends Omit<MovieModel, '_id'> {}
