import { useEffect } from "react";

const YoutubeEmbed = ({ title, embedId }: { title: string, embedId: string }) => {

	useEffect(() => {
		const videoElement = document.getElementsByTagName('video')[0];
		if (videoElement) {
			videoElement.requestPictureInPicture();
		}
	}, []);

	return (
		<div className="video-responsive" dangerouslySetInnerHTML={{ __html: `<iframe
			width="100%"
			height="100%"
			src="https://www.youtube.com/embed/${embedId}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowFullScreen
			title=${title}
		/>` }} />
	)
}

export default YoutubeEmbed;
