import React from 'react';
import { Form, Segment, Grid } from 'semantic-ui-react';

const BannerFormComp = ({
  value1,
  value2,
  value3,
  value4,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
}) => {
  return(
    <Form size="small">
      <Form.Input 
        placeholder="Image1 Link ..."
        size="huge"
        name="image1"
        label="Image 1"
        labelposition="left"
        value={value1}
        onChange={onChange1}
      />
      {/* <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Grid.Row>
              <Grid.Column width={4}>
                Temp 1
              </Grid.Column>
              <Grid.Column width={4}>
                Temp 2
              </Grid.Column>
              <Grid.Column width={4}>
                Temp 3
              </Grid.Column>
              <Grid.Column width={4}>
                Temp 4
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>  
          <Grid.Column width={6}></Grid.Column>
        </Grid>
      </Segment> */}
      <Form.Input 
        placeholder="Image2 Link ..."
        size="huge"
        name="image2"
        label="Image 2"
        labelposition="left"
        value={value2}
        onChange={onChange2}
      />
      <Form.Input 
        placeholder="Image3 Link ..."
        size="huge"
        name="image3"
        label="Image 3"
        labelposition="left"
        value={value3}
        onChange={onChange3}
      />
      <Form.Input 
        placeholder="Image4 Link ..."
        size="huge"
        name="image4"
        label="Image 4"
        labelposition="left"
        value={value4}
        onChange={onChange4}
      />
    </Form>
  )
}

export default BannerFormComp;