import React, { Fragment } from 'react';
import "../../../../CSS/vex.css";
import { Segment, Header, Grid, Icon } from 'semantic-ui-react';

const VexClan = () => {
  return(
    <Fragment>
      <Segment textAlign="center" color="yellow" inverted>
        <Header as="h1">Under Contruction</Header>
        <Icon name="warning sign" size="large" loading/>
      </Segment>
    </Fragment>
  )
}

export default VexClan;