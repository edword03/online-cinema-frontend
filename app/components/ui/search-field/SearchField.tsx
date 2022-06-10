import { ChangeEvent, FC } from 'react';

import { MaterialIcon } from '../MaterialIcon';

import styles from './SearchField.module.scss';

interface SearchFieldProps {
	searchTerm: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<SearchFieldProps> = ({ searchTerm, onChange }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon title="MdSearch" />
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={onChange}
			/>
		</div>
	);
};
