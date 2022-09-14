import { useRef } from 'react';

import { SearchField } from '@/components/ui/search-field/SearchField';

import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './Search.module.scss';
import { SearchList } from './SearchList/SearchList';
import { useSearch } from './useSearch';

export const Search = () => {
	const searchListRef = useRef(null);
	const { data, onChange, searchTerm, isVisible, onClose } = useSearch();

	useOutsideClick(searchListRef, onClose);

	return (
		<div className={styles.wrapper} ref={searchListRef}>
			<SearchField searchTerm={searchTerm} onChange={onChange} />
			{isVisible && <SearchList movies={data || []} />}
		</div>
	);
};
