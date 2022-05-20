import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/assets/images/logo.svg';

export const Logo = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={LogoImage}
					alt="Logo"
					width={247}
					height={34}
					draggable={false}
				/>
			</a>
		</Link>
	);
};
