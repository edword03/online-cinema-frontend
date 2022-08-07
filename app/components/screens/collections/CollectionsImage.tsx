import Image from 'next/image';
import { FC } from 'react';

import { getStaticContentUrl } from '@/config/api.config';

export const CollectionsImage: FC<{ image: string; title: string }> = ({
	title,
	image,
}) => {
	return (
		<Image
			src={getStaticContentUrl(image)}
			alt={title}
			layout="fill"
			draggable={false}
		/>
	);
};
