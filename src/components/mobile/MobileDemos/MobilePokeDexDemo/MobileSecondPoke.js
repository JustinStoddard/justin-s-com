import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image, Divider, Button, Grid } from 'semantic-ui-react';

const SecondPoke = ({ secondPokeMon, secondPokeImage, viewStats, viewStatsButton, pokeMonNameStyle, addButtonStyles, addPokeMon }) => {
  return(
    <Fragment>
      <Segment textAlign="center" basic>
        {secondPokeImage ?
          <Fragment>
            {!viewStats ? 
                <div>
                  <Segment color="red" style={styles.headerSegment}>
                    <Header as="h5" textAlign="center" style={pokeMonNameStyle}>{secondPokeMon.name}</Header>
                  </Segment>
                  <Segment textAlign="center" style={styles.imageSegmentStyles} inverted>
                    <Image src={secondPokeImage} size="large"/>
                  </Segment>
                  <Divider hidden/>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={10}>
                        <Button onClick={viewStatsButton} color="red" size="tiny"><Icon name="eye" fitted/></Button>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Button onClick={addPokeMon} color="red" size="tiny" style={addButtonStyles}><Icon name="plus" fitted/></Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              :
                <div>
                  <Segment color="red" style={styles.headerSegment}>
                    <Header as="h5" textAlign="center" style={pokeMonNameStyle}>{secondPokeMon.name}</Header>
                  </Segment>
                  <Segment textAlign="center" style={styles.imageSegmentStyles} inverted>
                    <Image src={secondPokeImage} size="large"/>
                  </Segment>
                  <Divider hidden/>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={10}>
                        <Button onClick={viewStatsButton} color="red" size="tiny"><Icon name="eye slash"/></Button>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Button onClick={addPokeMon} color="red" size="tiny" style={addButtonStyles}><Icon name="plus" fitted/></Button>
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
    </Fragment>
  )
}

const styles = {
  headerSegment: {
    width: '110px',
    marginLeft: '-20px'
  },
  imageSegmentStyles: {
    width: '110px',
    height: '110px',
    marginLeft: '-20px'
  }
}

export default SecondPoke