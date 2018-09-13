import React from 'react';
import { Segment, Table, Header, Rating, Divider } from 'semantic-ui-react';

const Plan1 = () => {
  return(
    <Segment color="blue">
      <Segment textAlign="center" inverted>
        <Header as="h1">Portfolio Plan</Header>
      </Segment>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Bronze</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine>$50</Table.Cell>
            <Table.Cell singleLine>$5</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={5} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Silver</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine><strong>Price:</strong> $90</Table.Cell>
            <Table.Cell singleLine>Free For 6 Months</Table.Cell>
            <Table.Cell>
              <Rating ison="star" defaultRating={4} maxRating={5}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Gold</Header>
              <Divider/>
            </Table.Cell>
            <Table.Cell singleLine>$150</Table.Cell>
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

export default Plan1;