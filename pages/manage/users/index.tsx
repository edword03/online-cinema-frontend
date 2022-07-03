import React from 'react';

import { UserList } from '@/components/screens/admin/users';

import { NextPageAuth } from '@/types/check-role';

const UsersPage: NextPageAuth = () => {
	return <UserList />;
};

UsersPage.isOnlyAdmin = true;

export default UsersPage;
