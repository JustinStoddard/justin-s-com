import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image, Divider, Button } from 'semantic-ui-react';

const SecondPoke = ({ secondPokeMon, secondPokeImage, viewStats, viewStatsButton, pokeMonNameStyle }) => {
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
                    <Button onClick={viewStatsButton} color="red" size="large"><Icon name="eye"/>View</Button>
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
                    <Button onClick={viewStatsButton} color="red" size="large"><Icon name="eye slash"/>Hide</Button>
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