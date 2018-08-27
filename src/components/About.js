import React from 'react';
import { Container, Segment, Divider, Header } from 'semantic-ui-react';

const About = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center">
        <Header as="h1">About</Header>
      </Segment>
    </Container>
  )
}

export default About;