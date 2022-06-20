import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './form.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	);
};
