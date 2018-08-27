import React from 'react';
import { Container, Segment, Divider} from 'semantic-ui-react';

const Header = () => {
  return(
    <Container>
      <Divider hidden />
      <Segment inverted textAlign="center">Header</Segment>
    </Container>
  )
}

export default Header;