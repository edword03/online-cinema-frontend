import { MenuItem } from '@/components/layout/Navigation/MenuContainer/MenuItem';

import { useAuth } from '@/hooks/useAuth';

import { Logout } from './Logout';
import { getAdminHomeUrl } from '@/config/url.config';

const AuthItems = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem icon="MdSettings" link="/profile" title="Profile" />
					<Logout />
				</>
			) : (
				<MenuItem icon="MdLogin" link="/auth" title="Login" />
			)}

			{user?.isAdmin && (
				<MenuItem
					icon="MdOutlineLock"
					link={getAdminHomeUrl()}
					title="Admin panel"
				/>
			)}
		</>
	);
};

export default AuthItems;
