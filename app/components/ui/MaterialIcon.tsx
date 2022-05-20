import { FC } from 'react';
import { MaterialIconsType } from 'types/icons';

import { MaterialIcons } from '../../types/icons';

export const MaterialIcon: FC<{ title: MaterialIconsType }> = ({ title }) => {
	const IconComponent = MaterialIcons[title];
	return <IconComponent />;
};
