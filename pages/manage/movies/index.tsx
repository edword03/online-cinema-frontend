import { MoviesList } from "@/components/screens/admin/movies"
import { NextPageAuth } from "@/types/check-role"

const MoviesPage: NextPageAuth = () => {
  return <MoviesList />
}

MoviesPage.isOnlyAdmin = true

export default MoviesPage