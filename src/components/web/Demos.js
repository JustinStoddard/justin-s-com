import React, { Component } from 'react';
import VideoIndex from './VideoIndex';
import { Segment, Container, Divider, Grid, Header, Button } from 'semantic-ui-react';

class Demos extends Component {
  state = { videoDemo: false }

  render() {
    const { videoDemo } = this.state;
    return(
      <Container>
        <Divider hidden />
        <Segment textAlign="center" inverted>
          <Header as="h2">Demos</Header>
        </Segment>
        { videoDemo ?
            <Segment>
              <Button color="blue" size="large" onClick={() => this.setState({ videoDemo: !videoDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <VideoIndex />
            </Segment>
          :
            <Segment>
              <Button color="blue" size="large" onClick={() => this.setState({ videoDemo: !videoDemo })}>View Demo</Button>
            </Segment>
        }
      </Container>
    )
  }
}

export default Demos;