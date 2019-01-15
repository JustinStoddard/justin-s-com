import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image, Divider, Button, Grid } from 'semantic-ui-react';

const SecondPoke = ({ secondPokeMon, secondPokeImage, viewStats, viewStatsButton, pokeMonNameStyle, addButtonStyles, addPokeMon }) => {
  return(
    <Fragment>
      <Segment inverted>
        <Segment textAlign="center" color="red">
          {secondPokeImage ?
            <Fragment>
              {!viewStats ? 
                  <div>
                    <Segment color="red">
                      <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{secondPokeMon.name}</Header>
                    </Segment>
                    <Segment textAlign="center" inverted circular>
                      <Image src={secondPokeImage} size="large" circular/>
                    </Segment>
                    <Divider hidden/>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={10}>
                          <Button onClick={viewStatsButton} color="red" size="large"><Icon name="eye"/>View</Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Button onClick={addPokeMon} color="red" size="large" style={addButtonStyles}><Icon name="plus" fitted/></Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                :
                  <div>
                    <Segment color="red">
                      <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{secondPokeMon.name}</Header>
                    </Segment>
                    <Segment textAlign="center" inverted circular>
                      <Image src={secondPokeImage} size="large" circular/>
                    </Segment>
                    <Divider hidden/>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={10}>
                          <Button onClick={viewStatsButton} color="red" size="large"><Icon name="eye slash"/>Hide</Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Button onClick={addPokeMon} color="red" size="large" style={addButtonStyles}><Icon name="plus" fitted/></Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
              }
              </Fragment>
            :
            <Icon loading name="spinner"/>
          }
        </Segment>
      </Segment>
    </Fragment>
  )
}

export default SecondPoke