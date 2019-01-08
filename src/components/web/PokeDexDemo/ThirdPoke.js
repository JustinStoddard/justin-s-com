import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

const ThirdPoke = ({ thirdPokeMon, thirdPokeImage, pokeMonNameStyle, segmentMove }) => {
  return(
    <Fragment>
      <Segment style={segmentMove} inverted>
        {thirdPokeImage ?
          <Fragment>
            <Segment color="red">
              <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{thirdPokeMon.name}</Header>
              <Segment textAlign="center" inverted circular>
                <Image src={thirdPokeImage} size="large" circular/>
              </Segment>
            </Segment>
          </Fragment>
        :
        <Fragment>
            <Segment textAlign="center" color="red">
              <Icon loading name="spinner"/>
            </Segment>
          </Fragment>
        }
      </Segment>
    </Fragment>
  )
}

export default ThirdPoke