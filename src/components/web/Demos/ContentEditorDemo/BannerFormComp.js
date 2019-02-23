import React, { Fragment } from 'react';
import { Form, Segment, Grid, Divider, Header } from 'semantic-ui-react';

const BannerFormComp = ({
  layout,
  layoutChange,
  whichImage,
  value1,
  value2,
  value3,
  value4,
  value5,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  onChange5
}) => {
  return(
    <Fragment>
      <Header as="h2">{whichImage}</Header>
      <Divider/>
      <Form size="small">
        <Form.Input 
          required
          placeholder="Image Link"
          size="huge"
          name="image"
          label="Image Url"
          labelposition="left"
          value={value1}
          onChange={onChange1}
        />
        <Form.Input 
          placeholder="Header"
          size="huge"
          name="header"
          label="Header"
          labelposition="left"
          value={value2}
          onChange={onChange2}
        />
        <Form.Input 
          placeholder="Sub Header"
          size="huge"
          name="sub-header"
          label="Sub Header"
          labelposition="left"
          value={value3}
          onChange={onChange3}
        />
        <Form.Input 
          placeholder="Button Link"
          size="huge"
          name="button-link"
          label="Button Link Url"
          labelposition="left"
          value={value4}
          onChange={onChange4}
        />
        <Form.Input 
          placeholder="Button Text"
          size="huge"
          name="button-text"
          label="Button Text"
          labelposition="left"
          value={value5}
          onChange={onChange5}
        />
        <Divider hidden/>
        <Form.Group inline>
          <Form.Radio
            label="Layout 1"
            checked={layout === "L1"}
            onChange={() => layoutChange("L1")}
          />
          <Form.Radio
            label="Layout 2"
            checked={layout === "L2"}
            onChange={() => layoutChange("L2")}
          />
          <Form.Radio
            label="Layout 3"
            checked={layout === "L3"}
            onChange={() => layoutChange("L3")}
          />
        </Form.Group>
      </Form>
    </Fragment>
  )
}

export default BannerFormComp;