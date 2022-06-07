import axios from "axios"
import { getGenresUrl } from "@/config/api.config"
import { GenreModel } from "@/models/movie"

export const genreService = {
  async getPopularGenres() {
    return axios.get<GenreModel[]>(getGenresUrl('popular'))
  }
}