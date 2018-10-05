import React, { Component, Fragment } from 'react';
import { Segment, Grid, Button, Header, Icon } from 'semantic-ui-react';

class CalculatorIndex extends Component {
  render() {
    return(
      <Fragment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Segment inverted>
                <Segment textAlign="center">
                  <Header as="h2">Calculator</Header>
                </Segment>
                <Segment></Segment>
                <Grid>
                  <Grid.Row> {/*This row will have 7, 8, 9, and divide*/}
                    <Grid.Column width={4}>
                      <Button>7</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>8</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>9</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>
                        <Icon name="checkmark" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 4, 5, 6, and multiply*/}
                    <Grid.Column width={4}>
                      <Button>4</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>5</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>6</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>
                        <Icon name="times" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have 1, 2, 3, and subtract*/}
                    <Grid.Column width={4}>
                      <Button>1</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>2</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>3</Button>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button>
                        <Icon name="minus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have clear, 0, and add*/}
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      <Button>0</Button>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={4}>
                      <Button>
                        <Icon name="plus" fitted/>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> {/*This row will have enter*/}
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge">Clear</Button>
                    </Grid.Column>
                    <Grid.Column textAlign="center" width={8}>
                      <Button size="huge">Enter</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default CalculatorIndex;