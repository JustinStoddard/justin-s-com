import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../Loader';
import { Grid, Segment, Header, Icon, Button, Card } from 'semantic-ui-react';
const PokeMon = Loadable({loader: () => import('./PokeMon'), loading: () => <Loader/>})

const MyPokeDex = ({ myPokeMon, viewMyPokeDex, deletePokeMon }) => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Segment inverted>
            <Segment textAlign="center" color="red">
              <Header as="h1">My PokeDex</Header>
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment inverted>
            <Segment textAlign="center" color="red">
              <Button onClick={viewMyPokeDex} size="huge" color="red">Back</Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Segment inverted>
            <Segment textAlign="center" color="red"> 
              <Card.Group itemsPerRow={4}>
                <PokeMon 
                  myPokeMon={myPokeMon}
                  deletePokeMon={deletePokeMon}
                />
              </Card.Group>
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MyPokeDex