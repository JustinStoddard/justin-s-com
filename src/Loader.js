import React from 'react';
import { Dimmer, Container, Loader } from 'semantic-ui-react';

const ContentLoader = () => {
  return(
    <Container>
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    </Container>
  )
}

export default ContentLoader;