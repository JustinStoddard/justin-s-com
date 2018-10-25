import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const FormComp = ({ name, description, submit, change }) => {
  return(
    <Form onSubmit={submit}>
      <Form.Input
        name="name"
        required
        value={name}
        onChange={change}
        placeholder="Name"
      />
      <Form.Input
        name="description"
        required
        value={description}
        onChange={change}
        placeholder="Description"
      />
      <Form.Button color="blue"><Icon name="check circle"/>Save</Form.Button>
    </Form>
  )
}

export default FormComp;