import { Slide } from '@/components/slider/slider.interface';

import { GalleryItemType } from '@/ui/gallery/gallery.interface';

export interface HomeProps {
	slides: Slide[];
	actors: GalleryItemType[];
	trendingMovies: GalleryItemType[];
}
