import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

const ThirdPoke = ({ thirdPokeMon, thirdPokeImage, pokeMonNameStyle, segmentMove }) => {
  return(
    <Fragment>
      {thirdPokeImage ?
        <Fragment>
          <Segment style={segmentMove} basic>
            <Segment color="red" style={styles.headerSegment}>
              <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{thirdPokeMon.name}</Header>
            </Segment>
            <Segment textAlign="center" style={styles.imageStyle} inverted>
              <Image src={thirdPokeImage} size="large"/>
            </Segment>
          </Segment>
        </Fragment>
      :
      <Fragment>
          <Segment style={segmentMove} textAlign="center" color="red" basic>
            <Icon loading name="spinner"/>
          </Segment>
        </Fragment>
      }
    </Fragment>
  )
}

const styles = {
  headerSegment: {
    width: '100px',
    marginLeft: '-30px'
  },
  imageStyle: {
    marginLeft: '-30px',
    width: '100px',
    height: '100px'
  }
}

export default ThirdPoke