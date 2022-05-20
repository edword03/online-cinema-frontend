import { MenuType } from "@/types/menu";

export const topMenu: MenuType = {
  title: 'Menu',
  menuList: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery'
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh Movies'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now'
    } 
  ]
}