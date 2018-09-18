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
              <VideoIndex />
              <Button onClick={() => this.setState({ videoDemo: !videoDemo })}>View Demo</Button>
            </Segment>
          :
            <Segment>
              <Button onClick={() => this.setState({ videoDemo: !videoDemo })}>View Demo</Button>
            </Segment>
        }
      </Container>
    )
  }
}

export default Demos;