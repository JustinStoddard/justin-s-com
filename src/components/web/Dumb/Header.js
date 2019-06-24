import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, Responsive } from 'semantic-ui-react';
import '../../../CSS/HeaderStyles.css';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden/>
      <Responsive as={Grid}>
      <div className="outerLogo">
        <h5 className="innerLogo">JST</h5>
      </div>
      <div className="navButtonsContainer">
        <Link to="/">
          <div className="navButtons">
            <h5 className="navButtonText">HOME</h5>
          </div>
        </Link>
        <Link to="/resume">
          <div className="navButtons">
            <h5 className="navButtonText">RESUME</h5>
          </div>
        </Link>
        <Link to="/demos">
          <div className="navButtons">
            <h4 className="navButtonText">DEMOS</h4>
          </div>
        </Link>
      </div>
      </Responsive>
    </Container>
  )
}

export default HeaderComp;