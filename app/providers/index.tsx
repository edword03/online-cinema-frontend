import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Layout } from '@/components/layout';

import { store } from '@/store/store';

import { TypeComponentWithChildren } from '@/types/check-role';

import { Toastify } from './Toastify';
import { AuthProvider } from '@/providers/AuthProvider';
import { HeadProvider } from '@/providers/HeadProvider/HeadProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const MainProvider: FC<TypeComponentWithChildren> = ({
	children,
	Component,
}) => {
	return (
		<>
			<HeadProvider />
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<Toastify />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</Provider>
			</QueryClientProvider>
		</>
	);
};
