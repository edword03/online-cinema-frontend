import { MouseEvent } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';

import { useActions } from '@/hooks/useActions';

export const Logout = () => {
	const { logout } = useActions();

	const onLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();

		logout();
	};

	return (
		<li>
			<a onClick={onLogout}>
				<MaterialIcon title="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	);
};
