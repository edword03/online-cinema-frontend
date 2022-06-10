import React from 'react';

import { SearchField } from '@/components/ui/search-field/SearchField';

import styles from './Search.module.scss';
import { SearchList } from './SearchList/SearchList';
import { useSearch } from './useSearch';

export const Search = () => {
	const { data, isLoading, isSuccess, onChange, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} onChange={onChange} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};
