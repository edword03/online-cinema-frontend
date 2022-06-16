import { Meta } from '@/components/SEO/Meta';

import { Heading } from '@/ui/Heading/Heading';

export default function Error500() {
	return (
		<>
			<Meta title="Page not found" />
			<Heading title="404 - Server side error" />
		</>
	);
}
