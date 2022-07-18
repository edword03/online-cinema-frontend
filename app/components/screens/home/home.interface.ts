import { Slide } from '@/components/slider/slider.interface';

import { GalleryItem } from '@/ui/gallery/gallery.interface';

export interface HomeProps {
	slides: Slide[];
	actors: GalleryItem[];
	trendingMovies: GalleryItem[];
}
