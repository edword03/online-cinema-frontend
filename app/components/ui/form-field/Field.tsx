import cn from 'classnames';
import { forwardRef } from 'react';

import { InputProps } from '@/ui/form-field/form.interface';

import styles from './form.module.scss';

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
