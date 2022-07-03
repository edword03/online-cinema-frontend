import React from 'react';

import { CountUsers } from './CountUsers';
import { PopularMovie } from './PopularMovie';

import styles from '../Admin.module.scss'

export const Statistics = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	);
};
