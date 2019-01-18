import React from 'react';
import pokeDexImage from '../../../Images/Poke Dex Image.png';
import { Grid, Segment, Image, Button, Divider } from 'semantic-ui-react';

const PokeDexMain = ({ enterPokeDex }) => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Segment textAlign="center" circular inverted>
            <Segment circular>
              <Divider hidden/>
              <Divider hidden/>
              <Image src={pokeDexImage} size="large"/>
              <Button onClick={enterPokeDex} color="red" size="huge">OPEN</Button>
              <Divider hidden/>
              <Divider hidden/>
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default PokeDexMain;