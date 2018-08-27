import React from 'react';
import { Container, Segment, Divider, Header } from 'semantic-ui-react';

const Projects = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center">
        <Header as="h1">Projects</Header>
      </Segment>
    </Container>
  )
}

export default Projects;