import type { AppProps } from 'next/app';

import '@/assets/styles/globals.scss';
import '@/assets/styles/react-select.scss';

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
