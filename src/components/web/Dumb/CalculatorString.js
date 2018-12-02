import React, { Fragment } from 'react';
import { Segment, Header } from 'semantic-ui-react';

const CalculatorString = ({ firstNum, secondNum, operator }) => {
  return(
    <Fragment>
      <Segment textAlign="center" color="blue">
        <Header as="h3">{firstNum} {operator} {secondNum}</Header> 
      </Segment>
    </Fragment>
  )
}

export default CalculatorString;