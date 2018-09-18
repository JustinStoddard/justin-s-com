import React from 'react';
import Loader from '../../../Loader';
import { Segment, Container, Header } from 'semantic-ui-react';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <Loader />
  }
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  return(
    <Container>
      <Segment>
        <Segment>
          <iframe src={url} title="videoplayer"></iframe>
        </Segment>
        <Segment>
          <Segment>
            <Header as="h3">{video.snippet.title}</Header>
          </Segment>
          <Segment>
            <Header as="h5">{video.snippet.description}</Header>
          </Segment>
        </Segment>
      </Segment>
    </Container>
  )
}

export default VideoPlayer;