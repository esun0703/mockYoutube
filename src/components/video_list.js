import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// iterating through array of videos passed in from the props and creating a new array (.map)
	// returns a component with video
	// needs a key (which acts like an id);
	// 
	const videoItems = props.videos.map(video => {

		return <VideoListItem key={video.etag} video={video}/>
	});
	// console.log(videoItems);

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;