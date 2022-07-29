import Image from 'next/image';
import { FC } from 'react';

export const CollectionsImage: FC<{ image: string; title: string }> = ({
	title,
	image,
}) => {
	return (
		<Image src={`/${image}`} alt={title} layout="fill" draggable={false} />
	);
};
