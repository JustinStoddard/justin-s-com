import React, { Fragment } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

const ViewStats = ({ viewStats, secondPokeMon }) => {
  return(
    <Fragment>
      {viewStats ?
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Base XP</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.base_experience}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Weight</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.weight}  LB</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Height</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.height}  FT</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Attack</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[4].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Defense</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[3].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Speed</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[0].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Special Attack</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[2].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">Special Defense</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[1].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10} verticalAlign="middle">
                      <Header as="h3">HP</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Segment textAlign="center">{secondPokeMon.stats[5].base_stat}</Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      :
      null
    }
    </Fragment>
  )
}

export default ViewStats