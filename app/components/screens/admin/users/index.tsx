import React from 'react';

import { Meta } from '@/components/SEO/Meta';
import { Heading } from '@/ui/Heading/Heading';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin-table/adminTable';

import { useUsers } from './useUserList';

export const UserList = () => {
	const { searchTerm, deleteUser, isLoading, handleSearch, data } = useUsers();

	return (
		<>
			<Meta title="Users" />
			<AdminNav />
			<Heading title="Users" />
			<AdminHeader searchTerm={searchTerm} onChange={handleSearch} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
				removeHandler={deleteUser}
			/>
		</>
	);
};
