import React from 'react';
import Loader from '../../../Loader';
import { Segment, Container, Header, Embed } from 'semantic-ui-react';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <Loader />
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  const imageURL = video.snippet.thumbnails.default.url;
  return(
    <Container>
      <Segment textAlign="center" inverted>
        <Embed url={url} title="videoplayer" placeholder={imageURL} aspectRatio="16:9"></Embed>
      </Segment>
      <Segment inverted>
        <Segment textAlign="left">
          <Header as="h2">{video.snippet.title}</Header>
        </Segment>
        <Segment textAlign="left">
          <Header as="h5">{video.snippet.description}</Header>
        </Segment>
      </Segment>
    </Container>
  )
}

export default VideoPlayer;