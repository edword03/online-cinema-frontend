import { FC, MouseEvent } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Field } from '@/ui/form-field/Field';

import styles from './SlugField.module.scss';

interface SlugFieldProps {
	error?: FieldError;
	register: UseFormRegister<any>;
	generate: (event: MouseEvent) => void;
}

export const SlugField: FC<SlugFieldProps> = ({
	generate,
	register,
	error,
}) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required',
				})}
				placeholder="Slug"
				error={error}
			/>
			<button onClick={generate} className={styles.badge}>
				generate
			</button>
		</div>
	);
};
