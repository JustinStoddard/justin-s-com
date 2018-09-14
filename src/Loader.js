import React from 'react';
import { Dimmer, Container, Loader, Segment } from 'semantic-ui-react';

const ContentLoader = () => {
  return(
    <Container>
      <Dimmer active>
        <Segment>
          <Loader size="massive">Loading</Loader>
        </Segment>
      </Dimmer>
    </Container>
  )
}

export default ContentLoader;