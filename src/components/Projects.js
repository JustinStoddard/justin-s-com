import React from 'react';
import { Container, Segment, Divider, Header, Grid } from 'semantic-ui-react';

const Projects = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center">
        <Header as="h1">Projects</Header>
      </Segment>
      <Divider hidden />
      <Grid>

        <Grid.Row>
          <Grid.Column width={5}>
            <Segment textAlign="center">
              <Segment>
                <Header as="h1">Ball Is Life</Header>
              </Segment>
              <Segment>
                This is a paragraph about this coding project and how it was developed.
              </Segment>
              <a href="*" target="_blank">Check Out Source</a>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment textAlign="center">
              <Segment>
                <Header as="h1">shop.unicity.com</Header>
              </Segment>
              <Segment>
                This is a paragraph about this coding project and how it was developed.
              </Segment>
              <a href="*" target="_blank">Check Out Source</a>
            </Segment>
          </Grid.Column>

          <Grid.Column width={5}>
            <Segment textAlign="center">
              <Segment>
                <Header as="h1">DizzBot</Header>
              </Segment>
              <Segment>
                This is a paragraph about this coding project and how it was developed. 
              </Segment>
              <a href="*" target="_blank">Check Out Source</a>
            </Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  )
}

export default Projects;