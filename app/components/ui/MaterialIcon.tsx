import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/hooks/useRenderClient';

import { MaterialIconsType } from '@/types/icons';

export const MaterialIcon: FC<{ title: MaterialIconsType }> = ({ title }) => {
	const { isRenderClient } = useRenderClient();
	const IconComponent = MaterialIcons[title];

	if (isRenderClient)
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />;

	return null;
};
