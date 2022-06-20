import { toast } from 'react-toastify';

import { errorCatch } from '@/utils/error/error-catch';

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error);
	toast.error(title || message);
	throw new Error(message);
};
