import React, { Fragment } from 'react';
import { Card, Image, Grid, Button, Icon } from 'semantic-ui-react';

const PokeMon = ({ myPokeMon, deletePokeMon }) => {
  return(
    <Fragment>
      {myPokeMon.map((p, index) =>
        <Card key={index} color="red">
          <Image size="large" src={p.sprites.front_default}/>
          <Card.Content>
            <Card.Header style={pokeStyles.pokeHeader}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={10}>{p.name}</Grid.Column>
                  <Grid.Column width={6}>
                    <Button onClick={() => deletePokeMon(index)} size="tiny" color="red" style={pokeStyles.buttonMargin}><Icon name="trash alternate" fitted/></Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Header>
          </Card.Content>
        </Card>
      )}
    </Fragment>
  )
}

const pokeStyles = {
  pokeHeader: {
    textTransform: 'capitalize',
    marginLeft: '-5px'
  },
  buttonMargin: {
    marginLeft: '-5px'
  }
}

export default PokeMon