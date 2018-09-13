import React from 'react';
import { Segment, Table, Header, Rating } from 'semantic-ui-react';

const Plan3 = () => {
  return(
    <Segment color="blue">
      <Segment textAlign="center" inverted>
        <Header as="h1">Shopping Plan</Header>
      </Segment>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>
              <Header as="h3">Rank</Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3">Price</Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3">Maintenance</Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3">Rating</Header>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Bronze</Header>
            </Table.Cell>
            <Table.Cell singleLine>$1000</Table.Cell>
            <Table.Cell singleLine>$35</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={5} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Silver</Header>
            </Table.Cell>
            <Table.Cell singleLine>$1800</Table.Cell>
            <Table.Cell singleLine>Free For 6 Months</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={3} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Gold</Header>
            </Table.Cell>
            <Table.Cell singleLine>$2500</Table.Cell>
            <Table.Cell singleLine>Free For 1 Year</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={4} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default Plan3;