import { EditGenre } from '@/components/screens/admin/genre/EditGenre';

import { NextPageAuth } from '@/types/check-role';

const GenresEditPage: NextPageAuth = () => {
	return <EditGenre />;
};

GenresEditPage.isOnlyAdmin = true;

export default GenresEditPage;
