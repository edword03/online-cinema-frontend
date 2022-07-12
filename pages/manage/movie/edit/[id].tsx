import React from 'react';

import { EditMovie } from '@/components/screens/admin/movie/EditMovie';

import { NextPageAuth } from '@/types/check-role';

const EditMoviePage: NextPageAuth = () => {
	return <EditMovie />;
};

EditMoviePage.isOnlyAdmin = true;

export default EditMoviePage;
