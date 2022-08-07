import React, { forwardRef } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';
import { VideoInfo } from '@/ui/modal/VideoInfo';

import styles from './Modal.module.scss';
import { MovieModel } from '@/models/movie';

interface ModalContentProps {
	url: string;
	video: MovieModel;
	closeModal: () => void;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
	({ url, video, closeModal }, ref) => {
		return (
			<div className={styles.overlay}>
				<button className="absolute top-8 right-8 text-white text-2xl opacity-50">
					<MaterialIcon title="MdClose" />
				</button>
				<div className={styles.modal} ref={ref}>
					<div className={styles.videoContent}>
						<iframe
							width="100%"
							height="100%"
							src={url}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<VideoInfo videoInfo={video} />
				</div>
			</div>
		);
	}
);

ModalContent.displayName = 'ModalContent';
