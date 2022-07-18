export interface GalleryItemProps {
	item: GalleryItemType;
	variant: 'horizontal' | 'vertical';
}

export interface GalleryItemType {
	name: string;
	photo: string;
	link: string;
	content?: {
		title: string;
		subtitle: string;
	};
}
