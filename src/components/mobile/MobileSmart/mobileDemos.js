import React, { Component, Fragment } from 'react';
import Loader from '../../../Loader';
import { Segment, Container, Divider, Header, Button, List } from 'semantic-ui-react';
import Loadable from 'react-loadable';
const VideoDemoLoader = Loadable({loader: () => import('../MobileSmart/mobileVideoIndex'),loading: () => <Loader/>})
const CalculatorDemoLoader = Loadable({loader: () => import('../MobileDemos/MobileCalculatorDemo/mobileCalculatorIndex'),loading: () => <Loader/>})
const PokeDexDemoLoader = Loadable({loader: () => import('../MobileDemos/MobilePokeDexDemo/MobilePokeDexDemo'), loading: () => <Loader/>})

class Demos extends Component {
  state = { videoDemo: false, calculatorDemo: false, pokeDexDemo: false }

  render() {
    const { videoDemo, calculatorDemo, pokeDexDemo } = this.state;
    return(
      <Container>
        <Divider hidden />
        <Segment textAlign="center" inverted>
          <Header as="h2">Demos</Header>
        </Segment>
        <Divider hidden/>
        {pokeDexDemo ?
            <Segment color="blue">
              <Button color="blue" size="large" onClick={() => this.setState({ pokeDexDemo: !pokeDexDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <PokeDexDemoLoader />
            </Segment>
          :
            <Fragment>
              <Segment inverted>
                <Segment color="blue" textAlign="center">
                  <Header as="h2">PokeDex Demo - NEW!</Header>
                </Segment>
                <Segment textAlign="left" color="blue">
                  <strong>This</strong> Demo uses the Poke API to create a working PokeDex! Move through the library or use the search bar to find your favorite PokeMon and view its stats. Then add your favorites to your PokeDex, Enjoy!
                </Segment>
                <Segment color="blue">
                  <Segment textAlign="center" inverted>
                    <Header as="h3">TECH</Header>
                  </Segment>
                  <Segment color="blue">
                    <List as="ul">
                      <List.Item as="li">React Js</List.Item>
                      <List.Item as="li">Semantic-UI</List.Item>
                      <List.Item as="li">Poke API</List.Item>
                      <List.Item as="li">Axios</List.Item>
                    </List>
                  </Segment>
                </Segment>
                <Button color="blue" size="huge" onClick={() => this.setState({ pokeDexDemo: !pokeDexDemo, calculatorDemo: false, videoDemo: false })}>View Demo</Button>
              </Segment>
              <Divider hidden/>
            </Fragment>
        }
        <Divider hidden/>
        {calculatorDemo ?
            <Segment color="blue">
              <Button color="blue" size="large" onClick={() => this.setState({ calculatorDemo: !calculatorDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <CalculatorDemoLoader />
            </Segment>
          :
            <Fragment>
              <Segment inverted>
                <Segment color="blue" textAlign="center">
                  <Header as="h2">Calculator Demo</Header>
                </Segment>
                <Segment textAlign="left" color="blue">
                  <strong>This</strong> demos showcases a Homemade Calculator that does exactly what you expect! It calculates things! This little demo also showcases my ability write ES6 JavaScript using React JS, my understanding of DOM Manipulation, and working with local state.
                </Segment>
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
                <Button color="blue" size="huge" onClick={() => this.setState({ calculatorDemo: !calculatorDemo, videoDemo: false, pokeDexDemo: false })}>View Demo</Button>
              </Segment>
              <Divider hidden/>
            </Fragment>
        }
        <Divider hidden/>
        {videoDemo ?
            <Segment color="blue">
              <Button color="blue" size="large" onClick={() => this.setState({ videoDemo: !videoDemo })}>Hide Demo</Button>
              <Divider hidden/>
              <VideoDemoLoader />
            </Segment>
          :
            <Fragment>
              <Segment inverted>
                <Segment color="blue" textAlign="center">
                  <Header as="h2">YouTube Player</Header>
                </Segment>
                <Segment textAlign="left" color="blue">
                  <strong>This</strong> demos show cases the ability to use YouTubes API to search for, and view videos. There is also a lot of work behind the scenes with State, Props, and Conditional Rendering. <strong>Also star the repo <a href="https://github.com/JustinStoddard/JustinS.com">here</a></strong>
                </Segment>
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
                <Button color="blue" size="huge" onClick={() => this.setState({ videoDemo: !videoDemo, calculatorDemo: false, pokeDexDemo: false })}>View Demo</Button>
              </Segment>
              <Divider hidden/>
            </Fragment>
        }
      </Container>
    )
  }
}

export default Demos;