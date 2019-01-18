import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../../Loader';
import PokeDexImage from '../../../../Images/My PokeDex Image.png';
import { Grid, Segment, Button, Card, Image } from 'semantic-ui-react';
const PokeMon = Loadable({loader: () => import('./MobilePokeMon'), loading: () => <Loader/>})

const MyPokeDex = ({ myPokeMon, viewMyPokeDex, deletePokeMon }) => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <Image src={PokeDexImage} centered/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment textAlign="center" color="red">
            <Button onClick={viewMyPokeDex} size="medium" color="red">Back</Button>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card.Group itemsPerRow={2}>
            <PokeMon 
              myPokeMon={myPokeMon}
              deletePokeMon={deletePokeMon}
            />
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MyPokeDex