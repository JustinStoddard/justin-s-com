import React, { Component, Fragment } from 'react';
import Loader from '../../Loader';
import { Segment, Container, Divider, Grid, Header, Button, List } from 'semantic-ui-react';
import Loadable from 'react-loadable';

const VideoDemoLoader = Loadable({
  loader: () => import('./VideoIndex'),
  loading: () => <Loader />
})

const CalculatorDemoLoader = Loadable({
  loader: () => import('./CalculatorDemo/CalculatorIndex'),
  loading: () => <Loader />
})

class Demos extends Component {
  state = { videoDemo: false, calculatorDemo: false }

  render() {
    const { videoDemo, calculatorDemo } = this.state;
    return(
      <Container>
        <Divider hidden />
        <Segment textAlign="center" inverted>
          <Header as="h2">Demos</Header>
        </Segment>
        <Divider hidden/>
        { videoDemo ?
            <Segment color="blue">
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
                      <Segment color="blue">
                        <Header as="h2">YouTube Player</Header>
                      </Segment>
                      <Segment textAlign="left" color="blue">
                        <strong>This</strong> demos show cases the ability to use YouTubes API to search for, and view videos. There is also a lot of work behind the scenes with State, Props, and Conditional Rendering. <strong>Also star the repo <a href="https://github.com/JustinStoddard/JustinS.com">here</a></strong>
                      </Segment>
                      <Button color="blue" size="huge" onClick={() => this.setState({ videoDemo: !videoDemo })}>View Demo</Button>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Segment inverted>
                      <Segment color="blue">
                        <Segment textAlign="center" inverted>
                          <Header as="h3">TECH</Header>
                        </Segment>
                        <Segment color="blue">
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
        <Divider hidden/>
        { calculatorDemo ?
            <Segment color="blue">
              <Button color="blue" size="large" onClick={() => this.setState({ calculatorDemo: !calculatorDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <CalculatorDemoLoader />
            </Segment>
          :
            <Fragment>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={13}>
                    <Segment inverted>
                      <Segment color="blue">
                        <Header as="h2">Calculator Demo</Header>
                      </Segment>
                      <Segment textAlign="left" color="blue">
                        <strong>This</strong> demos showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using the React JS framework. 
                      </Segment>
                      <Button color="blue" size="huge" onClick={() => this.setState({ calculatorDemo: !calculatorDemo })}>View Demo</Button>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Segment inverted>
                      <Segment color="blue">
                        <Segment textAlign="center" inverted>
                          <Header as="h3">TECH</Header>
                        </Segment>
                        <Segment color="blue">
                          <List as="ul">
                            <List.Item as="li">React Js</List.Item>
                            <List.Item as="li">Semantic-UI</List.Item>
                            <List.Item as="li">ES6 JS</List.Item>
                            <List.Item as="li">My Brain</List.Item>
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