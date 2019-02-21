import React from 'react';
import { Grid, Segment, Divider, Image, Button } from 'semantic-ui-react';

const BannerContent = () => {
  return(
    <Grid.Column width={15}>
      <Segment textAlign="center">
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        Main Banner
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Segment textAlign="right" basic>
          <Button>Edit</Button>
        </Segment>
      </Segment>
    </Grid.Column>
  )
}

export default BannerContent;