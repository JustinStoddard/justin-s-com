import React from 'react';
import { Segment, Container, Loader } from 'semantic-ui-react';

const ContentLoader = () => {
  return(
    <Container>
      <Segment inverted >
        <Loader size="massive">Loading</Loader>
      </Segment>
    </Container>
  )
}

export default ContentLoader;