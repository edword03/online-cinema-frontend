import { MaterialIconsType } from "./icons";

export interface MenuItemType {
	icon: MaterialIconsType ;
	link: string;
	title: string;
}

export interface MenuType {
  title: string
  menuList: MenuItemType[]
}