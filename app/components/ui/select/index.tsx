import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import ReactSelect, { OnChangeValue, Options } from 'react-select';
import makeAnimate from 'react-select/animated';

import { FieldProps } from '@/ui/form-field/form.interface';

import { OptionsSelect } from '@/types/select';

import formStyle from '../form-field/form.module.scss';

import styles from './Select.module.scss';

interface Select extends FieldProps {
	options: Options<OptionsSelect>;
	isMulti?: boolean;
	field: ControllerRenderProps<any, any>;
	isLoading?: boolean;
}

const Select: FC<Select> = ({
	options,
	isLoading,
	isMulti,
	field,
	placeholder,
	error,
}) => {
	const animatedComponent = makeAnimate();

	const onChange = (
		newValue: OnChangeValue<OptionsSelect, boolean> | unknown
	) => {
		field.onChange(
			isMulti
				? (newValue as OptionsSelect[]).map((option) => option.value)
				: (newValue as OptionsSelect).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value);
		} else return isMulti ? [] : '';
	};

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponent}
					isLoading={isLoading}
				/>
				{error && <div className={formStyle.error}>{error.message}</div>}
			</label>
		</div>
	);
};

export default Select;
