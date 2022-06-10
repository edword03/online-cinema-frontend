import { useState } from 'react';
import { Search } from './Search';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	return <section className={styles.sidebar}>
		<Search />
	</section>;
};
