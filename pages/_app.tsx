import type { AppProps } from 'next/app';

import '@/assets/styles/index.scss';

import { TypeComponentAuthFields } from '@/types/check-role';

import { MainProvider } from '@/providers/index';

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default MyApp;
