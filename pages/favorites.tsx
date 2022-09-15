import { FavoriteMovies } from '@/components/screens/favorites';

import { NextPageAuth } from '@/types/check-role';

const FavoritesPage: NextPageAuth = () => {
	return <FavoriteMovies />;
};

FavoritesPage.isOnlyUser = true;

export default FavoritesPage;
