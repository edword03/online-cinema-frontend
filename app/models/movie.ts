import { MaterialIconsType } from "@/types/icons"

export interface GenreModel {
  _id: string
  link: string
  name: string
  slug: string
  description: string
  icon: MaterialIconsType
}