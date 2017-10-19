import React from 'react';
const VideoListItem = ({video}) => {
	// {video} will equal to const video = props.video
	// const video = props.video;
	// console.log(video);
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imgUrl} className="media-object"/>
				</div>
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>		
		</li>
	);
};

export default VideoListItem;