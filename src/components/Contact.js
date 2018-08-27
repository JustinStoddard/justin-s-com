import React from 'react';
import { Container, Segment, Divider, Header } from 'semantic-ui-react';

const Contact = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center">
        <Header as="h1">Contact</Header>
      </Segment>
    </Container>
  )
}

export default Contact;