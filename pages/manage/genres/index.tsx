import { GenresList } from "@/components/screens/admin/genres"
import { NextPageAuth } from "@/types/check-role"

const GenresPage: NextPageAuth = () => {
  return <GenresList />
}

GenresPage.isOnlyAdmin = true

export default GenresPage