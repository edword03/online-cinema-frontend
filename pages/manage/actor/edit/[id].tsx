import { EditActor } from '@/components/screens/admin/actor/EditActor';

import { NextPageAuth } from '@/types/check-role';

const ActorEditPage: NextPageAuth = () => {
	return <EditActor />;
};

ActorEditPage.isOnlyAdmin = true;

export default ActorEditPage;
