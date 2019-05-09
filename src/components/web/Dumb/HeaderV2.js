import React from 'react';
import { Grid } from 'semantic-ui-react';
import "../../../CSS/header.css";
import { Link } from 'react-router-dom'

const HeaderV2 = () => {
  return (
    <div className="header-container">
      <Grid>
        <Grid.Row className="tab-row-align">
          <p className="tab-design">Home</p>
          <p className="tab-design">Resume</p>
          <p className="tab-design">Demos</p>
          <p className="tab-design">Projects</p>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default HeaderV2;