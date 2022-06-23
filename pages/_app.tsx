import type { AppProps } from 'next/app';

import { TypeComponentAuthFields } from '@/types/check-role';

import '../app/assets/styles/globals.scss';

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
