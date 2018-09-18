import React from 'react';
import { Segment, Container, Header, Image } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return(
    <Container>
      <li onClick={() => onVideoSelect(video)}>
        <Segment>
          <Segment>
            <Image src={imageURL}/>
          </Segment>
          <Segment>
            <Header as="h3">{video.snippet.title}</Header>
          </Segment>
        </Segment>
      </li>
    </Container>
  )
}

export default VideoListItem;