import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

const FirstPoke = ({ firstPokeMon, firstPokeImage, pokeMonNameStyle, segmentMove }) => {
  return(
    <Fragment>
      {firstPokeImage ?
        <Fragment>
          <Segment style={segmentMove}>
            <Segment color="red">
              <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{firstPokeMon.name}</Header>
            </Segment>
            <Segment textAlign="center" inverted circular>
              <Image src={firstPokeImage} size="large" circular/>
            </Segment>
          </Segment>
        </Fragment>
      :
        <Fragment>
          <Segment style={segmentMove} textAlign="center" color="red">
            <Icon loading name="spinner"/>
          </Segment>
        </Fragment>
      }
    </Fragment>
  )
}

export default FirstPoke