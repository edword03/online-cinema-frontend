import cn from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';

import styles from './SlideArrow.module.scss';

interface SlideArrowProps {
	variant: 'left' | 'right';
	clickHandler: () => void;
}

export const SlideArrow: FC<SlideArrowProps> = ({ clickHandler, variant }) => {
	const isLeft = variant === 'left';

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
			aria-label={isLeft ? 'swipe to left slide' : 'swipe to right slide'}
		>
			<MaterialIcon title={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	);
};
