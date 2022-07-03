import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config';

export interface NavItem {
	link: string;
	title: string;
}

export const navItems: NavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Users',
		link: getAdminUrl('users'),
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres'),
	},
];
