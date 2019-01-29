import React, { Fragment } from 'react';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

const ThirdPoke = ({ 
  PokeMon, 
  PokeImage, 
  pokeMonNameStyle, 
  segmentMove 
}) => {
  return(
    <Fragment>
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
            </Segment>
          </Fragment>
      </Segment>
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