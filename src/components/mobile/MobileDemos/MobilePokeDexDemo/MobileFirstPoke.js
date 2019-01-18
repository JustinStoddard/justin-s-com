import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

const FirstPoke = ({ firstPokeMon, firstPokeImage, pokeMonNameStyle, segmentMove }) => {
  return(
    <Fragment>
      {firstPokeImage ?
        <Fragment>
          <Segment style={segmentMove} basic>
            <Segment color="red" style={styles.headerSegment}>
              <Header as="h4" textAlign="center" style={pokeMonNameStyle}>{firstPokeMon.name}</Header>
            </Segment>
            <Segment textAlign="center" style={styles.imageSegmentStyle} inverted>
              <Image src={firstPokeImage} size="huge"/>
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
    marginLeft: '-20px'
  },
  imageSegmentStyle: {
    marginLeft: '-20px',
    width: '100px',
    height: '100px'
  }
}

export default FirstPoke