import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Image, Icon } from 'semantic-ui-react';
import JustinLogo from '../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';

class MobileHeader extends Component {
  state = { buttonClicked: false }

  render() {
    const { buttonClicked } = this.state;
    return(
      <Container>
        <Divider hidden/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
            <Segment inverted>
              <Image src={JustinLogo} size="large"/>
            </Segment>
            </Grid.Column>
            <Grid.Column wisth={2}></Grid.Column>
          </Grid.Row>
          { buttonClicked ?
              <Fragment>
                <Grid.Row>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={12}>
                    <Segment textAlign="center" inverted onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                      <Icon name="caret square up" size="big"/>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Segment textAlign="center" color="blue">
                      <Link to="/about" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                        <Icon name="flask" size="big" color="black"/>
                      </Link>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Segment textAlign="center" color="blue">
                      <Link to="/" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                        <Icon name="home" size="big" color="black"/>
                      </Link>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Segment  textAlign="center" color="blue">
                    <Link to="/contact" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                      <Icon name="paper plane" size="big" color="black"/>
                    </Link>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Segment  textAlign="center" color="blue">
                      <Link to="/services" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                        <Icon name="dollar sign" size="big" color="black"/>
                      </Link>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Segment  textAlign="center" color="blue">
                      <Link to="/projects" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                        <Icon name="file code" size="big" color="black"/>
                      </Link>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Segment  textAlign="center" color="blue">
                      <Link to="/demos" onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                        <Icon name="cogs" size="big" color="black"/>
                      </Link>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Fragment>
            :
              <Fragment>
                <Grid.Row>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={12}>
                    <Segment textAlign="center" inverted onClick={() => this.setState({ buttonClicked: !buttonClicked })}>
                      <Icon name="caret square down outline" size="big"/>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
              </Fragment>
          }
        </Grid>
        <Divider hidden/>
      </Container>
    )
  }
}

export default MobileHeader;