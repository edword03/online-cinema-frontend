import { useRouter } from 'next/router';
import { FC } from 'react';

import { MaterialIcon } from '@/components/ui/MaterialIcon';

import styles from './UserActions.module.scss';

interface UserActionsProps {
	editUserUrl: string;
	removeHanler: () => void;
}

export const ActionButtons: FC<UserActionsProps> = ({
	editUserUrl,
	removeHanler,
}) => {
	const { push } = useRouter();

	const redirectToEdit = () => {
		push(editUserUrl);
	};

	return (
		<div className={styles.actions}>
			<button onClick={redirectToEdit}>
				<MaterialIcon title="MdEdit" />
			</button>
			<button onClick={removeHanler}>
				<MaterialIcon title="MdClose" />
			</button>
		</div>
	);
};
