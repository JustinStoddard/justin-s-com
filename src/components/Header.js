import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Header, Button } from 'semantic-ui-react';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />
      <Segment inverted textAlign="center">Header</Segment>
      <Divider hidden />
      <Grid>
        <Grid.Row> {/* First Row */}
          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Divider hidden />
              <Link to="/">
                <Button color="black" size="large">Home</Button>
              </Link>
              <Divider hidden />
            </Segment>
          </Grid.Column>
          
          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Divider hidden />
              <Link to="/projects">
                <Button color="black" size="large">Projects</Button>
              </Link>
              <Divider hidden />
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Divider hidden />
              <Link to="/about">
                <Button color="black" size="large">About</Button>
              </Link>
              <Divider hidden />
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Divider hidden />
              <Link to="/contact">
                <Button color="black" size="large">Contact</Button>
              </Link>
              <Divider hidden />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeaderComp;