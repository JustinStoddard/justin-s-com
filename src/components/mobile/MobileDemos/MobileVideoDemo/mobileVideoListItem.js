import React, { Fragment } from 'react';
import { Segment, Header, Image, List, Divider } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return(
    <Fragment>
      <List.Item onClick={() => onVideoSelect(video)}>
        <Segment inverted>
          <Segment color="blue">
            <Image src={imageURL}/>
          </Segment>
          <Segment color="blue">
            <Header as="h3">{video.snippet.title}</Header>
          </Segment>
        </Segment>
      </List.Item>
      <Divider hidden/>
    </Fragment>
  )
}

export default VideoListItem;