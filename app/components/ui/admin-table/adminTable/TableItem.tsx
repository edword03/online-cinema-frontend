import { FC } from 'react';

import { TableItemType } from '@/types/table-item';

import { ActionButtons } from './ActionsButtons';
import styles from './AdminTable.module.scss';

interface TableItemProps {
	tableItems: TableItemType;
	removeHandler: (id: string) => void;
}

export const TableItem: FC<TableItemProps> = ({
	tableItems,
	removeHandler,
}) => {
	const removeHandlerById = () => {
		removeHandler(tableItems._id);
	};

	return (
		<div className={styles.item}>
			{tableItems.tableItems.map((value) => (
				<div key={value}>{value}</div>
			))}

			<ActionButtons
				editUserUrl={tableItems.editUrl}
				removeHanler={removeHandlerById}
			/>
		</div>
	);
};
