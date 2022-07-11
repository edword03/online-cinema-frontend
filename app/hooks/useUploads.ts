import FormData from 'form-data';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useMutation } from 'react-query';

import { fileService } from '@/services/file/file.service';

import { toastError } from '@/utils/error/toast-error';

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
	isLoading: boolean;
};

export const useUploads: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false);

	const { mutateAsync } = useMutation(
		'upload file',
		(data: any) => fileService.upload(data, folder),
		{
			onSuccess({ data }) {
				onChange(data[0].url);
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const uploadFile = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true);
			const files = event.target.files;

			if (files?.length) {
				const formData = new FormData();
				formData.append('file', files[0]);

				await mutateAsync(formData);

				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			}
		},
		[mutateAsync]
	);

	return useMemo(() => ({ uploadFile, isLoading }), [isLoading, uploadFile]);
};
