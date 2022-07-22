import {
	MouseEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import { VideoElement } from './video.interface';

export const useVideo = () => {
	const videoRef = useRef<VideoElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const duration = videoRef.current?.duration;

		if (duration) setVideoTime(duration);
	}, [videoRef.current?.duration]);

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play();
			setIsPlaying(true);
		} else {
			videoRef.current?.pause();
			setIsPlaying(false);
		}
	}, [isPlaying]);

	const forwardHandle = () => {
		if (videoRef.current) videoRef.current.currentTime += 10;
	};

	const revertHandle = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10;
	};

	const fullScreen = () => {
		const video = videoRef.current;

		if (!video) return;

		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	};

	useEffect(() => {
		const video = videoRef.current;

		if (!video) return;

		const updateProgress = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};

		video.addEventListener('timeupdate', updateProgress);

		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		};
	}, [videoTime]);

	const handleVideoProgress = (event: MouseEvent<HTMLDivElement>) => {
		const progressBar = progressBarRef.current;
		let box;

		if (progressBar?.getBoundingClientRect && progressBar.parentNode) {
			box = progressBar.getBoundingClientRect();
			console.log(box);
		}

		if (!box) return;

		const { body, documentElement } = document;

		const clientLeft = documentElement.clientLeft || body.clientLeft || 0;
		const scrollLeft = window.pageXOffset || body.scrollLeft;
		const left = box?.left + scrollLeft - clientLeft;

		const clientTop = documentElement.clientTop || body.clientTop || 0;
		const scrollTop = window.pageYOffset || body.scrollTop;

		console.log(event.pageX);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					forwardHandle();
					break;
				case 'ArrowLeft':
					revertHandle();
					break;
				case ' ': {
					event.preventDefault();
					toggleVideo();
					break;
				}
				case 'f': {
					fullScreen();
					break;
				}

				default: {
					return;
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggleVideo]);

	return useMemo(
		() => ({
			videoRef,
			progressBarRef,
			actions: {
				toggleVideo,
				forwardHandle,
				revertHandle,
				fullScreen,
				handleVideoProgress,
			},
			video: {
				isPlaying,
				currentTime,
				videoTime,
				progress,
			},
		}),
		[currentTime, isPlaying, progress, toggleVideo, videoTime]
	);
};
