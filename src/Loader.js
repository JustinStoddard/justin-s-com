import React from 'react';
import { Dimmer, Container, Loader, Divider } from 'semantic-ui-react';

const ContentLoader = () => {
  return(
    <Container>
      <Divider hidden/>
      <Divider hidden/>
      <Divider hidden/>
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
      <Divider hidden/>
      <Divider hidden/>
      <Divider hidden/>
    </Container>
  )
}

export default ContentLoader;