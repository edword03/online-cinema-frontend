import { Admin } from '@/components/screens/admin/home';

import { NextPageAuth } from '@/types/check-role';

const AdminPanel: NextPageAuth = () => {
	return (
		<>
			<Admin />
		</>
	);
};

AdminPanel.isOnlyAdmin = true;

export default AdminPanel;
