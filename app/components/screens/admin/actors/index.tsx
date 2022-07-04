import React from 'react';

import { Meta } from '@/components/SEO/Meta';

import { Heading } from '@/ui/Heading/Heading';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin-table/adminTable';

import { useActors } from './useActorsList';

export const ActorsList = () => {
	const { searchTerm, deleteActor, isLoading, handleSearch, data } = useActors();

	return (
		<>
			<Meta title="Users" />
			<AdminNav />
			<Heading title="Users" />
			<AdminHeader searchTerm={searchTerm} onChange={handleSearch} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
				removeHandler={deleteActor}
			/>
		</>
	);
};
