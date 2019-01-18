import React from 'react';
import pokeDexImage from '../../../../Images/Poke Dex Image.png';
import { Grid, Segment, Image, Button, Divider } from 'semantic-ui-react';

const PokeDexMain = ({ enterPokeDex }) => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment inverted>
            <Segment textAlign="center">
              <Image src={pokeDexImage} size="huge"/>
              <Button onClick={enterPokeDex} color="red" size="huge">OPEN</Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default PokeDexMain;