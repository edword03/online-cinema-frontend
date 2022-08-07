import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent } from '@/ui/modal/ModalContent';

import { useOutsideClick } from '@/hooks/useOutsideClick';

import { MovieModel } from '@/models/movie';

interface ModalProps {
	url: string;
	video: MovieModel;
	modalHandler: () => void;
}

const Modal: FC<ModalProps> = ({ url, video, modalHandler }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const rootModal = document.getElementById('root-modal') as HTMLDivElement;

	useOutsideClick(modalRef, modalHandler);

	return rootModal
		? createPortal(
				<ModalContent
					url={url}
					video={video}
					ref={modalRef}
					closeModal={modalHandler}
				/>,
				rootModal
		  )
		: null;
};

export default Modal;
