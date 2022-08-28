import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html lang="en">
			<Head></Head>
			<body>
				<Main />
				<div id="root-modal" />
				<NextScript />
			</body>
		</Html>
	);
}
