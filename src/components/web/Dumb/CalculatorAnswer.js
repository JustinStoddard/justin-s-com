import React, {Fragment} from 'react';
import { Segment, Header } from 'semantic-ui-react';

const CalculatorAnswer = ({ answer }) => {
  return(
    <Fragment>
      <Segment textAlign="center" color="blue">
        <Header as="h3">Is {answer}</Header> 
      </Segment>
    </Fragment>
  )
}

export default CalculatorAnswer;