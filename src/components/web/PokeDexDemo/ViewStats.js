import React, { Fragment } from 'react';
import { Grid, Header, Table, Segment, Divider } from 'semantic-ui-react';

const ViewStats = ({ viewStats, secondPokeMon }) => {
  return(
    <Fragment>
      {viewStats ?
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <Segment inverted>
              <Table textAlign="center" color="red" columns="12" celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Base XP</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Weight</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Height</Header>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {secondPokeMon.base_experience}
                    </Table.Cell>    
                    <Table.Cell>
                      {secondPokeMon.weight}  LBS
                    </Table.Cell> 
                    <Table.Cell>
                      {secondPokeMon.height}  FT
                    </Table.Cell>              
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table textAlign="center" color="red" columns="12" celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Attack</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Defense</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Speed</Header>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {secondPokeMon.stats[4].base_stat}
                    </Table.Cell>    
                    <Table.Cell>
                      {secondPokeMon.stats[3].base_stat}
                    </Table.Cell> 
                    <Table.Cell>
                      {secondPokeMon.stats[0].base_stat}
                    </Table.Cell>              
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table textAlign="center" color="red" columns="12" celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Special Attack</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">Special Defense</Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell width="4">
                      <Header as="h3">HP</Header>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {secondPokeMon.stats[2].base_stat}
                    </Table.Cell>    
                    <Table.Cell>
                      {secondPokeMon.stats[1].base_stat}
                    </Table.Cell> 
                    <Table.Cell>
                      {secondPokeMon.stats[5].base_stat}
                    </Table.Cell>              
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      :
      null
    }
    </Fragment>
  )
}

export default ViewStats