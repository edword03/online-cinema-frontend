import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Layout } from '@/components/layout';

import { store } from '@/store/store';

import { Toastify } from './Toastify';
import { HeadProvider } from '@/providers/HeadProvider/HeadProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<HeadProvider />
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<Toastify />
					<Layout>{children}</Layout>
				</Provider>
			</QueryClientProvider>
		</>
	);
};
