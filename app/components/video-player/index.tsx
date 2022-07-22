import cn from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '@/ui/MaterialIcon';

import { useAuth } from '@/hooks/useAuth';

import { VideoLayer } from './VideoLayer';
import styles from './VideoPlayer.module.scss';
import { useVideo } from './useVideo';
import { VideoPlayerProps } from './video.interface';

const VideoPlayer: FC<VideoPlayerProps> = ({ videoSrc, slug }) => {
	const { user } = useAuth();

	const { video, videoRef, actions, progressBarRef } = useVideo();

	const convertTime = (
		property: Exclude<keyof typeof video, 'isPlaying' | 'progress'>,
		slice: number
	) =>
		Math.floor(video[property] / 60) +
		':' +
		('0' + Math.floor(video[property] % 60)).slice(slice);

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					{videoSrc ? (
						<>
							<video
								src={`//cdp.playfamily.ru/data/storage39/trl/2a305737-848a-4b03-933b-f6d3a2c2ba25.webm`}
								style={{ width: '100%' }}
								ref={videoRef}
								className={styles.video}
								preload="metadata"
							/>
							<div
								className={styles.progressBarContainer}
								onMouseMove={actions.handleVideoProgress}
								ref={progressBarRef}
							>
								{/*<input
									type="range"
									className="video-progress"
									min="0"
									max="100"
									step="0.1"
									value="0"
								/>*/}

								<div
									style={{ width: `${video.progress}%` }}
									className={styles.progressBar}
								/>
							</div>

							<div className={styles.controls}>
								<div>
									<button onClick={actions.revertHandle}>
										<MaterialIcon title="MdHistory" />
									</button>

									<button
										onClick={actions.toggleVideo}
										className={styles.playButton}
									>
										<MaterialIcon
											title={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
										/>
									</button>

									<button onClick={actions.forwardHandle}>
										<MaterialIcon title="MdUpdate" />
									</button>

									<div className={styles.timeControls}>
										<p className={styles.controlsTime}>
											{convertTime('currentTime', -2)}
										</p>
										<p> / </p>
										<p className={styles.controlsTime}>
											{convertTime('videoTime', -2)}
										</p>
									</div>
								</div>

								<div>
									<button onClick={actions.fullScreen}>
										<MaterialIcon title="MdFullscreen" />
									</button>
								</div>
							</div>
						</>
					) : (
						<div>Video is not available now</div>
					)}
				</>
			) : (
				<VideoLayer slug={slug} />
			)}
		</div>
	);
};

export default VideoPlayer;
