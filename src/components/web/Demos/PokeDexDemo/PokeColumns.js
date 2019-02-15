import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image, Grid, Button, Divider } from 'semantic-ui-react';

const ThirdPoke = ({ 
  PokeMon, 
  PokeImage, 
  pokeMonNameStyle, 
  segmentMove,

  viewComponent,
  viewStats,
  viewStatsButton,
  addPokeMon,
  addButtonStyles 
}) => {
  return(
    <Fragment>
      <Grid.Column width={4}>
      <Segment style={segmentMove} inverted>
          <Fragment>
            <Segment>
              <Segment color="red">
                {PokeMon.name ?
                    <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{PokeMon.name}</Header>
                  :
                    <Icon loading name="spinner"/>
                }
              </Segment>
              <Segment textAlign="center" style={styles.segemntHeight} inverted circular>
                {PokeImage ?
                    <Image src={PokeImage} size="large" circular/> 
                  :
                    <Icon loading size="massive" name="spinner"/>
                }
              </Segment>
              <Divider hidden/>
              {viewComponent ?
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={10}>
                        <Button onClick={viewStatsButton} color="red" size="large"><Icon name={`eye${viewStats ? ' slash' : ''}`}/>{!viewStats ? 'Stats' : 'Hide'}</Button>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Button onClick={addPokeMon} color="red" size="large" style={addButtonStyles}><Icon name="plus" fitted/></Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                :
                  null
              }
            </Segment>
          </Fragment>
      </Segment>
      </Grid.Column>
    </Fragment>
  )
}

const styles = {
  segemntHeight: {
    height: '195px',
    width: '195px'
  }
}

export default ThirdPoke