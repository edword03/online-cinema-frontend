import { Profile } from '@/components/screens/profile';

import { NextPageAuth } from '@/types/check-role';

const ProfilePage: NextPageAuth = () => {
	return <Profile />;
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
