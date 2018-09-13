import React from 'react';
import { Segment, Table, Header, Rating, Divider } from 'semantic-ui-react';

const Plan3 = () => {
  return(
    <Segment color="blue">
      <Segment textAlign="center" inverted>
        <Header as="h1">Shopping Plan</Header>
      </Segment>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Bronze</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine><strong>Price:</strong> $1000</Table.Cell>
            <Table.Cell singleLine><strong>Maintenance:</strong> $35</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={5} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Silver</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine><strong>Price:</strong> $1800</Table.Cell>
            <Table.Cell singleLine><strong>Maintenance:</strong> Free For 6 Months</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={4} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Gold</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine><strong>Price:</strong> $2500</Table.Cell>
            <Table.Cell singleLine><strong>Maintenance:</strong> Free For 1 Year</Table.Cell>
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