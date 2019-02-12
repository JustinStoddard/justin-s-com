import React from 'react';
import { Segment, Divider, Grid, Header, Button, List } from 'semantic-ui-react';

const Demo = ({ 
  DemoState, 
  DemoComponent, 
  DemoActivation, 
  DemoDeActivation,
  DemoHeader,
  DemoDescription,
  DemoTechListItem1,
  DemoTechListItem2,
  DemoTechListItem3,
  DemoTechListItem4
}) => {
  return (
    DemoState ?
      <Segment color="blue">
        <Button color="blue" size="large" onClick={DemoDeActivation}>Hide Demo</Button>
        <Divider hidden/>
        {DemoComponent}
      </Segment>
    :
    
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <Segment inverted>
              <Segment color="blue">
                <Header as="h2">{DemoHeader}</Header>
              </Segment>
              <Segment textAlign="left" color="blue">
                {DemoDescription}
              </Segment>
              <Button color="blue" size="huge" onClick={DemoActivation}>View Demo</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment inverted>
              <Segment color="blue">
                <Segment textAlign="center" inverted>
                  <Header as="h3">TECH</Header>
                </Segment>
                <Segment color="blue">
                  <List as="ul">
                    <List.Item as="li">{DemoTechListItem1}</List.Item>
                    <List.Item as="li">{DemoTechListItem2}</List.Item>
                    <List.Item as="li">{DemoTechListItem3}</List.Item>
                    <List.Item as="li">{DemoTechListItem4}</List.Item>
                  </List>
                </Segment>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}

export default Demo;