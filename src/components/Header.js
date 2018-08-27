import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button } from 'semantic-ui-react';

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
              <Link to="/">
                <Button circular color="black" size="large">Home</Button>
              </Link>
            </Segment>
          </Grid.Column>
          
          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Link to="/projects">
                <Button circular color="black" size="large">Projects</Button>
              </Link>
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Link to="/about">
                <Button circular color="black" size="large">About</Button>
              </Link>
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment textAlign="center">
              <Link to="/contact">
                <Button circular color="black" size="large">Contact</Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeaderComp;