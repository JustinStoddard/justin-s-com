import React, { Component } from 'react';
import { Segment, Container, Divider, Grid, Header, Button } from 'semantic-ui-react';

class Services extends Component {
  state = { pickedBlog: false, pickedPort: false, pickedShop: false }

  render() {
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
                        <Segment>
                          <Header as="h5" textAlign="center">$150</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Maintainance</Header>
                        </Segment>
                        <Segment>
                          <Header as="h5" textAlign="center">$15</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button color="blue">View Plan</Button>
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
                        <Segment>
                          <Header as="h2" textAlign="center">$50</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h3">Maintainance</Header>
                        </Segment>
                        <Divider hidden/>
                        <Segment>
                          <Header as="h2" textAlign="center">$5</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Divider hidden/>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button color="blue">View Plan</Button>
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
                        <Segment>
                          <Header as="h5" textAlign="center">$1000</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment textAlign="center" inverted>
                          <Header as="h4">Maintainance</Header>
                        </Segment>
                        <Segment>
                          <Header as="h5" textAlign="center">$25</Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment inverted>
                    <Segment textAlign="center" color="blue">
                      <Button color="blue">View Plan</Button>
                    </Segment>
                  </Segment>
                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                Stuff should render here depending on what plan the customer has clicked on. Write the loggic above the render to avois issues.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Services;