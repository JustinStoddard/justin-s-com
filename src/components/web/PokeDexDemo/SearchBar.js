import React, { Fragment } from 'react';
import { Segment, Input, Button, Icon } from 'semantic-ui-react';

const SearchBar = ({ plus, minus, leftButtonMargin, buttonMargin }) => {
  return(
    <Fragment>
      <Segment inverted>
        <Segment color="red">
          <Input icon={<Icon name="search" inverted circular link/>} size="huge" iconPosition="left" placeholder="Search..."/> 
          <Button onClick={minus} size="large" color="red" style={leftButtonMargin} circular><Icon fitted name="arrow left" size="large"/></Button>
          <Button onClick={plus} size="large" color="red" style={buttonMargin} circular><Icon fitted name="arrow right" size="large"/></Button>
        </Segment>
      </Segment>
    </Fragment>
  )
}

export default SearchBar