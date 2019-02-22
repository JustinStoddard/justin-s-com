import React from 'react';
import { Form } from 'semantic-ui-react';

const ColumnsFormComp = ({
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
        label="Image Url"
        labelposition="left"
        value={value1}
        onChange={onChange1}
      />
      <Form.Input 
        placeholder="Header ..."
        size="huge"
        name="header"
        label="Header"
        labelposition="left"
        value={value2}
        onChange={onChange2}
      />
      <Form.Input 
        placeholder="Description ..."
        size="huge"
        name="description"
        label="Description"
        labelposition="left"
        value={value3}
        onChange={onChange3}
      />
      <Form.Input 
        placeholder="Button Link ..."
        size="huge"
        name="buttonLink"
        label="Button Link"
        labelposition="left"
        value={value4}
        onChange={onChange4}
      />
      <Form.Input 
        placeholder="Button Text ..."
        size="huge"
        name="buttonText"
        label="Button Text"
        labelposition="left"
        value={value5}
        onChange={onChange5}
      />
    </Form>
  )
}

export default ColumnsFormComp;