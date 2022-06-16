import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

import { clearText } from '@/utils/string/clearText';

import { concatTitle, siteName } from '@/config/seo.config';

interface MetaProps {
	title: string;
	description?: string;
	isPublic?: boolean;
	image?: string;
}

export const Meta: FC<MetaProps> = ({
	title,
	description,
	isPublic,
	image,
}) => {
	const { asPath } = useRouter();

	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<Head>
			<title>{concatTitle(title)}</title>
			{isPublic ? (
				<>
					<meta
						itemProp="description"
						name="description"
						content={clearText(String(description), 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={concatTitle(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage.src} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={clearText(String(description), 197)}
					/>
				</>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	);
};
