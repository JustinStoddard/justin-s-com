import React, { Fragment } from 'react';
import { Segment, Form, Button, Icon, Grid } from 'semantic-ui-react';

const SearchBar = ({ movement, leftButtonMargin, buttonMargin, searchBarStyles, submit, change, pokeMonInput }) => {
  return(
    <Fragment>
      <Segment inverted>
        <Segment color="red">
          <Grid>
            <Grid.Row>
              <Grid.Column width={9}>
                <Form onSubmit={submit} size="small">
                  <Form.Input 
                    icon={<Icon name="search" inverted circular link/>}
                    style={searchBarStyles}  
                    size="huge"
                    iconPosition="left" 
                    placeholder="Search..." 
                    name="pokeMonInput" 
                    value={pokeMonInput}
                    onChange={change}
                  /> 
                </Form>
              </Grid.Column>
              <Grid.Column width={7}>
                <Button onClick={() => movement('minus')} size="large" color="red" style={leftButtonMargin} circular><Icon fitted name="arrow left" size="large"/></Button>
                <Button onClick={() => movement('plus')} size="large" color="red" style={buttonMargin} circular><Icon fitted name="arrow right" size="large"/></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
    </Fragment>
  )
}

export default SearchBar