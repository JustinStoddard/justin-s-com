import React from 'react';
import VideoListItem from './mobileVideoListItem';
import { List } from 'semantic-ui-react';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })
  return(
    <List>
      {videoItems}
    </List>
  )
}

export default VideoList;