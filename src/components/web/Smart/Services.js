import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../Loader';
import { Segment, Container, Divider, Grid, Header, Button } from 'semantic-ui-react';

const Plan1Load = Loadable({
  loader: () => import('../Dumb/Plan1'),
  loading: () => <Loader/>,
})

const Plan2Load = Loadable({
  loader: () => import('../Dumb/Plan2'),
  loading: () => <Loader/>,
})

const Plan3Load = Loadable({
  loader: () => import('../Dumb/Plan3'),
  loading: () => <Loader/>,
})

class Services extends Component {
  state = { pickedBlog: false, pickedPort: false, pickedShop: false }

  render() {
    const { pickedBlog, pickedPort, pickedShop } = this.state;
    return(
      <Container>
        <Divider hidden />
        <Segment textAlign="center" inverted>
          <Header as="h1">Services</Header>
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Divider hidden/>
              <Segment inverted>
                <Segment textAlign="center" color="blue">
                  <Header as="h4">Blog Site</Header>
                </Segment>
                <Segment color="blue">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Price</Header>
                        </Segment>
                        <Segment color="blue">
                          <Header as="h5" textAlign="center">$150</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Maintenance</Header>
                        </Segment>
                        <Segment color="blue">
                          <Header as="h5" textAlign="center">$15</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button color="blue" onClick={() => this.setState({ pickedBlog: !pickedBlog, pickedPort: false, pickedShop: false })}>View Plan</Button>
                    </Segment>
                  </Segment>
                </Segment>
              </Segment>
            </Grid.Column>
  
            <Grid.Column width={6}>
              <Segment inverted>
                <Segment textAlign="center" color="blue">
                  <Header as="h2">Portfolio Site</Header>
                </Segment>
                <Segment color="blue">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h3">Price</Header>
                        </Segment>
                        <Divider hidden/>
                        <Segment color="blue">
                          <Header as="h2" textAlign="center">$50</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h3">Maintenance</Header>
                        </Segment>
                        <Divider hidden/>
                        <Segment color="blue">
                          <Header as="h2" textAlign="center">$5</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Divider hidden/>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button color="blue" onClick={() => this.setState({ pickedPort: !pickedPort, pickedBlog: false, pickedShop: false })}>View Plan</Button>
                    </Segment>
                  </Segment>
                </Segment>
              </Segment>
            </Grid.Column>
  
            <Grid.Column width={5}>
              <Divider hidden/>
              <Segment inverted>
                <Segment textAlign="center" color="blue">
                  <Header as="h4">Shopping Site</Header>
                </Segment>
                <Segment color="blue">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Price</Header>
                        </Segment>
                        <Segment color="blue">
                          <Header as="h5" textAlign="center">$1000</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Maintenance</Header>
                        </Segment>
                        <Segment color="blue">
                          <Header as="h5" textAlign="center">$25</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button 
                        color="blue" 
                        onClick={() => this.setState({ pickedShop: !pickedShop, pickedBlog: false, pickedPort: false })}>View Plan</Button>
                    </Segment>
                  </Segment>
                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              { pickedPort ?
                  <Segment inverted>
                    <Plan1Load/>
                  </Segment>
                :
                  null
              }
              { pickedBlog ?
                  <Segment inverted>
                    <Plan2Load/>
                  </Segment>
                :
                  null
              }
              { pickedShop ?
                  <Segment inverted>
                    <Plan3Load/>
                  </Segment>
                :
                  null
              }
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Services;