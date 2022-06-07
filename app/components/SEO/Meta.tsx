import Head from 'next/head';
import { FC } from 'react';
import { useRouter } from 'next/router';

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

	const currentUrl = `${process.env.App_URL}${asPath}`;

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
					<meta property="og:image" content={image || logoImage} />
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
