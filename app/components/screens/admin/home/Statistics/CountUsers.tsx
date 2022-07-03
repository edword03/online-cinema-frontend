import cn from 'classnames';
import React from 'react';
import { useQuery } from 'react-query';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader';

import { adminService } from '@/services/admin/admin.service';

import styles from '../Admin.module.scss';

export const CountUsers = () => {
	const {
		data: response,
		isLoading,
		isError,
	} = useQuery('count-users', () => adminService.getCountUsers());

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? <SkeletonLoader /> : null}
				{isError && <div className={styles.number}>0</div>}
				<div className={styles.number}>{response?.data}</div>
				<div className={styles.description}>users</div>
			</div>
		</div>
	);
};
