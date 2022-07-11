import React from 'react';

import { Meta } from '@/components/SEO/Meta';

import { Heading } from '@/ui/Heading/Heading';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin-table/adminTable';

import { useActors } from './useActorsList';

export const ActorsList = () => {
	const {
		searchTerm,
		deleteActor,
		isLoading,
		handleSearch,
		data,
		createAsync,
	} = useActors();

	return (
		<>
			<Meta title="Actors" />
			<AdminNav />
			<Heading title="Actors" />
			<AdminHeader
				searchTerm={searchTerm}
				onChange={handleSearch}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
				removeHandler={deleteActor}
			/>
		</>
	);
};
