import React, { useState } from 'react';
import ProfilePic from '../../../Images/58639038_1107873832746290_3384417216882540544_n.jpg';
import '../../../CSS/HomeStyles.css';
import { Link } from 'react-router-dom';
import { Container, Grid, Image } from 'semantic-ui-react';

const Home = () => {
  const [ phaseHeader1, setPhaseHeader1 ] = useState(false);
  const [ phaseHeader2, setPhaseHeader2 ] = useState(false);
  const [ phaseHeader3, setPhaseHeader3 ] = useState(false);
  const [ phaseHeader4, setPhaseHeader4 ] = useState(false);
  const [ phaseHeader5, setPhaseHeader5 ] = useState(false);
  const [ phaseHeader6, setPhaseHeader6 ] = useState(false);
  const [ phaseHeader7, setPhaseHeader7 ] = useState(false);
  const [ phaseHeader8, setPhaseHeader8 ] = useState(false);
  const [ phaseHeader9, setPhaseHeader9 ] = useState(false);

  if (window.location.pathname === "/") {
    setTimeout(() => {
      setPhaseHeader1(true);
    }, 1000);
    setTimeout(() => {
      setPhaseHeader2(true);
    }, 2000);
    setTimeout(() => {
      setPhaseHeader3(true);
    }, 3000);
    setTimeout(() => {
      setPhaseHeader4(true);
    }, 4000);
    setTimeout(() => {
      setPhaseHeader5(true);
    }, 4500);
    setTimeout(() => {
      setPhaseHeader6(true);
    }, 5000);
    setTimeout(() => {
      setPhaseHeader7(true);
    }, 5500);
    setTimeout(() => {
      setPhaseHeader8(true);
    }, 6500);
    setTimeout(() => {
      setPhaseHeader9(true);
    }, 7500);
  }

  return(
    <Container>
      <Grid>
        <Grid.Row className="homeRow">
          <div className="homeContainer">
              <div className="pictureColumn">
                <Image src={ProfilePic} className="picture-dimensions"/>
              </div>
              <div className="contentColumn">
                {phaseHeader1 ?
                    <h6 className="contentHeader1Open">Welcome, </h6>
                  : 
                    <h6 className="contentHeader1Closed">Welcome, </h6>
                }
                {phaseHeader2 ?
                    <h6 className="contentHeader2Open">Human</h6>
                  : 
                    <h6 className="contentHeader2Closed">Human</h6>
                }
                {phaseHeader3 ?
                    <h6 className="contentHeader3Open">I'm Justin.</h6>
                  : 
                    <h6 className="contentHeader3Closed">I'm Justin.</h6>
                }
                {phaseHeader4 ?
                    <h6 className="contentHeader4Open">And</h6>
                  : 
                    <h6 className="contentHeader4Closed">And</h6>
                }
                {phaseHeader5 ?
                    <h6 className="contentHeader5Open">This,</h6>
                  : 
                    <h6 className="contentHeader5Closed">This,</h6>
                }
                {phaseHeader6 ?
                    <h6 className="contentHeader6Open">Is</h6>
                  : 
                    <h6 className="contentHeader6Closed">Is</h6>
                }
                {phaseHeader7 ?
                    <h6 className="contentHeader7Open">My</h6>
                  : 
                    <h6 className="contentHeader7Closed">My</h6>
                }
                {phaseHeader8 ?
                    <h6 className="contentHeader8Open">Domain</h6>
                  : 
                    <h6 className="contentHeader8Closed">Domain</h6>
                }
                {phaseHeader9 ?
                    <Link to="/resume">
                      <h6 className="contentHeader9Open">Discover More</h6>
                    </Link>
                  : 
                    <Link to="/resume">
                      <h6 className="contentHeader9Closed">Discover More</h6>
                    </Link>
                }
              </div>
          </div>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Home;