import { useEffect, useState } from 'react';

import { viewWidth } from '@/utils/viewport/viewport';

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleWindowResize = () => {
		setIsMobile(viewWidth <= 768);
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return isMobile;
};
