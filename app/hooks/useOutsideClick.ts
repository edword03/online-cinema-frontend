import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
	ref: RefObject<any>,
	handler: (event: MouseEvent) => void
) => {
	useEffect(() => {
		console.log(ref);
		const listener = (event: MouseEvent) => {
			if (!ref?.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [handler, ref]);
};
