import { ChangeEvent, FC } from 'react';

import { Button } from '@/ui/form-field/Button';
import { SearchField } from '@/ui/search-field/SearchField';

import styles from './AdminHeader.module.scss';

interface AdminHeaderProps {
	onClick?: () => void;
	searchTerm: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AdminHeader: FC<AdminHeaderProps> = ({
	onChange,
	onClick,
	searchTerm,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} onChange={onChange} />
			{onClick && <Button onClick={onClick}>Create new</Button>}
		</div>
	);
};
