import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button } from 'semantic-ui-react';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />
      <Segment textAlign="center" inverted>Header</Segment>
      <Divider hidden />
      <Grid>
        <Grid.Row> {/* First Row */}
          <Grid.Column width={4}>
            <Link to="/">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">Home</Button>
              </Segment>
            </Link>
          </Grid.Column>
          
          <Grid.Column width={4}>
            <Link to="/projects">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">Projects</Button>
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column width={4}>
            <Link to="/about">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">About</Button>
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column width={4}>
            <Link to="/contact">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">Contact</Button>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeaderComp;