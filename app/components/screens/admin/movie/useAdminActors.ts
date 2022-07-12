import { useQuery } from 'react-query';

import { actorsService } from '@/services/actors/actors.service';

import { toastError } from '@/utils/error/toast-error';

import { OptionsSelect } from '@/types/select';

export const useAdminActors = () => {
	return useQuery(
		'list of actor dropdown',
		() => actorsService.getAllActors(),
		{
			select: ({ data }) =>
				data.map(
					(actor): OptionsSelect => ({
						label: actor.name,
						value: actor._id,
					})
				),
			onError(error) {
				toastError(error);
			},
		}
	);
};
