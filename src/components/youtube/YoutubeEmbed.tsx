const YoutubeEmbed = ({ title, embedId }) => (
	<div className="video-responsive">
		<iframe
			width="853"
			height="480"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
			allowFullScreen
			title={title}
		/>
	</div>
);

export default YoutubeEmbed;
