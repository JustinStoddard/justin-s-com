import React, { Fragment } from 'react';
import '../../../CSS/resume.css';
import ProfilePic from '../../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';
import { Container, Grid, Divider, Image, Icon } from 'semantic-ui-react';

const ResumeIndex = () => {
  return (
    <Fragment>
      <Divider hidden/>
      <Container>
        <Grid>
          <Grid.Row>

            <Grid.Column width={4} className="left-column"> {/* Left Column */}
              <Grid.Row className="picture-row-left"> {/* Picture */}
                <Image src={ProfilePic}/>
              </Grid.Row>
              <Grid.Row className="bio-row-left"> {/* Bio */}
                <span className="bio-header-left">Bio</span>
              </Grid.Row>
              <Grid.Row className="experience-row-left"> {/* Experience */}
                <span className="experience-header-left">Experience</span>
              </Grid.Row>
              <Grid.Row className="education-row-left"> {/* Education */}
                <span className="education-header-left">Education</span>
              </Grid.Row>
              <Grid.Row className="expertise-row-left"> {/* Expertise */}
                <span className="expertise-header-left">Expertise</span>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={12} className="right-column"> {/* Right Column */}
              <Grid.Row className="header-row-right">
              
                <Grid.Row>
                  <Grid.Column>
                    <span className="header-right">Justin Stoddard</span>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid>  
                    <Grid.Column width={8}>
                      <Grid.Row className="contact-icons">
                        <Icon name="mail" size="large"/>
                        <span className="contact-subheaders">Stoddard.j.t@gmail.com</span>
                      </Grid.Row>
                      <Grid.Row className="contact-icons">
                        <Icon name="phone" size="large"/>
                        <span className="contact-subheaders">801-209-4087</span>
                      </Grid.Row>
                      <Grid.Row className="contact-icons">
                        <Icon name="home" size="large"/>
                        <span className="contact-subheaders">1329 w 7125 s, West Jordan, UT</span>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Grid>
                        <Grid.Row className="social-icons">
                          <Grid.Column width={4}>
                            <a href="https://www.facebook.com/people/Justin-Stoddard/100005710514833">
                              <Icon name="facebook square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://github.com/JustinStoddard">
                              <Icon name="github square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://www.linkedin.com/in/justin-stoddard-65171015a/">
                              <Icon name="linkedin" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid>
                </Grid.Row>

              </Grid.Row>
              <Grid.Row className="bio-row-right">    
                <span className="bio-content">My Legacy started 5 years ago with a passion for video games, and a drive to know more about how they worked. Since then I've gone from a Curious Amateur to a Professional Web Developer. This site you're viewing my resume on, and the ones listed below, are a testament to that journey. So enjoy the view. Then when you're ready, give me a call.</span>
              </Grid.Row>
              <Grid.Row className="experience-row-right">
                
              </Grid.Row>
              <Grid.Row className="education-row-right">
                
              </Grid.Row>
              <Grid.Row className="expertise-row-right">
                
              </Grid.Row>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ResumeIndex;