import React from 'react';

import { Meta } from '@/components/SEO/Meta';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminNav } from '@/components/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/components/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/components/ui/admin-table/adminTable';

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
