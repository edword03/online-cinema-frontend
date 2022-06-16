import { MovieContainer } from './MovieContainer';
import { Search } from './Search';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<Search />
			<MovieContainer />
		</section>
	);
};
