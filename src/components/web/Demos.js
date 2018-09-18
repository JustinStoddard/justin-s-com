import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import { Segment, Container, Divider, Grid, Header, Button, List } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const VideoDemoLoader = Loadable({
  loader: () => import('./VideoIndex'),
  loading: () => <Loader />
})

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
        <Divider hidden/>
        { videoDemo ?
            <Segment>
              <Button color="blue" size="large" onClick={() => this.setState({ videoDemo: !videoDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <VideoDemoLoader />
            </Segment>
          :
            <Fragment>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={13}>
                    <Segment inverted>
                      <Segment>
                        <Header as="h2">YouTube Player</Header>
                      </Segment>
                      <Segment textAlign="left">
                        <strong>This</strong> demos show cases the to ability use YouTubes API to search for, and view videos. There is also a lot of work behind the scenes with State, Props, and Conditional Rendering. <strong>Also star the repo <a href="https://github.com/JustinStoddard/JustinS.com">here</a></strong>
                      </Segment>
                      <Button color="blue" size="huge" onClick={() => this.setState({ videoDemo: !videoDemo })}>View Demo</Button>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Segment inverted>
                      <Segment>
                        <Segment textAlign="center" inverted>
                          <Header as="h3">TECH</Header>
                        </Segment>
                        <Segment>
                          <List as="ul">
                            <List.Item as="li">React Js</List.Item>
                            <List.Item as="li">Semantic-UI</List.Item>
                            <List.Item as="li">YouTube API</List.Item>
                            <List.Item as="li">NPM Lodash</List.Item>
                          </List>
                        </Segment>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fragment>
        }
      </Container>
    )
  }
}

export default Demos;