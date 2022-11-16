import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';

import { accentColor, themeColor } from '@/constants/common';

import { Favicons } from './Favicons';

export const HeadProvider: FC = () => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta name="viewport" content="width=1300px" />

				<Favicons />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content={themeColor} />
				<meta name="msapplication-navbutton-color" content={themeColor} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={themeColor}
				/>
			</Head>
		</>
	);
};
