import cn from 'classnames';
import { FC } from 'react';

import { clearText } from '@/utils/string/clearText';

interface DescriptionProps {
	text: string;
	className?: string;
}

export const Description: FC<DescriptionProps> = ({ text, className = '' }) => {
	return (
		<p
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{clearText(text)}
		</p>
	);
};
