import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './form.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string;
	error?: FieldError;
};

export const Field = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, pattern, error, type = 'text', style, ...props }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';
