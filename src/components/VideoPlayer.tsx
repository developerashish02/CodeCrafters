const VideoPlayer: React.FC<{ url: string; title: string }> = ({
	url,
	title,
}) => {
	return (
		<iframe
			src={url}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			style={{ border: "none" }}
			allowFullScreen
		></iframe>
	);
};

export default VideoPlayer;
