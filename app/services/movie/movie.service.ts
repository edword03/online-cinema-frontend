import { getMoviesUrl } from "@/config/api.config"
import { MovieModel } from "@/models/movie"
import axios from "axios"

export const movieService = {
  async getAllMovies(searchTerm?: string) {
    return await axios.get<MovieModel[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
  }
}