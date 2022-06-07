import { genreService } from "@/services/genre/genre.service"
import { MenuItemType } from "@/types/menu"
import { useQuery } from "react-query"

export const usePopularGenres = () => {
  const queryData = useQuery('popular-genre-menu', () => genreService.getPopularGenres(), {
    select: ({data}) => data.map(genre => ({
      icon: genre.icon,
      link: genre.link,
      title: genre.name
    } as MenuItemType)).splice(0, 4)
  })
console.log(queryData);
  return queryData
}