export interface VideoPlayerProps {
	videoSrc: string;
	slug: string;
}

export interface VideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullScreen?: () => void;
	webkitRequestFullscreen?: () => void;
}
