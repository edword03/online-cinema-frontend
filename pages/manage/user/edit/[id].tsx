import { EditUser } from '@/components/screens/admin/user/EditUser';

import { NextPageAuth } from '@/types/check-role';

const EditUserPage: NextPageAuth = () => {
	return <EditUser />;
};

EditUserPage.isOnlyAdmin = true;

export default EditUserPage;
