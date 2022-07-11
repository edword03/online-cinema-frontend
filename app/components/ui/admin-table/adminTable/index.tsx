import React, { FC } from 'react';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { TableItemType } from '@/types/table-item';

import styles from './AdminTable.module.scss';
import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';

interface TableBodyProps {
	tableItems: TableItemType[];
	isLoading: boolean;
	headerItems: string[];
	removeHandler: (id: string) => void;
}

export const AdminTable: FC<TableBodyProps> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<div>
			<TableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length > 0 ? (
				tableItems.map((item) => (
					<TableItem
						tableItems={item}
						removeHandler={removeHandler}
						key={item._id}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	);
};
