import React, { Fragment } from 'react';
import '../../../CSS/resume.css';
import ProfilePic from '../../../Images/58639038_1107873832746290_3384417216882540544_n.jpg';
import { List, Grid, Divider, Image, Icon } from 'semantic-ui-react';

const ResumeIndex = () => {
  return (
    <Fragment>
      <div className="godfather-container"> 
      <Divider hidden/>
        <Grid>
          <Grid.Row>

            <Grid.Column width={4} className="left-column"> {/* Left Column */}
              <Grid.Row className="picture-row-left"> {/* Picture */}
                <Image src={ProfilePic} className="picture-dimensions"/>
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
                            <a href="https://www.facebook.com/people/Justin-Stoddard/100005710514833" target="_blank">
                              <Icon link="true" name="facebook square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://github.com/JustinStoddard" target="_blank">
                              <Icon link="true" name="github square" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <a href="https://www.linkedin.com/in/justin-stoddard-65171015a/" target="_blank">
                              <Icon link="true" name="linkedin" size="huge" color="black"/>
                            </a>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid>
                </Grid.Row>

              </Grid.Row>
              <Grid.Row className="bio-row-right">    
                <span className="bio-content"><span className="bio-tab">My</span> Journey started 5 years ago with a passion for video games, and a drive to know more about how they worked. Since then I've gone from a Curious Amateur to a Professional Web Developer. This site you're viewing my resume on, and the ones listed below under Projects, are a testament to that journey. So enjoy the view. Then when you're ready, give me a call.</span>
              </Grid.Row>
              <Grid.Row className="experience-row-right">
                <Grid.Row className="experience-align">
                  <List>
                    <List.Item>
                      <List.Content>
                        <List.Header><span className="uni-content-header">Unicity International - 2018 to Present</span></List.Header>
                        <List.Description><span className="experience-font">Frontend Web Developer, Orem UT</span></List.Description>
                        <List.List as="ul">
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I create user friendly UI with custom and architecturally modern .LESS</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I work with REST API's to CRUD, structure, and manipulate data</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I work with multiple frontend javascript libraries such as ReactJS and AngularJS</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Design reliable Frontend architecture that scales and is easily maintainable</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I help maintain Wordpress sites for multiple customers across multiple countries</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Maintain Agile flow architecture with GitHub and bi-weekly sprint meetings</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Occassionaly help backend developers update/create endpoints using NodeJS</span></List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>

                    <List.Item>
                      <List.Content>
                        <List.Header><span className="uni-content-header">Upengo LLC (Remote) - 2019 to Present</span></List.Header>
                        <List.Description><span className="experience-font">Backend Developer, Bluffdale UT</span></List.Description>
                        <List.List as="ul">
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I create POST API payloads with data that comes from ssh tunnels</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Parse ssh data into JSON format for API use.</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Validate ssh responses to maintain security</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Work with Frontend Developers to specify the format of JSON objects</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Maintain an Agile architecture with GitHub and weekly sprint meetings</span></List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>

                    <List.Item>
                      <List.Content>
                        <List.Header><span className="uni-content-header">DevPoint Studios - 6 Months</span></List.Header>
                        <List.Description><span className="experience-font">Fullstack Web Developer, Salt Lake City UT</span></List.Description>
                        <List.List as="ul">
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I created REST API endpoints for data to be used on the Frontend of applications</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Created reliable backend architecture for scalability and fluid maintenance</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I worked with multiple backend technologies such as NodeJS and Ruby On Rails</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">I worked with multiple database technologies such as Postgress and MySQL</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Created relationships between data/ tables</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item as="li">
                            <List.Content>
                              <List.Description><span className="experience-font">Maintained Agile flow</span></List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Row>
              </Grid.Row>
              <Grid.Row className="education-row-right">
                
              </Grid.Row>
              <Grid.Row className="expertise-row-right">
                
              </Grid.Row>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    </Fragment>
  )
}

export default ResumeIndex;