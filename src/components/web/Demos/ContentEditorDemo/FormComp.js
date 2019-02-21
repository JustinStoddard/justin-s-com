import React from 'react';
import { Form } from 'semantic-ui-react';

const FormComp = ({
  value1,
  value2,
  value3,
  value4,
  value5,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  onChange5,
}) => {
  return(
    <Form size="small">
      <Form.Input 
        placeholder="Image Link ..."
        size="huge"
        name="image"
        value={value1}
        onChange={onChange1}
      />
      <Form.Input 
        placeholder="Header ..."
        size="huge"
        name="header"
        value={value2}
        onChange={onChange2}
      />
      <Form.Input 
        placeholder="Description ..."
        size="huge"
        name="description"
        value={value3}
        onChange={onChange3}
      />
      <Form.Input 
        placeholder="Button Link ..."
        size="huge"
        name="buttonLink"
        value={value4}
        onChange={onChange4}
      />
      <Form.Input 
        placeholder="Button Text ..."
        size="huge"
        name="buttonText"
        value={value5}
        onChange={onChange5}
      />
    </Form>
  )
}

export default FormComp;