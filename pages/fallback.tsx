import React from 'react';

import { Meta } from '@/components/SEO/Meta';

import { Heading } from '@/ui/Heading/Heading';

const Fallback = () => {
	return (
		<>
			<Meta title="No network connection" />
			<Heading title="No network connection. Try latter" />
		</>
	);
};

export default Fallback;
